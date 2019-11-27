<template>
  <div class="goods-list">
    <goodsitem v-for="(item,index) in goods" :key="index" :goodsitem="item" />
  </div>
</template>

<script type="text/javascript">
import goodsitem from "./GoodsItem";

export default {
  props: {
    goods: {
      type: Array,
      default: []
    }
  },
  components: {
    goodsitem
  }
};
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content:  space-around;
  padding: 2px;
}
</style>
