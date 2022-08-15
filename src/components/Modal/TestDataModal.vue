<script setup>
import "@/assets/ico.less"

import Modal from "@/components/Modal.vue";
import Button from "@/components/Button.vue";
import Table from "../Table.vue";
const emit = defineEmits(['close'])


</script>
<template>
    <Modal @close="$emit('close')">
        <h3>测试数据</h3>
        <Button class="primary">显示全部</Button>
        <Button class="primary"><i class="ico-archive"></i> 打包下载</Button>
        100个文件，共12345 MiB
        <Table class="strip">
            <template v-slot:thead>
                <tr>
                    <th></th>
                    <th>名称</th>
                    <th>大小</th>
                    <th>操作</th>
                </tr>
            </template>

            <template v-slot:tbody>
                <tr v-for="i in 10">
                    <td><i class="ico-file"></i> </td>
                    <td data-label="名称">
                        {{ (i + 1) >> 1 }}.{{ i % 2 ? "in" : "out" }}
                    </td>
                    <td data-label="大小">
                        {{ i * 100 }} MiB
                    </td>
                    <td data-label="操作">
                        下载
                    </td>
                </tr>
            </template>
        </Table>
        <hr>
        <p style="text-align: right;">
            <Button class="flat" @click="$emit('close')"><i class="ico-wa"></i> 关闭</Button>
        </p>
    </Modal>
</template>