const userNames = ['김철수', '강감찬', '박영희'];

// 구조분해할당에 의한 분할 저장
const[kim, kang, park] = userNames;

console.log(`kim : ${kim}, kang : ${kang}, park : ${kang}`);

// 변수 값 교환하기
let first = 10;
let second = 20;

console.log(`교환 전 : first = ${first}, second = ${second}`);
[first, second] = [second, first];
console.log(`교환 후 : first = ${first}, second = ${second}`);

// 앞 2개는 변수에 각각 넣고, 나머지는 배열로 빼기
const numbers = [1, 3, 5, 7, 9, 11];
const[one, three, ...others] = numbers;

console.log(`one : ${one}, three : ${three},
 others : ${others}`);

 // 스프레드를 이용한 배열 확장
 console.log("===========================");
 const foods = ['돈까스', '감자탕', '내장탕', '보쌈'];

 const newFoods = [foods, '초밥', '햄버거'];
 console.log(`추가 확인 : ${newFoods[0]}, 
 newfoods[0]의 길이 : ${newFoods.length}`);
console.log("=====================");
 //newFoods[0] = foods

 // 일반 확장을 하려고 하는 경우, 첫 째로 이중배열 처리가 되고,
 // 두 번째로 얕은 복사가 일어나는 문제가 있다.
 foods[0] = '크로켓';
console.log(`foods = ${foods}, 
newFoods = ${newFoods}, 길이 : ${newFoods.length}`);
console.log("=====================");

// 깊은 복사를 이용해 배열 확장 및 깊은 복사 처리가 가능하다.
const advFoods = [...foods, '초밥', '햄버거'];
console.log(`advFoods의 이중배열 여부 : ${advFoods}
advFoods[0]의 길이 : ${advFoods.length}`);
console.log("=====================");

// 스프레드 문법이 적용된 복사는 깊은 복사이다.
foods[1] = '치킨마요덮밥';
console.log(`foods : ${foods}, advFoods : ${advFoods}`);