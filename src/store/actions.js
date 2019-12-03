import { ADD_CART_COUNT, ADD_CART, UPD_CART } from "./mutation-types"

export default {
  addCart({ state, commit }, payLoad) {
    //添加购物车
    return new Promise((resolve, reject) => {
      //查找之前是否添加过此商品
      const oldProduct = state.cartList.find(item => item.id === payLoad.id)
      if (oldProduct) {
        commit(ADD_CART_COUNT, oldProduct)
        resolve("当前商品数量+1")
      } else {
        payLoad.count = 1
        payLoad.checked = false
        commit(ADD_CART, payLoad)
        resolve("成功添加此商品")
      }
    })

  },
  delCart({ state, commit }, payLoad) {
    return new Promise((resolve, reject) => {
      commit(UPD_CART, state.cartList.filter(item => !item.checked))
      console.log(payLoad)
      resolve("结算完成，共计消费: "+payLoad +"元")
    })
  }
}