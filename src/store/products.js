const state = {
    productsArray: []
}

const mutations = {
    setProducts(state, productsArray) {
        state.productsArray = productsArray
    }
}

const actions = {
    setProducts({ commit }, productsArray) {
        commit('setProducts', productsArray)
    }
}

const getters = {
    productsArray: state => state.productsArray
}

export default {
    state,
    mutations,
    actions,
    getters
}
