var total = 0;

// 1~100까지 중 3의 배수만 더합 총합을 continue를 활용해 작성하기

for(var i = 1; i <= 100; i++){
    if(i % 3 == 0){
        total += i;
    }else{
        continue;
    }
}
console.log(total)