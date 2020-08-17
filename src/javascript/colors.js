const color = document.querySelector(".colors ul");
const buttonMore = document.querySelector(".see");
const seeMore = document.querySelector(".see-colors");

color.addEventListener("click", (event) => {
    if (event.target.tagName === "INPUT") {
      const value = event.target.name;
  
      if (colors.includes(value)) {
        colors = colors.filter((color) => color !== value);
  
        if (
          colors.length <= 0 &&
          sizesFilter.length <= 0 &&
          pricess.length <= 0
        ) {
          renderProducts(products);
        } else {
          filterProducts();
        }
      } else {
        colors.push(value);
        filterProducts();
      }
    }
  });

buttonMore.addEventListener("click", () => {
  if (seeMore.style.display === "block"){
        seeMore.style.display = "none"
  } else{
    seeMore.style.display = "block"
  }
})