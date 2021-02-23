Vue.component('products', {
    data() {
        return {
            filtered: [],
            products: [],
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `<div class="products flex-box">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="item.img"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
            <div class="product-item">
                <h3 class='product-item_header'>{{product.product_name}}</h3>
                <img :src="img" alt="Some img" class='product-item_img'>
                <div class="desc">
                    <p class='product-item_price'>{{product.price}}$</p>
                    <button class="buy-btn" @click="$emit('add-product', product)">Купить</button>
                </div>
            </div>
    `
})