/* [상단 구역 - 박소영]**************************************************************** */

{
//defaultProductList / defaultInventories    역할: 공장 초기화용 데이터 (처음 켰을 때만 사용)
// 즉! 로컬스토리지를 활용하자..
// 로컬스토리지를 뒤진다.

const products = JSON.parse(localStorage.getItem("productList"));

// 저장소에 아무것도 없을 때 
if(!products){
    products=defaultProductList; // 기본데이터를 변수에 넣고,
    localStorage.setItem("products",JSON.stringify(products)); // 저장소에 저장
}


const inventories = JSON.parse(localStorage.getItem("inventories"));
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
// 재고 조회 함수 inventorySearch]

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
        alert("재고 정보가 없습니다.");}
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
            statuskr = "재고있음";  }
        else if (inv.status === "LOW_STOCK") {
            statuskr = "품절임박";}
        else if (inv.status === "OUT_OF_STOCK") {
            statuskr = "품절";}
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


// 수정 함수 stockUpdate]
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
}








/* [하단 구역 - 이태현]**************************************************************** */
{
/* [1] 초기 기본 데이터: member.js에서 처리

[2] 기능설계
제품검색목록: 제품 검색, 제품 출력
- 제품 검색: 제품 검색함수(입력), 제품 출력함수(찾아서 보여주기), 제품 수정함수
*/
let obj = [];

// localStorage 활용 productList 호출
    let products = localStorage.getItem("productList");
    if( products == null ){
        products = [];
    }else{
        products = JSON.parse(products);
    }

// [3-1] 검색함수
function productSearch() { 
    obj = [];

    // 1. 입력받은 값을 가져온다.
    const productNameDom = document.querySelector(".m_s_name");
    const productName = productNameDom.value;
    const brandDom = document.querySelector(".m_s_b");
    const brand = brandDom.value;
    const priceMinDom = document.querySelector(".m_s_min")
    const priceMin = priceMinDom.value;
    const priceMaxDom = document.querySelector(".m_s_max");
    const priceMax = priceMaxDom.value;
    const categoryDom = document.querySelector(".m_s_k");
    const categoryCode = categoryDom.value;

    if(productName==""&&brand==""&&priceMin==""&&priceMax==""&&categoryCode=='disabled'){alert("검색하실 상품 정보를 입력하십시오."); }

    // 2. 입력받은 값 찾아서 넣기.
    for (let i = 0; i < products.length; i++) {
        let prd = products[i];

        let SearchTrue = true; // 검색 결과가 일치한다고 가정하기
        
        if (productName != "" && prd.productName.includes(productName) == false) {
            SearchTrue = false;
        }
        if (brand != "" && prd.brand.includes(brand) == false) {
            SearchTrue = false;
        }
        if (categoryCode != 'disabled' && prd.categoryCode != categoryCode) {
            SearchTrue = false;
        }
        let min = priceMin == "" ? 0 : Number(priceMin);
        let max = priceMax == "" ? Infinity : Number(priceMax);
        if (prd.price < min || prd.price > max) {
            SearchTrue = false;
        }
        if (SearchTrue == true) {
            obj.push(prd);
        }
    }
    productPrint();
}

//호출
    // localStorage 활용 categories 호출
    let categories = localStorage.getItem("categories");
    if( categories == null ){
        categories = [];
    }else{
        categories = JSON.parse(categories);
    } 
    // localStorage 활용 inventories 호출
    let inventories = localStorage.getItem("inventories");
    if( inventories == null ){
        inventories = [];
    }else{
        inventories = JSON.parse(inventories);
    }

// [3-2] 출력함수
productPrint();
function productPrint(){

    // 1. 어디에?
    const tbody = document.querySelector(".m_s_tbody");
    // 2. 무엇을?
    let html = ``;
    for(let i = 0 ; i<= obj.length-1 ; i++){
        let prd = obj[i];
        let categoryName = '';
        for( let j = 0 ; j <= categories.length-1 ; j++){
            let cat = categories[j];
            if(cat.categoryCode == prd.categoryCode){
                categoryName = cat.categoryName;
            }
        }
        let currentStock = '';
        for( let u = 0 ; u <= inventories.length-1 ; u++){
            let inv = inventories[u];
            if(inv.productCode == prd.productCode){
                currentStock = inv.currentStock;
            }
        } 

        html += `<tr>
                    <td><img src="${prd.img}"/></td>
                    <td>${prd.productName}</td><td>${categoryName}</td>
                    <td>${prd.brand}</td><td>${Number(prd.price).toLocaleString()}</td><td>${currentStock}</td>
                    <td><button onclick="productUpdate('${prd.productCode}')">수정하기</button></td>
                </tr>`
    }
    tbody.innerHTML = html;
}

// [3-3] 수정함수
function productUpdate(productCode) {
    // 1. 수정하고자 하는 정보 찾기
    let productIndex = 0;
    for (let i = 0; i < products.length; i++) {
    if (products[i].productCode === productCode) {
        productIndex = i;  // 인덱스를 저장했다.
        break;}
    }
    if (productIndex === -1) {
        alert("해당 상품을 찾을 수 없습니다.");
        return;}

    // 2. 입력해라
    const newProductName = prompt("수정할 제품명을 입력하시오.");
    const newBrand = prompt("수정할 브랜드명을 입력하시오.");
    const newPrice = prompt("수정할 가격을 입력하시오.");

    // 3. 뭔가 입력했다면 바꾸기
    if (newProductName !== null){products[productIndex].productName = newProductName;}
    if (newBrand !== null){products[productIndex].brand = newBrand;}
    if (newPrice !== null){products[productIndex].price = Number(newPrice);}

    // 4. 로컬에 문자열로 저장
    localStorage.setItem("productList", JSON.stringify(products));

    // 5. 검색 리스트 동기화
    let objIndex = 0;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].productCode === productCode) {
            objIndex = i; // 또 인덱스를 저장했다
            break;}
    }
    obj[objIndex].productName = products[productIndex].productName;
    obj[objIndex].brand = products[productIndex].brand;
    obj[objIndex].price = products[productIndex].price;
    
    // 6. 새로고침
    productPrint();
}
}