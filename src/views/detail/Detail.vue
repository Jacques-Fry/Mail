<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" />
    <scroll class="content" :probeType="0" ref="scroll">
      <detail-swiper :topImg="goods.topImg" />
      <detail-data-show :goods="goods" />
      <detail-store class="detail-store" />
      <detail-comment class="detail-comment" />
      <detailImg-show :imgList="goods.imgShowList" @imgLoad="imgLoad" class="detail-img-show" />
    </scroll>
  </div>
</template>

<script type="text/javascript">
import scroll from "components/common/scroll/Scroll";

import detailNavBar from "./childComps/DetailNavBar";
import detailSwiper from "./childComps/DetailSwiper";
import detailDataShow from "./childComps/DetailDataShow";
import detailStore from "./childComps/DetailStore";
import detailComment from "./childComps/DetailComment";
import detailImgShow from "./childComps/DetailImgShow";

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
    detailStore,
    detailComment,
    detailImgShow
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
        selected: "米白,M,1个",
        delivery: "北京朝阳区三环到四环之间 现货",
        freight: "在线支付免运费",
        imgShowList: [
          "//img13.360buyimg.com/imgzone/jfs/t1/41697/24/11292/178630/5d4bd6aeE0116c8b4/4c6d96424e2fc7f0.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/45125/29/7210/109216/5d4bd6afEe2a0e3a8/43167467f515fc05.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/51049/27/7074/114564/5d4bd6afE40a4c678/79c7cc2cbe853363.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/69542/20/6621/78653/5d4bd6afE00bb4c9f/2841c1d264e0f143.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/77288/33/6639/635376/5d4bd6b0E2d585706/54b4e0ee72a5a619.png!q70.webp",
          "//img10.360buyimg.com/imgzone/jfs/t1/65082/17/6593/26560/5d4bd6b1E44b63bb8/7f5e3fdf452c3518.png!q70.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/64614/35/6576/251856/5d4bd6b3Ec01ab441/e099ed20c589c07d.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/54220/3/7120/255450/5d4bd6b4E965fc6ac/12d798f916173afc.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/46647/14/6893/151861/5d4bd6b4E8e5af14b/4442fd257bfc68b3.jpg!q70.dpg.webp",
          "//img10.360buyimg.com/imgzone/jfs/t1/61203/15/6742/178894/5d4bd6b5Efc58f016/d6478998d15c5695.jpg!q70.dpg.webp",
          "//img10.360buyimg.com/imgzone/jfs/t1/69437/24/6633/87602/5d4bd6b5Eeed5a4a5/fc27265e2d41b416.jpg!q70.dpg.webp",
          "//img10.360buyimg.com/imgzone/jfs/t1/81372/34/6674/107344/5d4bd6b6E51683d48/6e28d0caa0289d27.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/56893/36/7211/128358/5d4bd6b6Ebc547ca5/a0a76494951ec5b7.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/45623/28/7140/163459/5d4bd6b7Eb3569a59/0b4adf887161fd3a.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/73461/24/6663/68993/5d4bd6b7Eeb336624/469addbd27b36c49.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/59311/14/7158/79849/5d4bd6b7E6ed2ebd2/9244bfd04300e34c.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/75562/8/6510/76289/5d4bd6b8E3b450a3d/cd0d1bb288aff415.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/60360/35/6661/197913/5d4bd6b8E8e486b6b/99ab85a0b2802522.jpg!q70.dpg.webp",
          "//img10.360buyimg.com/imgzone/jfs/t1/50948/21/7143/175188/5d4bd6b9E50aa1c8d/1bbf3d10faa27cca.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/80446/33/6621/104282/5d4bd6b9E78f5ade2/e9dbc993c904acde.jpg!q70.dpg.webp",
          "//img10.360buyimg.com/imgzone/jfs/t1/77845/17/6676/121605/5d4bd6baEf617c988/03e75c009f6adc4b.jpg!q70.dpg.webp"
        ]
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
        selected: "杏色,M,1个",
        delivery: "北京朝阳区三环到四环之间 现货",
        freight: "在线支付免运费",
        imgShowList: [
          "//img13.360buyimg.com/imgzone/jfs/t1/92829/36/182/406988/5da89adaE26b68d6b/8adc1e5867e54013.jpg!q70.dpg.webp",
          "//img30.360buyimg.com/imgzone/jfs/t1/69763/39/13265/52527/5da89adaEa5761112/4aaf27ef9e8fa5ae.jpg!q70.dpg.webp",
          "//img20.360buyimg.com/imgzone/jfs/t1/63262/31/13188/434063/5da89adaE0b5ef31f/f5b63c85da44d734.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/45372/40/13821/395171/5da89adbE0621f90a/ecd1f5c529f26d2b.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/53866/34/13797/391469/5da89adcEc7ff8064/94c1eaf2b43f7196.jpg!q70.dpg.webp",
          "//img30.360buyimg.com/imgzone/jfs/t1/76493/36/13094/356313/5da89adcE1146f6d0/93cc0cecb0504abc.jpg!q70.dpg.webp",
          "//img20.360buyimg.com/imgzone/jfs/t1/90710/9/182/379093/5da89addE7b7d1bcf/2e751dd2c05fdc5a.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/51044/26/13846/361844/5da89adeE5a47ce4c/a61ed60711a63141.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/49066/6/13677/513790/5da89adfE3e9c0b95/6cf8b29325cc0294.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/91379/6/179/433459/5da89ae1Efc9c5d21/24c36ba182d9a7b8.jpg!q70.dpg.webp",
          "//img30.360buyimg.com/imgzone/jfs/t1/76442/21/13427/396219/5da89ae1Eb35c8941/8691bac2f5b1d36b.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/54932/27/13557/411463/5da89ae2Ea473c98f/bf1cbecba26c8e3a.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/105133/12/166/401696/5da89ae2E5f71a165/2c1702ffaf4a52c2.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/87228/11/171/401513/5da89ae3Eabfc4d09/b4e7dabef09ca4c0.jpg!q70.dpg.webp",
          "//img30.360buyimg.com/imgzone/jfs/t1/47336/19/13764/446055/5da89ae4E50c2d90f/253380e7d66e25ff.jpg!q70.dpg.webp",
          "//img20.360buyimg.com/imgzone/jfs/t1/88485/31/187/495731/5da89ae5E316f34cb/acc8f321f2ae13af.jpg!q70.dpg.webp",
          "//img20.360buyimg.com/imgzone/jfs/t1/65591/26/13387/382886/5da89ae7Ea2e1b37b/d7e3565aba157bfa.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/55666/37/13861/383259/5da89ae8Ee44fe161/c5e70025bef81e7e.jpg!q70.dpg.webp",
          "//img11.360buyimg.com/imgzone/jfs/t1/72959/25/13363/395712/5da89aeaEba86d0b2/b701776c73858c0e.jpg!q70.dpg.webp",
          "//img20.360buyimg.com/imgzone/jfs/t1/99795/9/177/403601/5da89aecEa36df53f/42b45777f8ed5022.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/89748/4/199/437785/5da89aedEd2ec8082/f74c00fe61c93b68.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/78653/1/13188/546320/5da89aeeEdcc80829/f71914d4214507bd.jpg!q70.dpg.webp",
          "//img30.360buyimg.com/imgzone/jfs/t1/72221/16/13302/457612/5da89af0E8e687df8/8033bfc6945753be.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/74779/24/13209/427801/5da89af0Ecd128b04/f7899d0eff7a1fbe.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/63180/7/13349/419507/5da89af0E2614401f/42095c9d0ddb5562.jpg!q70.dpg.webp",
          "//img11.360buyimg.com/imgzone/jfs/t1/74755/38/13351/401812/5da89af2E1dbe88df/2d3ce63ea16d40f8.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/84532/28/13113/417829/5da89af2E57ebfa95/e4a7ffa25eccf658.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/75523/14/13128/458480/5da89af3Ea2dfbfbe/700fe2cfa18cb2dc.jpg!q70.dpg.webp"
        ]
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
        selected: "象牙白,M,1个",
        delivery: "北京朝阳区三环到四环之间 现货",
        freight: "顺丰快递 20元",
        imgShowList: [
          "//img11.360buyimg.com/imgzone/jfs/t1/9171/3/11180/443192/5c25f759E87c247cb/343346a58e7345d0.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/29052/4/3331/532622/5c25f75aE2bc07fbd/2b76c47d7b9df1ba.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/20529/23/3272/344217/5c25f75bE0c076ceb/419c3dc184523d89.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/15345/36/3320/206849/5c25f75bEf8704c53/6374a8c36aa9fa0d.jpg!q70.dpg.webp",
          "//img10.360buyimg.com/imgzone/jfs/t1/24057/39/3380/144691/5c25f75cEd89bf2d2/5aa1e19e5a2a2ab6.png!q70.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/7323/21/10866/127323/5c25f75cE9c4d3f90/6d8670c0fde0ba34.png!q70.webp",
          "//img11.360buyimg.com/imgzone/jfs/t1/9148/21/10748/93512/5c25f75dEd1048f67/7c5262a79bf5d5ef.png!q70.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/19803/29/3310/266503/5c25f75dEe88343de/3ecbffc627a2bc43.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/14102/10/3321/259342/5c25f75eEa6c7f1bb/9687826290195e99.jpg!q70.dpg.webp",
          "//img14.360buyimg.com/imgzone/jfs/t1/24734/11/3294/249261/5c25f75fE958c7ff0/842c2686e749e30b.jpg!q70.dpg.webp",
          "//img10.360buyimg.com/imgzone/jfs/t1/29648/10/3389/314624/5c25f75fE33aa2304/141a0159a2504cfd.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/7243/35/10856/185837/5c25f762Eee09168d/0fdaed660edf4dcd.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/24286/31/3293/301258/5c25f763E94901a01/bd4b3c187198a36b.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/26019/13/3376/208891/5c25f763E4753dfff/3ac082baef155cd7.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/27079/28/3265/251875/5c25f764Ed0b83540/62c18040b82c72d4.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/14185/19/3378/196960/5c25f765Ef9647640/06f4e58db5a111c2.jpg!q70.dpg.webp",
          "//img12.360buyimg.com/imgzone/jfs/t1/17182/29/3317/63501/5c25f768Ef314fd2c/c1948404a7893cb0.jpg!q70.dpg.webp",
          "//img13.360buyimg.com/imgzone/jfs/t1/9705/26/10998/295469/5c25f769Edbc0fe34/c539903fd720b5da.jpg!q70.dpg.webp",
          "//img11.360buyimg.com/imgzone/jfs/t1/26613/19/3381/160268/5c25f76bE21cf6673/647604febcc699f4.jpg!q70.dpg.webp",
          "//img10.360buyimg.com/imgzone/jfs/t1/15946/9/3291/21309/5c25f76bE7964b6c7/c53f55dd85af89aa.png!q70.webp"
        ]
      };
    },
    imgLoad() {
      this.$refs.scroll.refresh();
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
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
.detail-comment,
.detail-img-show,
.detail-store {
  border-top: 5px solid #eee;
}
</style>
