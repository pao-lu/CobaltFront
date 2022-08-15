<script setup>
import { ref } from 'vue';
import Loader from "./Loader.vue"

let rippling = ref(false);
let loading = ref(false);
let ripple_diameter = ref(0);
let ripple_x = ref(0);
let ripple_y = ref(0);


function ripple(event) {
    var element = event.target;

    var radius = Math.sqrt(
        element.offsetHeight * element.offsetHeight +
        element.offsetWidth * element.offsetWidth
    );

    ripple_diameter.value = radius * 2;

    ripple_x.value = event.offsetX - radius;
    ripple_y.value = event.offsetY - radius;
    rippling.value = true;
}

</script>

<template>
    <button type="button" @mousedown="ripple" @mouseup="rippling = false" @mouseout="rippling = false">
        <Loader class="inline small" v-if="loading"></Loader>
        <slot></slot>
        <!-- <span class="ripple-container"> -->
        <Transition name="ripple">
            <span class="ripple" v-if="rippling" :style="{
                top: ripple_y + 'px',
                left: ripple_x + 'px',
                width: ripple_diameter + 'px',
                height: ripple_diameter + 'px',
            }">
            </span>
        </transition>
    </button>
</template>

// button
<style lang="less" scoped>
@import url("@/assets/colors.less");

.right {
    float: right !important;
}

button {
    position: relative;
    display: inline-block;
    min-height: 36px;
    // line-height: 36px;
    padding: 0 1.5em;
    margin: 3px;
    overflow: hidden;
    border: 2px solid transparent;
    vertical-align: middle;
    cursor: pointer;

    &.small {
        min-width: 36px;
        height: 30.6px;
        // line-height: 30.6px;
        padding: 0 1em;
    }

    &.thin {
        padding: 0 1em;
    }

    &.primary {
        color: #fff;
        background: @primary-color;
    }

    &.primary.flat {
        color: @primary-color;
        background: none;
    }

    &.raised {
        box-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2);
    }
}

button:focus {
    border: 2px dashed white;
}

button:hover,
button:focus,
button:active {
    & {
        color: rgba(0, 0, 0, 0.87);
        background: white;
    }

    &.primary {
        color: #fff;
        background: @secondary-color;
    }

    &.primary.flat {
        color: @primary-color;
        background: #f2f2f2;
    }
}

// border

button:focus,
button:active {
    &.flat {
        border-color: black;
    }
}
</style>

// ripple
<style lang="less" scoped>
.ripple-container {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
}

.ripple {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    opacity: 0.3;
    pointer-events: none;
    transform: none;
    transition: transform 1s cubic-bezier(0, 0, 0.2, 1),
        width 1s cubic-bezier(0, 0, 0.2, 1), height 1s cubic-bezier(0, 0, 0.2, 1),
        opacity 1s cubic-bezier(0, 0, 0.2, 1);
}

.ripple-enter-from {
    opacity: 0.7;
    transform: scale(0.0001, 0.0001);
}

// .ripple-enter-active {
// }

.ripple-leave-to {
    opacity: 0;
}

button .ripple {
    background: #fff;
}

button.flat .ripple {
    background: #a6a6a6;
}
</style>