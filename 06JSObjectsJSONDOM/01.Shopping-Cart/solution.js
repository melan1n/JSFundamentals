function solve() {

    let sum = 0;
    let productList = [];

    let cartText = document.getElementsByTagName('textarea')[0];
    let products = document.getElementsByClassName('product');

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        product.children[3].addEventListener('click', () => {
            let productName = product.children[1].innerHTML;
            let productPrice = parseFloat(product.children[2].innerHTML.split(': ')[1]);

            if (!productList.includes(productName)) {

                productList.push(productName);
            }
            sum += productPrice;
            cartText.innerHTML += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`

            debugger;
        });
    }

    let buyBtn = document.getElementsByTagName('button')[3]
        .addEventListener('click', () => {
            cartText.innerHTML += `You bought ${productList.join(', ')} for ${sum.toFixed(2)}.\n`
        })

}
