

const inputStart = document.querySelector('#validation-input');
inputStart.style.border = '3px solid #bdbdbd';

inputStart.onblur = function () {
    if (inputStart.getAttribute('data-length') <= inputStart.value.length) {
        inputStart.style.borderColor = '#4caf50';
    }
}



// // document.getElementById("validation-input").onblur = function() {
// //   console.log(this.value.length);
// //   if (this.getAttribute('data-length') > this.value.length) {
// //     this.classList.remove('valid');
// //     this.classList.add('invalid');
// //   } else {
// //     this.classList.remove('invalid');
// //     this.classList.add('valid');
// //   }
// // };
// // #validation - input {
// //   border: 3px solid #bdbdbd;
// // }

// // #validation-input.valid {
// //   border-color: #4caf50;
// // }

// // #validation-input.invalid {
// //   border-color: #f44336;
// // }
