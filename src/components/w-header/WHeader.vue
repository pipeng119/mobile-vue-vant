<template>
  <div class="header" @click="showDetail">
    <div class="header-wrapper">
      <div class="avatar">
        <img
          :src="seller.avatar"
          alt="图片加载失败"
          width="64"
          height="64"
        />
      </div>

      <div class="content">
        <div class="title">
          <div class="brand"></div>
          <div class="name">粥品香坊(大运村)</div>
        </div>
        <div class="description">蜂鸟转送/38分钟送达</div>
        <div class="support">
          <support-icon :size="1" :type="0"></support-icon>
          <span>在线支付满28减5，满50减10</span>
        </div>
      </div>

      <div class="support-count">
        <span>5个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>

    <div class="background">
      <img
        src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"
        width="100%"
        height="100%"
      />
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin"></span>
      <span class="bulletin-content">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <van-popup v-model="isShowDetail" get-container="body" :overlay="false" >
      <w-header-detail @close="choseDetail"></w-header-detail>
    </van-popup>
  </div>
</template>
<script>
import SupportIcon from "components/support-icon/SupportIcon";
import WHeaderDetail from 'components/w-header-detail/WHeaderDetail';
import { getSeller } from "api";

export default {
  data() {
    return {
      isShowDetail:false
    };
  },
  props: {
    seller: {
      type: Object,
      default: () => {}
    }
  },
  watch:{
    seller(n,o){
      // console.log(n)
    }
  },
  components: {
    SupportIcon,
    WHeaderDetail
  },
  methods: {
    showDetail(){
      this.isShowDetail = true;
    },
    choseDetail(){
      this.isShowDetail = false;
    }
  },
  created() {
  },
  mounted(){
    // console.log(this.seller)
  }
};
</script>
<style lang="scss" scoped>
@import "./";
</style>