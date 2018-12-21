<!--
 * @Description: 预览
 * @Author: Arivn
 * @Date: 2018-12-17 13:56:54
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2018-12-20 15:52:22
 -->
<template>
  <div id="preview">
    <component v-bind="item.props" v-for="(item, index) in nodelist" :key="index" :is="item.component" />
  </div>
</template>

<script>
export default {
  name: 'preview',
  data() {
    return {
      nodelist: []
    }
  },
  created() {
    this.nodelist = this.$store.getters.getnode
    // this.nodelist[0].props.click = () => {
    //   console.log(11111)
    // }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#preview{
  width: 100%;
  height: 100%;
}
</style>

