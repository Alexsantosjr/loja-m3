const options = document.querySelectorAll("option");
const order = document.querySelector(".selected-options");


function filterProducts() {
    if (colors.length <= 0) {
        const filter = products.filter((product) =>
            sizesFilter.includes(product.size)
        );
        renderProducts(filter);
        return;
    }
    if (sizesFilter.length <= 0) {
        const filter = products.filter((product) => colors.includes(product.color));
        renderProducts(filter);
        return;
    }

    const filter = products.filter(
        (product) =>
            colors.includes(product.color) && sizesFilter.includes(product.size)
    );

    renderProducts(filter);
}

function higherPrice() {
    let price = [];
    for (product of products) {
        price.push(product);
    }

    price.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
    });
    console.log(price);

    renderProducts(price);
}

function lowerPrice() {
    let price = [];
    for (product of products) {
        price.push(product);
    }

    price.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
    });
    renderProducts(price);
}

function recentProduct() {
    let recent = [];
    for (product of products) {
        recent.push(product);
    }

    recent.sort(function (a, b) {
        return parseInt(a.recent) - parseInt(b.recent);
    });
    renderProducts(recent);
}

function filterProduct() {
    const option = order.options[order.selectedIndex].value;
    if (option === "lower-price-product") {
        higherPrice();
    } else if (option === "more-price") {
        lowerPrice();
    } else if (option === "recent-product") {
        recentProduct();
    }
}
