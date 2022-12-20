<template>
    <div class="fixed w-screen z-[888]">

        <div class="
  w-full
  py-4
        border-b border-gray-200
  ">
            <div class="container-fluid w-full flex flex-wrap items-center justify-end px-6">
                <div class="flex items-center relative">
                    <div class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 cursor-pointer"
                        @click="toggleCartMenu">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
                            class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
                            </path>
                        </svg>
                    </div>

                </div>
            </div>
        </div>

        <div class="cart-sidebar w-[30%] h-screen fixed inset-y-0 right-0 bg-white z-[999] hidden
        transition-all ease-in-out duration-300">

            <!-- add a close button -->
            <div class="flex justify-end pt-4">
                <!-- <button class="text-white text-2xl font-bold p-4 cursor-pointer" @click="toggleCartMenu">X</button> -->
                <button class="text-gray-500 hover:text-red-500 focus:outline-none px-4" @click="toggleCartMenu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>

            <CartItems />

        </div>


    </div>
</template>

<script>
import CartItems from './CartItems.vue';

export default {
    data() {
        return {
            cart: []
        };
    },
    methods: {
        toggleCartMenu() {
            const cartMenu = document.querySelector(".cart-sidebar");
            cartMenu.classList.toggle("hidden");
            console.log("toggle cart menu");
        },
    },
    components: { CartItems }
}
</script>
