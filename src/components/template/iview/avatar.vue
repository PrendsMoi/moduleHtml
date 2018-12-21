<!--
 * @Description: 头像组件
 * @Author: Arivn
 * @Date: 2018-12-20 14:50:04
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2018-12-21 12:08:01
 -->
<template>
  <vAvatar
    :shape="shape"
    :size="size"
    :src="src"
    :icon="icon"
    :customIcon="customIcon"
  />
</template>

<script>
import { Avatar } from 'iview'
export default {
  name: 'Avatar',
  hide: true,
  components: {
    vAvatar: Avatar
  },
  props: {
    shape: {
      type: String,
      default: 'circle',
      validValue: ['circle', 'square']
    },
    size: {
      type: String,
      default: 'default',
      validValue: ['default', 'large', 'small']
    },
    src: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    customIcon: {
      type: String,
      default: ''
    }
  }
}
</script>
