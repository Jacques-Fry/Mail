<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item">
        <a href="#">
          <img :src="item" alt @load="imgLoad" />
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
      deafult() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = !this.isLoad;
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
