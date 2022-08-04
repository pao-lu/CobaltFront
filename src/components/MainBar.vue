<script setup>

defineProps({
  title: String
})

</script>

<template>
  <div class="appbar">
      <slot></slot>
      <span class="title">{{ title }}</span>
  </div>
</template>


<style lang="less" scoped>
@import "../assets/colors.less";

/**
 * MUI Appbar
 */
.appbar {
  min-height: 56px;
  line-height: 56px;
}

@media (orientation: landscape) and (max-height: 480px) {
  .appbar {
    min-height: 48px;
    line-height: 48px;
  }
}

@media (min-width: 480px) {
  .appbar {
    min-height: 64px;
    line-height: 64px;
  }
}

.appbar {
  background-color: @primary-color;
  color: #fff;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    vertical-align: middle;
  }
}
</style>