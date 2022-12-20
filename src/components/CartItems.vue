<template>
    <div>
        <h2 class="text-3xl py-2 font-black">Cart</h2>

        <div class="h-full shadow-md bg-white px-1 absolute w-full overflow-y-auto no-scrollbar">
            Total: ${{ cartTotal }}

            <ul class="list-none">
                <li v-for="item in items" :key="item.id"
                    class="flex items-center justify-between p-4 border-b border-gray-300">
                    <img :src="item.image" alt="Thumbnail" class="w-12 h-12 rounded-full">
                    <div class="flex-1 ml-4">
                        <p class="text-gray-700 font-bold text-lg">{{ item.title }}</p>
                        <p class="text-gray-500 text-sm">${{ (parseFloat(Math.floor((item.price * 1.022) *
                                100) / 100).toFixed(2))
                        }}</p>
                    </div>
                    <button class="text-gray-500 hover:text-red-500 focus:outline-none"
                        @click="removeFromCart(item.id)">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    methods: {
        ...mapActions(['removeFromCart']),
    },
    computed: {
        ...mapGetters(['cartTotal', 'items']),
    },
    updated() {
        console.log(this.items)
    }
}


</script>
<style scoped>
::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>