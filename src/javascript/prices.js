const prices = document.querySelector(".prices ul");

prices.addEventListener("click", (event) => {
    const value = event.target.name;

    if (included.includes(value)) {
        included = included.filter((include) => include !== value);
        if (included.length <= 0) {
            renderProducts(products);
        }
    } else {
        included.push(value);
    }

    if (event.target.tagName === "INPUT") {
        if (included.includes("price-one")) {
            let show = products.filter((product) => {
                return product.price >= 0 && product.price <= 50;
            });

            renderProducts(show);
        } else if (included.includes("price-two")) {
            let show = products.filter((product) => {
                return product.price >= 51 && product.price <= 150;
            });

            renderProducts(show);
        } else if (included.includes("price-three")) {
            let show = products.filter((product) => {
                return product.price >= 151 && product.price <= 300;
            });

            renderProducts(show);
        } else if (included.includes("price-four")) {
            let show = products.filter((product) => {
                return product.price >= 301 && product.price <= 500;
            });

            renderProducts(show);
        } else if (included.includes("price-five")) {
            let show = products.filter((product) => {
                return product.price >= 501;
            });

            renderProducts(show);
        }
    }
});