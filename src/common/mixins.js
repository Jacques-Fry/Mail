import { debounce } from "common/utils";

import backTop from "components/content/backTop/BackTop";
/**
 * 混入的使用
 */

 //图片加载
export const itemImgLoadMixIn = {
  data() {
    return {
      itemImgLoadLister: null,
      newRefresh: null
    }
  },
  mounted() {
    //监听图片加载
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgLoadLister = () => {
      this.newRefresh();
    }
    this.$bus.$on('itemImgLoad', this.itemImgLoadLister)
  }
}

//回到顶部
export const backTopMixIn = {
  components: {
    backTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  }

}