async function loadPersonList(){
    const response = await fetch("http://localhost:8080/resttest/person-list");

    const jsonArray = await response.json();

        console.log(jsonArray);
        console.log("======================");
        for(jsonData of jsonArray){
            console.log(jsonData.id);
            console.log(jsonData.name);
            console.log(jsonData.age);
        }

        const $personInfo = document.getElementById("personInfo");
        let str = "";

        for(jsonData of jsonArray){
            str += `번호 : ${jsonData.id}, 이름 : ${jsonData.name}, 나이 : ${jsonData.age}`;    
        }
        console.log(str);
        $personInfo.innerHTML = str;
}
let $button = document.getElementById("getPersonList");
$button.addEventListener("click", loadPersonList);