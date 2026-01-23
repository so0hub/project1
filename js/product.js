//defaultProductList / defaultInventories    역할: 공장 초기화용 데이터 (처음 켰을 때만 사용)
// 즉! 로컬스토리지를 활용하자..
// 로컬스토리지를 뒤진다.

products = JSON.parse(localStorage.getItem("productList"));

// 저장소에 아무것도 없을 때 
if(!products){
    products=defaultMemberList; // 기본데이터를 변수에 넣고,
    localStorage.setItem("products",JSON.stringify(products)); // 저장소에 저장
}


inventories = JSON.parse(localStorage.getItem("inventories"));
if (!inventories) {
    inventories = defaultInventories;
    localStorage.setItem("inventories", JSON.stringify(inventories));
}


// [1] 기능 설계
// 제품 재고 검색 영역 : 제품 목록
// 재고 조회 함수 , 제품 출력함수(제품명,수량,상태) , 재고 수정 함수

// 제품 조회 함수 inventorySearch ] 매개변수 : x , 리턴값 : x , 
// 처리 : 
// (1) 사용자가 입력한 제품명을 가져온다.
// (2) products 장부에서 그 이름과 일치하는 데이터를 찾아 productCoude를 알아낸다.
// (3) 그 코드를 들고 inventories 장부로 가서 수량(currentStock)과 상태(status)를 찾는다.
// (4) 찾은 제품명 , 수량 , 상태를 화면에 출력한다.
// 실행조건 : 검색 버튼 클릭


// [2] 제품 영역 구현
// 재고 조회 함수


function inventorySearch() {
    
    // (1) 사용자가 입력한 제품명을 가져온다.
    const inputName = document.querySelector(".pNameInput").value;
    

    // (2) products 장부에서 그 이름과 일치하는 데이터를 찾아 productCode를 알아낸다.
    let foundProduct = null;
    for (let i = 0; i < products.length; i++) {
        if (String(products[i].productName).includes(inputName)) {
            foundProduct = products[i]; // 제품 찾음!
            break;
        } // if END
    } // for END

    if (foundProduct == null) {
        alert("해당 제품이 없습니다.");
        return;
    } // if END

    // (3) 찾은 코드로 inventories 장부로 가서 재고와 상태 찾기
    let foundInventory = null;
    for (let j = 0; j < inventories.length; j++) {
        // 제품 장부에서 찾은 코드와 재고 장부의 코드가 같은지 비교
        if (inventories[j].productCode === foundProduct.productCode) {
            foundInventory = inventories[j];
            break;

        } // if END
    } // for END

    // 찾은 데이터를 출력함수로 던져주기
    if (foundInventory != null) {
        printResult([foundInventory]);
    } else {
        alert("재고 정보가 없습니다.");
    }

} // inventorySearch() END




// [1] 기능 설계
// 출력 함수 printResult] 
// 매개변수 : dataList
// 리턴값 : x(화면에 출력하고 끝)
// 처리 :
// (1) HTML에서 결과가 들어갈 자리를 찾는다. ex:id="result-box" 인 곳
// (2) 그 자리에 매개변수로 받은 name, stock, status를 넣는다.


// [2] 제품 영역 구현
// 출력 함수
// 찾은 제품명 , 수량 , 상태를 화면에 출력한다.
printResult(inventories.slice(0,5));
function printResult(dataList) {

    // 만약 datalist가 없으면 기본으로 전체목록(inventories)을 써라. inventories가 로컬 스토리지에서 불러온 수정사항이 반영된 최신 데이터임
    if(!dataList){dataList=inventories;}

    const tbody = document.querySelector("#pdt_list_body");
    let html = ``;

    // 이제 인벤토리 대신 dataList를 가지고 하자.
    for (let index = 0; index < dataList.length; index++) {
        let inv = dataList[index];


        //제품코드로 제품명으로 바꿈
        let proname = "";

        for (let index2=0; index2 <= products.length-1;index2++){
            let pro = products[index2];
            if(pro.productCode==inv.productCode){
                proname = pro.productName
                break;

            }
        }


        // 영문재고를 한글로 바꿈
        let statuskr = "";
        if (inv.status === "IN_STOCK") {
            statuskr = "재고있음";
        }
        else if (inv.status === "LOW_STOCK") {
            statuskr = "품절임박";
        }
        else if (inv.status === "OUT_OF_STOCK") {
            statuskr = "품절";
        }
        else { statuskr = inv.status; }
        
        let selectedIn = (inv.status === "IN_STOCK")?"selected":"";
        let selectedLow = (inv.status === "LOW_STOCK")?"selected":"";
        let selectedOut = (inv.status === "OUT_OF_STOCK")?"selected":"";


        html += `         <tr>
            <td>${proname}</td>
            <td>${inv.currentStock}</td>
            <td><select id="status_${inv.inventoryCode}">
            <option value="IN_STOCK" ${selectedIn}>재고있음</option>
            <option value="LOW_STOCK" ${selectedLow}>품절임박</option>
            <option value="OUT_OF_STOCK" ${selectedOut}>품절</option>
            </select></td>
            <td><button onclick="stockUpdate('${inv.inventoryCode}')">수정</button></td>
        </tr>`;
    }
    tbody.innerHTML = html;

}



// 수정 함수
function stockUpdate(inventoryCode) {
    for (let index = 0; index <= inventories.length - 1; index++) {
        if (inventoryCode == inventories[index].inventoryCode) {
            
            // 수량 수정
            const newInventory = prompt("선택한 제품의 재고 수량을 입력하세요.(숫자만)");

            // 상태 수정
            const selectBox = document.querySelector(`#status_${inventoryCode}`);
            const newStatus = selectBox.value; // 사용자가 선택한 값

            // inventories데이터장부에 반영
            inventories[index].currentStock=Number(newInventory);
            inventories[index].status=newStatus;

            localStorage.setItem('inventories',JSON.stringify(inventories));
            printResult(inventories.slice(0,5));

            alert("수정되었습니다.")
            break;
        }
}
}