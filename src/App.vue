<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html, body{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
ul{
  li{
    h3, h4, h5, h6{
      display: flex;
      justify-content:space-between;
      color: #E74C3C;
    }
    list-style: none;
    padding: 3px;
  }
}
</style>
