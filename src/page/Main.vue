<script setup>

import "@/assets/Container.less"
import "@/assets/panel.less"

import Pagination from "@/components/Pagination.vue";
import Button from "@/components/Button.vue"
import "@/assets/ico.less"

</script>

<template>
    <div class="container">
        <div class="panel">
            <h1>在线评测系统欢迎你！</h1>
        </div>
        <div class="panel">
            <h3>公告</h3>
            <Pagination></Pagination>
            <hr>
            <h3>Onlinejudge上线了！</h3>
            <p>
                <span><i class="ico-user"></i>用户：123456</span>
                <span style="padding-left:1em"><i class="ico-clock"></i>发表时间：2022-01-01</span>
            </p>
            <p>11111111111111111...</p>
            <Button class="primary flat" @click="b_shown = true">查看全文<i class="ico-right"></i></Button>

            <h3>Onlinejudge上线了！</h3>
            <p>
                <span><i class="ico-user"></i>用户：123456</span>
                <span style="padding-left:1em"><i class="ico-clock"></i>发表时间：2022-01-01</span>
            </p>
            <p>11111111111111111</p>
            <Pagination></Pagination>
        </div>
    </div>
</template>
