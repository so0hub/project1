// [1] 메모리 설계
// 1. 저장할 데이터 객체로 구성

const members = [
    { "memberCode": "U0001", "memberName": "김민준", "status": "ACTIVE", "joinDate": "2022-03-15", "gender": "M", "age": 28 },
    { "memberCode": "U0002", "memberName": "이서연", "status": "ACTIVE", "joinDate": "2022-05-22", "gender": "F", "age": 24 },
    { "memberCode": "U0003", "memberName": "박지훈", "status": "ACTIVE", "joinDate": "2022-07-10", "gender": "M", "age": 32 },
    { "memberCode": "U0004", "memberName": "정수빈", "status": "ACTIVE", "joinDate": "2022-09-03", "gender": "F", "age": 27 },
    { "memberCode": "U0005", "memberName": "최동욱", "status": "ACTIVE", "joinDate": "2022-11-18", "gender": "M", "age": 35 },
    { "memberCode": "U0006", "memberName": "강지우", "status": "ACTIVE", "joinDate": "2023-01-07", "gender": "M", "age": 29 },
    { "memberCode": "U0007", "memberName": "윤채원", "status": "ACTIVE", "joinDate": "2023-02-14", "gender": "F", "age": 23 },
    { "memberCode": "U0008", "memberName": "임현우", "status": "ACTIVE", "joinDate": "2023-03-25", "gender": "M", "age": 41 },
    { "memberCode": "U0009", "memberName": "한지민", "status": "ACTIVE", "joinDate": "2023-04-12", "gender": "F", "age": 26 },
    { "memberCode": "U0010", "memberName": "오승환", "status": "ACTIVE", "joinDate": "2023-05-30", "gender": "M", "age": 38 },
    { "memberCode": "U0011", "memberName": "신예진", "status": "ACTIVE", "joinDate": "2023-06-08", "gender": "F", "age": 31 },
    { "memberCode": "U0012", "memberName": "장민호", "status": "ACTIVE", "joinDate": "2023-07-19", "gender": "M", "age": 25 },
    { "memberCode": "U0013", "memberName": "서하은", "status": "ACTIVE", "joinDate": "2023-08-21", "gender": "F", "age": 22 },
    { "memberCode": "U0014", "memberName": "조재현", "status": "ACTIVE", "joinDate": "2023-09-11", "gender": "M", "age": 44 },
    { "memberCode": "U0015", "memberName": "권나영", "status": "ACTIVE", "joinDate": "2023-10-05", "gender": "F", "age": 36 },
    { "memberCode": "U0016", "memberName": "홍준표", "status": "ACTIVE", "joinDate": "2023-11-16", "gender": "M", "age": 30 },
    { "memberCode": "U0017", "memberName": "송유리", "status": "ACTIVE", "joinDate": "2023-12-02", "gender": "F", "age": 28 },
    { "memberCode": "U0018", "memberName": "안태양", "status": "ACTIVE", "joinDate": "2024-01-13", "gender": "M", "age": 52 },
    { "memberCode": "U0019", "memberName": "배수진", "status": "ACTIVE", "joinDate": "2024-02-20", "gender": "F", "age": 34 },
    { "memberCode": "U0020", "memberName": "류성민", "status": "ACTIVE", "joinDate": "2024-03-09", "gender": "M", "age": 27 },
    { "memberCode": "U0021", "memberName": "노아름", "status": "ACTIVE", "joinDate": "2024-04-17", "gender": "F", "age": 24 },
    { "memberCode": "U0022", "memberName": "하준석", "status": "ACTIVE", "joinDate": "2024-05-28", "gender": "M", "age": 39 },
    { "memberCode": "U0023", "memberName": "곽지선", "status": "ACTIVE", "joinDate": "2024-06-14", "gender": "F", "age": 29 },
    { "memberCode": "U0024", "memberName": "문정훈", "status": "ACTIVE", "joinDate": "2024-07-22", "gender": "M", "age": 45 },
    { "memberCode": "U0025", "memberName": "전소영", "status": "ACTIVE", "joinDate": "2024-08-10", "gender": "F", "age": 26 },
    { "memberCode": "U0026", "memberName": "표기범", "status": "INACTIVE", "joinDate": "2022-04-11", "gender": "M", "age": 33 },
    { "memberCode": "U0027", "memberName": "남윤서", "status": "ACTIVE", "joinDate": "2022-06-27", "gender": "F", "age": 25 },
    { "memberCode": "U0028", "memberName": "탁승우", "status": "ACTIVE", "joinDate": "2022-08-14", "gender": "M", "age": 42 },
    { "memberCode": "U0029", "memberName": "우혜진", "status": "ACTIVE", "joinDate": "2022-10-09", "gender": "F", "age": 31 },
    { "memberCode": "U0030", "memberName": "진동혁", "status": "ACTIVE", "joinDate": "2022-12-23", "gender": "M", "age": 37 },
    { "memberCode": "U0031", "memberName": "구민지", "status": "ACTIVE", "joinDate": "2023-01-19", "gender": "F", "age": 23 },
    { "memberCode": "U0032", "memberName": "엄태준", "status": "ACTIVE", "joinDate": "2023-03-08", "gender": "M", "age": 28 },
    { "memberCode": "U0033", "memberName": "예지원", "status": "ACTIVE", "joinDate": "2023-04-26", "gender": "F", "age": 35 },
    { "memberCode": "U0034", "memberName": "변우진", "status": "ACTIVE", "joinDate": "2023-05-15", "gender": "M", "age": 40 },
    { "memberCode": "U0035", "memberName": "도연희", "status": "ACTIVE", "joinDate": "2023-07-03", "gender": "F", "age": 27 },
    { "memberCode": "U0036", "memberName": "복민규", "status": "ACTIVE", "joinDate": "2023-08-12", "gender": "M", "age": 22 },
    { "memberCode": "U0037", "memberName": "손채은", "status": "ACTIVE", "joinDate": "2023-09-24", "gender": "F", "age": 30 },
    { "memberCode": "U0038", "memberName": "석재훈", "status": "ACTIVE", "joinDate": "2023-10-18", "gender": "M", "age": 48 },
    { "memberCode": "U0039", "memberName": "빈수아", "status": "ACTIVE", "joinDate": "2023-11-29", "gender": "F", "age": 24 },
    { "memberCode": "U0040", "memberName": "추성호", "status": "ACTIVE", "joinDate": "2024-01-06", "gender": "M", "age": 36 },
    { "memberCode": "U0041", "memberName": "여은비", "status": "ACTIVE", "joinDate": "2024-02-11", "gender": "F", "age": 29 },
    { "memberCode": "U0042", "memberName": "황동준", "status": "ACTIVE", "joinDate": "2024-03-22", "gender": "M", "age": 26 },
    { "memberCode": "U0043", "memberName": "제갈지애", "status": "ACTIVE", "joinDate": "2024-04-30", "gender": "F", "age": 33 },
    { "memberCode": "U0044", "memberName": "남궁현", "status": "ACTIVE", "joinDate": "2024-05-17", "gender": "M", "age": 41 },
    { "memberCode": "U0045", "memberName": "선우다은", "status": "ACTIVE", "joinDate": "2024-06-25", "gender": "F", "age": 25 },
    { "memberCode": "U0046", "memberName": "독고준혁", "status": "ACTIVE", "joinDate": "2024-07-14", "gender": "M", "age": 34 },
    { "memberCode": "U0047", "memberName": "사공서윤", "status": "ACTIVE", "joinDate": "2024-08-19", "gender": "F", "age": 28 },
    { "memberCode": "U0048", "memberName": "황보민석", "status": "ACTIVE", "joinDate": "2024-09-07", "gender": "M", "age": 50 },
    { "memberCode": "U0049", "memberName": "제민아", "status": "ACTIVE", "joinDate": "2024-10-12", "gender": "F", "age": 32 },
    { "memberCode": "U0050", "memberName": "갈현수", "status": "ACTIVE", "joinDate": "2024-11-03", "gender": "M", "age": 27 },
    { "memberCode": "U0051", "memberName": "김수아", "status": "ACTIVE", "joinDate": "2022-02-18", "gender": "F", "age": 21 },
    { "memberCode": "U0052", "memberName": "이준영", "status": "ACTIVE", "joinDate": "2022-04-25", "gender": "M", "age": 29 },
    { "memberCode": "U0053", "memberName": "박소민", "status": "ACTIVE", "joinDate": "2022-06-13", "gender": "F", "age": 38 },
    { "memberCode": "U0054", "memberName": "정태형", "status": "ACTIVE", "joinDate": "2022-08-07", "gender": "M", "age": 43 },
    { "memberCode": "U0055", "memberName": "최은지", "status": "ACTIVE", "joinDate": "2022-10-21", "gender": "F", "age": 26 },
    { "memberCode": "U0056", "memberName": "강민수", "status": "ACTIVE", "joinDate": "2022-12-15", "gender": "M", "age": 31 },
    { "memberCode": "U0057", "memberName": "윤지아", "status": "ACTIVE", "joinDate": "2023-02-04", "gender": "F", "age": 24 },
    { "memberCode": "U0058", "memberName": "임승재", "status": "ACTIVE", "joinDate": "2023-03-19", "gender": "M", "age": 35 },
    { "memberCode": "U0059", "memberName": "한예린", "status": "ACTIVE", "joinDate": "2023-05-08", "gender": "F", "age": 22 },
    { "memberCode": "U0060", "memberName": "오정민", "status": "ACTIVE", "joinDate": "2023-06-23", "gender": "M", "age": 47 },
    { "memberCode": "U0061", "memberName": "신다현", "status": "ACTIVE", "joinDate": "2023-07-31", "gender": "F", "age": 30 },
    { "memberCode": "U0062", "memberName": "장준혁", "status": "ACTIVE", "joinDate": "2023-09-14", "gender": "M", "age": 25 },
    { "memberCode": "U0063", "memberName": "서지유", "status": "ACTIVE", "joinDate": "2023-10-27", "gender": "F", "age": 37 },
    { "memberCode": "U0064", "memberName": "조윤호", "status": "ACTIVE", "joinDate": "2023-11-09", "gender": "M", "age": 28 },
    { "memberCode": "U0065", "memberName": "권하윤", "status": "ACTIVE", "joinDate": "2024-01-22", "gender": "F", "age": 23 },
    { "memberCode": "U0066", "memberName": "홍성준", "status": "ACTIVE", "joinDate": "2024-02-28", "gender": "M", "age": 39 },
    { "memberCode": "U0067", "memberName": "송민서", "status": "ACTIVE", "joinDate": "2024-04-05", "gender": "F", "age": 27 },
    { "memberCode": "U0068", "memberName": "안재윤", "status": "ACTIVE", "joinDate": "2024-05-20", "gender": "M", "age": 44 },
    { "memberCode": "U0069", "memberName": "배지안", "status": "ACTIVE", "joinDate": "2024-06-11", "gender": "F", "age": 29 },
    { "memberCode": "U0070", "memberName": "류건우", "status": "ACTIVE", "joinDate": "2024-07-26", "gender": "M", "age": 33 },
    { "memberCode": "U0071", "memberName": "노서율", "status": "ACTIVE", "joinDate": "2024-08-15", "gender": "F", "age": 26 },
    { "memberCode": "U0072", "memberName": "하동현", "status": "ACTIVE", "joinDate": "2024-09-21", "gender": "M", "age": 51 },
    { "memberCode": "U0073", "memberName": "곽예은", "status": "ACTIVE", "joinDate": "2024-10-08", "gender": "F", "age": 24 },
    { "memberCode": "U0074", "memberName": "문시우", "status": "ACTIVE", "joinDate": "2024-11-14", "gender": "M", "age": 36 },
    { "memberCode": "U0075", "memberName": "전지수", "status": "ACTIVE", "joinDate": "2024-12-01", "gender": "F", "age": 31 },
    { "memberCode": "U0076", "memberName": "표재원", "status": "INACTIVE", "joinDate": "2022-05-09", "gender": "M", "age": 40 },
    { "memberCode": "U0077", "memberName": "남소희", "status": "ACTIVE", "joinDate": "2022-07-22", "gender": "F", "age": 25 },
    { "memberCode": "U0078", "memberName": "탁민준", "status": "ACTIVE", "joinDate": "2022-09-16", "gender": "M", "age": 28 },
    { "memberCode": "U0079", "memberName": "우채린", "status": "ACTIVE", "joinDate": "2022-11-04", "gender": "F", "age": 34 },
    { "memberCode": "U0080", "memberName": "진성빈", "status": "ACTIVE", "joinDate": "2023-01-11", "gender": "M", "age": 42 },
    { "memberCode": "U0081", "memberName": "구하율", "status": "ACTIVE", "joinDate": "2023-02-23", "gender": "F", "age": 22 },
    { "memberCode": "U0082", "memberName": "엄승현", "status": "ACTIVE", "joinDate": "2023-04-07", "gender": "M", "age": 30 },
    { "memberCode": "U0083", "memberName": "예수진", "status": "ACTIVE", "joinDate": "2023-05-19", "gender": "F", "age": 27 },
    { "memberCode": "U0084", "memberName": "변동욱", "status": "ACTIVE", "joinDate": "2023-06-28", "gender": "M", "age": 38 },
    { "memberCode": "U0085", "memberName": "도시은", "status": "ACTIVE", "joinDate": "2023-08-05", "gender": "F", "age": 23 },
    { "memberCode": "U0086", "memberName": "복준서", "status": "ACTIVE", "joinDate": "2023-09-17", "gender": "M", "age": 35 },
    { "memberCode": "U0087", "memberName": "손유나", "status": "ACTIVE", "joinDate": "2023-10-30", "gender": "F", "age": 29 },
    { "memberCode": "U0088", "memberName": "석우빈", "status": "ACTIVE", "joinDate": "2023-12-12", "gender": "M", "age": 46 },
    { "memberCode": "U0089", "memberName": "빈채아", "status": "ACTIVE", "joinDate": "2024-01-25", "gender": "F", "age": 26 },
    { "memberCode": "U0090", "memberName": "추민재", "status": "ACTIVE", "joinDate": "2024-03-13", "gender": "M", "age": 32 },
    { "memberCode": "U0091", "memberName": "여서연", "status": "ACTIVE", "joinDate": "2024-04-21", "gender": "F", "age": 24 },
    { "memberCode": "U0092", "memberName": "황준호", "status": "ACTIVE", "joinDate": "2024-05-29", "gender": "M", "age": 37 },
    { "memberCode": "U0093", "memberName": "제갈윤아", "status": "ACTIVE", "joinDate": "2024-07-08", "gender": "F", "age": 28 },
    { "memberCode": "U0094", "memberName": "남궁태인", "status": "ACTIVE", "joinDate": "2024-08-23", "gender": "M", "age": 41 },
    { "memberCode": "U0095", "memberName": "선우지현", "status": "ACTIVE", "joinDate": "2024-09-15", "gender": "F", "age": 25 },
    { "memberCode": "U0096", "memberName": "독고승훈", "status": "ACTIVE", "joinDate": "2024-10-22", "gender": "M", "age": 49 },
    { "memberCode": "U0097", "memberName": "사공민정", "status": "ACTIVE", "joinDate": "2024-11-18", "gender": "F", "age": 33 },
    { "memberCode": "U0098", "memberName": "황보지훈", "status": "ACTIVE", "joinDate": "2024-12-06", "gender": "M", "age": 27 },
    { "memberCode": "U0099", "memberName": "제은서", "status": "ACTIVE", "joinDate": "2022-03-28", "gender": "F", "age": 30 },
    { "memberCode": "U0100", "memberName": "갈재혁", "status": "ACTIVE", "joinDate": "2022-06-05", "gender": "M", "age": 34 },
    { "memberCode": "U0101", "memberName": "김도윤", "status": "ACTIVE", "joinDate": "2022-01-22", "gender": "M", "age": 25 },
    { "memberCode": "U0102", "memberName": "이하린", "status": "ACTIVE", "joinDate": "2022-03-11", "gender": "F", "age": 28 },
    { "memberCode": "U0103", "memberName": "박서준", "status": "ACTIVE", "joinDate": "2022-05-16", "gender": "M", "age": 36 },
    { "memberCode": "U0104", "memberName": "정윤지", "status": "ACTIVE", "joinDate": "2022-07-28", "gender": "F", "age": 23 },
    { "memberCode": "U0105", "memberName": "최민혁", "status": "ACTIVE", "joinDate": "2022-09-12", "gender": "M", "age": 31 },
    { "memberCode": "U0106", "memberName": "강다인", "status": "ACTIVE", "joinDate": "2022-11-25", "gender": "F", "age": 27 },
    { "memberCode": "U0107", "memberName": "윤태민", "status": "ACTIVE", "joinDate": "2023-01-14", "gender": "M", "age": 39 },
    { "memberCode": "U0108", "memberName": "임지우", "status": "ACTIVE", "joinDate": "2023-03-05", "gender": "F", "age": 24 },
    { "memberCode": "U0109", "memberName": "한승우", "status": "ACTIVE", "joinDate": "2023-04-18", "gender": "M", "age": 45 },
    { "memberCode": "U0110", "memberName": "오나연", "status": "ACTIVE", "joinDate": "2023-06-02", "gender": "F", "age": 29 },
    { "memberCode": "U0111", "memberName": "신재현", "status": "ACTIVE", "joinDate": "2023-07-20", "gender": "M", "age": 26 },
    { "memberCode": "U0112", "memberName": "장소은", "status": "ACTIVE", "joinDate": "2023-08-29", "gender": "F", "age": 35 },
    { "memberCode": "U0113", "memberName": "서민기", "status": "ACTIVE", "joinDate": "2023-10-11", "gender": "M", "age": 22 },
    { "memberCode": "U0114", "memberName": "조예원", "status": "ACTIVE", "joinDate": "2023-11-23", "gender": "F", "age": 32 },
    { "memberCode": "U0115", "memberName": "권동혁", "status": "ACTIVE", "joinDate": "2024-01-08", "gender": "M", "age": 37 },
    { "memberCode": "U0116", "memberName": "홍지안", "status": "ACTIVE", "joinDate": "2024-02-15", "gender": "F", "age": 21 },
    { "memberCode": "U0117", "memberName": "송현준", "status": "ACTIVE", "joinDate": "2024-03-27", "gender": "M", "age": 40 },
    { "memberCode": "U0118", "memberName": "안유빈", "status": "ACTIVE", "joinDate": "2024-05-09", "gender": "F", "age": 26 },
    { "memberCode": "U0119", "memberName": "배성민", "status": "ACTIVE", "joinDate": "2024-06-17", "gender": "M", "age": 33 },
    { "memberCode": "U0120", "memberName": "류지원", "status": "ACTIVE", "joinDate": "2024-07-30", "gender": "F", "age": 28 },
    { "memberCode": "U0121", "memberName": "노승호", "status": "ACTIVE", "joinDate": "2024-09-05", "gender": "M", "age": 48 },
    { "memberCode": "U0122", "memberName": "하수빈", "status": "ACTIVE", "joinDate": "2024-10-19", "gender": "F", "age": 25 },
    { "memberCode": "U0123", "memberName": "곽재민", "status": "ACTIVE", "joinDate": "2024-11-27", "gender": "M", "age": 30 },
    { "memberCode": "U0124", "memberName": "문채윤", "status": "ACTIVE", "joinDate": "2024-12-10", "gender": "F", "age": 34 },
    { "memberCode": "U0125", "memberName": "전우진", "status": "ACTIVE", "joinDate": "2022-02-08", "gender": "M", "age": 29 },
    { "memberCode": "U0126", "memberName": "표지민", "status": "ACTIVE", "joinDate": "2022-04-19", "gender": "F", "age": 23 },
    { "memberCode": "U0127", "memberName": "남윤성", "status": "ACTIVE", "joinDate": "2022-06-24", "gender": "M", "age": 42 },
    { "memberCode": "U0128", "memberName": "탁서아", "status": "ACTIVE", "joinDate": "2022-08-31", "gender": "F", "age": 27 },
    { "memberCode": "U0129", "memberName": "우준우", "status": "ACTIVE", "joinDate": "2022-10-15", "gender": "M", "age": 35 },
    { "memberCode": "U0130", "memberName": "진하은", "status": "ACTIVE", "joinDate": "2022-12-22", "gender": "F", "age": 31 },
    { "memberCode": "U0131", "memberName": "구태양", "status": "ACTIVE", "joinDate": "2023-02-12", "gender": "M", "age": 24 },
    { "memberCode": "U0132", "memberName": "엄지유", "status": "ACTIVE", "joinDate": "2023-03-29", "gender": "F", "age": 38 },
    { "memberCode": "U0133", "memberName": "예민수", "status": "ACTIVE", "joinDate": "2023-05-14", "gender": "M", "age": 26 },
    { "memberCode": "U0134", "memberName": "변예진", "status": "ACTIVE", "joinDate": "2023-06-26", "gender": "F", "age": 22 },
    { "memberCode": "U0135", "memberName": "도준혁", "status": "ACTIVE", "joinDate": "2023-08-09", "gender": "M", "age": 44 },
    { "memberCode": "U0136", "memberName": "복서윤", "status": "ACTIVE", "joinDate": "2023-09-22", "gender": "F", "age": 29 },
    { "memberCode": "U0137", "memberName": "손민재", "status": "ACTIVE", "joinDate": "2023-11-05", "gender": "M", "age": 32 },
    { "memberCode": "U0138", "memberName": "석지아", "status": "ACTIVE", "joinDate": "2023-12-18", "gender": "F", "age": 25 },
    { "memberCode": "U0139", "memberName": "빈성현", "status": "ACTIVE", "joinDate": "2024-01-30", "gender": "M", "age": 37 },
    { "memberCode": "U0140", "memberName": "추윤서", "status": "ACTIVE", "joinDate": "2024-03-16", "gender": "F", "age": 28 },
    { "memberCode": "U0141", "memberName": "여동민", "status": "ACTIVE", "joinDate": "2024-04-28", "gender": "M", "age": 41 },
    { "memberCode": "U0142", "memberName": "황채원", "status": "ACTIVE", "joinDate": "2024-06-08", "gender": "F", "age": 24 },
    { "memberCode": "U0143", "memberName": "제갈준영", "status": "ACTIVE", "joinDate": "2024-07-21", "gender": "M", "age": 33 },
    { "memberCode": "U0144", "memberName": "남궁수아", "status": "ACTIVE", "joinDate": "2024-08-29", "gender": "F", "age": 30 },
    { "memberCode": "U0145", "memberName": "선우시우", "status": "ACTIVE", "joinDate": "2024-10-04", "gender": "M", "age": 27 },
    { "memberCode": "U0146", "memberName": "독고은비", "status": "ACTIVE", "joinDate": "2024-11-12", "gender": "F", "age": 36 },
    { "memberCode": "U0147", "memberName": "사공재훈", "status": "ACTIVE", "joinDate": "2024-12-20", "gender": "M", "age": 50 },
    { "memberCode": "U0148", "memberName": "황보다은", "status": "ACTIVE", "joinDate": "2022-01-29", "gender": "F", "age": 23 },
    { "memberCode": "U0149", "memberName": "제현우", "status": "ACTIVE", "joinDate": "2022-03-24", "gender": "M", "age": 39 },
    { "memberCode": "U0150", "memberName": "갈소민", "status": "ACTIVE", "joinDate": "2022-05-30", "gender": "F", "age": 26 },
    { "memberCode": "U0151", "memberName": "김지훈", "status": "ACTIVE", "joinDate": "2022-07-13", "gender": "M", "age": 34 },
    { "memberCode": "U0152", "memberName": "이나은", "status": "ACTIVE", "joinDate": "2022-09-25", "gender": "F", "age": 21 },
    { "memberCode": "U0153", "memberName": "박태윤", "status": "ACTIVE", "joinDate": "2022-11-11", "gender": "M", "age": 28 },
    { "memberCode": "U0154", "memberName": "정하늘", "status": "ACTIVE", "joinDate": "2023-01-03", "gender": "F", "age": 35 },
    { "memberCode": "U0155", "memberName": "최승준", "status": "ACTIVE", "joinDate": "2023-02-19", "gender": "M", "age": 43 },
    { "memberCode": "U0156", "memberName": "강예슬", "status": "ACTIVE", "joinDate": "2023-04-02", "gender": "F", "age": 25 },
    { "memberCode": "U0157", "memberName": "윤정훈", "status": "ACTIVE", "joinDate": "2023-05-21", "gender": "M", "age": 31 },
    { "memberCode": "U0158", "memberName": "임소율", "status": "ACTIVE", "joinDate": "2023-07-04", "gender": "F", "age": 22 },
    { "memberCode": "U0159", "memberName": "한재원", "status": "ACTIVE", "joinDate": "2023-08-16", "gender": "M", "age": 47 },
    { "memberCode": "U0160", "memberName": "오채린", "status": "ACTIVE", "joinDate": "2023-09-28", "gender": "F", "age": 29 },
    { "memberCode": "U0161", "memberName": "신동욱", "status": "ACTIVE", "joinDate": "2023-11-15", "gender": "M", "age": 36 },
    { "memberCode": "U0162", "memberName": "장유진", "status": "ACTIVE", "joinDate": "2023-12-27", "gender": "F", "age": 24 },
    { "memberCode": "U0163", "memberName": "서준서", "status": "ACTIVE", "joinDate": "2024-02-09", "gender": "M", "age": 40 },
    { "memberCode": "U0164", "memberName": "조서현", "status": "ACTIVE", "joinDate": "2024-03-23", "gender": "F", "age": 27 },
    { "memberCode": "U0165", "memberName": "권민우", "status": "ACTIVE", "joinDate": "2024-05-06", "gender": "M", "age": 33 },
    { "memberCode": "U0166", "memberName": "홍지율", "status": "ACTIVE", "joinDate": "2024-06-19", "gender": "F", "age": 26 },
    { "memberCode": "U0167", "memberName": "송태현", "status": "ACTIVE", "joinDate": "2024-07-27", "gender": "M", "age": 38 },
    { "memberCode": "U0168", "memberName": "안수진", "status": "ACTIVE", "joinDate": "2024-09-11", "gender": "F", "age": 23 },
    { "memberCode": "U0169", "memberName": "배준혁", "status": "ACTIVE", "joinDate": "2024-10-25", "gender": "M", "age": 45 },
    { "memberCode": "U0170", "memberName": "류다현", "status": "ACTIVE", "joinDate": "2024-12-03", "gender": "F", "age": 30 },
    { "memberCode": "U0171", "memberName": "노성빈", "status": "ACTIVE", "joinDate": "2022-02-14", "gender": "M", "age": 29 },
    { "memberCode": "U0172", "memberName": "하지원", "status": "ACTIVE", "joinDate": "2022-04-27", "gender": "F", "age": 32 },
    { "memberCode": "U0173", "memberName": "곽민석", "status": "ACTIVE", "joinDate": "2022-06-11", "gender": "M", "age": 25 },
    { "memberCode": "U0174", "memberName": "문예린", "status": "ACTIVE", "joinDate": "2022-08-23", "gender": "F", "age": 37 },
    { "memberCode": "U0175", "memberName": "전재윤", "status": "ACTIVE", "joinDate": "2022-10-08", "gender": "M", "age": 42 },
    { "memberCode": "U0176", "memberName": "표시연", "status": "ACTIVE", "joinDate": "2022-12-19", "gender": "F", "age": 28 },
    { "memberCode": "U0177", "memberName": "남승현", "status": "ACTIVE", "joinDate": "2023-02-05", "gender": "M", "age": 24 },
    { "memberCode": "U0178", "memberName": "탁나윤", "status": "ACTIVE", "joinDate": "2023-03-22", "gender": "F", "age": 34 },
    { "memberCode": "U0179", "memberName": "우동진", "status": "ACTIVE", "joinDate": "2023-05-10", "gender": "M", "age": 31 },
    { "memberCode": "U0180", "memberName": "진서영", "status": "ACTIVE", "joinDate": "2023-06-18", "gender": "F", "age": 22 },
    { "memberCode": "U0181", "memberName": "구준호", "status": "ACTIVE", "joinDate": "2023-08-01", "gender": "M", "age": 46 },
    { "memberCode": "U0182", "memberName": "엄유나", "status": "ACTIVE", "joinDate": "2023-09-13", "gender": "F", "age": 27 },
    { "memberCode": "U0183", "memberName": "예성호", "status": "ACTIVE", "joinDate": "2023-10-26", "gender": "M", "age": 35 },
    { "memberCode": "U0184", "memberName": "변지수", "status": "ACTIVE", "joinDate": "2023-12-08", "gender": "F", "age": 29 },
    { "memberCode": "U0185", "memberName": "도민준", "status": "ACTIVE", "joinDate": "2024-01-20", "gender": "M", "age": 39 },
    { "memberCode": "U0186", "memberName": "복하윤", "status": "ACTIVE", "joinDate": "2024-03-04", "gender": "F", "age": 26 },
    { "memberCode": "U0187", "memberName": "손태민", "status": "ACTIVE", "joinDate": "2024-04-16", "gender": "M", "age": 33 },
    { "memberCode": "U0188", "memberName": "석채은", "status": "ACTIVE", "joinDate": "2024-05-24", "gender": "F", "age": 21 },
    { "memberCode": "U0189", "memberName": "빈우진", "status": "ACTIVE", "joinDate": "2024-07-06", "gender": "M", "age": 41 },
    { "memberCode": "U0190", "memberName": "추소은", "status": "ACTIVE", "joinDate": "2024-08-20", "gender": "F", "age": 25 },
    { "memberCode": "U0191", "memberName": "여재혁", "status": "ACTIVE", "joinDate": "2024-09-27", "gender": "M", "age": 30 },
    { "memberCode": "U0192", "memberName": "황지애", "status": "ACTIVE", "joinDate": "2024-11-09", "gender": "F", "age": 36 },
    { "memberCode": "U0193", "memberName": "제갈민호", "status": "ACTIVE", "joinDate": "2024-12-17", "gender": "M", "age": 28 },
    { "memberCode": "U0194", "memberName": "남궁하은", "status": "ACTIVE", "joinDate": "2022-01-16", "gender": "F", "age": 23 },
    { "memberCode": "U0195", "memberName": "선우건우", "status": "ACTIVE", "joinDate": "2022-03-31", "gender": "M", "age": 44 },
    { "memberCode": "U0196", "memberName": "독고서윤", "status": "ACTIVE", "joinDate": "2022-05-18", "gender": "F", "age": 31 },
    { "memberCode": "U0197", "memberName": "사공태준", "status": "ACTIVE", "joinDate": "2022-07-25", "gender": "M", "age": 27 },
    { "memberCode": "U0198", "memberName": "황보지현", "status": "ACTIVE", "joinDate": "2022-09-08", "gender": "F", "age": 38 },
    { "memberCode": "U0199", "memberName": "제승민", "status": "ACTIVE", "joinDate": "2022-11-21", "gender": "M", "age": 32 },
    { "memberCode": "U0200", "memberName": "갈예나", "status": "ACTIVE", "joinDate": "2023-01-28", "gender": "F", "age": 24 },
    { "memberCode": "U0201", "memberName": "김서연", "status": "ACTIVE", "joinDate": "2023-02-11", "gender": "F", "age": 29 },
    { "memberCode": "U0202", "memberName": "이동현", "status": "ACTIVE", "joinDate": "2023-04-14", "gender": "M", "age": 35 },
    { "memberCode": "U0203", "memberName": "박지수", "status": "ACTIVE", "joinDate": "2023-05-27", "gender": "F", "age": 22 },
    { "memberCode": "U0204", "memberName": "정우성", "status": "ACTIVE", "joinDate": "2023-07-11", "gender": "M", "age": 40 },
    { "memberCode": "U0205", "memberName": "최하린", "status": "ACTIVE", "joinDate": "2023-08-24", "gender": "F", "age": 26 },
    { "memberCode": "U0206", "memberName": "강재훈", "status": "ACTIVE", "joinDate": "2023-10-07", "gender": "M", "age": 33 },
    { "memberCode": "U0207", "memberName": "윤다온", "status": "ACTIVE", "joinDate": "2023-11-20", "gender": "F", "age": 28 },
    { "memberCode": "U0208", "memberName": "임시현", "status": "ACTIVE", "joinDate": "2024-01-04", "gender": "M", "age": 37 },
    { "memberCode": "U0209", "memberName": "한소율", "status": "ACTIVE", "joinDate": "2024-02-17", "gender": "F", "age": 25 },
    { "memberCode": "U0210", "memberName": "오준혁", "status": "ACTIVE", "joinDate": "2024-04-01", "gender": "M", "age": 42 },
    { "memberCode": "U0211", "memberName": "신은서", "status": "ACTIVE", "joinDate": "2024-05-14", "gender": "F", "age": 31 },
    { "memberCode": "U0212", "memberName": "장민서", "status": "ACTIVE", "joinDate": "2024-06-27", "gender": "M", "age": 27 },
    { "memberCode": "U0213", "memberName": "서채아", "status": "ACTIVE", "joinDate": "2024-08-10", "gender": "F", "age": 34 },
    { "memberCode": "U0214", "memberName": "조성우", "status": "ACTIVE", "joinDate": "2024-09-23", "gender": "M", "age": 23 },
    { "memberCode": "U0215", "memberName": "권나영", "status": "ACTIVE", "joinDate": "2024-11-06", "gender": "F", "age": 39 },
    { "memberCode": "U0216", "memberName": "홍지훈", "status": "ACTIVE", "joinDate": "2024-12-19", "gender": "M", "age": 30 },
    { "memberCode": "U0217", "memberName": "송윤아", "status": "ACTIVE", "joinDate": "2022-02-20", "gender": "F", "age": 26 },
    { "memberCode": "U0218", "memberName": "안태경", "status": "ACTIVE", "joinDate": "2022-04-06", "gender": "M", "age": 45 },
    { "memberCode": "U0219", "memberName": "배서진", "status": "ACTIVE", "joinDate": "2022-06-19", "gender": "F", "age": 24 },
    { "memberCode": "U0220", "memberName": "류현수", "status": "ACTIVE", "joinDate": "2022-08-02", "gender": "M", "age": 32 },
    { "memberCode": "U0221", "memberName": "노지안", "status": "ACTIVE", "joinDate": "2022-10-16", "gender": "F", "age": 29 },
    { "memberCode": "U0222", "memberName": "하준영", "status": "ACTIVE", "joinDate": "2022-12-28", "gender": "M", "age": 36 },
    { "memberCode": "U0223", "memberName": "곽수빈", "status": "ACTIVE", "joinDate": "2023-02-15", "gender": "F", "age": 21 },
    { "memberCode": "U0224", "memberName": "문동욱", "status": "ACTIVE", "joinDate": "2023-03-31", "gender": "M", "age": 38 },
    { "memberCode": "U0225", "memberName": "전예서", "status": "ACTIVE", "joinDate": "2023-05-16", "gender": "F", "age": 27 },
    { "memberCode": "U0226", "memberName": "표승호", "status": "ACTIVE", "joinDate": "2023-06-29", "gender": "M", "age": 41 },
    { "memberCode": "U0227", "memberName": "남지율", "status": "ACTIVE", "joinDate": "2023-08-12", "gender": "F", "age": 25 },
    { "memberCode": "U0228", "memberName": "탁민재", "status": "ACTIVE", "joinDate": "2023-09-25", "gender": "M", "age": 34 },
    { "memberCode": "U0229", "memberName": "우하늘", "status": "ACTIVE", "joinDate": "2023-11-08", "gender": "F", "age": 30 },
    { "memberCode": "U0230", "memberName": "진준서", "status": "ACTIVE", "joinDate": "2023-12-21", "gender": "M", "age": 28 },
    { "memberCode": "U0231", "memberName": "구소민", "status": "ACTIVE", "joinDate": "2024-02-03", "gender": "F", "age": 23 },
    { "memberCode": "U0232", "memberName": "엄재윤", "status": "ACTIVE", "joinDate": "2024-03-18", "gender": "M", "age": 43 },
    { "memberCode": "U0233", "memberName": "예다인", "status": "ACTIVE", "joinDate": "2024-05-01", "gender": "F", "age": 33 },
    { "memberCode": "U0234", "memberName": "변시우", "status": "ACTIVE", "joinDate": "2024-06-14", "gender": "M", "age": 26 },
    { "memberCode": "U0235", "memberName": "도유진", "status": "ACTIVE", "joinDate": "2024-07-28", "gender": "F", "age": 37 },
    { "memberCode": "U0236", "memberName": "복성민", "status": "ACTIVE", "joinDate": "2024-09-10", "gender": "M", "age": 31 },
    { "memberCode": "U0237", "memberName": "손서아", "status": "ACTIVE", "joinDate": "2024-10-24", "gender": "F", "age": 22 },
    { "memberCode": "U0238", "memberName": "석동현", "status": "ACTIVE", "joinDate": "2024-12-07", "gender": "M", "age": 46 },
    { "memberCode": "U0239", "memberName": "빈하린", "status": "ACTIVE", "joinDate": "2022-01-11", "gender": "F", "age": 28 },
    { "memberCode": "U0240", "memberName": "추태윤", "status": "ACTIVE", "joinDate": "2022-03-26", "gender": "M", "age": 35 },
    { "memberCode": "U0241", "memberName": "여채린", "status": "ACTIVE", "joinDate": "2022-05-09", "gender": "F", "age": 24 },
    { "memberCode": "U0242", "memberName": "황준우", "status": "ACTIVE", "joinDate": "2022-07-22", "gender": "M", "age": 39 },
    { "memberCode": "U0243", "memberName": "제갈지유", "status": "ACTIVE", "joinDate": "2022-09-04", "gender": "F", "age": 27 },
    { "memberCode": "U0244", "memberName": "남궁민혁", "status": "ACTIVE", "joinDate": "2022-11-17", "gender": "M", "age": 44 },
    { "memberCode": "U0245", "memberName": "선우소율", "status": "ACTIVE", "joinDate": "2023-01-30", "gender": "F", "age": 21 },
    { "memberCode": "U0246", "memberName": "독고재원", "status": "ACTIVE", "joinDate": "2023-03-15", "gender": "M", "age": 32 },
    { "memberCode": "U0247", "memberName": "사공예은", "status": "ACTIVE", "joinDate": "2023-04-29", "gender": "F", "age": 29 },
    { "memberCode": "U0248", "memberName": "황보우빈", "status": "ACTIVE", "joinDate": "2023-06-12", "gender": "M", "age": 36 },
    { "memberCode": "U0249", "memberName": "제나윤", "status": "ACTIVE", "joinDate": "2023-07-26", "gender": "F", "age": 25 },
    { "memberCode": "U0250", "memberName": "갈승재", "status": "ACTIVE", "joinDate": "2023-09-08", "gender": "M", "age": 40 },
    { "memberCode": "U0251", "memberName": "김하율", "status": "ACTIVE", "joinDate": "2022-01-05", "gender": "F", "age": 26 },
    { "memberCode": "U0252", "memberName": "이성훈", "status": "ACTIVE", "joinDate": "2022-03-20", "gender": "M", "age": 34 },
    { "memberCode": "U0253", "memberName": "박은채", "status": "ACTIVE", "joinDate": "2022-05-12", "gender": "F", "age": 23 },
    { "memberCode": "U0254", "memberName": "정민기", "status": "ACTIVE", "joinDate": "2022-07-27", "gender": "M", "age": 41 },
    { "memberCode": "U0255", "memberName": "최지우", "status": "ACTIVE", "joinDate": "2022-09-19", "gender": "F", "age": 30 },
    { "memberCode": "U0256", "memberName": "강태현", "status": "ACTIVE", "joinDate": "2022-11-03", "gender": "M", "age": 28 },
    { "memberCode": "U0257", "memberName": "윤서영", "status": "ACTIVE", "joinDate": "2023-01-17", "gender": "F", "age": 22 },
    { "memberCode": "U0258", "memberName": "임준호", "status": "ACTIVE", "joinDate": "2023-03-02", "gender": "M", "age": 37 },
    { "memberCode": "U0259", "memberName": "한다빈", "status": "ACTIVE", "joinDate": "2023-04-20", "gender": "F", "age": 27 },
    { "memberCode": "U0260", "memberName": "오성빈", "status": "ACTIVE", "joinDate": "2023-06-05", "gender": "M", "age": 43 },
    { "memberCode": "U0261", "memberName": "신지애", "status": "ACTIVE", "joinDate": "2023-07-18", "gender": "F", "age": 31 },
    { "memberCode": "U0262", "memberName": "장우진", "status": "ACTIVE", "joinDate": "2023-09-01", "gender": "M", "age": 25 },
    { "memberCode": "U0263", "memberName": "서나은", "status": "ACTIVE", "joinDate": "2023-10-15", "gender": "F", "age": 35 },
    { "memberCode": "U0264", "memberName": "조현서", "status": "ACTIVE", "joinDate": "2023-11-28", "gender": "M", "age": 29 },
    { "memberCode": "U0265", "memberName": "권소희", "status": "ACTIVE", "joinDate": "2024-01-12", "gender": "F", "age": 24 },
    { "memberCode": "U0266", "memberName": "홍민수", "status": "ACTIVE", "joinDate": "2024-02-25", "gender": "M", "age": 38 },
    { "memberCode": "U0267", "memberName": "송유빈", "status": "ACTIVE", "joinDate": "2024-04-09", "gender": "F", "age": 26 },
    { "memberCode": "U0268", "memberName": "안동혁", "status": "ACTIVE", "joinDate": "2024-05-23", "gender": "M", "age": 45 },
    { "memberCode": "U0269", "memberName": "배시윤", "status": "ACTIVE", "joinDate": "2024-07-07", "gender": "F", "age": 21 },
    { "memberCode": "U0270", "memberName": "류재현", "status": "ACTIVE", "joinDate": "2024-08-21", "gender": "M", "age": 33 },
    { "memberCode": "U0271", "memberName": "노예린", "status": "ACTIVE", "joinDate": "2024-10-05", "gender": "F", "age": 28 },
    { "memberCode": "U0272", "memberName": "하성준", "status": "ACTIVE", "joinDate": "2024-11-19", "gender": "M", "age": 36 },
    { "memberCode": "U0273", "memberName": "곽지윤", "status": "ACTIVE", "joinDate": "2024-12-31", "gender": "F", "age": 23 },
    { "memberCode": "U0274", "memberName": "문준민", "status": "ACTIVE", "joinDate": "2022-02-16", "gender": "M", "age": 40 },
    { "memberCode": "U0275", "memberName": "전하연", "status": "ACTIVE", "joinDate": "2022-04-30", "gender": "F", "age": 27 },
    { "memberCode": "U0276", "memberName": "표동우", "status": "ACTIVE", "joinDate": "2022-06-15", "gender": "M", "age": 32 },
    { "memberCode": "U0277", "memberName": "남수현", "status": "ACTIVE", "joinDate": "2022-08-28", "gender": "F", "age": 25 },
    { "memberCode": "U0278", "memberName": "탁건호", "status": "ACTIVE", "joinDate": "2022-10-12", "gender": "M", "age": 42 },
    { "memberCode": "U0279", "memberName": "우채윤", "status": "ACTIVE", "joinDate": "2022-12-25", "gender": "F", "age": 29 },
    { "memberCode": "U0280", "memberName": "진시후", "status": "ACTIVE", "joinDate": "2023-02-08", "gender": "M", "age": 34 },
    { "memberCode": "U0281", "memberName": "구다온", "status": "ACTIVE", "joinDate": "2023-03-24", "gender": "F", "age": 22 },
    { "memberCode": "U0282", "memberName": "엄준혁", "status": "ACTIVE", "joinDate": "2023-05-07", "gender": "M", "age": 39 },
    { "memberCode": "U0283", "memberName": "예서율", "status": "ACTIVE", "joinDate": "2023-06-21", "gender": "F", "age": 26 },
    { "memberCode": "U0284", "memberName": "변성현", "status": "ACTIVE", "joinDate": "2023-08-04", "gender": "M", "age": 31 },
    { "memberCode": "U0285", "memberName": "도지안", "status": "ACTIVE", "joinDate": "2023-09-18", "gender": "F", "age": 35 },
    { "memberCode": "U0286", "memberName": "복태민", "status": "ACTIVE", "joinDate": "2023-11-01", "gender": "M", "age": 28 },
    { "memberCode": "U0287", "memberName": "손윤서", "status": "ACTIVE", "joinDate": "2023-12-15", "gender": "F", "age": 24 },
    { "memberCode": "U0288", "memberName": "석준우", "status": "ACTIVE", "joinDate": "2024-01-29", "gender": "M", "age": 46 },
    { "memberCode": "U0289", "memberName": "빈소은", "status": "ACTIVE", "joinDate": "2024-03-14", "gender": "F", "age": 30 },
    { "memberCode": "U0290", "memberName": "추동현", "status": "ACTIVE", "joinDate": "2024-04-27", "gender": "M", "age": 27 },
    { "memberCode": "U0291", "memberName": "여지수", "status": "ACTIVE", "joinDate": "2024-06-10", "gender": "F", "age": 37 },
    { "memberCode": "U0292", "memberName": "황민준", "status": "ACTIVE", "joinDate": "2024-07-24", "gender": "M", "age": 23 },
    { "memberCode": "U0293", "memberName": "제갈하율", "status": "ACTIVE", "joinDate": "2024-09-07", "gender": "F", "age": 33 },
    { "memberCode": "U0294", "memberName": "남궁태양", "status": "ACTIVE", "joinDate": "2024-10-21", "gender": "M", "age": 41 },
    { "memberCode": "U0295", "memberName": "선우예진", "status": "ACTIVE", "joinDate": "2024-12-05", "gender": "F", "age": 26 },
    { "memberCode": "U0296", "memberName": "독고승우", "status": "ACTIVE", "joinDate": "2022-01-24", "gender": "M", "age": 38 },
    { "memberCode": "U0297", "memberName": "사공지아", "status": "ACTIVE", "joinDate": "2022-03-09", "gender": "F", "age": 21 },
    { "memberCode": "U0298", "memberName": "황보재훈", "status": "ACTIVE", "joinDate": "2022-05-23", "gender": "M", "age": 44 },
    { "memberCode": "U0299", "memberName": "제서현", "status": "ACTIVE", "joinDate": "2022-07-07", "gender": "F", "age": 29 },
    { "memberCode": "U0300", "memberName": "갈우진", "status": "ACTIVE", "joinDate": "2022-09-20", "gender": "M", "age": 35 },
    { "memberCode": "U0301", "memberName": "김채아", "status": "ACTIVE", "joinDate": "2023-03-12", "gender": "F", "age": 27 },
    { "memberCode": "U0302", "memberName": "이동재", "status": "ACTIVE", "joinDate": "2023-05-25", "gender": "M", "age": 32 },
    { "memberCode": "U0303", "memberName": "박나율", "status": "ACTIVE", "joinDate": "2023-07-08", "gender": "F", "age": 24 },
    { "memberCode": "U0304", "memberName": "정성우", "status": "ACTIVE", "joinDate": "2023-08-22", "gender": "M", "age": 39 },
    { "memberCode": "U0305", "memberName": "최서현", "status": "ACTIVE", "joinDate": "2023-10-05", "gender": "F", "age": 28 },
    { "memberCode": "U0306", "memberName": "강태인", "status": "ACTIVE", "joinDate": "2023-11-19", "gender": "M", "age": 36 },
    { "memberCode": "U0307", "memberName": "윤지민", "status": "ACTIVE", "joinDate": "2024-01-03", "gender": "F", "age": 22 },
    { "memberCode": "U0308", "memberName": "임건우", "status": "ACTIVE", "joinDate": "2024-02-16", "gender": "M", "age": 41 },
    { "memberCode": "U0309", "memberName": "한소윤", "status": "ACTIVE", "joinDate": "2024-04-01", "gender": "F", "age": 25 },
    { "memberCode": "U0310", "memberName": "오준석", "status": "ACTIVE", "joinDate": "2024-05-15", "gender": "M", "age": 43 },
    { "memberCode": "U0311", "memberName": "신예나", "status": "ACTIVE", "joinDate": "2024-06-28", "gender": "F", "age": 31 },
    { "memberCode": "U0312", "memberName": "장민혁", "status": "ACTIVE", "joinDate": "2024-08-11", "gender": "M", "age": 26 },
    { "memberCode": "U0313", "memberName": "서하윤", "status": "ACTIVE", "joinDate": "2024-09-25", "gender": "F", "age": 34 },
    { "memberCode": "U0314", "memberName": "조태준", "status": "ACTIVE", "joinDate": "2024-11-08", "gender": "M", "age": 29 },
    { "memberCode": "U0315", "memberName": "권다연", "status": "ACTIVE", "joinDate": "2024-12-22", "gender": "F", "age": 23 },
    { "memberCode": "U0316", "memberName": "홍성민", "status": "ACTIVE", "joinDate": "2022-02-07", "gender": "M", "age": 37 },
    { "memberCode": "U0317", "memberName": "송지은", "status": "ACTIVE", "joinDate": "2022-04-21", "gender": "F", "age": 30 },
    { "memberCode": "U0318", "memberName": "안우현", "status": "ACTIVE", "joinDate": "2022-06-06", "gender": "M", "age": 25 },
    { "memberCode": "U0319", "memberName": "배수아", "status": "ACTIVE", "joinDate": "2022-08-19", "gender": "F", "age": 38 },
    { "memberCode": "U0320", "memberName": "류동욱", "status": "ACTIVE", "joinDate": "2022-10-03", "gender": "M", "age": 33 },
    { "memberCode": "U0321", "memberName": "노하은", "status": "ACTIVE", "joinDate": "2022-12-16", "gender": "F", "age": 27 },
    { "memberCode": "U0322", "memberName": "하재민", "status": "ACTIVE", "joinDate": "2023-02-01", "gender": "M", "age": 42 },
    { "memberCode": "U0323", "memberName": "곽윤지", "status": "ACTIVE", "joinDate": "2023-03-17", "gender": "F", "age": 24 },
    { "memberCode": "U0324", "memberName": "문현준", "status": "ACTIVE", "joinDate": "2023-05-01", "gender": "M", "age": 35 },
    { "memberCode": "U0325", "memberName": "전소율", "status": "ACTIVE", "joinDate": "2023-06-14", "gender": "F", "age": 21 },
    { "memberCode": "U0326", "memberName": "표성호", "status": "ACTIVE", "joinDate": "2023-07-29", "gender": "M", "age": 40 },
    { "memberCode": "U0327", "memberName": "남채은", "status": "ACTIVE", "joinDate": "2023-09-12", "gender": "F", "age": 28 },
    { "memberCode": "U0328", "memberName": "탁우빈", "status": "ACTIVE", "joinDate": "2023-10-26", "gender": "M", "age": 31 },
    { "memberCode": "U0329", "memberName": "우지율", "status": "ACTIVE", "joinDate": "2023-12-09", "gender": "F", "age": 26 },
    { "memberCode": "U0330", "memberName": "진태현", "status": "ACTIVE", "joinDate": "2024-01-23", "gender": "M", "age": 45 },
    { "memberCode": "U0331", "memberName": "구예서", "status": "ACTIVE", "joinDate": "2024-03-08", "gender": "F", "age": 23 },
    { "memberCode": "U0332", "memberName": "엄준서", "status": "ACTIVE", "joinDate": "2024-04-22", "gender": "M", "age": 34 },
    { "memberCode": "U0333", "memberName": "예나은", "status": "ACTIVE", "joinDate": "2024-06-05", "gender": "F", "age": 29 },
    { "memberCode": "U0334", "memberName": "변민석", "status": "ACTIVE", "joinDate": "2024-07-19", "gender": "M", "age": 36 },
    { "memberCode": "U0335", "memberName": "도서아", "status": "ACTIVE", "joinDate": "2024-09-02", "gender": "F", "age": 22 },
    { "memberCode": "U0336", "memberName": "복재윤", "status": "ACTIVE", "joinDate": "2024-10-16", "gender": "M", "age": 39 },
    { "memberCode": "U0337", "memberName": "손지원", "status": "ACTIVE", "joinDate": "2024-11-30", "gender": "F", "age": 27 },
    { "memberCode": "U0338", "memberName": "석동준", "status": "ACTIVE", "joinDate": "2024-12-14", "gender": "M", "age": 32 },
    { "memberCode": "U0339", "memberName": "빈다현", "status": "ACTIVE", "joinDate": "2022-01-18", "gender": "F", "age": 25 },
    { "memberCode": "U0340", "memberName": "추성빈", "status": "ACTIVE", "joinDate": "2022-03-03", "gender": "M", "age": 41 },
    { "memberCode": "U0341", "memberName": "여서윤", "status": "ACTIVE", "joinDate": "2022-05-17", "gender": "F", "age": 30 },
    { "memberCode": "U0342", "memberName": "황태민", "status": "ACTIVE", "joinDate": "2022-07-01", "gender": "M", "age": 28 },
    { "memberCode": "U0343", "memberName": "제갈소민", "status": "ACTIVE", "joinDate": "2022-09-14", "gender": "F", "age": 35 },
    { "memberCode": "U0344", "memberName": "남궁동현", "status": "ACTIVE", "joinDate": "2022-11-27", "gender": "M", "age": 24 },
    { "memberCode": "U0345", "memberName": "선우하늘", "status": "ACTIVE", "joinDate": "2023-01-21", "gender": "F", "age": 37 },
    { "memberCode": "U0346", "memberName": "독고준혁", "status": "ACTIVE", "joinDate": "2023-03-06", "gender": "M", "age": 33 },
    { "memberCode": "U0347", "memberName": "사공유진", "status": "ACTIVE", "joinDate": "2023-04-20", "gender": "F", "age": 26 },
    { "memberCode": "U0348", "memberName": "황보시우", "status": "ACTIVE", "joinDate": "2023-06-03", "gender": "M", "age": 44 },
    { "memberCode": "U0349", "memberName": "제지애", "status": "ACTIVE", "joinDate": "2023-07-17", "gender": "F", "age": 21 },
    { "memberCode": "U0350", "memberName": "갈민수", "status": "ACTIVE", "joinDate": "2023-09-30", "gender": "M", "age": 38 },
    { "memberCode": "U0351", "memberName": "김서우", "status": "ACTIVE", "joinDate": "2022-04-14", "gender": "M", "age": 29 },
    { "memberCode": "U0352", "memberName": "이유나", "status": "ACTIVE", "joinDate": "2022-06-28", "gender": "F", "age": 24 },
    { "memberCode": "U0353", "memberName": "박동혁", "status": "ACTIVE", "joinDate": "2022-08-11", "gender": "M", "age": 36 },
    { "memberCode": "U0354", "memberName": "정예린", "status": "ACTIVE", "joinDate": "2022-10-24", "gender": "F", "age": 31 },
    { "memberCode": "U0355", "memberName": "최준우", "status": "ACTIVE", "joinDate": "2022-12-08", "gender": "M", "age": 27 },
    { "memberCode": "U0356", "memberName": "강지윤", "status": "ACTIVE", "joinDate": "2023-02-20", "gender": "F", "age": 22 },
    { "memberCode": "U0357", "memberName": "윤성준", "status": "ACTIVE", "joinDate": "2023-04-05", "gender": "M", "age": 40 },
    { "memberCode": "U0358", "memberName": "임하율", "status": "ACTIVE", "joinDate": "2023-05-20", "gender": "F", "age": 28 },
    { "memberCode": "U0359", "memberName": "한재우", "status": "ACTIVE", "joinDate": "2023-07-03", "gender": "M", "age": 34 },
    { "memberCode": "U0360", "memberName": "오시은", "status": "ACTIVE", "joinDate": "2023-08-17", "gender": "F", "age": 25 },
    { "memberCode": "U0361", "memberName": "신태준", "status": "ACTIVE", "joinDate": "2023-10-01", "gender": "M", "age": 42 },
    { "memberCode": "U0362", "memberName": "장다은", "status": "ACTIVE", "joinDate": "2023-11-14", "gender": "F", "age": 30 },
    { "memberCode": "U0363", "memberName": "서우진", "status": "ACTIVE", "joinDate": "2023-12-28", "gender": "M", "age": 23 },
    { "memberCode": "U0364", "memberName": "조소율", "status": "ACTIVE", "joinDate": "2024-02-11", "gender": "F", "age": 37 },
    { "memberCode": "U0365", "memberName": "권동준", "status": "ACTIVE", "joinDate": "2024-03-26", "gender": "M", "age": 26 },
    { "memberCode": "U0366", "memberName": "홍서진", "status": "ACTIVE", "joinDate": "2024-05-10", "gender": "F", "age": 33 },
    { "memberCode": "U0367", "memberName": "송민재", "status": "ACTIVE", "joinDate": "2024-06-23", "gender": "M", "age": 39 },
    { "memberCode": "U0368", "memberName": "안채윤", "status": "ACTIVE", "joinDate": "2024-08-06", "gender": "F", "age": 21 },
    { "memberCode": "U0369", "memberName": "배준석", "status": "ACTIVE", "joinDate": "2024-09-20", "gender": "M", "age": 35 },
    { "memberCode": "U0370", "memberName": "류나윤", "status": "ACTIVE", "joinDate": "2024-11-03", "gender": "F", "age": 29 },
    { "memberCode": "U0371", "memberName": "노태양", "status": "ACTIVE", "joinDate": "2024-12-17", "gender": "M", "age": 32 },
    { "memberCode": "U0372", "memberName": "하예서", "status": "ACTIVE", "joinDate": "2022-01-30", "gender": "F", "age": 24 },
    { "memberCode": "U0373", "memberName": "곽성현", "status": "ACTIVE", "joinDate": "2022-03-16", "gender": "M", "age": 41 },
    { "memberCode": "U0374", "memberName": "문지수", "status": "ACTIVE", "joinDate": "2022-05-29", "gender": "F", "age": 27 },
    { "memberCode": "U0375", "memberName": "전우성", "status": "ACTIVE", "joinDate": "2022-07-13", "gender": "M", "age": 38 },
    { "memberCode": "U0376", "memberName": "표하린", "status": "ACTIVE", "joinDate": "2022-09-26", "gender": "F", "age": 23 },
    { "memberCode": "U0377", "memberName": "남건호", "status": "ACTIVE", "joinDate": "2022-11-10", "gender": "M", "age": 45 },
    { "memberCode": "U0378", "memberName": "탁서연", "status": "ACTIVE", "joinDate": "2023-01-24", "gender": "F", "age": 26 },
    { "memberCode": "U0379", "memberName": "우재훈", "status": "ACTIVE", "joinDate": "2023-03-10", "gender": "M", "age": 31 },
    { "memberCode": "U0380", "memberName": "진다인", "status": "ACTIVE", "joinDate": "2023-04-24", "gender": "F", "age": 35 },
    { "memberCode": "U0381", "memberName": "구민호", "status": "ACTIVE", "joinDate": "2023-06-07", "gender": "M", "age": 28 },
    { "memberCode": "U0382", "memberName": "엄지아", "status": "ACTIVE", "joinDate": "2023-07-22", "gender": "F", "age": 22 },
    { "memberCode": "U0383", "memberName": "예승우", "status": "ACTIVE", "joinDate": "2023-09-05", "gender": "M", "age": 43 },
    { "memberCode": "U0384", "memberName": "변소은", "status": "ACTIVE", "joinDate": "2023-10-19", "gender": "F", "age": 30 },
    { "memberCode": "U0385", "memberName": "도준영", "status": "ACTIVE", "joinDate": "2023-12-02", "gender": "M", "age": 25 },
    { "memberCode": "U0386", "memberName": "복하늘", "status": "ACTIVE", "joinDate": "2024-01-16", "gender": "F", "age": 36 },
    { "memberCode": "U0387", "memberName": "손태인", "status": "ACTIVE", "joinDate": "2024-03-01", "gender": "M", "age": 29 },
    { "memberCode": "U0388", "memberName": "석유진", "status": "ACTIVE", "joinDate": "2024-04-15", "gender": "F", "age": 24 },
    { "memberCode": "U0389", "memberName": "빈동욱", "status": "ACTIVE", "joinDate": "2024-05-29", "gender": "M", "age": 40 },
    { "memberCode": "U0390", "memberName": "추예은", "status": "ACTIVE", "joinDate": "2024-07-12", "gender": "F", "age": 27 },
    { "memberCode": "U0391", "memberName": "여성민", "status": "ACTIVE", "joinDate": "2024-08-26", "gender": "M", "age": 34 },
    { "memberCode": "U0392", "memberName": "황서율", "status": "ACTIVE", "joinDate": "2024-10-10", "gender": "F", "age": 21 },
    { "memberCode": "U0393", "memberName": "제갈태준", "status": "ACTIVE", "joinDate": "2024-11-24", "gender": "M", "age": 37 },
    { "memberCode": "U0394", "memberName": "남궁나연", "status": "ACTIVE", "joinDate": "2024-12-29", "gender": "F", "age": 28 },
    { "memberCode": "U0395", "memberName": "선우민규", "status": "ACTIVE", "joinDate": "2022-02-12", "gender": "M", "age": 33 },
    { "memberCode": "U0396", "memberName": "독고지원", "status": "ACTIVE", "joinDate": "2022-04-26", "gender": "F", "age": 26 },
    { "memberCode": "U0397", "memberName": "사공동현", "status": "ACTIVE", "joinDate": "2022-06-10", "gender": "M", "age": 42 },
    { "memberCode": "U0398", "memberName": "황보채아", "status": "ACTIVE", "joinDate": "2022-08-24", "gender": "F", "age": 25 },
    { "memberCode": "U0399", "memberName": "제준호", "status": "ACTIVE", "joinDate": "2022-10-07", "gender": "M", "age": 39 },
    { "memberCode": "U0400", "memberName": "갈수빈", "status": "ACTIVE", "joinDate": "2022-12-21", "gender": "F", "age": 32 },
    { "memberCode": "U0401", "memberName": "김시현", "status": "ACTIVE", "joinDate": "2023-04-11", "gender": "M", "age": 30 },
    { "memberCode": "U0402", "memberName": "이다온", "status": "ACTIVE", "joinDate": "2023-06-25", "gender": "F", "age": 23 },
    { "memberCode": "U0403", "memberName": "박건우", "status": "ACTIVE", "joinDate": "2023-08-08", "gender": "M", "age": 35 },
    { "memberCode": "U0404", "memberName": "정서영", "status": "ACTIVE", "joinDate": "2023-09-22", "gender": "F", "age": 28 },
    { "memberCode": "U0405", "memberName": "최태윤", "status": "ACTIVE", "joinDate": "2023-11-06", "gender": "M", "age": 41 },
    { "memberCode": "U0406", "memberName": "강예원", "status": "ACTIVE", "joinDate": "2023-12-20", "gender": "F", "age": 26 },
    { "memberCode": "U0407", "memberName": "윤준민", "status": "ACTIVE", "joinDate": "2024-02-03", "gender": "M", "age": 22 },
    { "memberCode": "U0408", "memberName": "임지안", "status": "ACTIVE", "joinDate": "2024-03-19", "gender": "F", "age": 34 },
    { "memberCode": "U0409", "memberName": "한성호", "status": "ACTIVE", "joinDate": "2024-05-02", "gender": "M", "age": 37 },
    { "memberCode": "U0410", "memberName": "오나율", "status": "ACTIVE", "joinDate": "2024-06-16", "gender": "F", "age": 21 },
    { "memberCode": "U0411", "memberName": "신동진", "status": "ACTIVE", "joinDate": "2024-07-30", "gender": "M", "age": 44 },
    { "memberCode": "U0412", "memberName": "장소현", "status": "ACTIVE", "joinDate": "2024-09-13", "gender": "F", "age": 29 },
    { "memberCode": "U0413", "memberName": "서민준", "status": "ACTIVE", "joinDate": "2024-10-28", "gender": "M", "age": 25 },
    { "memberCode": "U0414", "memberName": "조하윤", "status": "ACTIVE", "joinDate": "2024-12-11", "gender": "F", "age": 31 },
    { "memberCode": "U0415", "memberName": "권태현", "status": "ACTIVE", "joinDate": "2022-01-21", "gender": "M", "age": 36 },
    { "memberCode": "U0416", "memberName": "홍윤아", "status": "ACTIVE", "joinDate": "2022-03-07", "gender": "F", "age": 24 },
    { "memberCode": "U0417", "memberName": "송준혁", "status": "ACTIVE", "joinDate": "2022-05-21", "gender": "M", "age": 40 },
    { "memberCode": "U0418", "memberName": "안지우", "status": "ACTIVE", "joinDate": "2022-07-05", "gender": "F", "age": 27 },
    { "memberCode": "U0419", "memberName": "배성원", "status": "ACTIVE", "joinDate": "2022-09-18", "gender": "M", "age": 33 },
    { "memberCode": "U0420", "memberName": "류서아", "status": "ACTIVE", "joinDate": "2022-11-02", "gender": "F", "age": 22 },
    { "memberCode": "U0421", "memberName": "노우빈", "status": "ACTIVE", "joinDate": "2023-01-15", "gender": "M", "age": 38 },
    { "memberCode": "U0422", "memberName": "하다빈", "status": "ACTIVE", "joinDate": "2023-03-01", "gender": "F", "age": 26 },
    { "memberCode": "U0423", "memberName": "곽재현", "status": "ACTIVE", "joinDate": "2023-04-15", "gender": "M", "age": 31 },
    { "memberCode": "U0424", "memberName": "문지유", "status": "ACTIVE", "joinDate": "2023-05-30", "gender": "F", "age": 35 },
    { "memberCode": "U0425", "memberName": "전동혁", "status": "ACTIVE", "joinDate": "2023-07-14", "gender": "M", "age": 28 },
    { "memberCode": "U0426", "memberName": "표채린", "status": "ACTIVE", "joinDate": "2023-08-28", "gender": "F", "age": 23 },
    { "memberCode": "U0427", "memberName": "남시우", "status": "ACTIVE", "joinDate": "2023-10-12", "gender": "M", "age": 43 },
    { "memberCode": "U0428", "memberName": "탁은서", "status": "ACTIVE", "joinDate": "2023-11-26", "gender": "F", "age": 30 },
    { "memberCode": "U0429", "memberName": "우준영", "status": "ACTIVE", "joinDate": "2024-01-10", "gender": "M", "age": 25 },
    { "memberCode": "U0430", "memberName": "진하율", "status": "ACTIVE", "joinDate": "2024-02-24", "gender": "F", "age": 37 },
    { "memberCode": "U0431", "memberName": "구태준", "status": "ACTIVE", "joinDate": "2024-04-08", "gender": "M", "age": 32 },
    { "memberCode": "U0432", "memberName": "엄나은", "status": "ACTIVE", "joinDate": "2024-05-22", "gender": "F", "age": 24 },
    { "memberCode": "U0433", "memberName": "예동욱", "status": "ACTIVE", "joinDate": "2024-07-06", "gender": "M", "age": 39 },
    { "memberCode": "U0434", "memberName": "변서율", "status": "ACTIVE", "joinDate": "2024-08-20", "gender": "F", "age": 27 },
    { "memberCode": "U0435", "memberName": "도성민", "status": "ACTIVE", "joinDate": "2024-10-04", "gender": "M", "age": 34 },
    { "memberCode": "U0436", "memberName": "복지애", "status": "ACTIVE", "joinDate": "2024-11-18", "gender": "F", "age": 21 },
    { "memberCode": "U0437", "memberName": "손태윤", "status": "ACTIVE", "joinDate": "2024-12-26", "gender": "M", "age": 46 },
    { "memberCode": "U0438", "memberName": "석나윤", "status": "ACTIVE", "joinDate": "2022-02-05", "gender": "F", "age": 29 },
    { "memberCode": "U0439", "memberName": "빈재원", "status": "ACTIVE", "joinDate": "2022-04-20", "gender": "M", "age": 26 },
    { "memberCode": "U0440", "memberName": "추소율", "status": "ACTIVE", "joinDate": "2022-06-03", "gender": "F", "age": 33 },
    { "memberCode": "U0441", "memberName": "여민석", "status": "ACTIVE", "joinDate": "2022-08-17", "gender": "M", "age": 41 },
    { "memberCode": "U0442", "memberName": "황다은", "status": "ACTIVE", "joinDate": "2022-10-01", "gender": "F", "age": 25 },
    { "memberCode": "U0443", "memberName": "제갈우진", "status": "ACTIVE", "joinDate": "2022-12-14", "gender": "M", "age": 38 },
    { "memberCode": "U0444", "memberName": "남궁서현", "status": "ACTIVE", "joinDate": "2023-02-27", "gender": "F", "age": 28 },
    { "memberCode": "U0445", "memberName": "선우준서", "status": "ACTIVE", "joinDate": "2023-04-13", "gender": "M", "age": 23 },
    { "memberCode": "U0446", "memberName": "독고예진", "status": "ACTIVE", "joinDate": "2023-05-28", "gender": "F", "age": 36 },
    { "memberCode": "U0447", "memberName": "사공성현", "status": "ACTIVE", "joinDate": "2023-07-12", "gender": "M", "age": 30 },
    { "memberCode": "U0448", "memberName": "황보지윤", "status": "ACTIVE", "joinDate": "2023-08-26", "gender": "F", "age": 22 },
    { "memberCode": "U0449", "memberName": "제태인", "status": "ACTIVE", "joinDate": "2023-10-10", "gender": "M", "age": 45 },
    { "memberCode": "U0450", "memberName": "갈하은", "status": "ACTIVE", "joinDate": "2023-11-24", "gender": "F", "age": 27 },
    { "memberCode": "U0451", "memberName": "김동준", "status": "ACTIVE", "joinDate": "2024-03-21", "gender": "M", "age": 31 },
    { "memberCode": "U0452", "memberName": "이소윤", "status": "ACTIVE", "joinDate": "2024-05-04", "gender": "F", "age": 24 },
    { "memberCode": "U0453", "memberName": "박재훈", "status": "ACTIVE", "joinDate": "2024-06-18", "gender": "M", "age": 37 },
    { "memberCode": "U0454", "memberName": "정지민", "status": "ACTIVE", "joinDate": "2024-08-01", "gender": "F", "age": 29 },
    { "memberCode": "U0455", "memberName": "최우현", "status": "ACTIVE", "joinDate": "2024-09-15", "gender": "M", "age": 35 },
    { "memberCode": "U0456", "memberName": "강서하", "status": "ACTIVE", "joinDate": "2024-10-30", "gender": "F", "age": 23 },
    { "memberCode": "U0457", "memberName": "윤태영", "status": "ACTIVE", "joinDate": "2024-12-13", "gender": "M", "age": 40 },
    { "memberCode": "U0458", "memberName": "임예린", "status": "ACTIVE", "joinDate": "2022-01-27", "gender": "F", "age": 26 },
    { "memberCode": "U0459", "memberName": "한승민", "status": "ACTIVE", "joinDate": "2022-03-13", "gender": "M", "age": 32 },
    { "memberCode": "U0460", "memberName": "오시아", "status": "ACTIVE", "joinDate": "2022-05-27", "gender": "F", "age": 21 },
    { "memberCode": "U0461", "memberName": "신준호", "status": "ACTIVE", "joinDate": "2022-07-11", "gender": "M", "age": 44 },
    { "memberCode": "U0462", "memberName": "장유빈", "status": "ACTIVE", "joinDate": "2022-09-24", "gender": "F", "age": 30 },
    { "memberCode": "U0463", "memberName": "서동욱", "status": "ACTIVE", "joinDate": "2022-11-08", "gender": "M", "age": 27 },
    { "memberCode": "U0464", "memberName": "조나율", "status": "ACTIVE", "joinDate": "2023-01-22", "gender": "F", "age": 34 },
    { "memberCode": "U0465", "memberName": "권성준", "status": "ACTIVE", "joinDate": "2023-03-08", "gender": "M", "age": 39 },
    { "memberCode": "U0466", "memberName": "홍서은", "status": "ACTIVE", "joinDate": "2023-04-22", "gender": "F", "age": 25 },
    { "memberCode": "U0467", "memberName": "송재민", "status": "ACTIVE", "joinDate": "2023-06-06", "gender": "M", "age": 28 },
    { "memberCode": "U0468", "memberName": "안다인", "status": "ACTIVE", "joinDate": "2023-07-21", "gender": "F", "age": 36 },
    { "memberCode": "U0469", "memberName": "배우진", "status": "ACTIVE", "joinDate": "2023-09-04", "gender": "M", "age": 22 },
    { "memberCode": "U0470", "memberName": "류지안", "status": "ACTIVE", "joinDate": "2023-10-18", "gender": "F", "age": 33 },
    { "memberCode": "U0471", "memberName": "노민혁", "status": "ACTIVE", "joinDate": "2023-12-02", "gender": "M", "age": 41 },
    { "memberCode": "U0472", "memberName": "하수아", "status": "ACTIVE", "joinDate": "2024-01-16", "gender": "F", "age": 24 },
    { "memberCode": "U0473", "memberName": "곽태준", "status": "ACTIVE", "joinDate": "2024-03-01", "gender": "M", "age": 35 },
    { "memberCode": "U0474", "memberName": "문하늘", "status": "ACTIVE", "joinDate": "2024-04-15", "gender": "F", "age": 28 },
    { "memberCode": "U0475", "memberName": "전성호", "status": "ACTIVE", "joinDate": "2024-05-30", "gender": "M", "age": 42 },
    { "memberCode": "U0476", "memberName": "표소은", "status": "ACTIVE", "joinDate": "2024-07-14", "gender": "F", "age": 27 },
    { "memberCode": "U0477", "memberName": "남동현", "status": "ACTIVE", "joinDate": "2024-08-28", "gender": "M", "age": 31 },
    { "memberCode": "U0478", "memberName": "탁예나", "status": "ACTIVE", "joinDate": "2024-10-12", "gender": "F", "age": 23 },
    { "memberCode": "U0479", "memberName": "우재윤", "status": "ACTIVE", "joinDate": "2024-11-26", "gender": "M", "age": 38 },
    { "memberCode": "U0480", "memberName": "진서율", "status": "ACTIVE", "joinDate": "2024-12-24", "gender": "F", "age": 26 },
    { "memberCode": "U0481", "memberName": "구민우", "status": "ACTIVE", "joinDate": "2022-02-10", "gender": "M", "age": 34 },
    { "memberCode": "U0482", "memberName": "엄채원", "status": "ACTIVE", "joinDate": "2022-04-25", "gender": "F", "age": 29 },
    { "memberCode": "U0483", "memberName": "예준혁", "status": "ACTIVE", "joinDate": "2022-06-09", "gender": "M", "age": 25 },
    { "memberCode": "U0484", "memberName": "변지애", "status": "ACTIVE", "joinDate": "2022-08-23", "gender": "F", "age": 37 },
    { "memberCode": "U0485", "memberName": "도태민", "status": "ACTIVE", "joinDate": "2022-10-07", "gender": "M", "age": 30 },
    { "memberCode": "U0486", "memberName": "복유나", "status": "ACTIVE", "joinDate": "2022-12-20", "gender": "F", "age": 22 },
    { "memberCode": "U0487", "memberName": "손우성", "status": "ACTIVE", "joinDate": "2023-02-13", "gender": "M", "age": 43 },
    { "memberCode": "U0488", "memberName": "석다연", "status": "ACTIVE", "joinDate": "2023-03-30", "gender": "F", "age": 26 },
    { "memberCode": "U0489", "memberName": "빈준서", "status": "ACTIVE", "joinDate": "2023-05-15", "gender": "M", "age": 33 },
    { "memberCode": "U0490", "memberName": "추서현", "status": "ACTIVE", "joinDate": "2023-06-29", "gender": "F", "age": 21 },
    { "memberCode": "U0491", "memberName": "여동욱", "status": "ACTIVE", "joinDate": "2023-08-13", "gender": "M", "age": 39 },
    { "memberCode": "U0492", "memberName": "황지수", "status": "ACTIVE", "joinDate": "2023-09-27", "gender": "F", "age": 28 },
    { "memberCode": "U0493", "memberName": "제갈성빈", "status": "ACTIVE", "joinDate": "2023-11-11", "gender": "M", "age": 36 },
    { "memberCode": "U0494", "memberName": "남궁윤서", "status": "ACTIVE", "joinDate": "2023-12-25", "gender": "F", "age": 24 },
    { "memberCode": "U0495", "memberName": "선우재훈", "status": "ACTIVE", "joinDate": "2024-02-08", "gender": "M", "age": 40 },
    { "memberCode": "U0496", "memberName": "독고나은", "status": "ACTIVE", "joinDate": "2024-03-24", "gender": "F", "age": 27 },
    { "memberCode": "U0497", "memberName": "사공민준", "status": "ACTIVE", "joinDate": "2024-05-08", "gender": "M", "age": 32 },
    { "memberCode": "U0498", "memberName": "황보하윤", "status": "ACTIVE", "joinDate": "2024-06-22", "gender": "F", "age": 25 },
    { "memberCode": "U0499", "memberName": "제태준", "status": "ACTIVE", "joinDate": "2024-08-06", "gender": "M", "age": 45 },
    { "memberCode": "U0500", "memberName": "갈소현", "status": "ACTIVE", "joinDate": "2024-09-20", "gender": "F", "age": 31 }
];



const categories = [
    { "categoryCode": "C01", "categoryName": "Smartphone" },
    { "categoryCode": "C02", "categoryName": "Laptop" },
    { "categoryCode": "C03", "categoryName": "Mouse" },
    { "categoryCode": "C04", "categoryName": "Keyboard" }
];



const inventories = [
    { "inventoryCode": "INV001", "productCode": "P001", "currentStock": 45, "status": "IN_STOCK", "updatedDate": "2024-12-15" },
    { "inventoryCode": "INV002", "productCode": "P002", "currentStock": 32, "status": "IN_STOCK", "updatedDate": "2024-12-18" },
    { "inventoryCode": "INV003", "productCode": "P003", "currentStock": 28, "status": "IN_STOCK", "updatedDate": "2024-12-20" },
    { "inventoryCode": "INV004", "productCode": "P004", "currentStock": 15, "status": "IN_STOCK", "updatedDate": "2024-12-22" },
    { "inventoryCode": "INV005", "productCode": "P005", "currentStock": 38, "status": "IN_STOCK", "updatedDate": "2024-12-10" },
    { "inventoryCode": "INV006", "productCode": "P006", "currentStock": 42, "status": "IN_STOCK", "updatedDate": "2024-12-12" },
    { "inventoryCode": "INV007", "productCode": "P007", "currentStock": 25, "status": "IN_STOCK", "updatedDate": "2024-12-19" },
    { "inventoryCode": "INV008", "productCode": "P008", "currentStock": 51, "status": "IN_STOCK", "updatedDate": "2024-12-16" },
    { "inventoryCode": "INV009", "productCode": "P009", "currentStock": 33, "status": "IN_STOCK", "updatedDate": "2024-12-21" },
    { "inventoryCode": "INV010", "productCode": "P010", "currentStock": 8, "status": "LOW_STOCK", "updatedDate": "2024-12-23" },
    { "inventoryCode": "INV011", "productCode": "P011", "currentStock": 22, "status": "IN_STOCK", "updatedDate": "2024-12-14" },
    { "inventoryCode": "INV012", "productCode": "P012", "currentStock": 37, "status": "IN_STOCK", "updatedDate": "2024-12-17" },
    { "inventoryCode": "INV013", "productCode": "P013", "currentStock": 65, "status": "IN_STOCK", "updatedDate": "2024-12-11" },
    { "inventoryCode": "INV014", "productCode": "P014", "currentStock": 19, "status": "IN_STOCK", "updatedDate": "2024-12-20" },
    { "inventoryCode": "INV015", "productCode": "P015", "currentStock": 7, "status": "LOW_STOCK", "updatedDate": "2024-12-24" },
    { "inventoryCode": "INV016", "productCode": "P016", "currentStock": 14, "status": "IN_STOCK", "updatedDate": "2024-12-13" },
    { "inventoryCode": "INV017", "productCode": "P017", "currentStock": 9, "status": "LOW_STOCK", "updatedDate": "2024-12-22" },
    { "inventoryCode": "INV018", "productCode": "P018", "currentStock": 47, "status": "IN_STOCK", "updatedDate": "2024-12-15" },
    { "inventoryCode": "INV019", "productCode": "P019", "currentStock": 54, "status": "IN_STOCK", "updatedDate": "2024-12-18" },
    { "memberCode": "INV020", "productCode": "P020", "currentStock": 0, "status": "OUT_OF_STOCK", "updatedDate": "2024-12-25" },
    { "inventoryCode": "INV021", "productCode": "P021", "currentStock": 18, "status": "IN_STOCK", "updatedDate": "2024-12-16" },
    { "inventoryCode": "INV022", "productCode": "P022", "currentStock": 35, "status": "IN_STOCK", "updatedDate": "2024-12-19" },
    { "inventoryCode": "INV023", "productCode": "P023", "currentStock": 22, "status": "IN_STOCK", "updatedDate": "2024-12-21" },
    { "inventoryCode": "INV024", "productCode": "P024", "currentStock": 27, "status": "IN_STOCK", "updatedDate": "2024-12-17" },
    { "inventoryCode": "INV025", "productCode": "P025", "currentStock": 31, "status": "IN_STOCK", "updatedDate": "2024-12-20" },
    { "inventoryCode": "INV026", "productCode": "P026", "currentStock": 19, "status": "IN_STOCK", "updatedDate": "2024-12-18" },
    { "inventoryCode": "INV027", "productCode": "P027", "currentStock": 44, "status": "IN_STOCK", "updatedDate": "2024-12-14" },
    { "inventoryCode": "INV028", "productCode": "P028", "currentStock": 15, "status": "IN_STOCK", "updatedDate": "2024-12-23" },
    { "inventoryCode": "INV029", "productCode": "P029", "currentStock": 52, "status": "IN_STOCK", "updatedDate": "2024-12-12" },
    { "inventoryCode": "INV030", "productCode": "P030", "currentStock": 8, "status": "LOW_STOCK", "updatedDate": "2024-12-24" },
    { "inventoryCode": "INV031", "productCode": "P031", "currentStock": 26, "status": "IN_STOCK", "updatedDate": "2024-12-15" },
    { "inventoryCode": "INV032", "productCode": "P032", "currentStock": 38, "status": "IN_STOCK", "updatedDate": "2024-12-19" },
    { "inventoryCode": "INV033", "productCode": "P033", "currentStock": 13, "status": "IN_STOCK", "updatedDate": "2024-12-22" },
    { "inventoryCode": "INV034", "productCode": "P034", "currentStock": 21, "status": "IN_STOCK", "updatedDate": "2024-12-17" },
    { "inventoryCode": "INV035", "productCode": "P035", "currentStock": 34, "status": "IN_STOCK", "updatedDate": "2024-12-20" },
    { "inventoryCode": "INV036", "productCode": "P036", "currentStock": 9, "status": "LOW_STOCK", "updatedDate": "2024-12-23" },
    { "inventoryCode": "INV037", "productCode": "P037", "currentStock": 41, "status": "IN_STOCK", "updatedDate": "2024-12-16" },
    { "inventoryCode": "INV038", "productCode": "P038", "currentStock": 29, "status": "IN_STOCK", "updatedDate": "2024-12-18" },
    { "inventoryCode": "INV039", "productCode": "P039", "currentStock": 24, "status": "IN_STOCK", "updatedDate": "2024-12-21" },
    { "inventoryCode": "INV040", "productCode": "P040", "currentStock": 11, "status": "IN_STOCK", "updatedDate": "2024-12-19" },
    { "inventoryCode": "INV041", "productCode": "P041", "currentStock": 78, "status": "IN_STOCK", "updatedDate": "2024-12-14" },
    { "inventoryCode": "INV042", "productCode": "P042", "currentStock": 92, "status": "IN_STOCK", "updatedDate": "2024-12-17" },
    { "inventoryCode": "INV043", "productCode": "P043", "currentStock": 45, "status": "IN_STOCK", "updatedDate": "2024-12-20" },
    { "inventoryCode": "INV044", "productCode": "P044", "currentStock": 67, "status": "IN_STOCK", "updatedDate": "2024-12-15" },
    { "inventoryCode": "INV045", "productCode": "P045", "currentStock": 54, "status": "IN_STOCK", "updatedDate": "2024-12-18" },
    { "inventoryCode": "INV046", "productCode": "P046", "currentStock": 88, "status": "IN_STOCK", "updatedDate": "2024-12-12" },
    { "inventoryCode": "INV047", "productCode": "P047", "currentStock": 39, "status": "IN_STOCK", "updatedDate": "2024-12-21" },
    { "inventoryCode": "INV048", "productCode": "P048", "currentStock": 71, "status": "IN_STOCK", "updatedDate": "2024-12-16" },
    { "inventoryCode": "INV049", "productCode": "P049", "currentStock": 63, "status": "IN_STOCK", "updatedDate": "2024-12-19" },
    { "inventoryCode": "INV050", "productCode": "P050", "currentStock": 95, "status": "IN_STOCK", "updatedDate": "2024-12-13" },
    { "inventoryCode": "INV051", "productCode": "P051", "currentStock": 47, "status": "IN_STOCK", "updatedDate": "2024-12-22" },
    { "inventoryCode": "INV052", "productCode": "P052", "currentStock": 81, "status": "IN_STOCK", "updatedDate": "2024-12-17" },
    { "inventoryCode": "INV053", "productCode": "P053", "currentStock": 59, "status": "IN_STOCK", "updatedDate": "2024-12-20" },
    { "inventoryCode": "INV054", "productCode": "P054", "currentStock": 38, "status": "IN_STOCK", "updatedDate": "2024-12-15" },
    { "inventoryCode": "INV055", "productCode": "P055", "currentStock": 102, "status": "IN_STOCK", "updatedDate": "2024-12-18" },
    { "inventoryCode": "INV056", "productCode": "P056", "currentStock": 76, "status": "IN_STOCK", "updatedDate": "2024-12-14" },
    { "inventoryCode": "INV057", "productCode": "P057", "currentStock": 33, "status": "IN_STOCK", "updatedDate": "2024-12-21" },
    { "inventoryCode": "INV058", "productCode": "P058", "currentStock": 115, "status": "IN_STOCK", "updatedDate": "2024-12-11" },
    { "inventoryCode": "INV059", "productCode": "P059", "currentStock": 7, "status": "LOW_STOCK", "updatedDate": "2024-12-24" },
    { "inventoryCode": "INV060", "productCode": "P060", "currentStock": 84, "status": "IN_STOCK", "updatedDate": "2024-12-16" },
    { "inventoryCode": "INV061", "productCode": "P061", "currentStock": 62, "status": "IN_STOCK", "updatedDate": "2024-12-19" },
    { "inventoryCode": "INV062", "productCode": "P062", "currentStock": 89, "status": "IN_STOCK", "updatedDate": "2024-12-13" },
    { "inventoryCode": "INV063", "productCode": "P063", "currentStock": 44, "status": "IN_STOCK", "updatedDate": "2024-12-20" },
    { "inventoryCode": "INV064", "productCode": "P064", "currentStock": 28, "status": "IN_STOCK", "updatedDate": "2024-12-22" },
    { "inventoryCode": "INV065", "productCode": "P065", "currentStock": 35, "status": "IN_STOCK", "updatedDate": "2024-12-17" },
    { "inventoryCode": "INV066", "productCode": "P066", "currentStock": 41, "status": "IN_STOCK", "updatedDate": "2024-12-18" },
    { "inventoryCode": "INV067", "productCode": "P067", "currentStock": 77, "status": "IN_STOCK", "updatedDate": "2024-12-14" },
    { "inventoryCode": "INV068", "productCode": "P068", "currentStock": 58, "status": "IN_STOCK", "updatedDate": "2024-12-21" },
    { "inventoryCode": "INV069", "productCode": "P069", "currentStock": 31, "status": "IN_STOCK", "updatedDate": "2024-12-19" },
    { "inventoryCode": "INV070", "productCode": "P070", "currentStock": 19, "status": "IN_STOCK", "updatedDate": "2024-12-23" },
    { "inventoryCode": "INV071", "productCode": "P071", "currentStock": 66, "status": "IN_STOCK", "updatedDate": "2024-12-15" },
    { "inventoryCode": "INV072", "productCode": "P072", "currentStock": 73, "status": "IN_STOCK", "updatedDate": "2024-12-16" },
    { "inventoryCode": "INV073", "productCode": "P073", "currentStock": 48, "status": "IN_STOCK", "updatedDate": "2024-12-20" },
    { "inventoryCode": "INV074", "productCode": "P074", "currentStock": 95, "status": "IN_STOCK", "updatedDate": "2024-12-12" },
    { "inventoryCode": "INV075", "productCode": "P075", "currentStock": 81, "status": "IN_STOCK", "updatedDate": "2024-12-18" },
    { "inventoryCode": "INV076", "productCode": "P076", "currentStock": 53, "status": "IN_STOCK", "updatedDate": "2024-12-17" },
    { "inventoryCode": "INV077", "productCode": "P077", "currentStock": 104, "status": "IN_STOCK", "updatedDate": "2024-12-13" },
    { "inventoryCode": "INV078", "productCode": "P078", "currentStock": 39, "status": "IN_STOCK", "updatedDate": "2024-12-21" },
    { "inventoryCode": "INV079", "productCode": "P079", "currentStock": 46, "status": "IN_STOCK", "updatedDate": "2024-12-19" },
    { "inventoryCode": "INV080", "productCode": "P080", "currentStock": 70, "status": "IN_STOCK", "updatedDate": "2024-12-14" }
];

const orders = [
    { "orderCode": "ORD0001", "memberCode": "U0012", "shippingAddress": "서울시 강남구 테헤란로 123", "totalPrice": 1450000, "orderDate": "2023-06-15" },
    { "orderCode": "ORD0002", "memberCode": "U0034", "shippingAddress": "부산시 해운대구 해변로 456", "totalPrice": 2480000, "orderDate": "2023-11-22" },
    { "orderCode": "ORD0003", "memberCode": "U0078", "shippingAddress": "대구시 수성구 동대구로 789", "totalPrice": 125000, "orderDate": "2023-03-08" },
    { "orderCode": "ORD0004", "memberCode": "U0156", "shippingAddress": "인천시 남동구 인하로 234", "totalPrice": 1500000, "orderDate": "2023-07-19" },
    { "orderCode": "ORD0005", "memberCode": "U0203", "shippingAddress": "광주시 서구 상무대로 567", "totalPrice": 148000, "orderDate": "2023-12-05" },
    { "orderCode": "ORD0006", "memberCode": "U0089", "shippingAddress": "대전시 유성구 가정로 890", "totalPrice": 1180000, "orderDate": "2023-08-12" },
    { "orderCode": "ORD0007", "memberCode": "U0245", "shippingAddress": "울산시 남구 삼산로 345", "totalPrice": 2150000, "orderDate": "2023-11-28" },
    { "orderCode": "ORD0008", "memberCode": "U0127", "shippingAddress": "경기도 수원시 영통구 광교로 678", "totalPrice": 89000, "orderDate": "2023-04-22" },
    { "orderCode": "ORD0009", "memberCode": "U0067", "shippingAddress": "서울시 송파구 올림픽로 901", "totalPrice": 1420000, "orderDate": "2023-07-30" },
    { "orderCode": "ORD0010", "memberCode": "U0198", "shippingAddress": "경기도 성남시 분당구 판교역로 234", "totalPrice": 125000, "orderDate": "2023-12-14" },
    { "orderCode": "ORD0011", "memberCode": "U0312", "shippingAddress": "서울시 마포구 월드컵로 567", "totalPrice": 950000, "orderDate": "2024-06-18" },
    { "orderCode": "ORD0012", "memberCode": "U0045", "shippingAddress": "부산시 부산진구 부전로 890", "totalPrice": 1650000, "orderDate": "2024-11-25" },
    { "orderCode": "ORD0013", "memberCode": "U0134", "shippingAddress": "대구시 동구 동대구로 123", "totalPrice": 98000, "orderDate": "2024-03-09" },
    { "orderCode": "ORD0014", "memberCode": "U0289", "shippingAddress": "인천시 연수구 송도국제대로 456", "totalPrice": 890000, "orderDate": "2024-07-21" },
    { "orderCode": "ORD0015", "memberCode": "U0091", "shippingAddress": "광주시 북구 첨단과기로 789", "totalPrice": 1980000, "orderDate": "2024-12-03" },
    { "orderCode": "ORD0016", "memberCode": "U0187", "shippingAddress": "대전시 서구 둔산로 234", "totalPrice": 1350000, "orderDate": "2024-08-15" },
    { "orderCode": "ORD0017", "memberCode": "U0256", "shippingAddress": "울산시 중구 성남동로 567", "totalPrice": 112000, "orderDate": "2024-04-28" },
    { "orderCode": "ORD0018", "memberCode": "U0023", "shippingAddress": "경기도 고양시 일산동구 중앙로 890", "totalPrice": 980000, "orderDate": "2024-06-10" },
    { "orderCode": "ORD0019", "memberCode": "U0398", "shippingAddress": "서울시 강서구 공항대로 345", "totalPrice": 2250000, "orderDate": "2024-11-19" },
    { "orderCode": "ORD0020", "memberCode": "U0145", "shippingAddress": "경기도 용인시 수지구 죽전로 678", "totalPrice": 145000, "orderDate": "2024-09-07" },
    { "orderCode": "ORD0021", "memberCode": "U0211", "shippingAddress": "서울시 영등포구 여의도로 234", "totalPrice": 850000, "orderDate": "2023-06-22" },
    { "orderCode": "ORD0022", "memberCode": "U0078", "shippingAddress": "부산시 사하구 낙동대로 567", "totalPrice": 1850000, "orderDate": "2023-12-11" },
    { "orderCode": "ORD0023", "memberCode": "U0334", "shippingAddress": "대구시 북구 노원로 890", "totalPrice": 75000, "orderDate": "2023-03-17" },
    { "orderCode": "ORD0024", "memberCode": "U0156", "shippingAddress": "인천시 서구 청라대로 123", "totalPrice": 920000, "orderDate": "2023-07-25" },
    { "orderCode": "ORD0025", "memberCode": "U0401", "shippingAddress": "광주시 광산구 하남대로 456", "totalPrice": 1920000, "orderDate": "2023-11-30" },
    { "orderCode": "ORD0026", "memberCode": "U0112", "shippingAddress": "대전시 중구 중앙로 789", "totalPrice": 1050000, "orderDate": "2023-08-08" },
    { "orderCode": "ORD0027", "memberCode": "U0267", "shippingAddress": "울산시 북구 산업로 234", "totalPrice": 135000, "orderDate": "2023-04-19" },
    { "orderCode": "ORD0028", "memberCode": "U0423", "shippingAddress": "경기도 부천시 원미구 부일로 567", "totalPrice": 1100000, "orderDate": "2023-06-03" },
    { "orderCode": "ORD0029", "memberCode": "U0089", "shippingAddress": "서울시 동작구 사당로 890", "totalPrice": 1450000, "orderDate": "2023-07-14" },
    { "orderCode": "ORD0030", "memberCode": "U0345", "shippingAddress": "경기도 화성시 동탄대로 345", "totalPrice": 93000, "orderDate": "2023-12-27" },
    { "orderCode": "ORD0031", "memberCode": "U0198", "shippingAddress": "서울시 서초구 강남대로 678", "totalPrice": 550000, "orderDate": "2024-06-11" },
    { "orderCode": "ORD0032", "memberCode": "U0278", "shippingAddress": "부산시 동래구 중앙대로 901", "totalPrice": 2380000, "orderDate": "2024-11-17" },
    { "orderCode": "ORD0033", "memberCode": "U0134", "shippingAddress": "대구시 달서구 월배로 234", "totalPrice": 118000, "orderDate": "2024-03-23" },
    { "orderCode": "ORD0034", "memberCode": "U0456", "shippingAddress": "인천시 부평구 부평대로 567", "totalPrice": 800000, "orderDate": "2024-08-06" },
    { "orderCode": "ORD0035", "memberCode": "U0023", "shippingAddress": "광주시 남구 봉선로 890", "totalPrice": 1750000, "orderDate": "2024-12-19" },
    { "orderCode": "ORD0036", "memberCode": "U0367", "shippingAddress": "대전시 동구 대전로 123", "totalPrice": 1150000, "orderDate": "2024-07-28" },
    { "orderCode": "ORD0037", "memberCode": "U0091", "shippingAddress": "울산시 울주군 언양읍 중앙로 456", "totalPrice": 87000, "orderDate": "2024-05-05" },
    { "orderCode": "ORD0038", "memberCode": "U0445", "shippingAddress": "경기도 안양시 동안구 관평로 789", "totalPrice": 1250000, "orderDate": "2024-06-29" },
    { "orderCode": "ORD0039", "memberCode": "U0256", "shippingAddress": "서울시 용산구 한강대로 234", "totalPrice": 1580000, "orderDate": "2024-11-08" },
    { "orderCode": "ORD0040", "memberCode": "U0189", "shippingAddress": "경기도 의정부시 의정부로 567", "totalPrice": 95000, "orderDate": "2024-09-21" },
    { "orderCode": "ORD0041", "memberCode": "U0312", "shippingAddress": "서울시 광진구 능동로 890", "totalPrice": 1380000, "orderDate": "2023-06-28" },
    { "orderCode": "ORD0042", "memberCode": "U0067", "shippingAddress": "부산시 연제구 중앙대로 345", "totalPrice": 2120000, "orderDate": "2023-12-08" },
    { "orderCode": "ORD0043", "memberCode": "U0234", "shippingAddress": "대구시 중구 국채보상로 678", "totalPrice": 105000, "orderDate": "2023-04-14" },
    { "orderCode": "ORD0044", "memberCode": "U0489", "shippingAddress": "인천시 계양구 계산대로 901", "totalPrice": 680000, "orderDate": "2023-07-02" },
    { "orderCode": "ORD0045", "memberCode": "U0145", "shippingAddress": "광주시 동구 금남로 234", "totalPrice": 1890000, "orderDate": "2023-11-23" },
    { "orderCode": "ORD0046", "memberCode": "U0378", "shippingAddress": "대전시 대덕구 대덕대로 567", "totalPrice": 750000, "orderDate": "2023-08-19" },
    { "orderCode": "ORD0047", "memberCode": "U0423", "shippingAddress": "울산시 동구 봉수로 890", "totalPrice": 82000, "orderDate": "2023-05-07" },
    { "orderCode": "ORD0048", "memberCode": "U0056", "shippingAddress": "경기도 평택시 평택대로 123", "totalPrice": 1080000, "orderDate": "2023-06-19" },
    { "orderCode": "ORD0049", "memberCode": "U0201", "shippingAddress": "서울시 성북구 보문로 456", "totalPrice": 1320000, "orderDate": "2023-07-27" },
    { "orderCode": "ORD0050", "memberCode": "U0290", "shippingAddress": "경기도 남양주시 다산로 789", "totalPrice": 68000, "orderDate": "2023-12-16" },
    { "orderCode": "ORD0051", "memberCode": "U0134", "shippingAddress": "서울시 노원구 노원로 234", "totalPrice": 1640000, "orderDate": "2024-06-07" },
    { "orderCode": "ORD0052", "memberCode": "U0412", "shippingAddress": "부산시 금정구 중앙대로 567", "totalPrice": 2450000, "orderDate": "2024-11-14" },
    { "orderCode": "ORD0053", "memberCode": "U0078", "shippingAddress": "대구시 서구 국채보상로 890", "totalPrice": 112000, "orderDate": "2024-03-30" },
    { "orderCode": "ORD0054", "memberCode": "U0345", "shippingAddress": "인천시 동구 금곡대로 345", "totalPrice": 1560000, "orderDate": "2024-07-13" },
    { "orderCode": "ORD0055", "memberCode": "U0489", "shippingAddress": "광주시 남구 봉선로 678", "totalPrice": 1820000, "orderDate": "2024-12-26" },
    { "orderCode": "ORD0056", "memberCode": "U0267", "shippingAddress": "대전시 서구 만년로 901", "totalPrice": 1720000, "orderDate": "2024-08-21" },
    { "orderCode": "ORD0057", "memberCode": "U0156", "shippingAddress": "울산시 남구 삼산로 234", "totalPrice": 65000, "orderDate": "2024-04-09" },
    { "orderCode": "ORD0058", "memberCode": "U0234", "shippingAddress": "경기도 안산시 단원구 고잔로 567", "totalPrice": 2280000, "orderDate": "2024-06-23" },
    { "orderCode": "ORD0059", "memberCode": "U0091", "shippingAddress": "서울시 금천구 시흥대로 890", "totalPrice": 148000, "orderDate": "2024-11-06" },
    { "orderCode": "ORD0060", "memberCode": "U0378", "shippingAddress": "경기도 시흥시 정왕대로 123", "totalPrice": 78000, "orderDate": "2024-09-18" },
    { "orderCode": "ORD0061", "memberCode": "U0445", "shippingAddress": "서울시 관악구 관악로 456", "totalPrice": 125000, "orderDate": "2023-06-05" },
    { "orderCode": "ORD0062", "memberCode": "U0112", "shippingAddress": "부산시 강서구 공항대로 789", "totalPrice": 1650000, "orderDate": "2023-12-01" },
    { "orderCode": "ORD0063", "memberCode": "U0289", "shippingAddress": "대구시 남구 대명로 234", "totalPrice": 89000, "orderDate": "2023-03-24" },
    { "orderCode": "ORD0064", "memberCode": "U0023", "shippingAddress": "인천시 중구 신포로 567", "totalPrice": 890000, "orderDate": "2023-07-09" },
    { "orderCode": "ORD0065", "memberCode": "U0367", "shippingAddress": "광주시 서구 죽봉대로 890", "totalPrice": 2480000, "orderDate": "2023-11-15" },
    { "orderCode": "ORD0066", "memberCode": "U0198", "shippingAddress": "대전시 유성구 대학로 123", "totalPrice": 98000, "orderDate": "2023-08-26" },
    { "orderCode": "ORD0067", "memberCode": "U0456", "shippingAddress": "울산시 중구 학성로 456", "totalPrice": 1450000, "orderDate": "2023-05-13" },
    { "orderCode": "ORD0068", "memberCode": "U0089", "shippingAddress": "경기도 광명시 오리로 789", "totalPrice": 1180000, "orderDate": "2023-06-25" },
    { "orderCode": "ORD0069", "memberCode": "U0278", "shippingAddress": "서울시 종로구 종로 234", "totalPrice": 1920000, "orderDate": "2023-07-31" },
    { "orderCode": "ORD0070", "memberCode": "U0134", "shippingAddress": "경기도 파주시 문산읍 통일로 567", "totalPrice": 93000, "orderDate": "2023-12-22" },
    { "orderCode": "ORD0071", "memberCode": "U0412", "shippingAddress": "서울시 강동구 천호대로 890", "totalPrice": 850000, "orderDate": "2024-06-16" },
    { "orderCode": "ORD0072", "memberCode": "U0067", "shippingAddress": "부산시 수영구 광안해변로 345", "totalPrice": 1850000, "orderDate": "2024-11-21" },
    { "orderCode": "ORD0073", "memberCode": "U0234", "shippingAddress": "대구시 달성군 논공읍 논공로 678", "totalPrice": 75000, "orderDate": "2024-03-12" },
    { "orderCode": "ORD0074", "memberCode": "U0345", "shippingAddress": "인천시 강화군 강화읍 강화대로 901", "totalPrice": 920000, "orderDate": "2024-07-26" },
    { "orderCode": "ORD0075", "memberCode": "U0423", "shippingAddress": "광주시 북구 용봉로 234", "totalPrice": 1580000, "orderDate": "2024-12-09" },
    { "orderCode": "ORD0076", "memberCode": "U0156", "shippingAddress": "대전시 중구 중앙로 567", "totalPrice": 1050000, "orderDate": "2024-08-14" },
    { "orderCode": "ORD0077", "memberCode": "U0489", "shippingAddress": "울산시 울주군 웅촌면 웅촌로 890", "totalPrice": 87000, "orderDate": "2024-05-02" },
    { "orderCode": "ORD0078", "memberCode": "U0091", "shippingAddress": "경기도 구리시 경춘로 123", "totalPrice": 1100000, "orderDate": "2024-06-14" },
    { "orderCode": "ORD0079", "memberCode": "U0267", "shippingAddress": "서울시 중랑구 망우로 456", "totalPrice": 2150000, "orderDate": "2024-11-28" },
    { "orderCode": "ORD0080", "memberCode": "U0378", "shippingAddress": "경기도 양주시 부흥로 789", "totalPrice": 135000, "orderDate": "2024-09-10" },
    { "orderCode": "ORD0081", "memberCode": "U0201", "shippingAddress": "서울시 은평구 은평로 234", "totalPrice": 1420000, "orderDate": "2023-06-12" },
    { "orderCode": "ORD0082", "memberCode": "U0445", "shippingAddress": "부산시 사상구 가야대로 567", "totalPrice": 1750000, "orderDate": "2023-12-18" },
    { "orderCode": "ORD0083", "memberCode": "U0023", "shippingAddress": "대구시 수성구 수성로 890", "totalPrice": 118000, "orderDate": "2023-04-07" },
    { "orderCode": "ORD0084", "memberCode": "U0312", "shippingAddress": "인천시 옹진군 영흥면 영흥로 345", "totalPrice": 800000, "orderDate": "2023-07-22" },
    { "orderCode": "ORD0085", "memberCode": "U0089", "shippingAddress": "광주시 광산구 무진대로 678", "totalPrice": 2120000, "orderDate": "2023-11-29" },
    { "orderCode": "ORD0086", "memberCode": "U0456", "shippingAddress": "대전시 동구 세천로 901", "totalPrice": 1150000, "orderDate": "2023-08-05" },
    { "orderCode": "ORD0087", "memberCode": "U0134", "shippingAddress": "울산시 동구 방어진순환도로 234", "totalPrice": 105000, "orderDate": "2023-05-20" },
    { "orderCode": "ORD0088", "memberCode": "U0278", "shippingAddress": "경기도 여주시 세종로 567", "totalPrice": 1250000, "orderDate": "2023-06-30" },
    { "orderCode": "ORD0089", "memberCode": "U0412", "shippingAddress": "서울시 구로구 디지털로 890", "totalPrice": 1890000, "orderDate": "2023-07-18" },
    { "orderCode": "ORD0090", "memberCode": "U0367", "shippingAddress": "경기도 오산시 오산로 123", "totalPrice": 82000, "orderDate": "2023-12-30" },
    { "orderCode": "ORD0091", "memberCode": "U0245", "shippingAddress": "서울시 도봉구 도봉로 456", "totalPrice": 1640000, "orderDate": "2024-06-03" },
    { "orderCode": "ORD0092", "memberCode": "U0156", "shippingAddress": "부산시 영도구 태종로 789", "totalPrice": 2450000, "orderDate": "2024-11-10" },
    { "orderCode": "ORD0093", "memberCode": "U0489", "shippingAddress": "대구시 달서구 성서로 234", "totalPrice": 112000, "orderDate": "2024-03-19" },
    { "orderCode": "ORD0094", "memberCode": "U0091", "shippingAddress": "인천시 남동구 소래로 567", "totalPrice": 1560000, "orderDate": "2024-07-04" },
    { "orderCode": "ORD0095", "memberCode": "U0234", "shippingAddress": "광주시 동구 서석로 890", "totalPrice": 1720000, "orderDate": "2024-12-15" },
    { "orderCode": "ORD0096", "memberCode": "U0345", "shippingAddress": "대전시 서구 계룡로 345", "totalPrice": 1820000, "orderDate": "2024-08-28" },
    { "orderCode": "ORD0097", "memberCode": "U0067", "shippingAddress": "울산시 북구 진장유통로 678", "totalPrice": 68000, "orderDate": "2024-04-16" },
    { "orderCode": "ORD0098", "memberCode": "U0423", "shippingAddress": "경기도 이천시 부발읍 경충대로 901", "totalPrice": 2280000, "orderDate": "2024-06-28" },
    { "orderCode": "ORD0099", "memberCode": "U0378", "shippingAddress": "서울시 양천구 목동서로 234", "totalPrice": 148000, "orderDate": "2024-11-12" },
    { "orderCode": "ORD0100", "memberCode": "U0112", "shippingAddress": "경기도 김포시 김포한강로 567", "totalPrice": 95000, "orderDate": "2024-09-24" }];

const orderItems = [
    {
        "orderItemCode": "OI00001",
        "orderCode": "O0001",
        "productCode": "P0003",
        "quantity": 1,
        "priceAtPurchase": 1350000
    },
    {
        "orderItemCode": "OI00002",
        "orderCode": "O0001",
        "productCode": "P0045",
        "quantity": 2,
        "priceAtPurchase": 32000
    },
    {
        "orderItemCode": "OI00003",
        "orderCode": "O0002",
        "productCode": "P0021",
        "quantity": 1,
        "priceAtPurchase": 2150000
    },
    {
        "orderItemCode": "OI00004",
        "orderCode": "O0002",
        "productCode": "P0062",
        "quantity": 1,
        "priceAtPurchase": 180000
    },
    {
        "orderItemCode": "OI00005",
        "orderCode": "O0003",
        "productCode": "P0010",
        "quantity": 1,
        "priceAtPurchase": 980000
    },
    {
        "orderItemCode": "OI00006",
        "orderCode": "O0003",
        "productCode": "P0051",
        "quantity": 1,
        "priceAtPurchase": 75000
    },
    {
        "orderItemCode": "OI00007",
        "orderCode": "O0004",
        "productCode": "P0025",
        "quantity": 1,
        "priceAtPurchase": 2450000
    },
    {
        "orderItemCode": "OI00008",
        "orderCode": "O0005",
        "productCode": "P0007",
        "quantity": 2,
        "priceAtPurchase": 1120000
    },
    {
        "orderItemCode": "OI00009",
        "orderCode": "O0005",
        "productCode": "P0042",
        "quantity": 1,
        "priceAtPurchase": 45000
    },
    {
        "orderItemCode": "OI00010",
        "orderCode": "O0006",
        "productCode": "P0068",
        "quantity": 1,
        "priceAtPurchase": 210000
    },

    {
        "orderItemCode": "OI00011",
        "orderCode": "O0010",
        "productCode": "P0018",
        "quantity": 1,
        "priceAtPurchase": 1450000
    },
    {
        "orderItemCode": "OI00012",
        "orderCode": "O0010",
        "productCode": "P0055",
        "quantity": 2,
        "priceAtPurchase": 68000
    },

    {
        "orderItemCode": "OI00013",
        "orderCode": "O0025",
        "productCode": "P0029",
        "quantity": 1,
        "priceAtPurchase": 1980000
    },
    {
        "orderItemCode": "OI00014",
        "orderCode": "O0025",
        "productCode": "P0061",
        "quantity": 1,
        "priceAtPurchase": 120000
    },

    {
        "orderItemCode": "OI00015",
        "orderCode": "O0050",
        "productCode": "P0004",
        "quantity": 1,
        "priceAtPurchase": 890000
    },
    {
        "orderItemCode": "OI00016",
        "orderCode": "O0050",
        "productCode": "P0048",
        "quantity": 1,
        "priceAtPurchase": 29000
    },

    {
        "orderItemCode": "OI00017",
        "orderCode": "O0100",
        "productCode": "P0035",
        "quantity": 1,
        "priceAtPurchase": 2250000
    },

    {
        "orderItemCode": "OI00018",
        "orderCode": "O0150",
        "productCode": "P0012",
        "quantity": 1,
        "priceAtPurchase": 1380000
    },
    {
        "orderItemCode": "OI00019",
        "orderCode": "O0150",
        "productCode": "P0059",
        "quantity": 2,
        "priceAtPurchase": 54000
    },

    {
        "orderItemCode": "OI00020",
        "orderCode": "O0200",
        "productCode": "P0022",
        "quantity": 1,
        "priceAtPurchase": 2490000
    }
];

const products = [
    { "productCode": "P001", "productName": "Galaxy S24 Ultra", "brand": "Samsung", "price": 1450000, "image": "galaxy_s24_ultra.jpg", "categoryCode": "C01" },
    { "productCode": "P002", "productName": "iPhone 15 Pro Max", "brand": "Apple", "price": 1500000, "image": "iphone_15_pro_max.jpg", "categoryCode": "C01" },
    { "productCode": "P003", "productName": "Pixel 8 Pro", "brand": "Google", "price": 1180000, "image": "pixel_8_pro.jpg", "categoryCode": "C01" },
    { "productCode": "P004", "productName": "Galaxy Z Fold 5", "brand": "Samsung", "price": 1420000, "image": "galaxy_z_fold_5.jpg", "categoryCode": "C01" },
    { "productCode": "P005", "productName": "OnePlus 12", "brand": "OnePlus", "price": 950000, "image": "oneplus_12.jpg", "categoryCode": "C01" }
];


// [2] 기능 설계
// 제품 재고 검색 영역 : 제품 목록
// 재고 조회 함수 , 제품 출력함수(제품명,수량,상태) , 재고 수정 함수

// 제품 조회 함수 inventorySearch ] 매개변수 : x , 리턴값 : x , 
// 처리 : 
// (1) 사용자가 입력한 제품명을 가져온다.
// (2) products 장부에서 그 이름과 일치하는 데이터를 찾아 productCoude를 알아낸다.
// (3) 그 코드를 들고 inventories 장부로 가서 수량(currentStock)과 상태(status)를 찾는다.
// (4) 찾은 제품명 , 수량 , 상태를 화면에 출력한다.
// 실행조건 : 검색 버튼 클릭


// 출력 함수 printResult] 
// 매개변수 : name , stock , status
// 리턴값 : x(화면에 출력하고 끝)
// 처리 :
// (1) HTML에서 결과가 들어갈 자리를 찾는다. ex:id="result-box" 인 곳
// (2) 그 자리에 매개변수로 받은 name, stock, status를 넣는다.


// [3] 제품 영역 구현
// [3-1] 재고 조회 함수


function inventorySearch() {
    // (1) 사용자가 입력한 제품명을 가져온다.
    const inputName = document.querySelector(".pNameInput").value;

    // (2) products 장부에서 그 이름과 일치하는 데이터를 찾아 productCode를 알아낸다.
    let foundProduct = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].productName === inputName) {
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
        printResult(foundProduct.productName, foundInventory.currentStock, foundInventory.status);
    } else {
        alert("재고 정보가 없습니다.");
    }

} // inventorySearch() END



// [3-2] 출력 함수
// (4) 찾은 제품명 , 수량 , 상태를 화면에 출력한다.
printResult();
function printResult() {
    const tbody = document.querySelector("#pdt_list_body");
    let html = ``;
    for (let index = 0; index <= inventories.length - 1; index++) {
        let inv = inventories[index];


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


        html += `         <tr>
            <td>${proname}</td>
            <td>${inv.currentStock}</td>
            <td>${statuskr}</td>
            <td><button onclick="stockUpdate('${inv.inventoryCode}')">수정</button></td>
        </tr>`;
    }
    tbody.innerHTML = html;

}



// [3-3] 수정 함수
function stockUpdate(inventoryCode) {
    for (let index = 0; index <= inventories.length - 1; index++) {
        if (inventoryCode == inventories[index].inventoryCode) {
            const newInventory = prompt("선택한 제품의 재고 수량을 입력하세요.(숫자만)");
            inventories[index].currentStock = newInventory;
            printResult();
            break;
        }

        // 재고량에 따라 상태(품절여부)도 바꾸고 싶다 ㅠㅠ
        if(inventories[index].currentStock == 0){
            inventories[index].status = "OUT_OF_STOCK";}
            else if(inventories[index].currentStock <= 5)
                 {inventories[index].status="LOW_STOCK";}

    
}
}



/*****************************************************************/
/* 하단 영역


// [1] 기능 설계
// 판매 제품 검색 영역 : 제품 목록 
// 판매 중인 제품 조회 함수 , 제품 출력함수(이미지,제품명,카테고리,브랜드,가격,수량,관리)
// 판매 수량 수정 함수

// 판매 중인 제품 조회 함수 productSearch ] 매개변수 : x , 리턴값 : x
// 처리 : 
// (1) 사용자가 입력한 제품명,카테고리명,브랜드명,최소 가격 입력값과 최대 가격 입력값을 가져온다.
// (2) products 장부에서 제품명과 일치하는 데이터를 찾아 productCode를 알아낸다.
    categories 장부에서 카테고리명과 일치하는 데이터를 찾아 categoryCode를 알아낸다.
    그 코드를 들고 product 장부로 가서 product()



// 제품 조회 함수 inventorySearch ] 매개변수 : x , 리턴값 : x , 
// 처리 : 
// (1) 사용자가 입력한 제품명을 가져온다.
// (2) products 장부에서 그 이름과 일치하는 데이터를 찾아 productCoude를 알아낸다.
// (3) 그 코드를 들고 inventories 장부로 가서 수량(currentStock)과 상태(status)를 찾는다.
// (4) 찾은 제품명 , 수량 , 상태를 화면에 출력한다.
// 실행조건 : 검색 버튼 클릭*/