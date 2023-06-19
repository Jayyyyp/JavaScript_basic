let str = "";
        const addTag = () =>{
            str += "<h1>새로운내용</h1>";
            const $container = document.getElementById("container");
            $container.innerHTML = str; 
        }

        const $oneTimBtn = document.getElementById("oneTimeBtn");
        $oneTimBtn.addEventListener("click", addTag);