<script setup>

defineProps({
  direction: {
    type: Number,
    default: 1
  },
  errmsg: {
    type: String,
    default: ""
  }
})

</script>

<template>
  <div v-if="errmsg" :class="{ d1: direction === 1 }">{{ errmsg }}</div>
</template>




<style lang="less" scoped>
div {
  position: relative;
  background: rgb(211, 47, 47);
  border: 1px solid white;
  color: white;
  padding: 5px;
  margin-top: 7px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

div.d1 {

  &:after,
  &:before {
    bottom: 100%;
    left: 0;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(213, 0, 0, 0);
    border-bottom-color: rgb(211, 47, 47);
    border-width: 7px;
    margin-left: 2px;
  }

  &:before {
    border-color: rgba(245, 245, 245, 0);
    border-bottom-color: white;
    border-width: 9px;
    margin-left: 0;
  }
}
</style>