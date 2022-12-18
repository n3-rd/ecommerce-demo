<template>
    <div>

        <div class="py-6 px-4 text-black">

            <div class="products-grid grid grid-cols-4 ">
                <div class="product-item relative h-96 " v-for="product in products" :key="product.id">
                    <img class=" w-full h-48 object-contain" :src="product.image" alt="product image">

                    <div class=" flex flex-col justify-center items-center">
                        <h3 class="text-[1.3rem] text-center font-bold py-3 product-name">{{ product.title }}</h3>
                        <p class="text-lg font-black product-price">${{ (parseFloat(Math.floor((product.price * 1.022) *
                                100) / 100).toFixed(2))
                        }}</p>

                        <button type="button" @click="addItemToCart(product)"
                            class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Add
                            to Cart</button>

                    </div>
                </div>
            </div>


        </div>

    </div>
</template>


<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            products: [],
            cart: []
        }
    },
    methods: {
        async getProducts() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                this.products = response.data;
                this.storeArray()
            } catch (error) {
                console.error(error);
            }
        },
        addItemToCart(product) {
            // Check if the item is already in the cart
            let itemInCart = this.items.find(item => item.id === product.id);

            if (itemInCart) {
                // Update the quantity of the existing item or display an error message
                console.log('Item is already in the cart');
            } else {
                // Use the addToCart action to commit the item to the store
                this.addToCart(product);
            }
        },
        removeFromCart(product) {
            // Use the removeFromCart action to remove the item from the store
            this.removeFromCart(product)
        },
        ...mapActions(['setProducts', 'addToCart', 'removeFromCart']),
        storeArray() {
            // Store the array in the Vuex store
            this.setProducts(this.products);
        }
    },
    created() {
        this.getProducts();
        // export the products array

    },
    computed: {
        // Use the items getter from the cart store to get the items in the cart
        ...mapGetters(['items'])
    }
}
</script>
