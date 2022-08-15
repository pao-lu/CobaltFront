<script setup>
import "@/assets/Container.less"
import "@/assets/panel.less"

import Pagination from "@/components/Pagination.vue";
import Button from "@/components/Button.vue";
import Table from "@/components/Table.vue";
import InputBox from "@/components/InputBox.vue";
import "@/assets/ico.less"


</script>

<template>
    <div class="container">
        <div class="panel">
            <h3>题目列表</h3>
            <Pagination :raw="true"></Pagination>
            <InputBox class="small" style="width:15em" placeholder="题目标题"></InputBox>
            <Button class="small primary raised">查找</Button>
            <Button class="small primary raised"><i class="ico-label"></i>选择标签</Button>
            <hr />
            <Table class="strip">
                <template v-slot:thead>
                    <tr>
                        <th style="width:1.5em;text-align: middle"></th>
                        <th style="width:5em" class="right">编号</th>
                        <th>标题</th>
                        <th style="width:5em" class="right">解决</th>
                        <th style="width:5em" class="right">提交</th>
                        <th style="width:200px">比例</th>
                    </tr>
                </template>

                <template v-slot:tbody>
                    <tr v-for="i in 100">
                        <td data-label="结果" class="left mono">
                            <span v-if="i % 3 == 0" class=""></span>
                            <span v-if="i % 3 == 1" class="green"><i class="ico-ac"></i></span>
                            <span v-if="i % 3 == 2" class="red"><i class="ico-wa"></i></span>
                        </td>
                        <td data-label="编号" class="right">{{ i }}</td>
                        <td data-label="标题" class="left">
                            <router-link :to="'/p/'+i" custom v-slot="{ href, route, navigate, isActive, isExactActive }">
                                <a :href="href" @click="navigate">A+B</a></router-link>
                        </td>
                        <td data-label="解决人数" class="right"><a href="javascript:void(0)">{{ i }}</a></td>
                        <td data-label="提交人数" class="right"><a href="javascript:void(0)">100</a></td>
                        <td data-label="比例">
                            <div class="inner" :style="{ width: (Math.random() * 100) + '%' }">
                                {{ Math.floor(i / 100 * 100) }}.{{ Math.floor(i / 100 * 1000) % 10 }}%</div>
                        </td>
                    </tr>
                </template>
            </Table>
            <hr />
            <Pagination :raw="true"></Pagination>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "@/assets/colors.less";

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

.red {
    color: #AA0000;
}

.green {
    color: darkgreen;
}


.inner {
    text-align: center;
    display: block;
    background-color: greenyellow;
    height: 100%;
    color: darkgreen;
    // text-shadow: white 0 1px 1px,white 1px 0px 1px,white -1px 0 1px,white 0 -1px 1px;
    // font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}
</style>