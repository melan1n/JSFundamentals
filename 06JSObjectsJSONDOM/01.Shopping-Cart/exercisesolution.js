function solve(){
    let products = [];

    for (let i = 0; i < 3; i++) {
        let element = document.getElementsByClassName('product')[1];
        let name = element.children[1].innerHTML;
        let price = +element.children[2].innerHTML.split(' ')[1];
        document.getElementsByTagName('button')[1].addEventListener('click', () => {
            products.push({name, price});
            let textArea = document.getElementsByTagName('textarea')[0];
            textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        })
    }

    document.getElementsByTagName('button')[3].addEventListener('click', () => {
        let list = products.map(p => p.name).filter((el, idx, arr) => {
            if (arr.indexOf(el) === idx) {
                return el;
            }
        });
        let totalPrice = products.map(p => p.price).reduce((a, b) => {
            return a + b;
        });
        let textArea = document.getElementsByTagName('textarea')[0];
        textArea.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.\n`
    })
}