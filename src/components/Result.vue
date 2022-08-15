<script setup>
import "@/assets/ico.less"

defineProps({
    i: {
        type: Number,
    }
})
</script>

<template>
    <span class="mono">
        <span v-if="i == 0"><i class="ico-wait"></i> 排队等待</span>
        <span v-if="i == 1" class="primary"><i class="ico-build"></i> 正在编译</span>
        <span v-if="i == 2" class="red"><i class="ico-ce"></i> 编译失败</span>
        <span v-if="i == 3" class="primary"><i class="ico-run"></i> 正在运行</span>
        <span v-if="i == 4" class="green"><i class="ico-ac"></i> 测试通过</span>
        <span v-if="i == 5" class="red"><i class="ico-wa"></i> 答案错误</span>
        <span v-if="i == 6" class="red"><i class="ico-re"></i> 运行错误</span>
        <span v-if="i == 7" class="red"><i class="ico-mle"></i> 内存超限</span>
        <span v-if="i == 8" class="red"><i class="ico-tle"></i> 时间超限</span>
        <span v-if="i == 9" class="red"><i class="ico-ole"></i> 输出超限</span>
        <span v-if="i == 10" class="red"><i class="ico-wall"></i> 非法操作</span>
        <span v-if="i == 11" class="purple"><i class="ico-warn"></i> 系统错误</span>

        <!-- <span v-if="i == 0"><i class="ico-wait"></i> Waiting</span>
        <span v-if="i == 1" class="primary"><i class="ico-build"></i> Compiling</span>
        <span v-if="i == 2" class="red"><i class="ico-ce"></i> Compile Error</span>
        <span v-if="i == 3" class="primary"><i class="ico-run"></i> Running</span>
        <span v-if="i == 4" class="green"><i class="ico-ac"></i> Accept</span>
        <span v-if="i == 5" class="red"><i class="ico-wa"></i> Wrong Answer</span>
        <span v-if="i == 6" class="red"><i class="ico-re"></i> Run Error</span>
        <span v-if="i == 7" class="red"><i class="ico-mle"></i> Memory Limit</span>
        <span v-if="i == 8" class="red"><i class="ico-tle"></i> Time Limit</span>
        <span v-if="i == 9" class="red"><i class="ico-ole"></i> Output Limit</span>
        <span v-if="i == 10" class="red"><i class="ico-wall"></i> Illegal Operation</span>
        <span v-if="i == 10" class="purple"><i class="ico-warn"></i> System Error</span> -->
    </span>
</template>

<style lang="less" scoped>
@import "@/assets/colors.less";

.mono {
    font-family: monospace;
}

.primary {
    color: @primary-color;
}

.red {
    color: #AA0000;
}

.green {
    color: darkgreen;
}

.purple {
    color: #9900AA;
}
</style>