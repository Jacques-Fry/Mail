<template>
  <div>
    <h2 class="goods-price">{{goods.price}}</h2>
    <p class="goods-title">{{goods.title}}</p>
    <table class="goods-table" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td>已选</td>
        <td>{{goods.selected}}</td>
      </tr>

      <tr>
        <td>送至</td>
        <td>{{goods.delivery}}</td>
      </tr>

      <tr>
        <td>运费</td>
        <td>{{goods.freight}}</td>
      </tr>
    </table>

    <div class="goods-service">
      <div>
        <img src="~assets/img/cart/tick.svg" alt="">
        七天无理由</div>
      <div>
        <img src="~assets/img/cart/tick.svg" alt="">
        货到付款</div>
      <div>
        <img src="~assets/img/cart/tick.svg" alt="">
        急速审核</div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    goods: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.goods-price {
  color: red;
  line-height: 40px;
}
.goods-title {
  font-weight: bold;
  color: #000;
}
.goods-table {
  width: 100%;
}

.goods-table tr {
  height: 50px;
}

.goods-table tr td {
  border-bottom: 1px solid #dad0d0;
}

.goods-table tr td:nth-of-type(1) {
  padding-left: 5px; 
  font-size: 13px;
  width: 60px;
}

.goods-table tr td:nth-of-type(2) {
  color: #000;
  font-size: 13px;
}

.goods-service{
  text-align: center;
  margin-top: 10px;
  display: flex;
  width: 100%;
  font-size: 15px;
}
.goods-service div{
  flex: 1;

}
</style>
