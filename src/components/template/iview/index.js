/*
 * @Description: iview按需引入组件
 * @Author: Arivn
 * @Date: 2018-12-14 11:16:13
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2018-12-28 09:19:20
 */
import {
  Layout,
  Header,
  Sider,
  Content,
  // Switch,
  Input,
  // Table,
  // Avatar,
  Radio,
  // Select,
  Option,
  // Button,
  DatePicker
} from 'iview'

import Button from './button.vue'
import Avatar from './avatar.vue'
import Select from './select.vue'
import Table from './table.vue'

import { getComponetGroup } from '../../../util/util'

const iviewList = {
  Layout: {
    name: 'Layout',
    component: Layout,
    hide: true
  },
  Header: {
    name: 'Header',
    component: Header,
    hide: true
  },
  Sider: {
    name: 'Sider',
    component: Sider,
    hide: true
  },
  Content: {
    name: 'Content',
    component: Content,
    hide: true
  },
  // Switch: {
  //   name: 'Switch',
  //   component: Switch
  // },
  Table: {
    name: 'Table',
    component: Table
  },
  Avatar: {
    name: 'Avatar',
    component: Avatar
  },
  Input: {
    name: 'Input',
    component: Input
  },
  Radio: {
    name: 'Radio',
    component: Radio
  },
  Button: {
    name: 'Button',
    component: Button
  },
  DatePicker: {
    name: 'DatePicker',
    component: DatePicker
  },
  Select: {
    name: 'Select',
    component: Select
  },
  Option: {
    name: 'Option',
    component: Option,
    hide: true
  },
}

// 获取默认属性
const iviewGroup = getComponetGroup(iviewList)

const iviewComponent = (Vue) => {
  if(!iviewList || iviewList.length <= 0) {
    return
  }
  Object.keys(iviewList).forEach(item => {
    Vue.component(item, iviewList[item].component)
  })
}
export { iviewComponent, iviewList, iviewGroup }