const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listTwo = document.querySelector("#ingredients");

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

listTwo.innerHTML = list;
