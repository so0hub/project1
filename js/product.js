// [1] 메모리 설계
// 1. 저장할 데이터 객체로 구성

const members = [
    { "memberCode": "U0001", "memberName": "김민준", "status": "ACTIVE", "joinDate": "2022-03-15", "gender": "M", "age": 28 },
    { "memberCode": "U0002", "memberName": "이서연", "status": "ACTIVE", "joinDate": "2022-05-22", "gender": "F", "age": 24 },
    { "memberCode": "U0003", "memberName": "박지훈", "status": "ACTIVE", "joinDate": "2022-07-10", "gender": "M", "age": 32 },
    { "memberCode": "U0004", "memberName": "정수빈", "status": "ACTIVE", "joinDate": "2022-09-03", "gender": "F", "age": 27 },
    { "memberCode": "U0005", "memberName": "최동욱", "status": "ACTIVE", "joinDate": "2022-11-18", "gender": "M", "age": 35 }
];


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


const inventories = [
    { "inventoryCode": "INV001", "productCode": "P001", "currentStock": 45, "status": "IN_STOCK", "updatedDate": "2024-12-15"},
    { "inventoryCode": "INV002", "productCode": "P002", "currentStock": 32, "status": "IN_STOCK", "updatedDate": "2024-12-18"},
    { "inventoryCode": "INV003", "productCode": "P003", "currentStock": 28, "status": "IN_STOCK", "updatedDate": "2024-12-20"},
    { "inventoryCode": "INV004", "productCode": "P004", "currentStock": 15, "status": "IN_STOCK", "updatedDate": "2024-12-22"},
    { "inventoryCode": "INV005", "productCode": "P005", "currentStock": 38, "status": "IN_STOCK", "updatedDate": "2024-12-10"},
    { "inventoryCode": "INV006", "productCode": "P006", "currentStock": 42, "status": "IN_STOCK", "updatedDate": "2024-12-12"},
    { "inventoryCode": "INV007", "productCode": "P007", "currentStock": 25, "status": "IN_STOCK", "updatedDate": "2024-12-19"},
    { "inventoryCode": "INV008", "productCode": "P008", "currentStock": 51, "status": "IN_STOCK", "updatedDate": "2024-12-16"},
    { "inventoryCode": "INV009", "productCode": "P009", "currentStock": 33, "status": "IN_STOCK", "updatedDate": "2024-12-21"},
    { "inventoryCode": "INV010", "productCode": "P010", "currentStock": 8, "status": "LOW_STOCK", "updatedDate": "2024-12-23"},
    { "inventoryCode": "INV011", "productCode": "P011", "currentStock": 22, "status": "IN_STOCK", "updatedDate": "2024-12-14"},
    { "inventoryCode": "INV012", "productCode": "P012", "currentStock": 37, "status": "IN_STOCK", "updatedDate": "2024-12-17"},
    { "inventoryCode": "INV013", "productCode": "P013", "currentStock": 65, "status": "IN_STOCK", "updatedDate": "2024-12-11"},
    { "inventoryCode": "INV014", "productCode": "P014", "currentStock": 19, "status": "IN_STOCK", "updatedDate": "2024-12-20"},
    { "inventoryCode": "INV015", "productCode": "P015", "currentStock": 7, "status": "LOW_STOCK", "updatedDate": "2024-12-24"},
    { "inventoryCode": "INV016", "productCode": "P016", "currentStock": 14, "status": "IN_STOCK", "updatedDate": "2024-12-13"},
    { "inventoryCode": "INV017", "productCode": "P017", "currentStock": 9, "status": "LOW_STOCK", "updatedDate": "2024-12-22"},
    { "inventoryCode": "INV018", "productCode": "P018", "currentStock": 47, "status": "IN_STOCK", "updatedDate": "2024-12-15"},
    { "inventoryCode": "INV019", "productCode": "P019", "currentStock": 54, "status": "IN_STOCK", "updatedDate": "2024-12-18"},
    { "memberCode": "INV020", "productCode": "P020", "currentStock": 0, "status": "OUT_OF_STOCK", "updatedDate": "2024-12-25"},
    { "inventoryCode": "INV021", "productCode": "P021", "currentStock": 18, "status": "IN_STOCK", "updatedDate": "2024-12-16"},
    { "inventoryCode": "INV022", "productCode": "P022", "currentStock": 35, "status": "IN_STOCK", "updatedDate": "2024-12-19"},
    { "inventoryCode": "INV023", "productCode": "P023", "currentStock": 22, "status": "IN_STOCK", "updatedDate": "2024-12-21"},
    { "inventoryCode": "INV024", "productCode": "P024", "currentStock": 27, "status": "IN_STOCK", "updatedDate": "2024-12-17"},
    { "inventoryCode": "INV025", "productCode": "P025", "currentStock": 31, "status": "IN_STOCK", "updatedDate": "2024-12-20"},
    { "inventoryCode": "INV026", "productCode": "P026", "currentStock": 19, "status": "IN_STOCK", "updatedDate": "2024-12-18"},
    { "inventoryCode": "INV027", "productCode": "P027", "currentStock": 44, "status": "IN_STOCK", "updatedDate": "2024-12-14"},
    { "inventoryCode": "INV028", "productCode": "P028", "currentStock": 15, "status": "IN_STOCK", "updatedDate": "2024-12-23"},
    { "inventoryCode": "INV029", "productCode": "P029", "currentStock": 52, "status": "IN_STOCK", "updatedDate": "2024-12-12"},
    { "inventoryCode": "INV030", "productCode": "P030", "currentStock": 8, "status": "LOW_STOCK", "updatedDate": "2024-12-24"},
    { "inventoryCode": "INV031", "productCode": "P031", "currentStock": 26, "status": "IN_STOCK", "updatedDate": "2024-12-15"},
    { "inventoryCode": "INV032", "productCode": "P032", "currentStock": 38, "status": "IN_STOCK", "updatedDate": "2024-12-19"},
    { "inventoryCode": "INV033", "productCode": "P033", "currentStock": 13, "status": "IN_STOCK", "updatedDate": "2024-12-22"},
    { "inventoryCode": "INV034", "productCode": "P034", "currentStock": 21, "status": "IN_STOCK", "updatedDate": "2024-12-17"},
    { "inventoryCode": "INV035", "productCode": "P035", "currentStock": 34, "status": "IN_STOCK", "updatedDate": "2024-12-20"},
    { "inventoryCode": "INV036", "productCode": "P036", "currentStock": 9, "status": "LOW_STOCK", "updatedDate": "2024-12-23"},
    { "inventoryCode": "INV037", "productCode": "P037", "currentStock": 41, "status": "IN_STOCK", "updatedDate": "2024-12-16"},
    { "inventoryCode": "INV038", "productCode": "P038", "currentStock": 29, "status": "IN_STOCK", "updatedDate": "2024-12-18"},
    { "inventoryCode": "INV039", "productCode": "P039", "currentStock": 24, "status": "IN_STOCK", "updatedDate": "2024-12-21"},
    { "inventoryCode": "INV040", "productCode": "P040", "currentStock": 11, "status": "IN_STOCK", "updatedDate": "2024-12-19"},
    { "inventoryCode": "INV041", "productCode": "P041", "currentStock": 78, "status": "IN_STOCK", "updatedDate": "2024-12-14"},
    { "inventoryCode": "INV042", "productCode": "P042", "currentStock": 92, "status": "IN_STOCK", "updatedDate": "2024-12-17"},
    { "inventoryCode": "INV043", "productCode": "P043", "currentStock": 45, "status": "IN_STOCK", "updatedDate": "2024-12-20"},
    { "inventoryCode": "INV044", "productCode": "P044", "currentStock": 67, "status": "IN_STOCK", "updatedDate": "2024-12-15"},
    { "inventoryCode": "INV045", "productCode": "P045", "currentStock": 54, "status": "IN_STOCK", "updatedDate": "2024-12-18"},
    { "inventoryCode": "INV046", "productCode": "P046", "currentStock": 88, "status": "IN_STOCK", "updatedDate": "2024-12-12"},
    { "inventoryCode": "INV047", "productCode": "P047", "currentStock": 39, "status": "IN_STOCK", "updatedDate": "2024-12-21"},
    { "inventoryCode": "INV048", "productCode": "P048", "currentStock": 71, "status": "IN_STOCK", "updatedDate": "2024-12-16"},
    { "inventoryCode": "INV049", "productCode": "P049", "currentStock": 63, "status": "IN_STOCK", "updatedDate": "2024-12-19"},
    { "inventoryCode": "INV050", "productCode": "P050", "currentStock": 95, "status": "IN_STOCK", "updatedDate": "2024-12-13"},
    { "inventoryCode": "INV051", "productCode": "P051", "currentStock": 47, "status": "IN_STOCK", "updatedDate": "2024-12-22"},
    { "inventoryCode": "INV052", "productCode": "P052", "currentStock": 81, "status": "IN_STOCK", "updatedDate": "2024-12-17"},
    { "inventoryCode": "INV053", "productCode": "P053", "currentStock": 59, "status": "IN_STOCK", "updatedDate": "2024-12-20"},
    { "inventoryCode": "INV054", "productCode": "P054", "currentStock": 38, "status": "IN_STOCK", "updatedDate": "2024-12-15"},
    { "inventoryCode": "INV055", "productCode": "P055", "currentStock": 102, "status": "IN_STOCK", "updatedDate": "2024-12-18"},
    { "inventoryCode": "INV056", "productCode": "P056", "currentStock": 76, "status": "IN_STOCK", "updatedDate": "2024-12-14"},
    { "inventoryCode": "INV057", "productCode": "P057", "currentStock": 33, "status": "IN_STOCK", "updatedDate": "2024-12-21"},
    { "inventoryCode": "INV058", "productCode": "P058", "currentStock": 115, "status": "IN_STOCK", "updatedDate": "2024-12-11"},
    { "inventoryCode": "INV059", "productCode": "P059", "currentStock": 7, "status": "LOW_STOCK", "updatedDate": "2024-12-24"},
    { "inventoryCode": "INV060", "productCode": "P060", "currentStock": 84, "status": "IN_STOCK", "updatedDate": "2024-12-16"},
    { "inventoryCode": "INV061", "productCode": "P061", "currentStock": 62, "status": "IN_STOCK", "updatedDate": "2024-12-19"},
    { "inventoryCode": "INV062", "productCode": "P062", "currentStock": 89, "status": "IN_STOCK", "updatedDate": "2024-12-13"},
    { "inventoryCode": "INV063", "productCode": "P063", "currentStock": 44, "status": "IN_STOCK", "updatedDate": "2024-12-20"},
    { "inventoryCode": "INV064", "productCode": "P064", "currentStock": 28, "status": "IN_STOCK", "updatedDate": "2024-12-22"},
    { "inventoryCode": "INV065", "productCode": "P065", "currentStock": 35, "status": "IN_STOCK", "updatedDate": "2024-12-17"},
    { "inventoryCode": "INV066", "productCode": "P066", "currentStock": 41, "status": "IN_STOCK", "updatedDate": "2024-12-18"},
    { "inventoryCode": "INV067", "productCode": "P067", "currentStock": 77, "status": "IN_STOCK", "updatedDate": "2024-12-14"},
    { "inventoryCode": "INV068", "productCode": "P068", "currentStock": 58, "status": "IN_STOCK", "updatedDate": "2024-12-21"},
    { "inventoryCode": "INV069", "productCode": "P069", "currentStock": 31, "status": "IN_STOCK", "updatedDate": "2024-12-19"},
    { "inventoryCode": "INV070", "productCode": "P070", "currentStock": 19, "status": "IN_STOCK", "updatedDate": "2024-12-23"},
    { "inventoryCode": "INV071", "productCode": "P071", "currentStock": 66, "status": "IN_STOCK", "updatedDate": "2024-12-15"},
    { "inventoryCode": "INV072", "productCode": "P072", "currentStock": 73, "status": "IN_STOCK", "updatedDate": "2024-12-16"},
    { "inventoryCode": "INV073", "productCode": "P073", "currentStock": 48, "status": "IN_STOCK", "updatedDate": "2024-12-20"},
    { "inventoryCode": "INV074", "productCode": "P074", "currentStock": 95, "status": "IN_STOCK", "updatedDate": "2024-12-12"},
    { "inventoryCode": "INV075", "productCode": "P075", "currentStock": 81, "status": "IN_STOCK", "updatedDate": "2024-12-18"},
    { "inventoryCode": "INV076", "productCode": "P076", "currentStock": 53, "status": "IN_STOCK", "updatedDate": "2024-12-17"},
    { "inventoryCode": "INV077", "productCode": "P077", "currentStock": 104, "status": "IN_STOCK", "updatedDate": "2024-12-13"},
    { "inventoryCode": "INV078", "productCode": "P078", "currentStock": 39, "status": "IN_STOCK", "updatedDate": "2024-12-21"},
    { "inventoryCode": "INV079", "productCode": "P079", "currentStock": 46, "status": "IN_STOCK", "updatedDate": "2024-12-19"},
    { "inventoryCode": "INV080", "productCode": "P080", "currentStock": 70, "status": "IN_STOCK", "updatedDate": "2024-12-14"}
];

const orders = [
    { "orderCode": "ORD0001", "memberCode": "U0012", "shippingAddress": "서울시 강남구 테헤란로 123", "totalPrice": 1450000, "orderDate": "2023-06-15" },
    { "orderCode": "ORD0002", "memberCode": "U0034", "shippingAddress": "부산시 해운대구 해변로 456", "totalPrice": 2480000, "orderDate": "2023-11-22" },
    { "orderCode": "ORD0003", "memberCode": "U0078", "shippingAddress": "대구시 수성구 동대구로 789", "totalPrice": 125000, "orderDate": "2023-03-08" },
    { "orderCode": "ORD0004", "memberCode": "U0156", "shippingAddress": "인천시 남동구 인하로 234", "totalPrice": 1500000, "orderDate": "2023-07-19" },
    { "orderCode": "ORD0005", "memberCode": "U0203", "shippingAddress": "광주시 서구 상무대로 567", "totalPrice": 148000, "orderDate": "2023-12-05" }
];



// [2] 기능 설계
// 제품목록 영역 : 제품 등록 , 제품 목록
// 제품 등록함수 , 제품 출력함수(제품명,수량,상태)

// 제품 등록함수 : 매개변수 : x , 리턴값 : x , 처리 :
// 실행조건 : 등록 버튼 클릭

// 제품 출력함수 : 매개변수 : x , 리턴값 : x , 처리 :
// 실행조건 : 페이지 열렸을 때, 등록 성공


// [3] 제품목록 영역 구현
// [3-1] 제품 등록함수
 