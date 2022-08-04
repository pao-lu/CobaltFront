<script setup>
import { ref } from 'vue';



</script>

<template>
    <input>
</template>

<style lang="less" scoped>
@import url("@/assets/colors.less");

input {
    border: 2px solid gray;
    // border-radius: 8px;
    height: 36px;
    line-height: 36px;
    padding: 0 0.5em;
    margin: 3px;
    box-sizing: border-box;
    vertical-align: middle;

    &:active,
    &:focus {
        border: 2px solid @primary-color;
    }

    &.fluid {
        width: 100%;
    }
    &.small {
        height: 30.6px;
        line-height: 30.6px;
    }
}
</style>