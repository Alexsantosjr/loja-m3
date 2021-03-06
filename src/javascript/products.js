const products = [
    {
        id: "1",
        image: "/images/img_2.png",
        tittle: "Camiseta Mescla",
        price: 50,
        description: "Até 3x de R$9,33",
        color: "cinza",
        size: "P",
        recent: 2
    },
    {
        id: "2",
        image: "/images/img_3.png",
        tittle: "Saia em Couro",
        price: 398,
        description: "Até 3x de R$30,00",
        color: "laranja",
        size: "M",
        recent: 4
    },
    {
        id: "3",
        image: "/images/img_4.png",
        tittle: "Cardigan Tigre",
        price: 398,
        description: "Até 3x de R$30,00",
        color: "branco",
        size: "G",
        recent: 3
    },
    {
        id: "4",
        image: "/images/img_5.png",
        tittle: "Cardigan OFF WHITE",
        price: 99,
        description: "Até 3x de R$33,00",
        color: "branco",
        size: "M",
        recent: 4
    },
    {
        id: "5",
        image: "/images/img_6.png",
        tittle: "Body Leopardo",
        price: 129,
        description: "Até 3x de R$43,43",
        color: "amarelo",
        size: "G",
        recent: 6
    },
    {
        id: "6",
        image: "/images/img_7.png",
        tittle: "Casaco Pelos",
        price: 398,
        description: "Até 3x de R$30,00",
        color: "rosa",
        size: "GG",
        recent: 5
    },
    {
        id: "7",
        image: "/images/img_8.png",
        tittle: "Cropped Stripess",
        price: 120,
        description: "Até 3x de R$40,00",
        color: "azul",
        size: "M",
        recent: 1
    },
    {
        id: "8",
        image: "/images/img_9.png",
        tittle: "Camiseta",
        price: 398,
        description: "Até 3x de R$30,00",
        color: "preto",
        size: "G",
        recent: 8
    },
    {
        id: "9",
        image: "/images/img_10.png",
        tittle: "Pochete Clutch",
        price: 99,
        description: "Até 3x de R$33,00",
        color: "branco",
        size: "U",
        recent: 9
    },
];

const productsCards = document.querySelector(".container-products")
const load_more = document.querySelector(".load");



function renderProducts(produtos) {
    productsCards.innerHTML = "";
    produtos.forEach((product, index) => {
        const products = document.createElement("div");
        products.classList.add("products");
        products.innerHTML = `<img src="${product.image}" alt="">
      <h3>${product.tittle}</h3>
      <h2>R$ ${product.price}</h2>
  
      <h4>${product.description}<h4>
      <button onClick= "addCart(${index})" class="button">COMPRAR</button>`;

        productsCards.append(products);
    });
}

load_more.addEventListener("click", () => {
    for (let product of products) {
        loadMore.push(product);
    }
    for (let product of products) {
        loadMore.push(product);
    }

    renderProducts(loadMore);
    console.log(loadMore);
});

renderProducts(products);
let colors = [];
let sizesFilter = [];
let cartItems = [];
let pricess = [];
let included = [];
let loadMore = [];