<!--
 * @Description: SELECT组件
 * @Author: Arivn
 * @Date: 2018-12-21 13:35:49
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2018-12-24 09:27:34
 -->
<template>
  <vSelect
    v-model="value"
    :multiple="multiple"
    :disabled="disabled"
    :clearable="clearable"
    :filterable="filterable"
    :remote="remote"
    :remote-method="remoteMethod"
    :loading="loading"
    :loading-text="loadingText"
    :label="label"
    :size="size"
    :placeholder="placeholder"
    :not-found-text="noFoundText"
    :label-in-value="labelInValue"
    :placement="placement"
    :transfer="transfer"
    :element-id="elementId === 'defalut' ? null : elementId"
    >
    <Option
      v-for="(item, index) in list"
      :key="index"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </Option>
  </vSelect>
</template>

<script>
import { Select, Option } from 'iview'
export default {
  data() {
    return {
      value: ''
    }
  },
  created() {
    this.$nextTick(() => {
      this.value = this.defaultValue
    })
  },
  components: {
    vSelect: Select,
    Option
  },
  props: {
    defaultValue: {
      type: [String, Array, Number],
      default: '1'
    },
    list: {
      type: Array,
      default: () => (
        [{
          label: '1',
          value: '1',
          disabled: false
        }, {
          label: '2',
          value: '2',
          disabled: false
        }, {
          label: '3',
          value: '3',
          disabled: false
        }]
      ),
      array: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Boolean,
      default: false
    },
    remoteMethod: {
      type: Function,
      default: () => { }
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '加载中'
    },
    label: {
      type: [String, Number, Array],
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    noFoundText: {
      type: String,
      default: '无匹配数据'
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    transfer: {
      type: Boolean,
      default: false
    },
    elementId: {
      type: String,
      default: 'default'
    }
  },
  watch: {
    defaultValue: function() {
      this.value = this.defaultValue
    }
  }
}
</script>
