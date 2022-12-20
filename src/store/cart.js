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
    items: state => state.items,
    cartTotal: state => {
        let total = 0
        state.items.forEach(item => {
            total += item.price * 1.022
        })
        return parseFloat(total.toFixed(2))
    },
}


export default {
    state,
    mutations,
    actions,
    getters
}
