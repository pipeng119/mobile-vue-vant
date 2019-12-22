<template>
  <div class="detail-wrapper">
    <h3 class="title">粥品香坊（大运村）</h3>
    <div class="star-wrapper">
      <w-star :size="48" :score="4"></w-star>
    </div>
    <div class="preferential-box">
      <div class="common-header">
        <div class="line"></div>
        <h4>优惠信息</h4>
        <div class="line"></div>
      </div>
      <ul class="list">
        <li v-for="(item,index) of mockList" :key="index">
          <support-icon :size="1" :type="item.type"></support-icon>
          <span>{{item.content}}</span>
        </li>
      </ul>
    </div>
    <div class="bulletin-box">
      <div class="common-header">
        <div class="line"></div>
        <h4>商家公告</h4>
        <div class="line"></div>
      </div>
      <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
    </div>
    <div class="close" @click="close">
      <span class="icon-close"></span>
    </div>
  </div>
</template>

<script>
import WStar from "components/w-star/WStar";
import SupportIcon from "components/support-icon/SupportIcon";
export default {
  data() {
    return {
      mockList: [
        {
          type: 0,
          content: "在线支付满28减5，满50减10"
        },
        {
          type: 1,
          content: "单人更精彩"
        },
        {
          type: 1,
          content: "清肺雪梨汤8折抢购"
        },
        {
          type: 2,
          content: "特价饮品八折抢购"
        },
        {
          type: 2,
          content: "单人特色套餐"
        }
      ]
    };
  },
  components: {
    WStar,
    SupportIcon
  },
  methods:{
    close(){
      this.$emit('close',false)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./";
</style>