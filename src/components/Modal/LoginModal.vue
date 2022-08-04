<script setup>
import Modal from '../../components/Modal.vue';
import InputBox from '../../components/InputBox.vue';
import Button from "@/components/Button.vue";

</script>
<template>
    <Modal @close="$emit('close')" style="text-align: center;" class="thin">
        <h1>登录</h1>
        <div style="height: 3em"></div>
        <div>
            <div class="label">
                <i class="ico-user"></i>
            </div>
            <InputBox type="text" style="width: 302px;" placeholder="帐号"></InputBox>
        </div>
        <div>
            <div class="label">
                <i class="ico-key"></i>
            </div>
            <InputBox type="password" style="width: 302px;" placeholder="密码"></InputBox>
        </div>
        <div style="height: 5em"></div>
        <div style="text-align: right;">
            <Button class="primary flat" style="float: left">找回密码</Button>
            <Button class="primary raised">登录</Button>
            <Button class="primary flat" @click="$emit('close')">取消</Button>
        </div>
    </Modal>
</template>

<style lang="less" scoped>
.label {
    vertical-align: bottom;
    box-sizing: border-box;
    // padding: 0 0.5em;
    height: 36px;
    width: 36px;
    line-height: 32px;
    margin: 3px;
    border: 2px solid gray;
    display: inline-block;

}
</style>