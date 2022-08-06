<script setup>


defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
    <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea>
</template>

<style lang="less" scoped>
@import url("@/assets/colors.less");

textarea {
    border: 2px solid gray;
    // border-radius: 8px;
    height: 10em;
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