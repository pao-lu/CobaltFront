<script setup>
import "@/assets/Container.less"
import "@/assets/panel.less"

import "@/assets/ico.less"

import Button from "@/components/Button.vue";
import SubmitCodeModal from "@/components/Modal/SubmitCodeModal.vue"
import { ref } from "vue";

const b_show_submit = ref(false);
</script>

<!--
    struct {
        uint8 type;
        vartext markdown;
    };
-->

<template>
    <SubmitCodeModal v-if="b_show_submit" @close="b_show_submit = false"></SubmitCodeModal>
    <div class="container">
        <div class="panel">
            <h1>1. A+B</h1>
            <p>
                <i class="ico-tle"></i> 时间限制：1000MS<br />
                <i class="ico-mle"></i> 内存限制：256MiB<br />
            </p>
            <div>
                <Button class="primary" @click="b_show_submit = true"><i class="ico-wait"></i> 提交代码</Button>
                <Button class="flat"><i class="ico-run"></i> 提交记录</Button>
                <Button class="flat"><i class="ico-ole"></i> 测试数据</Button>
                <Button class="flat"><i class="ico-label"></i> 显示标签</Button>
            </div>
            <p>
                <Button class="thin flat primary"><i class="ico-label"></i>系统测试</Button>
                <Button class="thin flat primary"><i class="ico-label"></i>贪心</Button>
                <Button class="thin flat primary"><i class="ico-label"></i>动态规划</Button>
                
            </p>
            <hr>
            <div class="description">
                <p>学校里有一个水房，水房里一共装有 m 个龙头可供同学们打开水，每个龙头每秒钟的供水量相等，均为 1。</p>
                <p>现在有名同学准备接水，他们的初始接水顺序已经确定。将这些同学按接水顺序从</p>

                <h3>输入格式</h3>
                <p>123456</p>
                <h3>输出格式</h3>
                <p>123456</p>
                <h3>样例</h3>
                <table class="sample" v-for="i in 2">
                    <tbody>
                        <tr>
                            <td style="width: 50%;">输入<a class="copy" href="javascript:void(0)"><i
                                        class="ico-copy"></i>复制</a></td>
                            <td>输出<a class="copy" href="javascript:void(0)"><i class="ico-copy"></i>复制</a></td>
                        </tr>
                        <tr>
                            <td>
                                <pre>5 3
4 4 1 2 1</pre>
                            </td>
                            <td>
                                <pre>4</pre>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3>提示</h3>
                <p>123456</p>
                <h3>来源</h3>
                <p>第一届XX大赛</p>

            </div>

        </div>
    </div>
</template>

<style lang="less" scoped>
.panel {
    text-align: center;
}

.description {
    text-align: left;
    max-width: 900px;
    margin: 0 auto;
    // display: inline-block;

    p {
        font-size: 12pt;
        line-height: 1.75em;
        text-indent: 24pt;
    }
}

table.sample {
    &+& {
        margin-top: 1em;
    }

    &,
    td,
    th {
        border-collapse: collapse;
        border: 1px solid black;
        font-size: 10pt;
        line-height: 1.2em;
        text-align: left;
        padding: 0.5em;
    }


    td {
        vertical-align: top;
    }

    th {
        vertical-align: middle;
    }

    pre {
        margin: 0;
    }

    .copy {
        float: right;
    }
}
</style>