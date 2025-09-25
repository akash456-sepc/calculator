let input = document.querySelector(".inputbox");

let btn = document.querySelectorAll(".button");

let string = "";

btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == 'x') {
            string += '*';
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

window.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        string = eval(string);
        input.value = string;
    }

    else if(e.key === "Escape") {
        string = "";
        input.value = string;
    }

    else if (e.key === "Backspace") {
        string = string.slice(0, string.length-1);
        input.value = string;
    }
    
    else {
        string += e.key;
        input.value = string;
    }
})