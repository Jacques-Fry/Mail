import { ADD_CART_COUNT, ADD_CART } from "./mutation-types"

export default {
  addCart({ state, commit }, payLoad) {
    //添加购物车
    const oldProduct = state.cartList.find(item => item.id === payLoad.id)
    if (oldProduct) {
      commit(ADD_CART_COUNT, oldProduct)
    } else {
      payLoad.count = 1;
      commit(ADD_CART, payLoad)
    }
  }
}