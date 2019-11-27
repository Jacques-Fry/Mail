<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item">
        <a href="#">
          <img :src="item" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script type="text/javascript">
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  props: {
      banners: {
        type: Array,
        deafult(){ 
          return []
        }
      }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
</style>
