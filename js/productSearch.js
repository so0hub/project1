const categories = [
    { "categoryCode": "C01", "categoryName": "Smartphone" },
    { "categoryCode": "C02", "categoryName": "Laptop" },
    { "categoryCode": "C03", "categoryName": "Mouse" },
    { "categoryCode": "C04", "categoryName": "Keyboard" }
];

const products = [
    { "productCode": "P001", "productName": "Galaxy S24 Ultra", "brand": "Samsung", "price": 1450000, "image": "galaxy_s24_ultra.jpg", "categoryCode": "C01" },
    { "productCode": "P002", "productName": "iPhone 15 Pro Max", "brand": "Apple", "price": 1500000, "image": "iphone_15_pro_max.jpg", "categoryCode": "C01" },
    { "productCode": "P003", "productName": "Pixel 8 Pro", "brand": "Google", "price": 1180000, "image": "pixel_8_pro.jpg", "categoryCode": "C01" },
    { "productCode": "P004", "productName": "Galaxy Z Fold 5", "brand": "Samsung", "price": 1420000, "image": "galaxy_z_fold_5.jpg", "categoryCode": "C01" },
    { "productCode": "P005", "productName": "OnePlus 12", "brand": "OnePlus", "price": 950000, "image": "oneplus_12.jpg", "categoryCode": "C01" }
];


/* [2] 기능설계
제품검색목록: 제품 검색, 제품 출력
- 제품 검색: 제품 검색함수(입력), 제품 출력함수(찾아서 보여주기), 제품 수정함수
*/
localStorage.setItem("products", JSON.stringify(products));

let obj = [];

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

    // localStorage 활용 products 호출
    let products = localStorage.getItem("products");
    if( products == null ){
        products = [];
    }else{
        products = JSON.parse(products);
    }

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
console.log(obj);
}

console.log(obj);

// [3-2] 출력함수
productPrint()
function productPrint(){
    // 1. 어디에?
    const tbody = document.querySelector(".m_s_tbody");
    // 2. 무엇을?
    let html = ``;
    for(let i = 0 ; i<= obj.length-1 ; i++){
        let prd = obj[i];
        
    }
}

// [3-3] 수정함수


