<template>
  <div class="loader"></div>
</template>

<style lang="less">
div.loader {
  height: 50px;
  width: 50px;
  display: inline-block;
  border-radius: 50%;
  border: 5px solid;
  border-color: #0277bd #0277bd #0277bd #81d4fa;
  animation: load 0.6s infinite linear;
  box-shadow: 0px 0px 10px -2px skyblue;
  display: block;
  margin: 0 auto;
}

div.loader.inline {
  display: inline-block;
  margin: 0;
  vertical-align: middle;
  &.small {
    height: 20px;
    width: 20px;
    border-width: 2px;
    border-color: #0277bd #0277bd #0277bd #81d4fa;
    padding: 0;
  }
}

button.primary .loader {
  border-color: white white white gray !important;
  box-shadow: 0px 0px 10px -2px white;
}

@keyframes load {
  100% {
    transform: rotate(360deg);
  }
}
</style>