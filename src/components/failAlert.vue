<template>
    <div class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 fixed z-[999]" role="alert" v-if="show">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            show: false,
        };
    },
    methods: {
        showAlert() {
            this.show = true;
            // Hide the alert after 3 seconds
            setTimeout(() => {
                this.show = false;
            }, 3000);
        },
    },
};
</script>

<style>
/* Add your custom styles here */
</style>
