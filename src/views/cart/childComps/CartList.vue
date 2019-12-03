<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <div v-if="cartLength>0">
        <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item" />
      </div>
      <div v-else class="empty">抱歉，购物车是空的 ╮(๑•́ ₃•̀๑)╭</div>
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
      cartList: "getCartList",
      cartLength: "getCartLength"
    })
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 133px);
}
.content {
  height: 100%;
  overflow: hidden;
}
.empty {
  text-align: center;
  line-height: 50px;
}
</style>
