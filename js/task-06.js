

let inputStart = document.querySelector('#validation-input');

let inputLength = inputStart.dataset.length;

function addClass(right, wrong) {
    inputStart.classList.add(right);
    inputStart.classList.remove(wrong);
}

inputStart.addEventListener('change', e => {
    const currentValue = e.target.value;

    if (currentValue.length === +inputLength) {
    addClass('valid', "invalid")
    }
    else {
    addClass('invalid', 'valid')
    }
});