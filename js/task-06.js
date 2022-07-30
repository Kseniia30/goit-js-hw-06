

let inputStart = document.querySelector('#validation-input');

let inputLength = inputStart.dataset.length;

function addValid() {
    inputStart.classList.add('valid');
    inputStart.classList.remove('invalid');
}
function addInvalid() {
    inputStart.classList.add('invalid');
    inputStart.classList.remove('valid');
}

inputStart.addEventListener('change', e => {
    const currentValue = e.target.value;

    if (currentValue.length === +inputLength) {
    addValid()
    }
    else {
    addInvalid()
    }
});