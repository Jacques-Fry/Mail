<template>
  <div v-if="Object.keys(goods).length !== 0">
    <h2 class="goods-price">{{goods.price}}</h2>
    <p class="goods-title">{{goods.title}}</p>
    <table class="goods-table" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td>已选</td>
        <td>
          {{goods.selected}}
          <div class="changeMore">···</div>
        </td>
      </tr>

      <tr>
        <td>送至</td>
        <td>
          {{goods.delivery}}
          <div class="changeMore">···</div>
        </td>
      </tr>

      <tr>
        <td>运费</td>
        <td>{{goods.freight}}</td>
      </tr>
    </table>

    <div class="goods-service">
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTOU5O+Q5POU5POQ4O+U4PN80P+M4O+Q4O+Q4POQ5POQ4OuQ4O+Q4O+I4PuQ5PJxkAycAAAAPdFJOUwAf+VSoeAvzws7ka7miLboUzckAAADJSURBVBjTY2BgYGCMWVR5VIABDBid/gPBFwjP/JOzQKKtfjGIzf3fEUSJ/N8AJO21Iao3fQbqqA+AcLi/CzCwfGGAAn8HBnlFMIttBoP4R4b4C2BOzk8G3q8M5w3AnPsLGZj/MKwHW8b6/QED4y8G/QQQx14ZSHwCcWYkMOtvAHOAyvqnPf8KcuMvkAGZP9eDjAQaEO/AwDb/D0gj0GiQpRnTQIYIfUR1DopDGexVIZygz8ieC4B6WyzRBOJtBkZ/pAABBZUWOKgAispF5e7ibycAAAAASUVORK5CYII="
        />
        七天无理由
      </div>
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTOU5O+Q5POU5POQ4O+U4PN80P+M4O+Q4O+Q4POQ5POQ4OuQ4O+Q4O+I4PuQ5PJxkAycAAAAPdFJOUwAf+VSoeAvzws7ka7miLboUzckAAADJSURBVBjTY2BgYGCMWVR5VIABDBid/gPBFwjP/JOzQKKtfjGIzf3fEUSJ/N8AJO21Iao3fQbqqA+AcLi/CzCwfGGAAn8HBnlFMIttBoP4R4b4C2BOzk8G3q8M5w3AnPsLGZj/MKwHW8b6/QED4y8G/QQQx14ZSHwCcWYkMOtvAHOAyvqnPf8KcuMvkAGZP9eDjAQaEO/AwDb/D0gj0GiQpRnTQIYIfUR1DopDGexVIZygz8ieC4B6WyzRBOJtBkZ/pAABBZUWOKgAispF5e7ibycAAAAASUVORK5CYII="
        />
        货到付款
      </div>
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTOU5O+Q5POU5POQ4O+U4PN80P+M4O+Q4O+Q4POQ5POQ4OuQ4O+Q4O+I4PuQ5PJxkAycAAAAPdFJOUwAf+VSoeAvzws7ka7miLboUzckAAADJSURBVBjTY2BgYGCMWVR5VIABDBid/gPBFwjP/JOzQKKtfjGIzf3fEUSJ/N8AJO21Iao3fQbqqA+AcLi/CzCwfGGAAn8HBnlFMIttBoP4R4b4C2BOzk8G3q8M5w3AnPsLGZj/MKwHW8b6/QED4y8G/QQQx14ZSHwCcWYkMOtvAHOAyvqnPf8KcuMvkAGZP9eDjAQaEO/AwDb/D0gj0GiQpRnTQIYIfUR1DopDGexVIZygz8ieC4B6WyzRBOJtBkZ/pAABBZUWOKgAispF5e7ibycAAAAASUVORK5CYII="
        />
        急速审核
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    goods: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.goods-price {
  color: red;
  line-height: 40px;
}
.goods-title {
  font-weight: bold;
  color: #000;
  padding-left: 5px;
  padding-right: 5px;
}
.goods-table {
  width: 100%;
}

.goods-table tr {
  height: 50px;
}

.goods-table tr td {
  border-bottom: 1px solid #dad0d0;
}

.goods-table tr td:nth-of-type(1) {
  padding-left: 5px;
  font-size: 13px;
  width: 60px;
}

.goods-table tr td:nth-of-type(2) {
  color: #000;
  font-size: 13px;
}

.goods-service {
  text-align: center;
  margin-top: 10px;
  display: flex;
  width: 100%;
  font-size: 15px;
  padding-bottom: 20px;
}
.goods-service div {
  flex: 1;
  font-size: 13px;
}

.goods-service img {
  width: 13px;
  height: 13px;
  position: relative;
  top: 2px;
}

.changeMore {
  float: right;
  position: relative;
  right: 15px;
  font-weight: bolder;
}
</style>
