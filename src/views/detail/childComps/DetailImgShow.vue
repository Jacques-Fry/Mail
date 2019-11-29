<template>
  <div class="goods-img-show">
    <div class="goods-introduce">商品介绍</div>
    <img v-for="(item,index) in imgList" :key="index" :src="item" @laod="imgLoad" />
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      imgListLength: 0,
      imgNowLength: 0
    };
  },
  props: {
    imgList: {
      type: Array,
      deafult: []
    }
  },
  methods: {
    imgLoad() {
      if(++this.imgNowLength === this.imgLength){
        this.$emit("imgLoad")
      }
    }
  },
  watch: {
    detailInfo() {
      this.imgListLength = this.imgList.length;
    }
  }
};
</script>

<style scoped>
.goods-img-show img{
  width: 100%;
}
.goods-introduce{
  text-align: center;
  line-height: 60px;
}
</style>
