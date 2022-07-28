const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listTwo = document.querySelector("#ingredients");

for (const ingridient of ingredients) {
    const tagName = document.createElement("li");

    tagName.textContent = ingridient;
    tagName.classList.add("item")
    listTwo.append(tagName)

    console.log(tagName);
}

