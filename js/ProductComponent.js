Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="products flex-box">
                <product v-for="item of products" 
                :key="item.id_product" 
                :img="img"
                :product="item"></product>
               </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
            <div class="product-item flex-column">
                <div class="desc">
                    <h3 class="product-item_header">{{product.product_name}}</h3>
                    <img class='product-item_img':src="img" alt="Some img">
                    <p class='product-item_price'>{{product.price}}</p>
                    <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>
            </div>
    `
})