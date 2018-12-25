<!--
 * @Description: Button组件封装
 * @Author: Arivn
 * @Date: 2018-12-18 16:43:46
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2018-12-24 11:18:05
 -->
<template>
  <vButton
    :style="{width: `${width}px`, height: `${height}px`}"
    :type="type"
    :ghost="ghost"
    :size="size"
    :long="long"
    :loading="loading"
    :shape="shape === 'default' ? null : shape"
    :html-type="htmlType"
    :disabled="disabled"
    :to="to"
    :replace="replace"
    :customIcon="customIcon"
    :icon="icon"
    :target="target"
    @click="click">
    <span v-if="value">{{ value }}</span>
    <slot v-else>按钮</slot>
  </vButton>
</template>

<script>
import { Button } from 'iview'

export default {
  name: 'Button',
  components: {
    vButton: Button
  },
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default',
      validValue: ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']
    },
    ghost: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validValue: ['default', 'large', 'small']
    },
    long: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: 'default',
      validValue: ['default', 'circle']
    },
    htmlType: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    customIcon: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object],
      default: ''
    },
    replace: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: '_self'
    },
    click: {
      type: Function,
      default: ()=>{}
    }
  },
  mounted() {
    // console.log(Button)
  },
  methods: {
    // click: function(e) {
    //   // console.log(22222)
    //   this.$emit('click', e)
    // },
    // focus: function (e) {
    //   this.$emit('focus', e)
    // }
  }
}
</script>
