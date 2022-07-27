
const inputStart = document.querySelector('#validation-input');
console.log(inputStart.classList);
console.log(inputStart.dataset.length);


inputStart.onblur = function() {
    console.log(inputStart.value.length);
    
    if (inputStart.value.length > inputStart.dataset.length) {
        inputStart.classList.remove("valid");
        inputStart.classList.add("invalid");
    }
    else if (inputStart.value.length <= inputStart.dataset.length) {
        inputStart.classList.remove("invalid");
        inputStart.classList.add("valid");
    }
}
