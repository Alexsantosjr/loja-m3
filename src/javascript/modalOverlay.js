const modalOverlay = document.querySelector(".modal-overlay")
const buttonFilter = document.querySelector(".button-filter")
const modalContent = document.querySelector(".modal-content")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close-modal")
const containerProducts = document.querySelector(".flex")
const removeColors = document.querySelector(".remove-modal")
const selectColors = document.querySelector(".remove-colors")
const addColors = document.querySelector(".add")
const removeX = document.querySelector(".remove")
const reSizes = document.querySelector(".remove-sizes")
const removeSize = document.querySelector(".modal-choose")
const removebntSize = document.querySelector(".sizes-remove")
const removePrice = document.querySelector(".btnremove-prices ")
const addbtnSize = document.querySelector(".sizes-add")
const rePrice = document.querySelector(".remove-prices")
const addbtnPrice = document.querySelector(".prices-add")
const removebtnPrice = document.querySelector(".prices-remove")


buttonFilter.addEventListener("click", function () {
    modalOverlay.classList.add("active")
})

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
})

buttonFilter.addEventListener("click", function () {
    modalContent.classList.add("active")
})

document.querySelector(".close-modal").addEventListener("click", function () {
    modalContent.classList.remove("active")
})

document.querySelector(".modal").style.display = "none";

buttonFilter.addEventListener("click", function () {
    if (modal.style.display === "none") {
        modal.style.display = "block"
    } else {
        modal.style.display = "none"
    }
})

closeModal.addEventListener("click", function () {
    if (modal.style.display === "block") {
        modal.style.display = "none"
    } else {
        modal.style.display = "block"
    }
})

buttonFilter.addEventListener("click", function () {
    if (containerProducts.style.display === "none") {
        containerProducts.style.display = "block"
    } else {
        containerProducts.style.display = "none"
    }
})

closeModal.addEventListener("click", function(){
    if (containerProducts.style.display === "none"){
      containerProducts.style.display = "block"
  } else{
  containerProducts.style.display = "none"
    }
  })

  removeColors.addEventListener("click", function() {
    if (selectColors.style.display === "block"){
      selectColors.style.display = "none"
    } else{
      selectColors.style.display = "block"
    }
  })
  
  removeColors.addEventListener("click", function() {
    if (removeX.style.display === "block"){
      removeX.style.display = "none"
    } else{
      removeX.style.display = "block"
    }
  })
  
  removeColors.addEventListener("click", function(){
    if (addColors.style.display === "none"){
      addColors.style.display = "block"
    } else{
      addColors.style.display = "none"
    }
  })
  
  reSizes.addEventListener("click", function(){
    if (removeSize.style.display === "block"){
      removeSize.style.display = "none"
    } else{
      removeSize.style.display = "block"
    }
  })
  
  reSizes.addEventListener("click", function(){
    if (removebntSize.style.display === "block"){
      removebntSize.style.display = "none"
    } else{
      removebntSize.style.display = "block"
    }
  })
  
  reSizes.addEventListener("click", function(){
    if (addbtnSize.style.display === "none"){
      addbtnSize.style.display = "block"
    } else{
      addbtnSize.style.display = "none"
    }
  })

  removePrice.addEventListener("click", function(){
    if (rePrice.style.display === "block"){
      rePrice.style.display = "none"
    } else{
      rePrice.style.display = "block"
    }
  })
  
  removePrice.addEventListener("click", function(){
    if(removebtnPrice.style.display === "block"){
      removebtnPrice.style.display = "none"
    } else{
      removebtnPrice.style.display = "block"
    }
  })
  
  removePrice.addEventListener("click", function(){
    if(addbtnPrice.style.display === "none"){
      addbtnPrice.style.display = "block"
    } else{
      addbtnPrice.style.display = "none"
    }
  })