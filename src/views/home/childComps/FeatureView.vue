<template>
  <div class="feature">
    <a href="#">
      <img src="~assets/img/home/recommend_bg.jpg" @load="imgLoad">
    </a>
  </div>
</template>

<script type="text/javascript">

export default {
  methods: {
    imgLoad(){
      this.$emit("featureImgLoad")
    }
  }
}
</script>

<style scoped>
  .feature img{
    width: 100%;
  }
  .feature{
    border-top: 8px solid #eee;
    border-bottom: 8px solid #eee;
  }
</style>
