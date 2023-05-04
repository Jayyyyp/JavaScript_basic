// 1. 변수의 중복선언 허용
// var x = 10;
// var x = '김철수';

// var를 대신하는 es6의 let
let x = 10;
// let x = '김철수';

console.log(`x : ${x}`); // 선언된 이후, 활용은 같다

// 2. 블록레벨 스코프 지원 x
// var i = '안녕';
let i = '안녕'; // for문 바깥

// for(var i = 0; i < 3; i++){
    for(let i = 0; i< 3; i ++){ // for문 안
    console.log(`for문 도는 도중 i : ${i}`);
}
console.log(`for문 끝나고 i : ${i}`);

// 3. 변수 호이스팅 : 선언문만 맨 위에 있는 것으로 취급하는 것
z = 100;

console.log(z);

// var z;
// let z; // 선언되기 전에는 z를 사용할 수 없다라고 오류가 나옴