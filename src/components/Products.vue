<template>
    <div class="flex flex-col">
        <div class="py-6 px-4 text-black">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="relative h-96" v-for="product in products" :key="product.id">
                    <img class="w-full h-48 object-contain" :src="product.image" alt="product image" />

                    <div class="flex flex-col justify-center items-center p-4">
                        <h3 class="text-xl font-bold text-center product-name ">{{ product.title.substring(0, 20)
                        }}...</h3>
                        <p class="text-lg font-black product-price">${{ (parseFloat(Math.floor((product.price * 1.022) *
                                100) / 100).toFixed(2))
                        }}</p>
                        <div>{{ product.category }}</div>
                        <button type="button" @click="addItemToCart(product)"
                            class="inline-block py-2.5 px-6 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useNotification } from "@kyvg/vue3-notification";

export default {
    setup() {
        const products = ref([])

        const store = useStore()
        const { notify } = useNotification()

        const getProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                products.value = response.data
                store.dispatch('setProducts', products.value)
            } catch (error) {
                showFailAlert("Failed to fetch prducts.")

            }
        }

        const addItemToCart = product => {
            const itemInCart = store.getters.items.find(item => item.id === product.id)

            if (itemInCart) {
                console.log('Item is already in the cart')
                showFailAlert("Product already exists inside the cart.")
            } else if (!itemInCart) {
                store.dispatch('addToCart', product)
                showSuccessAlert("Product added to cart.")
            }
            else {
                showFailAlert("Sorry, an error occurs from our side while adding your product to the cart, we are currently working on it, Kindly try again.")
            }

        }

        const removeFromCart = product => {
            store.dispatch('removeFromCart', product)
        }

        const showFailAlert = (text) => {
            notify({
                title: "Error!",
                text: text,
                type: "error",
            });
        }

        const showSuccessAlert = (text) => {
            notify({
                title: "Success!",
                text: text,
                type: "success",
            });
        }

        onMounted(() => {
            getProducts()
        })

        const items = computed(() => store.getters.items)

        return {
            products,
            addItemToCart,
            removeFromCart,
            showFailAlert,
            showSuccessAlert,
            items
        }
    },
}
</script>
