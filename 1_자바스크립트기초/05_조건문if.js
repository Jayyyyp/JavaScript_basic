// Math.floor(자료)는 내림처리
var randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber);
console.log(`당신의 나이는 ${randomNumber}세 입니다.`);

if(randomNumber > 10){
    console.log("성인입니다. 주류 구매가 가능합니다.");
}else if(randomNumber >= 17){
    console.log("고딩입니다.")
}else if(randomNumber >= 14){
    console.log("중딩입니다.");
}else if(randomNumber >= 8){
    console.log("초딩입니다.");
}else{
    console.log("미취학 아동입니다.");
}