<script setup>
import "@/assets/ico.less"

import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import TextArea from "@/components/TextArea.vue"
import InputBox from "../InputBox.vue";
import { ref } from "vue";

const file_selector = ref(null);
const code = ref("");
const emit = defineEmits(['close'])


</script>
<template>
    <Modal @close="$emit('close')" class="xl">
        <h3>提交代码</h3>
        <p>题目：<InputBox :value="'1. A+B'" readonly></InputBox>
        </p>
        <p>
            语言：
            <select>
                <option value="cpp14">C++ 14</option>
                <option value="cpp11">C++ 11</option>
                <option value="cpp03">C++ 03</option>
                <option value="c">C</option>
                <option value="java">Java</option>
                <option value="py3">Python3</option>
            </select>
        </p>
        <p>大小限制：65535字节</p>
        <p>
            <Button class="primary" @click="file_selector.click()"><i class="ico-upload"></i> 选择文件</Button>
            <input type="file" ref="file_selector" style="width:1px; height: 1px; opacity: 0; pointer-events: none;"
                tabindex="-1">
        </p>
        <p>
            <TextArea class="fluid" style="font-family: monospace;" v-model="code" maxlength="65536"></TextArea>
        </p>
        <p v-if="code.length > 65535"><i class="ico-ole"></i> 代码长度超出大小限制</p>
        <p v-if="code.length === 0"><i class="ico-ole"></i> 代码不能为空</p>
        <p style="text-align: right">
            <Button class="primary" v-if="code.length <= 65535 && code.length > 0"><i class="ico-wait"></i> 提交</Button>
            <Button class="flat" @click="$emit('close')"><i class="ico-wa"></i> 放弃</Button>
        </p>
    </Modal>
</template>