<!--
 * @Description: layout主体
 * @Author: Arivn
 * @Date: 2018-12-12 17:13:39
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2019-01-03 15:11:01
 -->
<template>
  <div id="layout" @click="cancelRight">
    <Layout :style="{height: '100%'}">
    <!-- 顶部栏 -->
      <Header class="header">
        <h2>可拖拽页面</h2>
        <div>
          <Button
            style="margin-right: 10px"
            type='primary'
            :click="priview"
            :disabled="previewList.length <= 0">
              预览
          </Button>
          <!-- <Button :click="showCode">
            显示代码
          </Button> -->
        </div>
      </Header>
      <Layout>
        <!-- 左侧组件栏 -->
        <Sider class="sider" width="230">
          <draggable v-model="componentsList" :options="options" :move="moved" :clone="clone">
            <div class="components" v-for="(item, index) in componentsList" :key="index" >
              <component :is="item.component" />
              <h4 v-if="item.title">{{ item.title }}</h4>
            </div>
          </draggable>
        </Sider>
        <!-- 预览 -->
        <Layout>
          <Content :style="{height: '100%'}">
            <div class="content" ref="preview">
              <draggable class="preview" v-model="previewList" :options="{group: 'component', pull: false}">
                <iDropdown
                  trigger="custom"
                  :visible="index === rightMenu"
                  transfer
                  v-for="(item, index) in previewList"
                  :key="index">
                  <component
                    v-bind="item.props"
                    :is="item.component"
                    :key="index"
                    @click.left.native.stop="getProps(item.props, item.validValue, item.title, $event)"
                    @click.right.native.stop="right(index, $event)"
                  />
                  <iDropdownMenu slot="list">
                    <iDropdownItem style="color: red" name="remove" @click.native="remove(index)">移除</iDropdownItem>
                  </iDropdownMenu>
                </iDropdown>
              </draggable>
            </div>
          </Content>
        </Layout>
        <!-- 右侧属性栏 -->
        <Sider class="sider" width="450">
          <!-- 属性栏 -->
          <propsPre
            :propsList="propsList"
            :validValue="validValue"
            :name="name"
          />
        </Sider>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import propsPre from './propsPre'
import { Dropdown, DropdownMenu, DropdownItem } from 'iview'
import { iviewGroup } from '../components/template/iview'
import deepCopy from '../util/deepCopy.js'
import { conversion } from '../util/util.js'

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
      propsList: [],
      validValue: [],
      rightMenu: '',
      name: ''
    }
  },
  components: {
    draggable,
    iDropdown: Dropdown,
    iDropdownMenu: DropdownMenu,
    iDropdownItem: DropdownItem,
    propsPre
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
    getProps: function (props, validValue, name) {
      this.rightMenu = ''
      this.propsList = props
      this.validValue = validValue
      this.name = name
    },
    cancelRight: function () {
      this.rightMenu = ''
    },
    right: function (index, e) {
      e.preventDefault()
      this.rightMenu = index
    },
    showCode: function() {
      conversion(this.previewList)
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
  .sider{
    background: #fff;
    overflow: auto;
    padding: 5px;
  }
}
</style>
