<template>
  <div>
    <navbar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item ,index) in titles"
          :key="index"
          :class="{active: clickItemIndex===index}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script type="text/javascript">
import navbar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "评论", "参数", "推荐"],
      clickItemIndex: 0
    };
  },
  components: {
    navbar
  },
  methods: {
    itemClick(index) {
      this.clickItemIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.back img {
  margin-top: 12px;
}
</style>
