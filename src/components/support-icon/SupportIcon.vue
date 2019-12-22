<template>
  <span class="support-icon" :class="iconClass"></span>
</template>
<script>
export default {
  data() {
    return {
      classMap: ["decrease", "discount", "special", "invoice", "guarante"]
    };
  },
  props: {
    size: {
      type: Number,
      default: 1
    },
    type: {
      type: Number
    }
  },
  computed: {
    iconClass() {
      return `icon-${this.size} ${this.classMap[this.type]}`;
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'common/style/mixin';
.support-icon{
  display: inline-block;
  background-repeat: no-repeat;
  vertical-align: middle;
  padding-right: 4px;
}

.icon-1 {
  width: 12px;
  height: 12px;
  background-size: 12px 12px;

  &.decrease {
    @include bg-image('decrease_1');
  }

  &.discount {
    @include bg-image('discount_1');
  }

  &.guarantee {
    @include bg-image('guarantee_1');
  }

  &.invoice {
    @include bg-image('invoice_1');
  }

  &.special {
    @include bg-image('special_1');
  }
}

.icon-2 {
  width: 16px;
  height: 16px;
  background: 16px 16px;

  &.decrease {
    @include bg-image('decrease_2');
  }

  &.discount {
    @include bg-image('discount_2');
  }

  &.guarantee {
    @include bg-image('guarantee_2');
  }

  &.invoice {
    @include bg-image('invoice_2');
  }

  &.special {
    @include bg-image('special_2');
  }
}

.icon3 {
  width: 12px;
  height: 12px;
  background: 12px 12px;

  &.decrease {
    @include bg-image('decrease_3');
  }

  &.discount {
    @include bg-image('discount_3');
  }

  &.guarantee {
    @include bg-image('guarantee_3');
  }

  &.invoice {
    @include bg-image('invoice_3');
  }

  &.special {
    @include bg-image('special_3');
  }
}

.icon4 {
  width: 16px;
  height: 16px;
  background: 16px 16px;

  &.decrease {
    @include bg-image('decrease_4');
  }

  &.discount {
    @include bg-image('discount_4');
  }

  &.guarantee {
    @include bg-image('guarantee_4');
  }

  &.invoice {
    @include bg-image('invoice_4');
  }

  &.special {
    @include bg-image('special_4');
  }
}
</style>