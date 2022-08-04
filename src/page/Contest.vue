<script setup>
import "@/assets/Container.less"
import "@/assets/panel.less"

import Pagination from "@/components/Pagination.vue";
import Button from "@/components/Button.vue";
import Table from "@/components/Table.vue";
import "@/assets/ico.less"


</script>

<template>
    <div class="container">
        <div class="panel">
            <h3>比赛列表</h3>
            <Pagination :raw="true"></Pagination>
            <hr />
            <Table>
                <template v-slot:thead>
                    <tr>
                        <th>名称</th>
                        <th>开始时间</th>
                        <th>结束时间</th>
                        <th>时长</th>
                        <th>人数</th>
                        <th>操作</th>
                    </tr>
                </template>

                <template v-slot:tbody>
                    <tr>
                        <td data-label="名称">测试比赛1</td>
                        <td data-label="开始时间">2022-01-01 08:00:00</td>
                        <td data-label="结束时间">2022-01-01 12:00:00</td>
                        <td data-label="时长">04:00:00</td>
                        <td data-label="人数">16</td>
                        <td>
                            <Button class="primary raised thin">报名</Button>
                            <Button class="primary raised thin">进入</Button>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="名称">测试比赛1</td>
                        <td data-label="开始时间">2022-01-01 08:00:00</td>
                        <td data-label="结束时间">2022-01-01 12:00:00</td>
                        <td data-label="时长">04:00:00</td>
                        <td data-label="人数">16</td>
                        <td>
                            <Button class="primary raised thin">报名</Button>
                            <Button class="primary raised thin">进入</Button>
                        </td>
                    </tr>
                </template>
            </Table>
            <hr />
            <Pagination :raw="true"></Pagination>
        </div>
    </div>
</template>

<style lang="less">
table,
tr,
td,
th {
    text-align: center;
}

table {
    width: 100%;
}
</style>