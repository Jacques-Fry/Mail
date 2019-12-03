<template>
  <div class="check-button" :class="{active: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    
  }
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #eee;
}
.active {
  background-color: red;
  border-color: red;
}
</style>
