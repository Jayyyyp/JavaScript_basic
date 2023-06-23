// async function loadMovieList(){
//     const response = await fetch("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230617");
//     const jsonData = await response.json();

//     console.log(jsonData);
// }

function loadMovieList(){
    fetch("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230617")
    .then((response) => response.json)
    .then((result) => console.log(result));
}