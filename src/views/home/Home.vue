<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>

    <tab-control
      ref="tabControl1"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"
      class="tab-control"
    />

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScorll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>

      <feature-view @featureImgLoad="swiperImgLoad" />

      <tab-control ref="tabControl2" :titles="['流行','新款','精选']" @tabClick="tabClick" />

      <goods-list :goods="goods[currentType].rows" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script type="text/javascript">
import navbar from "components/common/navbar/NavBar";
import scroll from "components/common/scroll/Scroll";

import tabControl from "components/content/tabControl/TabControl";
import goodsList from "components/content/goods/GoodsList";
import backTop from "components/content/backTop/BackTop";

import homeSwiper from "./childComps/HomeSwiper";
import featureView from "./childComps/FeatureView";

import { debounce } from "common/utils";

import { getHomeData } from "network/home";

export default {
  name: "Home",
  components: {
    navbar,
    scroll,
    tabControl,
    goodsList,
    backTop,
    homeSwiper,
    featureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          index: 0,
          rows: []
        },
        new: {
          index: 0,
          rows: []
        },
        sell: {
          index: 0,
          rows: []
        }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      scrollY: 0
    };
  },
  computed: {
    createGoodsData1() {
      return {
        id: 1,
        imgUrl:
          "//img10.360buyimg.com/mobilecms/s360x464_jfs/t1/42076/8/11224/406500/5d4bd67dEcf732337/5c2a565c4d753d96.jpg!cc_360x464!q70.dpg.webp",
        title:
          "  Lagogo/拉谷谷2019秋季新款圆领亮丝镂空针织衫女ICMM438A03 米白(TV) 155/S/36  白色 L  ",
        price: 279
      };
    },
    createGoodsData2() {
      return {
        id: 2,
        imgUrl:
          "//img11.360buyimg.com/mobilecms/s360x464_jfs/t1/56953/38/13875/77809/5da8a0e9Ebc2f7bfa/aa585349faf3cf8c.jpg!cc_360x464!q70.dpg.webp",
        title:
          "  芊蕊 卫衣女2019秋冬新款韩版加绒加厚慵懒风宽松百搭学生字母连帽套头上衣外套潮 杏色 M  ",
        price: 429
      };
    },
    createGoodsData3() {
      return {
        id: 3,
        imgUrl:
          "//img14.360buyimg.com/mobilecms/s360x464_jfs/t1/101437/10/3306/228664/5ddea0a5Edabc4710/1a961b82c0493a79.jpg!cc_360x464!q70.dpg.webp",
        title:
          "  茵曼2019春装新款棉质翻领文艺复古休闲百搭宽松长袖衬衣衬衫女【F1891011642】 象牙白 M  ",
        price: 169
      };
    }
  },
  created() {
    this.getHomeData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //监听图片加载
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY();
  },
  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.checkItemIndex = index;
      this.$refs.tabControl2.checkItemIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScorll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      setTimeout(() => {
        this.$refs.scroll.finishPullUp();
      }, 2000);
    },
    swiperImgLoad() {
      //获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     * 数据请求
     */
    getHomeData() {
      // getHomeData().then(res => {
      //   this.result = res;
      // });
      //模拟数据
      this.banners = [
        "https://m.360buyimg.com/babel/jfs/t1/58283/8/16280/188986/5dd35c45E2e8b66cd/eddf526dc078ff87.jpg!q70.jpg.webp",
        "https://m.360buyimg.com/babel/jfs/t1/82828/20/15557/146920/5dd2600cEf3d856dc/9083c50751f334c9.jpg!q70.jpg.webp",
        "https://m.360buyimg.com/babel/jfs/t1/99998/19/2784/73108/5dd7385fEa594e612/67fcb1a644271713.jpg!q70.jpg.webp",
        "https://m.360buyimg.com/babel/jfs/t1/72674/38/15710/176358/5dd224cdEc849b767/024a1770794985d6.jpg!q70.jpg.webp"
      ];
      this.recommends = [];
    },
    getHomeGoods(type) {
      this.goods[type].index++;
      const index = this.goods[type].index;

      let dataNow = {};

      switch (type) {
        case "pop":
          dataNow = this.createGoodsData1;
          break;
        case "new":
          dataNow = this.createGoodsData2;
          break;
        case "sell":
          dataNow = this.createGoodsData3;
          break;
      }

      this.goods[type].rows.push(
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow,
        dataNow
      );
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .content {
  overflow: hidden;
  height: calc( 100% - 93px);
  margin-top: 44px;
} */

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
