<script setup>
import "@/assets/Container.less"
import "@/assets/panel.less"

import "@/assets/ico.less"

import Button from "@/components/Button.vue";
import SubmitCodeModal from "@/components/Modal/SubmitCodeModal.vue"
import TestDataModal from "@/components/Modal/TestDataModal.vue";
import { ref } from "vue";

const b_show_submit = ref(false);
const b_show_label = ref(false);
const b_show_data = ref(false);
document.title = '1. A+B - 题目 - 在线评测系统'
</script>

<!--
    struct {
        uint8 type;
        vartext markdown;
    };
-->

<template>
    <SubmitCodeModal v-if="b_show_submit" @close="b_show_submit = false"></SubmitCodeModal>
    <TestDataModal v-if="b_show_data" @close="b_show_data = false"></TestDataModal>
    <div class="container">
        <div class="panel">

            <Button class="primary flat" @click="$router.back()">返回</Button>
            <div>
                <div class="operation">
                    <div>
                        <Button class="primary" @click="b_show_submit = true"><i class="ico-wait"></i> 提交代码</Button>
                        <Button class="flat" @click="b_show_submit = true"><i class="ico-stat"></i> 统计数据</Button>
                        <Button class="flat"><i class="ico-run"></i> 提交记录</Button>
                        <Button class="flat" @click="b_show_data = true"><i class="ico-ac"></i> 测试数据</Button>
                        <Button class="flat" @click="b_show_data = true"><i class="ico-file"></i> 附加文件</Button>
                        <Button class="flat" @click="b_show_label = !b_show_label"><i class="ico-label"></i>
                            {{ b_show_label ? '隐藏标签' : '显示标签' }}</Button>

                        <p v-if="b_show_label">
                            <Button class="thin flat primary"><i class="ico-label"></i>系统测试</Button>
                            <Button class="thin flat primary"><i class="ico-label"></i>贪心</Button>
                            <Button class="thin flat primary"><i class="ico-label"></i>模拟</Button>
                            <Button class="thin flat primary"><i class="ico-label"></i>第一届复制粘贴快速操作大赛</Button>

                        </p>
                    </div>
                </div>

                <div class="description">
                    <div>
                        <div style="text-align:center">
                            <h1>1. A+B</h1>
                            <i class="ico-tle"></i> 时间限制：1000MS<br>
                            <i class="ico-mle"></i> 内存限制：256MiB
                        </div>
                        <hr>
                        <div class="inner">
                            <p>学校里有一个水房，水房里一共装有 m 个龙头可供同学们打开水，每个龙头每秒钟的供水量相等，均为 1。</p>
                            <p>现在有名同学准备接水，他们的初始接水顺序已经确定。将这些同学按接水顺序从</p>
                            <pre>10 11 12 1
9 16 13 2
8 15 14 3
7 6 5 4</pre>
                            <p>21 世纪，许多人得了一种奇怪的病：起床困难综合症，其临床表现为：起床难，起床后精神不佳。作为一名青春阳光好少年，atm
                                一直坚持与起床困难综合症作斗争。通过研究相关文献，他找到了该病的发病原因：在深邃的太平洋海底中，出现了一条名为 drd
                                的巨龙，它掌握着睡眠之精髓，能随意延长大家的睡眠时间。正是由于
                                drd
                                的活动，起床困难综合症愈演愈烈，以惊人的速度在世界上传播。为了彻底消灭这种病，atm 决定前往海底，消灭这条恶龙。</p>
                            <p>历经千辛万苦，atm 终于来到了 drd 所在的地方，准备与其展开艰苦卓绝的战斗。drd 有着十分特殊的技能，他的防御战线能够使用一定的运算来改变他受到的伤害。具体说来，drd
                                的防御战线由 n
                                扇防御门组成。每扇防御门包括一个运算 op 和一个参数 t，其中运算一定是 OR,XOR,AND 中的一种，参数则一定为非负整数。如果还未通过防御门时攻击力为
                                x，则其通过这扇防御门后攻击力将变为 x op t。最终drd 受到的伤害为对方初始攻击力 x 依次经过所有 n 扇防御门后转变得到的攻击力。</p>
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
                                        <td>输出<a class="copy" href="javascript:void(0)"><i class="ico-copy"></i>复制</a>
                                        </td>
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


            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "@/assets/sizes.less";

.panel {
    // text-align: center;

    padding: 2em;
}

.description {
    // width: 100%;
    max-width: 900px;
    margin: 0 auto;

    @media (min-width: @lg-low) {
        padding: 0 200px;

        // display: inline-block;
    }


    p {
        font-size: 12pt;
        line-height: 1.75em;
        text-indent: 24pt;
    }
}

.operation {
    max-width: 900px;
    margin: 0 auto;
    @media (min-width: @lg-low) {
        // max-width: 20%;
        max-width: 200px;
        width: 13%;
        float: left;
        // display: inline-block;
        // vertical-align: top;

        button {
            width: 100%;

            // max-width: 200px;
            text-align: left;
        }
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