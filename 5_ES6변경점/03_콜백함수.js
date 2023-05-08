function showEvenNumber(n){
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0) console.log(i);
    }
}

function showOddNumber(n){
    for(let i = 1; i <= n; i++){
        if(i % 2 === 1) console.log(i);
    }
}

// 1차 개선(짝수 홀수 여부까지 지정 가능)

function showOddOrEvenNumber(n, delimeter){
    for(let i = 1; i <= n; i++){
        if(i % 2 === delimeter) console.log(i);
    }
}

showOddOrEvenNumber(10, 1);
console.log("--------");

// 1부터 n까지 m의 배수 숫자만 출력하게 세팅하기
function showMultipleNumber(n, m){
    for(let i = 1; i <= n; i++){
        if(i % m === 0) console.log(i);
    }
}

// 콜백 형식으로 전환
function showNumber(n, code){
    for(let i = 1; i <= n; i++){
        if(code(i)){
            console.log(i);
        }
    }
}
const callback = function(n) {return n % 3 === 0};
console.log(callback(5));