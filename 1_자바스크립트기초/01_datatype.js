// ES5 시절 문법
// var sentence = '<ul>/n/t<li>/n/t/t<a>add</a>'
//var sentence = '<ul>/n/t<li>/n/t/t<a>add</a>'
//console.log(sentence);

// ES6의 문자열 리터럴(`)
let sentence = `
<ul>
    <li>
        <a>aaaa</a>
    </li>
</ul>
`;

//console.log(sentence);

// ES5 식으로 문자 사이에 변수 끼워넣기
var month = 5;
var day = 5;
var anniversary = '어린이날';

/*var message = month + '월 ' + day + '일은 ' + anniversary + '입니다.';
console.log(message)*/

// ES6 식 문자 넣기
let message = `${month}월 ${day}일은 ${anniversary}입니다.`;
// console.log(message);

// 논리 자료형
var flag = false;
console.error(typeof flag);

// 객체 자료형
var lulu ={
    name : '룰루',
    age : 4,
    kind : '스코티쉬폴드',
};

console.log(lulu)