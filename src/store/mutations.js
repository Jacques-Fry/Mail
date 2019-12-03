import { ADD_CART_COUNT, ADD_CART, UPD_CART } from "./mutation-types"

export default {
  [ADD_CART_COUNT](state, payLoad) {
    //数量+1
    payLoad.count++

  },
  [ADD_CART](state, payLoad) {
    //添加购物车数据
    state.cartList.push(payLoad);
  },
  [UPD_CART](state, payLoad) {
    //清除购物车数据
    state.cartList = payLoad
  }
}