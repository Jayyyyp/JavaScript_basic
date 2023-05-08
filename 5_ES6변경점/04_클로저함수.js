// 자바스크립트의 함수는 함수를 리턴할 수 있다
function calculator(n1, n2){
    function add(){
        return n1 + n2;
    }
    return add;
}

const closure = calculator(5,6);
console.log(typeof closure);
console.log(closure);

const n = closure();
console.log(`closure의 결과 : ${n}`);

// 즉시 실행 함수(일회성 호출)
// 함수를 선언하고, 선언부 뒤에 (); 를 추가로 붙이면 그 함수는
// 선언과 동시에 실행까지 가능
const a = (() => {
    console.log("즉시 실행 구문이 붙었군요!");
})();

// 리턴자료가 없었기 때문에, start 변수에 저장받은 자료가 없음
// a();