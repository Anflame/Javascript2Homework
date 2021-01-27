class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (const product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x200') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item flex-column">
            <h3 class='product-item_header'>${this.title}</h3>
            <img class='product-item_img' src='${this.img}.jpg'>
            <p class='product-item_price'>${this.price}$</p>
            <button class="buy-btn">Купить</button>
        </div>`;
    }
}
class Basket {
    constructor(productList, productListArray = []) {
        this.productList = productList;
        this.productListArray = productListArray;
    }
    addToBasket() {
        if (this.productListArray.length == 0) {
            this.productListArray[0] = this.productList;
        }
        else {
            this.productListArray.push(this.productList);
        }
    }
    render() {
        let basket = document.querySelector('.basket');
        let rending = `<div id='item${id}' class="basket-item flex-column">
            <h3 class='basket-item_header'>${product.title}</h3>
            <img class='basket-item_img' src='${this.img}.jpg'>
            <p class='basket-item_price'>${this.price}$</p>
            <button class="delete-btn">удалить</button>
        </div>`;
        basket.insertAdjacentHTML('beforeend', rending);
    }
    showBasket() {
        let basket = document.querySelector('.basket');
        basket.classList.add('show');
    }
}
class RemoveBasket {
    constructor(productList, productListArray = []) {
        this.productList = productList;
        this.productListArray = productListArray;
    }
    deleteFromArray() {
        delete this.productListArray[this.productList.id];
    }
    deleteRender() {
        let basket = document.querySelector(`#item${this.productList.id}`);
        basket.remove();
    }
}
class GoodList {
    constructor(productList) {
        this.productList = productList;
    }
    productListCalc() {
        resultPrice = '';
        for (const array of this.productList) {
            resultPrice += array.price;
        }
        return resultPrice;
    }
}
let product = new ProductList;
product.render();