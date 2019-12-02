<template>
  <div class="cart-list">
    <scroll class="content" :probe-type="0" ref="scroll">
      asdasasdasdasdasd
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item">{{item}}</cart-list-item>
    </scroll>
  </div>
</template>

<script type="text/javascript">
import { mapGetters } from "vuex";

import scroll from "components/common/scroll/Scroll";

import cartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    scroll,
    cartListItem
  },
  computed: {
    ...mapGetters({
      cartList: "getCartList"
    })
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 93px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
