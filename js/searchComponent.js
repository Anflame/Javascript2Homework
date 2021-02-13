Vue.component('search', {
    data() {
        return {
            filterName: ''
        }
    },
    template: `
        <form action="#" class="search-form" @submit.prevent='$parent.filterProducts(filterName)'>
            <input type="text" class='search-field' v-model="filterName">
                <button type='submit' class="btn-search"></button>
            <i class="fas fa-search"></i>
        </form>
    `
})