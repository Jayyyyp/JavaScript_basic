// 1 ~ 100 까지 홀수만 더한 총 합
var total = 0;

var n = 1; // 바퀴 수를 제어하는 변수

while(n <= 100){
    if(n % 2 === 1){
        total += n;
    }
    n++;
}
console.log(`1~100까지의 홀수의 총 합 : ${total}`);