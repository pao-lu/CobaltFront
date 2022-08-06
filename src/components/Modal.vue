<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useStore } from "@/stores/modal-store"

const emit = defineEmits(['close'])
const inputRef = ref(null);

let modalStore = useStore();
let nowCount;
let originalElement = null;

function try_close(event) {
    if (modalStore.c == nowCount && event.key === "Escape") {
        emit("close");
    }
}

function focus_input_ref() {
    inputRef.value.focus();
}

onMounted(() => {
    originalElement = document.activeElement;
    if (modalStore.c > 0) {
        window.removeEventListener("keydown", modalStore.e[modalStore.c - 1]);
    }
    modalStore.c++;
    nowCount = modalStore.c;

    focus_input_ref();

    window.addEventListener("keydown", try_close);
    modalStore.$patch((state) => { state.e.push(try_close) });
});

onUnmounted(() => {
    window.removeEventListener("keydown", try_close);

    modalStore.c--;
    modalStore.$patch((state) => { state.e.pop() });

    if (modalStore.c > 0) {
        window.addEventListener("keydown", ModalStore.event_top);
    }

    if (originalElement) {
        originalElement.focus();
    }
})
</script>
<template>
    <div class="pop_layer">
        <button href="javascript:void(0);" @focus="focus_input_ref" style="opacity: 0">
            弹出窗口
        </button>
        <button href="javascript:void(0);" ref="inputRef" style="opacity: 0">
            弹出窗口
        </button>
        <div class="modal">
            <slot></slot>
        </div>
        <button href="javascript:void(0);" @focus="focus_input_ref" style="opacity: 0">
            弹出窗口
        </button>
    </div>
</template>

<style lang="less" scoped>
.pop_layer {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    z-index: 998244353;
    top: 0;
    left: 0;
    overflow-y: auto;
}

@screen-sm-min: 768px;
@screen-md-min: 992px;
@screen-lg-min: 1200px;
@screen-xl-min: 1400px;

.modal {
    margin: 0 auto;

    width: 92%;
    min-width: 180px;
    max-width: 728px;
    background: white;
    padding: 24px 24px 14px 24px;
    margin-top: 24px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    @media (min-width: @screen-sm-min) {
        width: 85%;
    }

    @media (min-width: @screen-md-min) {
        width: 80%;
    }
}

.thin>.modal {
    max-width: 350px;
}

.xl>.modal {
    max-width: 900px;
}
</style>