const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
/*
Ответы на 3ий вопрос
1. метод map возвращает массив из массива и проделывает определенную операцию с каждым элементом массива, как я вижу решение ситуации: либо использовать другие методы, либо же после метода map перебрать итоговый массив, как сделал ниже.
*/
const renderProduct = (item = 1) => {
    return `<div class="product-item flex-column">
                <h3 class='product-item_header'>${item.title}</h3>
                <img class='product-item_img' src='images/${item.title}.jpg'>
                <p class='product-item_price'>${item.price}$</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    for (let i = 0; i < productsList.length; i++) {
        document.querySelector('.products').insertAdjacentHTML('beforeend', productsList[i]);
    }
};

renderPage(products);