const defaultCategories = [
    { "categoryCode": "C01", "categoryName": "Smartphone" },
    { "categoryCode": "C02", "categoryName": "Laptop" },
    { "categoryCode": "C03", "categoryName": "Mouse" },
    { "categoryCode": "C04", "categoryName": "Keyboard" }
];

const defaultInventories = [
    {"inventoryCode": "INV001", "productCode": "P001", "currentStock": 45, "status": "IN_STOCK", "updatedDate": "2024-12-15"},
    {"inventoryCode": "INV002", "productCode": "P002", "currentStock": 32, "status": "IN_STOCK", "updatedDate": "2024-12-18"},
];

const defaultProductList = [
    { "productCode": "P001", "productName": "Galaxy S24 Ultra", "brand": "Samsung", "price": 1450000, "image": "galaxy_s24_ultra.jpg", "categoryCode": "C01", "img": "https://images.samsung.com/kdp/static/mkt/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-kv-mo-sec-low.jpg?imbypass=true" },
    { "productCode": "P002", "productName": "iPhone 15 Pro Max", "brand": "Apple", "price": 1500000, "image": "iphone_15_pro_max.jpg", "categoryCode": "C01", "img": "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png" },
    { "productCode": "P003", "productName": "Pixel 8 Pro", "brand": "Google", "price": 1180000, "image": "pixel_8_pro.jpg", "categoryCode": "C01" , "img": "https://img.danawa.com/prod_img/500000/281/584/img/28584281_2.jpg?shrink=500:*&_v=20231016084115"},
    { "productCode": "P004", "productName": "Galaxy Z Fold 5", "brand": "Samsung", "price": 1420000, "image": "galaxy_z_fold_5.jpg", "categoryCode": "C01", "img": "https://i5.walmartimages.com/seo/Samsung-Galaxy-Z-Fold5-5G-256GB-12GB-7-6-Factory-Unlocked-GSM-CDMA-F946U-Excellent-Used_ddf12b9c-6deb-415b-a446-add8e54e3712.add07d22146791629d70a2dd675183a7.jpeg"},
    { "productCode": "P005", "productName": "OnePlus 12", "brand": "OnePlus", "price": 950000, "image": "oneplus_12.jpg", "categoryCode": "C01" , "img": "https://cdn.kalvo.com/uploads/img/large/57369-oneplus-12.jpg"}
];


/* [2] 기능설계
제품검색목록: 제품 검색, 제품 출력
- 제품 검색: 제품 검색함수(입력), 제품 출력함수(찾아서 보여주기), 제품 수정함수
*/

localStorage.setItem("defaultProductList", JSON.stringify(defaultProductList));
localStorage.setItem("defaultCategories", JSON.stringify(defaultCategories));
localStorage.setItem("defaultInventories", JSON.stringify(defaultInventories));

let obj = [];

// localStorage 활용 defaultProductList 호출
    let products = localStorage.getItem("defaultProductList");
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
    let categories = localStorage.getItem("defaultCategories");
    if( categories == null ){
        categories = [];
    }else{
        categories = JSON.parse(categories);
    } 
    // localStorage 활용 defaultInventories 호출
    let inventories = localStorage.getItem("defaultInventories");
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
                    <td><button onclick="productUpdate(${prd.productCode})">수정하기</button></td>
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

