<!--
 * @Description: layout主体
 * @Author: Arivn
 * @Date: 2018-12-12 17:13:39
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2018-12-21 16:33:48
 -->
<template>
  <div id="layout" @click="cancelRight">
    <iLayout :style="{height: '100%'}">
    <!-- 顶部栏 -->
      <iHeader class="header">
        <h2>可拖拽页面</h2>
        <iButton
          type='primary'
          :click="priview"
          :disabled="previewList.length <= 0">预览</iButton>
      </iHeader>
      <iLayout>
        <!-- 左侧组件栏 -->
        <iSider width="230" :style="{background: '#fff', padding: '10px'}">
          <draggable v-model="componentsList" :options="options" :move="moved" :clone="clone">
            <div class="components" v-for="(item, index) in componentsList" :key="index" >
              <component :is="item.component" />
              <h4 v-if="item.title">{{ item.title }}</h4>
            </div>
          </draggable>
        </iSider>
        <!-- 预览 -->
        <iLayout>
          <iContent :style="{height: '100%'}">
            <div class="content" ref="preview">
              <draggable class="preview" v-model="previewList" :options="{group: 'component', pull: false}">
                <Dropdown
                  trigger="custom"
                  :visible="index === rightMenu"
                  transfer
                  v-for="(item, index) in previewList"
                  :key="index">
                  <component
                    v-bind="item.props"
                    :is="item.component"
                    :key="index"
                    @click.left.native.stop="getProps(item.props, item.validValue, $event)"
                    @click.right.native.stop="right(index, $event)"
                  />
                  <DropdownMenu slot="list">
                    <DropdownItem style="color: red" name="remove" @click.native="remove(index)">移除</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </draggable>
            </div>
          </iContent>
        </iLayout>
        <!-- 右侧内容栏 -->
        <iSider width="450" :style="{background: '#fff'}">
          <!-- 属性栏 -->
          <ul>
            <li v-for="(item, key, index) in propsList" :key="index">
              <strong>{{ key }}：</strong>
              <iSelect v-model="propsList[key]" v-if="typeof validValue[key] === 'object' && validValue[key]">
                <Option
                  v-for="(oItem, oIndex) in validValue[key]"
                  :value="oItem"
                  :key="oIndex">
                  {{ oItem }}
                </Option>
              </iSelect>
              <iInput v-model="propsList[key]" v-if="(typeof propsList[key] === 'string' || typeof propsList[key] === 'number') && validValue[key] === null"/>
              <ul v-if="propsList[key] instanceof Array">
                <li v-for="(citem, cindex) in propsList[key]" :key="cindex">
                  <h5>label</h5>
                  <iInput v-model="citem.label" />
                  <h5>value</h5>
                  <iInput v-model="citem.value" />
                </li>
              </ul>
              <iSwitch v-model="propsList[key]" v-if="typeof propsList[key] === 'boolean'"/>
            </li>
          </ul>
        </iSider>
      </iLayout>
    </iLayout>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
// import Poptip from '../components/template/iview/poptip'
import { Dropdown, DropdownMenu, DropdownItem } from 'iview'
import deepCopy from '../util/deepCopy.js'
import { iviewGroup } from '../components/template/iview'

export default {
  name: 'layout',
  data() {
    return {
      componentsList: iviewGroup,
      options: {
        group: {
          name: 'component',
          pull: 'clone',
          put: false
        }
      },
      previewList: [],
      propsList: {},
      validValue: {},
      rightMenu: ''
    }
  },
  components: {
    draggable,
    // Poptip,
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  created() {
  },
  mounted() {

  },
  methods: {
    moved: function(evt) {
      return evt.to.className === 'preview'
    },
    clone: deepCopy,
    priview: function () {
      // 预览
      const nodelist = this.previewList
      this.$store.dispatch('setnode', nodelist)
      this.$router.push('preview')
    },
    getProps: function (props, validValue) {
      this.rightMenu = ''
      this.propsList = props
      this.validValue = validValue
    },
    cancelRight: function () {
      this.rightMenu = ''
    },
    right: function (index, e) {
      e.preventDefault()
      this.rightMenu = index
    },
    remove: function(index) {
      this.previewList.splice(index, 1)
      this.propsList = {}
    }
  }
}
</script>

<style lang="scss" scoped>
#layout{
  height: 100%;
  position: relative;
  background: #f5f7f9;
  .header{
    display: flex;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
  }
  .components{
    margin-bottom: 10px;
    span{
      display: block;
    }
    cursor: pointer;
    // &:hover :first-child{
    //   box-shadow: 0px 0px 2px 2px #EC7063;
    // }
    &:last-child{
      margin: 0;
    }
  }
  .content{
    height: 100%;
    padding: 10px;
    .preview{
      height: 100%;
      padding: 10px;
      background: #ffffff;
      &:first-child{
        cursor: pointer;
      }
    }
  }
}
</style>
