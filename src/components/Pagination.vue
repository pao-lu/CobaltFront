<script setup>
import Button from "@/components/Button.vue";
import { ref, watch } from "vue";
defineProps({
  page: {
    type: Number,
    default: 1
  },
  total: {
    type: Number,
    default: 62
  },
  raw: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <div>
    <!-- <Button class="primary flat small">首页</Button> -->
    <Button v-if="!raw" class="primary flat small">上一页</Button>
    <Button v-if="raw" class="primary tiny" v-for="i in total" :class="{ 'flat': page !== i, 'raised': page === i }">{{ i
    }}</Button>
    <Button v-if="!raw" class="primary flat small">下一页</Button>
    <!-- <Button class="flat small" title="点击跳转页面">第 {{ page + 1 }} 页，共 {{ total }} 页</Button> -->
    <!-- <Button class="primary flat small">尾页</Button> -->
    <!-- 每页数量：
    <select style="display: inline-block">
      <option v-for="(o, i) in i_items_per_page_arr" :key="`page_count-${i}`">
        {{ o }}
      </option>
    </select> -->
  </div>
</template>

<style scoped>
.tiny {
  padding: 0;
  min-width: 2em;
  font-family: monospace;
}
</style>