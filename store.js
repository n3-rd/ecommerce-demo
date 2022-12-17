import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        productsStore: []
    },
    mutations: {
        populateProductsStore(state, array) {
            state.productsStore = array;
        }
    },
    actions: {
        populateProductsStore(context, array) {
            // Dispatch the mutation to update the state
            context.commit('populateProductsStore', array);
        }
    },
    getters: {
        productsStore: state => state.productsStore
    }
});

export default store;
