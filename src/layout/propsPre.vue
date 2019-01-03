<!--
 * @Description: 属性栏
 * @Author: Arivn
 * @Date: 2018-12-26 09:54:37
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2019-01-03 15:11:23
 -->
<template>
  <div class="propsPre">
    <!-- 属性栏 -->
    <div v-for="(item, key, index) in propsList" :key="index">
      <h3>{{ key }}：
        <iIcon class="add" size="25" type="ios-add" v-if="(propsList[key] instanceof Array)" @click="addItem(propsList[key])"/>
      </h3>
      <Select v-model="propsList[key]" v-if="typeof validValue[key] === 'object' && validValue[key]">
        <Option
          v-for="(oItem, oIndex) in validValue[key]"
          :value="oItem"
          :key="oIndex">
          {{ oItem }}
        </Option>
      </Select>
      <Input v-model="propsList[key]" v-if="(typeof propsList[key] === 'string' || typeof propsList[key] === 'number') && validValue[key] === null"/>
      <iSwitch v-model="propsList[key]" v-if="typeof propsList[key] === 'boolean'"/>
      <ul v-if="(propsList[key] instanceof Array)">
        <li v-for="(citem, cindex) in propsList[key]" v-bind:key="cindex">
          <iRow class="array">
            <iCol span="2">
              <h5>label:</h5>
            </iCol>
            <iCol span="7">
              <Input v-model="citem.label" />
            </iCol>
            <iCol span="1">&nbsp;</iCol>
            <iCol span="2">
              <h5>value:</h5>
            </iCol>
            <iCol span="7">
              <Input v-model="citem.value" />
            </iCol>
            <iCol span="4" style="text-align: center">
              <span>diabled</span>
              <iSwitch v-model="citem.disabled"/>
            </iCol>
            <iCol span="1">
              <iIcon type="ios-close" size="25" class="remove" v-on:click="removeItem(propsList[key], cindex)"/>
            </iCol>
          </iRow>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Select, Row, Col, Icon, Switch } from 'iview'
export default {
  name: 'propsPre',
  data() {
    return {
    }
  },
  updated() {
    // console.log(this.propsList)
    // console.log(this.name)
  },
  components: {
    iSelect: Select,
    iRow: Row,
    iCol: Col,
    iIcon: Icon,
    iSwitch: Switch
  },
  props: {
    propsList: {
      type: [Array, Object],
      default: []
    },
    validValue: {
      type: [Array, Object],
      default: []
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    removeItem: function(arr, index) {
      arr.splice(index, 1)
    },
    addItem: function(arr) {
      arr.push({
        label: '',
        value: '',
        diabled: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.propsPre{
  .array{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .remove, .add{
    cursor: pointer;
    font-weight: bold;
    color: #000;
    &:hover{
      color: red;
    }
  }
  .add {
    &:hover {
      color: blue;
    }
  }
}
</style>


