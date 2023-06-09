// 화살표 함수로 고치기
// function multi(n1, n2){
//     return n1 * n2;
// }

// 화살표 함수 1
const multi = (n1, n2) => n1 * n2 ;

// 화살표 함수 2
// const multi = (n1, n2) => {
//     return n1 * n2} ;

const r1 = multi(10, 3);
console.log(`multi 함수의 결과 : ${r1}`);

// 아래 함수 화살표 함수로 고치기
// function sayHello(){
//     console.log('안녕하세요');
// }

// 화살표 함수 1
const sayHello = () => console.log('안녕하세요');

// 화살표 함수 2
// const sayHello = () => {
//     console.log('안녕하세요')};

sayHello();

// 객체 내부에서 메서드로 사용되는 화살표 함수
const kim = {
    name : '김자스',
    age : 25,
    greeting : sayHello, // 상단에 이미 선언된 sayHello 입력
    study : () => console.log("빡공갑니다"),
    };
    kim.study();

    // 정수 1개를 전달하면 해당 정수의 제곱을 리턴하는
    // 함수 pow 를 화살표 함수로 작성하기

    const pow = (n) => n * n;

    console.log(pow(5));
