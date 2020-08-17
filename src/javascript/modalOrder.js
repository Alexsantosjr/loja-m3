const modalOverlayOrder = document.querySelector(".modal-overlay-order")
const buttonOrder = document.querySelector(".button-order")
const modalContentOrder = document.querySelector(".modal-content-order")
const modalOrder = document.querySelector(".modal-order")
const allFilter = document.querySelector(".remove-buttons")
const displayFilter = document.querySelector(".remove-display")
const closeModalOrder = document.querySelector(".close-modal-order")
const buttonApply = document.querySelector(".apply")


buttonOrder.addEventListener("click", function () {
    modalOverlayOrder.classList.add("active")
})

document.querySelector(".close-modal-order").addEventListener("click", function () {
    modalOverlayOrder.classList.remove("active")
})

buttonOrder.addEventListener("click", function () {
    modalContentOrder.classList.add("active")
})

document.querySelector(".close-modal-order").addEventListener("click", function () {
    modalContentOrder.classList.remove("active")
})

document.querySelector(".modal").style.display = "none";

document.querySelector(".modal-content-order").style.display = "none";



buttonOrder.addEventListener("click", function () {
    if (modalContentOrder.style.display === "block") {
        modalContentOrder.style.display = "none"
    } else {
        modalContentOrder.style.display = "block"
    }
})

closeModalOrder.addEventListener("click", function () {
    if (modalContentOrder.style.display === "block") {
        modalContentOrder.style.display = "none"
    } else {
        modalContentOrder.style.display = "block"
    }
})

closeModalOrder.addEventListener("click", function () {
    if (modal.style.display === "block") {
        modal.style.display = "none"
    } else {
        modal.style.display = "block"
    }
})



buttonOrder.addEventListener("click", function () {
    if (containerProducts.style.display === "none") {
        containerProducts.style.display = "block"
    } else {
        containerProducts.style.display = "none"
    }
})


closeModalOrder.addEventListener("click", function () {
    if (containerProducts.style.display === "none") {
        containerProducts.style.display = "block"
    } else {
        containerProducts.style.display = "none"
    }
})

allFilter.addEventListener("click", function(){
    if(displayFilter.style.display === "block")
    {
      buttonApply.style.display = "none"
    }
  })
  
  allFilter.addEventListener("click", function(){
    if(displayFilter.style.display === "none")
    {
      buttonApply.style.display = "flex"
    }
  })
  