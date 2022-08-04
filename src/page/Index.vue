<script setup>
import { ref, watch } from 'vue'
import { useStore } from '@/stores/modal-store'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router'

import MainBar from "@/components/MainBar.vue";
import Button from "@/components/Button.vue";
import Loader from "@/components/Loader.vue";
import LoginModal from '@/components/Modal/LoginModal.vue';
import RegisterModal from "@/components/Modal/RegisterModal.vue"

import "../assets/Normalize.less";
// import "../assets/grid.less";

const { c } = storeToRefs(useStore())
const get_count = c

const sidebar_hide = ref(false);
const loading = ref(false);
const b_show_login = ref(false);
const b_show_register = ref(false);

const content = ref(null);

const $route = useRoute();

const navLinks = [
  ['主页', '/'],
  ['比赛', '/c'],
  ['题目', '/p'],
  ['状态', '/s'],
  ['讨论', '/f'],
];

watch($route, () => {
  loading.value = false;
});

// 创建外层div，让它始终显示滚动条
const outer = document.createElement('div');
outer.style.visibility = 'hidden';
// 强制显示滚动条
outer.style.overflow = 'scroll';
// needed for WinJS apps
outer.style.msOverflowStyle = 'scrollbar';
document.body.appendChild(outer);
// 创建内层div
const inner = document.createElement('div');
outer.appendChild(inner);
// 外层div减去内层div，得到的就是滚动条的宽度（横向就是高度）
const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
// 移除div
outer.parentNode.removeChild(outer);

function getScrollBarWidth() {
  if (content.value.scrollHeight > content.value.offsetHeight)
    return scrollbarWidth + 'px';
}

</script>

<template>
  <div :class="{ 'hide-sidedrawer': sidebar_hide }">
    <div class="sidedrawer">
      <router-link :to="obj[1]" custom v-slot="{ navigate, isExactActive }" v-for="(obj, i) in navLinks"
        :key="`link${i}`"><Button :class="{
          ok: isExactActive,
          primary: isExactActive,
          flat: !isExactActive,
        }" @click="
  isExactActive || (loading = true);
navigate($event);
">{{ obj[0] }}</Button></router-link>
    </div>
    <header>
      <MainBar style="padding: 0 1em">
        <Button class="toggle primary" @click="sidebar_hide = !sidebar_hide">☰</Button>

        <span style="float: right">
          <Button class="primary thin" @click="b_show_register = true"><i class="ico-user"></i>注册</Button>
          <Button class="primary thin" @click="b_show_login = true"><i class="ico-user"></i>登录</Button>
        </span>
      </MainBar>
    </header>
    <div class="content" ref="content" :style="
      {
        'overflow': (get_count > 0 ? 'hidden' : undefined),
        'padding-right': (get_count > 0 ? getScrollBarWidth() : undefined)
      }
    ">
      <Loader v-if="loading" class="inline" style="margin: 1em"></Loader>
      <router-view v-else></router-view>
    </div>
  </div>
  <LoginModal v-if="b_show_login" @close="b_show_login = false"></LoginModal>
  <RegisterModal v-if="b_show_register" @close="b_show_register = false"></RegisterModal>
</template>

<style lang="less" scoped>
.main {
  background-color: #eee;
}

.sidedrawer {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 200px;
  left: -200px;
  overflow: auto;
  z-index: 2;
  background-color: #fff;
  transition: transform 0.2s;

  button {
    display: block;
    // padding: 15px 22px;
    cursor: pointer;
    background: white;
    width: 100%;
    text-align: left;
    margin: 0;
    height: 48px;

    &:hover {
      background: #e0e0e0;
    }

    &.ok,
    &.ok:active {
      font-weight: bold;
      background: #2196f3;
      color: white;
    }
  }
}

header {
  position: relative;
  top: 0;
  right: 0;
  margin-left: 0;
  z-index: 2;
  transition: margin-left 0.2s;
}

.toggle {
  color: #fff !important;
  cursor: pointer;
  font-size: 20px;
  line-height: 32px;
  width: 32px;
  display: inline-block;
  margin-right: 20px;
  border: 0;
  text-align: center;
  padding: 0;
}

.content {
  background-color: #eee;
  overflow-x: hidden;
  left: 0;
  transition: left 0.2s;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 56px;
}

@media (orientation: landscape) and (max-height: 480px) {
  .content {
    top: 48px;
  }
}

@media (min-width: 480px) {
  .content {
    top: 64px;
  }
}

header {
  margin-left: 200px;
}

.sidedrawer {
  transform: translate(200px);
  box-shadow: 2px 0 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
}

.content {
  left: 200px;
}

.hide-sidedrawer header {
  margin-left: 0;
}

.hide-sidedrawer .sidedrawer {
  transform: translate(0px);
  box-shadow: none;
}

.hide-sidedrawer .content {
  left: 0;
}
</style>