var x = '전역변수 x'; // 코드의 모든 부분의 전역 스코프에서 참조 가능

function outer(x){
    var y = "outer 지역변수 y";
    console.log(x); // outer x
    console.log(y); // outer y
    // console.log(z); // 조회 불가능

    function inner(){
        var z = "inner 지역변수 z";
        console.log(x); // outer x
        console.log(y); // outer y
        console.log(z); // outer z
    }
    inner();
}
outer('outer 지역변수 x');
console.log(x); // 전역변수 x 출력
// console.log(y); // 조회 불가능
// console.log(z); // 조회 불가능

