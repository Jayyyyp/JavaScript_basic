// 객체 리터럴(값)

var cat = {
    // 프로퍼티 작성
    'name' : '룰루',
    age : 3,
    hobbies : ['낚시 놀이', '간식 먹기', '잠 자기'],
    kind : '스코티시폴드', // 마지막 요소에도 , 붙이기(언제 추가될지 모르니까)
};

var watermonitor = {
    name : '뚜뚜',
    age : 5,
    hobbies : ['산책하기', '수영하기'],
    kind : '물왕 도마뱀',
};

console.log(`객체 1 타입 : ${typeof cat}, 객체 2 타입 : ${typeof watermonitor}`);
// 저장된 데이터 참조하기

console.log(cat.name);
console.log(watermonitor.age);
console.log(watermonitor.hobbies);

console.log(cat.hobbies[1]);

cat.hobbies.push("꾹꾹이 하기");
console.log(cat.hobbies);

// 프로퍼티 값 수정하기
cat.age = 1;
console.log(cat['age']); // 객체명['키 값'] 으로도 조회 가능

// 없던 프로퍼티(키, 밸류값 쌍) 추가하기
cat.owner = '박재현';
watermonitor.owner = '박해림';
console.log(cat);

// 프로퍼티 삭제
delete cat.owner;
console.log(cat);

// 프로퍼티의 유무 확인
// key값을 반드시 문자열로 제시해야 함
var ageFlag = 'age' in cat; // cat 객체 내부에 age 키 값이 존재하는지??
console.log(ageFlag);

// master라는 프로퍼티가 없을 때 추가하도록 처리
if(!('master' in cat)){
    cat['master'] = '룰루 주인';
}
console.log(cat);
console.log("==============================");

// 객체를 순회하는 반복문
// key를 반복해서 출력함

for(var k in watermonitor){
    console.log(`watermonitor의 키 값 : ${k},
     매칭된 벨류 값 : ${watermonitor[k]}`);
}

// 객체의 중첩
var items = {
    store : '착한 가게',
    productList : [
        {
            name : '초코과자',
            price : 3000,
            count : 12,
        },
        {
            name : '딸기잼쿠키',
            price : 1500,
            count : 20,
        },
        {
            name : '감자칩',
            price : 2500,
            count : 5,
        },
    ]
}
console.log(items);