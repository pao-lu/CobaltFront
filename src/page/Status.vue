<script setup>
import "@/assets/Container.less"
import "@/assets/panel.less"

import ResultVue from "@/components/Result.vue";
import Table from "@/components/Table.vue";
import "@/assets/ico.less"


</script>

<template>
    <div class="container">
        <div class="panel">
            <h3>评测状态</h3>
            <p>仅显示最近20条状态</p>
            <hr />
            <Table>
                <template v-slot:thead>
                    <tr>
                        <th style="width:5em" class="right">编号</th>
                        <th>时间</th>
                        <th>结果</th>
                        <th style="width:5em" class="right">题目</th>
                        <th style="width:5em" class="right">时间</th>
                        <th style="width:5em" class="right">内存</th>
                        <th style="width:5em" class="right">代码长度</th>
                        <th style="width:5em" class="right">语言</th>
                        <th style="width:10em" class="right">用户</th>
                    </tr>
                </template>

                <template v-slot:tbody>
                    <tr v-for="i in 20">
                        <td data-label="编号" class="right">{{ 100 - i }}</td>
                        <td data-label="时间" class="left">2022-01-01 08:00:00</td>
                        <td data-label="结果" class="left">
                            <ResultVue :i="i % 11"></ResultVue>
                        </td>
                        <td data-label="题目编号" class="right">{{ i }}</td>
                        <td data-label="运行时间" class="right">{{ Math.round(Math.random() * 1000) }}MS</td>
                        <td data-label="运行内存" class="right">{{ Math.round(Math.random() * 1000) }}KiB</td>
                        <td data-label="代码长度" class="right">{{ Math.round(Math.random() * 1000) }}B</td>
                        <td data-label="语言" class="right">C++</td>
                        <td data-label="用户" class="right">asdfghjklqwertyui</td>
                    </tr>
                </template>
            </Table>
            <hr />
        </div>
    </div>
</template>

<style lang="less" scoped>

th,
td.left {
    text-align: left;
}

th.right,
td.right {
    text-align: right;
}

table {
    width: 100%;
}

</style>