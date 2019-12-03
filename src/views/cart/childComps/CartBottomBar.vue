<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="selectAllCheck" />
      <span>全选</span>
    </div>
    <div class="price">共计(￥{{totalPrice}})</div>
    <div class="settlement" @click="settlement">去结算（{{totalNum}}）</div>
  </div>
</template>

<script type="text/javascript">
import checkButton from "components/content/checkButton/CheckButton";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  components: {
    checkButton
  },
  computed: {
    ...mapGetters({
      cartList: "getCartList"
    }),
    totalPrice() {
      return this.cartList
        .filter(item => item.checked)
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    totalNum() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find(item => !item.checked);
    }
  },
  methods: {
    ...mapActions(["delCart"]),
    selectAllCheck() {
      const isAll = this.isSelectAll;
      //全部选中
      this.cartList.forEach(item => (item.checked = !isAll));
    },
    settlement() {
      if (this.totalNum === 0) {
        this.$toast.show("请先选择商品");
      } else {
        //结算商品
        this.delCart(this.totalPrice).then(res => {
          this.$toast.show(res);
        });
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;

  height: 40px;

  background-color: rgb(241, 241, 241);
}
.check-all {
  display: flex;
  align-items: center;

  line-height: 40px;
  width: 80px;
}
.check-button {
  height: 22px;
  width: 22px;
  line-height: 22px;
  margin-left: 5px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;

  line-height: 40px;
}
.settlement {
  text-align: center;

  line-height: 40px;
  width: 100px;

  background-color: red;
  color: #fff;
}
</style>
