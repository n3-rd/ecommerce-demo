import Vuex from 'vuex'
import products from './products'
import cart from './cart'

const store = new Vuex.Store({
    modules: {
        products,
        cart
    }
})

export default store
