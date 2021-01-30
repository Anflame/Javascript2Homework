const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render();
            });
    }
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
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
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
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
    constructor(basket = '.basket') {
        this.basket = basket;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data.contents];
                this.render();
            });
    }
    _getProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    addGoods() {

    }
    removeGoods() {

    }
    render() {
        const blockBasket = document.querySelector(this.basket);
        for (const product of this.goods) {
            const productObj = new ElemBasket(product);
            blockBasket.insertAdjacentHTML('afterbegin', productObj.render());
            blockBasket.classList.add('show');
        }
    }
}
class ElemBasket {
    constructor(product, img = 'https://placehold.it/50x50') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `
            <div class="basket-item flex-column">
            <h3 class='product-item_header'>${this.title}</h3>
            <img class='basket-item_img' src='${this.img}.jpg'>
            <p class='basket-item_price'>${this.price}$</p>
            <button class="basket_delete-btn">Удалить</button>
        </div>`;
    }
}
let list = new ProductsList;
console.log(list.allProducts);