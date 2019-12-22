<template>
  <div id="app">
    <w-header :seller="seller"></w-header>
    <w-tab :tabs="tabs" :tabIndex="tabIndex" @changeTab="changeTab($event)"></w-tab>
  </div>
</template>
<script>
import WHeader from "components/w-header/WHeader";
import WHeaderDetail from "components/w-header-detail/WHeaderDetail";
import WTab from "components/w-tab/WTab";
import WGoods from "components/w-goods/WGoods";
import WRating from "components/w-ratings/WRatings";
import WSeller from "components/w-seller/WSeller";

import { getSeller, getGoods } from "api";
export default {
  data() {
    return {
      seller: {},
      goods: [],
      tabIndex: 0,
      tabs: [
        {
          title: "商品",
          component: WGoods,
          data: {
            seller: this.goods
          }
        },
        {
          title: "评价",
          component: WRating,
          data: {
            seller: this.seller
          }
        },
        {
          title: "商家",
          component: WSeller,
          data: {
            seller: this.seller
          }
        }
      ]
    };
  },
  components: {
    WHeader,
    WHeaderDetail,
    WTab
  },
  methods: {
    _getSeller() {
      getSeller().then(seller => (this.seller = seller));
    },
    _getGoods() {
      getGoods().then(goods => (this.goods = goods));
    },
    changeTab(event) {
      this.tabIndex = event;
    }
  },
  created() {
    this._getSeller();
    this._getGoods();
  },
  mounted() {
  }
};
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  .van-tabs--line {
    flex: 1;
    display: flex;
    flex-direction: column;

    .van-tabs__content {
      flex: 1;

      .van-tab__pane {
        height: 100%;
      }
    }
  }
}
</style>