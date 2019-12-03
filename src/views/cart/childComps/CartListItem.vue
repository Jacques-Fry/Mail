<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button @click.native="checkedChange" :is-checked="product.checked" />>
    </div>
    <div class="item-img">
      <img :src="product.imgUrl" />
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.selected}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.price|toFixed2}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import checkButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
  components: {
    checkButton
  },
  methods: {
    checkedChange() {
      this.product.checked = !this.product.checked;
    }
  },
  filters: {
    toFixed2(data) {
      return data.toFixed(2);
    }
  }
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>
