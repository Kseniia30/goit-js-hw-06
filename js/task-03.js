const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listThree = document.querySelector("ul.gallery");

listThree.style.display = "flex";
listThree.style.flexWrap = "wrap";
listThree.style.listStyle = "none";


images.forEach(elem => {
  listThree.insertAdjacentHTML("beforeend", `<li><img src="${elem.url}" alt="${elem.alt}"></li>`)
})

const items = listThree.querySelectorAll('li')

for (const item of items) {
  item.style.marginBottom = "30px";
    }

console.log(listThree);
    
