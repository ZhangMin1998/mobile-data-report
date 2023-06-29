<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; // 防止移动端滚动卡顿
  // margin: 0;
  // padding: 0;
}
</style>

<style>
body {
  height: 100%;
  background-color: rgba(13, 42, 67, 0);
  background-image: url("//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/05a21107c6f5201f3c748efdc07383dd.jpg");
  background-size: 100%;
}
</style>
