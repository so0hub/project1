/* [1] 초기 기본 데이터: member.js에서 처리

[2] 기능설계
제품검색목록: 제품 검색, 제품 출력
- 제품 검색: 제품 검색함수(입력), 제품 출력함수(찾아서 보여주기), 제품 수정함수
*/

let obj = [];

// localStorage 활용 defaultProductList 호출
    let products = localStorage.getItem("productList");
    if( products == null ){
        products = [];
    }else{
        products = JSON.parse(products);
    }

// [3-1] 검색함수
function productSearch(){
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

    // 2. 입력받은 값 찾아서 넣기...
    for( let i = 0 ; i<=products.length-1 ; i++){
        const product = products[i];
        if(product.productName == productName){
            obj.push(product);
        }
        if(product.brand == brand){
            obj.push(product);
        }
        if(product.categoryCode == categoryCode){
            obj.push(product);
        }
        if(product.price >= priceMin && product.price <= priceMax){
            obj.push(product);
        }
    }
productPrint();
}

//호출
    // localStorage 활용 defaultCategories 호출
    let categories = localStorage.getItem("categories");
    if( categories == null ){
        categories = [];
    }else{
        categories = JSON.parse(categories);
    } 
    // localStorage 활용 defaultInventories 호출
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
function productUpdate( productCode ){
    for(let i = 0 ; i <= obj.length-1 ; i++){
        let prd = obj[i]; console.log(prd)
        if( productCode == prd.productCode){
            const newProductName = prompt("수정할 이름을 입력하시오.");
            const newBrand = prompt("수정할 브랜드명을 입력하시오.");
            const newPrice = prompt("수정할 가격을 입력하시오.");
            prd.productName = newProductName;
            prd.brand = newBrand;
            prd.price = newPrice;
            break;
        }
    }
    productPrint();
}

