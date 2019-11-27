<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>

    <homeswiper :banners="banners"></homeswiper>

    <tabcontrol :titles="['流行','新款','精选']" @tabClick="tabClick" />

    <goodslist :goods="goods[currentType].rows"></goodslist>
  </div>
</template>

<script type="text/javascript">
import navbar from "components/common/navbar/NavBar";

import tabcontrol from "components/content/tabControl/TabControl";
import goodslist from "components/content/goods/GoodsList";

import homeswiper from "./childComps/HomeSwiper";

import { getHomeData } from "network/home";

export default {
  components: {
    navbar,
    tabcontrol,
    goodslist,
    homeswiper
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          index: 1,
          rows: []
        },
        new: {
          index: 1,
          rows: []
        },
        sell: {
          index: 1,
          rows: []
        }
      },
      currentType: "pop"
    };
  },
  computed: {
    createGoodsData1() {
      return {
        imgUrl: "//m.360buyimg.com/babel/s525x525_jfs/t1/92802/35/3096/193376/5ddb370eE34e33f88/53883c947baaef98.jpg!q70.dpg",
        title: "icy秋季2019新款女装上衣美丽诺羊毛腰带宽松V领开衫薄毛衣针织衫女 白色 L",
        price: 459
      };
    },
    createGoodsData2() {
      return {
        imgUrl: "//m.360buyimg.com/babel/s525x525_jfs/t1/105255/25/2803/241355/5dd80859Ec2aa6d6c/46dff6e5a7f0688d.jpg!q70.dpg",
        title: "秋水伊人羽绒服冬装2019年新款女装纯色立领双排扣白鸭绒羽绒马甲 米白 M",
        price: 429
      };
    },
    createGoodsData3() {
      return {
        imgUrl: "//m.360buyimg.com/babel/s525x525_jfs/t1/98928/28/2672/328159/5dd52103E98783f52/6d39b0d106e2f4bd.jpg!q70.dpg",
        title: "迪葵纳中老年女装冬装中年妈妈装中长款羽绒服WQ7833沣0925 粉色 2XL",
        price: 629
      };
    }
  },
  created() {
    this.getHomeData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
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
          dataNow = this.createGoodsData2;
          break;
        case "new":
          dataNow = this.createGoodsData1;
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
        dataNow
      );
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 43px;
  z-index: 9;
}
</style>
