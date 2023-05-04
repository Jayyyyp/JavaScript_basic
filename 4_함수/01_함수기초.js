// 함수 정의하기(실행과는 별개)

function greet (name){
    console.log(`${name}님 안녕하세요~`);
    console.log(`오늘도 공부 열심히 하세요!`);
}

function makeFood(sauce){
    console.log(`면을 삶습니다.`);
    console.log(`${sauce}소스를 넣고 면수와 볶습니다.`);
    console.log(`${sauce} 스파게티 완성!`);
}

// 함수 호출
greet(`재현`);
makeFood(`미트`);

// 원 넓이 구하는 함수 정의하기
// 함수 명은 calcCircle, 반지름으로 변수 r을 요구
// 원주율 (3.14) * 반지름의 제곱 = 원의 넓이
// 호출 위치로 리턴

function calcCircle(halfRange){
    return (halfRange ** 2) * 3.14;
}
console.log(calcCircle(5));