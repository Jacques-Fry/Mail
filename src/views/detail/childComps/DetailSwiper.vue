<template>
  <div>
    <swiper>
      <swiper-item v-for="item in topImg" :key="item">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script type="text/javascript">
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  props: {
    topImg: {
      type: Array,
      deafult: []
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
