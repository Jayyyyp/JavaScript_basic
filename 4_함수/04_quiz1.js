/*
    n의 약수의 개수를 구하기
    1. 정수 n을 전달받아 n의 약수들을 출력하고
        약수의 개수를 리턴하는 함수 clacDivisor를 정의하기
    2. 약수의 출력은 함수 내부에서 이뤄져야 한다.
*/
function calcDivisor(n){
        var divisor = []; // 배열 선언
        for(var i = 1; i <= n; i++){ // i가 1~n의 값까지 1씩 증가하는 반복문
        if(n % i === 0){ // 만약, n/i가 0이라면,
            divisor.push(i); // divisor 배열에 i값을 push한다.
        } // for
    } // function calcDivisor
    console.log(`${n}의 약수 : ${divisor}`); // divisor의 배열값을 출력하고, 
    // console.log(`${n}의 약수의 개수 : ${divisor.length}`);
    return divisor.length; // 약수의 개수를 리턴
}

console.log(calcDivisor(5));
