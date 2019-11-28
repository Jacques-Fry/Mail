<template>
  <div id="detail">
    <detail-nav-bar />
    <scroll class="content" :probeType="0">
      <detail-swiper :topImg="goods.topImg" />
      <detail-data-show :goods="goods" />
      <detail-store/>
    </scroll>
  </div>
</template>

<script type="text/javascript">
import scroll from "components/common/scroll/Scroll";

import detailNavBar from "./childComps/DetailNavBar";
import detailSwiper from "./childComps/DetailSwiper";
import detailDataShow from "./childComps/DetailDataShow";
import detailStore from "./childComps/DetailStore";

export default {
  name: "Detail",
  data() {
    return {
      goods: {},
      id: null
    };
  },
  components: {
    scroll,
    detailNavBar,
    detailSwiper,
    detailDataShow,
    detailStore
  },
  created() {
    this.id = this.$route.params.id;
    switch (this.id) {
      case "1":
        this.goods = this.getData1();
        break;
      case "2":
        this.goods = this.getData2();
        break;
      case "3":
        this.goods = this.getData3();
        break;
    }
  },
  methods: {
    getData1() {
      return {
        topImg: [
          "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/103121/33/2845/224264/5dd75038Eabd2f991/92c9bb95cfbf1709.jpg!q80.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/73040/8/6701/276568/5d4bd679Ec00b7643/0060b0e60669d25e.jpg!q70.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/60496/2/6549/215161/5d4bd67aE6988be8d/d2e59ccb4d6d5cca.jpg!q70.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/48309/7/7271/389323/5d4bd67aE48fa2f42/a47dc3e23f9d51f5.jpg!q70.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/46610/9/7201/268799/5d4bd67bEb521f335/68814c0ad4763a9e.jpg!q70.dpg.webp"
        ],
        title:
          "Lagogo/拉谷谷2019秋季新款圆领亮丝镂空针织衫女ICMM438A03 米白(TV) 155/S/36",
        price: "￥279.00",
        selected: "杏色,M,1个",
        delivery: "北京朝阳区三环到四环之间 现货",
        freight: "申通快递 8元"
      };
    },
    getData2() {
      return {
        topImg: [
          "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/92243/10/196/106745/5da89f51E94256757/8592c3cfe8a062d1.jpg!q80.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/74109/12/13355/194704/5da89afcE2fd7b7cf/3591aaba78a7280d.jpg!q70.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/59184/40/13559/155346/5da89af8E8001b32a/3b0071916f6c83d9.jpg!q70.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/83331/20/13414/87333/5da89fe4Ebc300c4f/f80e7f9f1c3f5048.jpg!q70.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/69175/28/13434/117099/5da89f51E3c5b85b3/1c6e15ac287fa97b.jpg!q70.dpg.webp"
        ],
        title:
          "芊蕊 卫衣女2019秋冬新款韩版加绒加厚慵懒风宽松百搭学生字母连帽套头上衣外套潮 杏色 M",
        price: "￥98.00",
        freight: "在线支付免运费"
      };
    },
    getData3() {
      return {
        topImg: [
          "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/99336/22/3302/237982/5ddea0a3Ea91a461a/e45f941f4d9fb49c.jpg!q80.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/30155/15/9284/309423/5ca44db8Eedabc9e9/06e6b7901cd01048.jpg!q70.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/29404/25/14122/274448/5ca44db9Ee6b39132/32995479a012489b.jpg!q70.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/16963/29/14119/317107/5ca44dbaE658d20b5/a3447173dc5b034a.jpg!q70.dpg.webp",
          "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/29627/37/14025/76878/5ca44dbaE613ecd1c/b65579c8db1236bb.jpg!q70.dpg.webp"
        ],
        title:
          "茵曼2019春装新款棉质翻领文艺复古休闲百搭宽松长袖衬衣衬衫女【F1891011642】 象牙白 M",
        price: "￥169.00",
        freight: "顺丰快递 20元"
      };
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
</style>
