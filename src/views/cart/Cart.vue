<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 列表 -->
    <cart-list/>
    <!-- 统计 -->
    <cart-bottom-bar />
  </div>
</template>

<script type="text/javascript">
import navBar from "components/common/navbar/NavBar";

import cartList from "./childComps/CartList";
import cartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    navBar,
    cartList,
    cartBottomBar
  },
  computed: {
    ...mapGetters({
      length: "getCartLength"
    })
  }
};
</script>

<style scoped>
#cart {
  position: relative;
  height: 100vh;
}

.cart-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
