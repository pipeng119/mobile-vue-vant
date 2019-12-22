<template>
  <van-tabs v-model="initialIndex" swipeable line-width="0">
    <van-tab v-for="(tab,index) in tabs" :key="index" :title="tab.title">
      <component :is="tab.component" :data="tab.data" ref="conponent"></component>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  name: "WTab",
  data() {
    return {};
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  computed:{
      initialIndex:{
          get(){
              return this.tabIndex
          },
          set(newIndex){
              this.$emit("changeTab", newIndex);
          }
      }
  },
  methods: {
  },
  mounted(){
  }
};
</script>

<style lang="scss" scoped>
@import "./";
</style>