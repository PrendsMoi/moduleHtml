/*
 * @Description: iview按需引入组件
 * @Author: Arivn
 * @Date: 2018-12-14 11:16:13
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2018-12-21 14:18:54
 */
import {
  Layout,
  Header,
  Sider,
  Content,
  Switch,
  Input,
  Table,
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
import { getComponetGroup } from '../../../util/util'

const iviewList = {
  iLayout: {
    name: 'Layout',
    component: Layout,
    hide: true
  },
  iHeader: {
    name: 'Header',
    component: Header,
    hide: true
  },
  iSider: {
    name: 'Sider',
    component: Sider,
    hide: true
  },
  iContent: {
    name: 'Content',
    component: Content,
    hide: true
  },
  iSwitch: {
    name: 'Switch',
    component: Switch
  },
  iTable: {
    name: 'Table',
    component: Table
  },
  iAvatar: {
    name: 'Avatar',
    component: Avatar
  },
  iInput: {
    name: 'Input',
    component: Input
  },
  iRadio: {
    name: 'Radio',
    component: Radio
  },
  iButton: {
    name: 'Button',
    component: Button
  },
  iDatePicker: {
    name: 'DatePicker',
    component: DatePicker
  },
  iSelect: {
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