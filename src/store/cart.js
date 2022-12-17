const state = {
    items: []
}

const mutations = {
    addToCart(state, item) {
        state.items.push(item)
    },
    removeFromCart(state, item) {
        const index = state.items.indexOf(item)
        state.items.splice(index, 1)
    }
}

const actions = {
    addToCart({ commit }, item) {
        commit('addToCart', item)
    },
    removeFromCart({ commit }, item) {
        commit('removeFromCart', item)
    }
}

const getters = {
    items: state => state.items
}

export default {
    state,
    mutations,
    actions,
    getters
}
