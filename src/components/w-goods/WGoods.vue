<template>
  <div class="goods-wrap">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
  </div>
</template>
<script>
import { Sidebar, SidebarItem } from "vant";
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {
  }
};
</script>