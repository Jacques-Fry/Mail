<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{active: checkItemIndex===index}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      checkItemIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.checkItemIndex = index;
      this.$emit('tabClick', index)
    }
  }
};
</script>

<style scoped>
.tab-control {
  background-color: #fff;
  display: flex;
}

.tab-control-item {
  flex: 1;
  font-size: 15px;
  text-align: center;
  line-height: 40px;
  height: 40;
}

.tab-control-item span {
  padding: 0 3px 5px 3px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
