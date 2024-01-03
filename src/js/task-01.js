const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);
[...list.children].forEach((item) => {
  console.log(item.firstElementChild.textContent);
  console.log(item.lastElementChild.children.length);
});
