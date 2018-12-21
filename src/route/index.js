import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 懒加载
const _import = path => () => import(`@/${path}.vue`)

// layout
const _layout = () => import('../layout')

const routes = [
  {
    path: '/',
    name: '/',
    component: _layout
  },
  {
    path: '/preview',
    name: 'preview',
    component: _import('preview')
  }
]

export default new Router({routes})