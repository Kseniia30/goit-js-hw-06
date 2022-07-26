const categories = document.querySelectorAll("li.item");
const numberOfCategories = categories.length;
console.log("Number of categories:", numberOfCategories);

const titles = document.querySelectorAll("h2");
for (const title of titles) {
    console.log("Category:", title.textContent);    
}
for (const category of categories) {
        const children = category.lastElementChild
        const grandChildren = children.children;
        console.log("Elements:", grandChildren.length);
    }
