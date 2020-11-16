var result = document.querySelector('#res');
console.log(result);
const btnClick = document.querySelectorAll('.btn');
console.log(btnClick);

var initCount = "0"
result.innerHTML = `Zero Number: ${initCount}`;
result.style.color = "Black";
result.style.fontSize = "20px";

btnClick.forEach(element => {
    element.addEventListener("click", function() {
        var btnAction = element.value;
        console.log(btnAction);

        if (btnAction == "decrease") {
            var finalResult =  parseFloat(initCount) - 1;
            result.innerHTML = finalResult.toString();
            initCount = finalResult; 
        }
        else if (btnAction == "reset") {
            initCount = "0";
            result.innerHTML = initCount;
        }
        else{
            var finalResult =  parseFloat(initCount) + 1;
            result.innerHTML = finalResult.toString();
            initCount = finalResult;
        }

        if (parseFloat(initCount) > 0) {
            result.style.color = "Green";
            result.innerHTML = `Positive Number: ${initCount}`;
            
        }
        else if (parseFloat(initCount) < 0){
            result.style.color = "Red";
            result.innerHTML = `Negetive Number: ${initCount}`;
        }
        else{
            result.style.color = "Black";
            result.innerHTML = `Zero Number: ${initCount}`;
        }
        
    });
});