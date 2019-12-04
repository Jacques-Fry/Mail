<template>
  <div>
    <div class="prompt">
      <span>提示:</span>页面因没有数据而无法渲染,我们为您找到以下内容
    </div>
    <div class="title">每日一笑</div>
    <div class="joke">{{joke}}</div>
    <div class="exchange" @click="exchangeJoke">换一个</div>
  </div>
</template>

<script>
import { getJoke, getWeather } from "network/home.js";
export default {
  name: "Profile",
  data() {
    return {
      joke: ""
    };
  },
  activated() {
    this.exchangeJoke();

    // getWeather("武汉").then(res => {
    //   console.log(res);
    // });
  },
  methods: {
    exchangeJoke() {
      getJoke().then(res => {
        this.joke = res;
        
      });
    }
  }
};
</script>

<style scoped>
.prompt {
  text-align: center;

  line-height: 30px;
  font-size: 14px;
}
.prompt span {
  color: var(--color-high-text);
}

.title {
  text-align: center;

  line-height: 50px;
  font-size: 20px;

  color: var(--color-high-text);
}
.joke {
  text-align: justify;

  text-indent: 32px;
  padding: 0 5px;
  min-height: 150px;
}
.exchange {
  text-align: center;

  line-height: 50px;
  font-size: 14px;

  color: var(--color-high-text);
}
</style>