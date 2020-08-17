const sizes = document.querySelector(".sizes");
const sizesp = sizes.querySelectorAll("p");

sizes.addEventListener("click", (event) => {
  if (event.target.tagName === "P") {
    const value = event.target.textContent;

    if (sizesFilter.includes(value)) {
      sizesFilter = sizesFilter.filter((size) => size !== value);
      if (sizesFilter.length <= 0 && colors.length <= 0) {
        renderProducts(products);
      } else {
        filterProducts();
      }
    } else {
      sizesFilter.push(value);
      filterProducts();
    }
  }
});

for (let size of sizes) {
  size.addEventListener("click", function () {
    const atributo = size.getAttribute("class");

    if (atributo === "border_off") {
      size.classList.remove("border_off");
      size.classList.add("border_on");
    }
    if (atributo === "border_on") {
      size.classList.remove("border_on");
      size.classList.add("border_off");
    }
  });
}