function solve() {
    document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick)
    document.getElementsByClassName('checkout')[0].addEventListener('click', checkout)

    const cart = [];
    const output = document.getElementsByTagName('textarea')[0];
    input.value = '';

    function onClick(ev) {
        if (ev.target.tagName == "BUTTON" || ev.target.classList.contains('add-product')) {
            let product = ev.target.parentNode.parentNode;
            let name = product.querySelector('.product-title').textContent;
            let price = Number(product.querySelector('.product-line-price').textContent);

            cart.push({
                name,
                price
            });

            output.value += `Added ${name} for ${price.toFixed(2)} to the card.\n`
        }
    }

    function checkout() {
        const products = new Set();
        cart.forEach(p => products.add(p.name));
        const total = cart.reduce((t, c) => t + c.price, 0);

        output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
    }

}