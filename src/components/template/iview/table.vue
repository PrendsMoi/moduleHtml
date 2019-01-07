<!--
 * @Description: table组件
 * @Author: Arivn
 * @Date: 2018-12-26 09:35:33
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2019-01-04 14:42:49
 -->

 <template>
  <vTable
    :data="data"
    :columns="columns"
    :width="width || '200'"
    :height="height || '136'"
    :stripe="stripe"
    :border="border"
    :show-header="showHeader"
  >
  </vTable>
 </template>

 <script>
 import { Table } from 'iview'

 export default {
   components: {
     vTable: Table
   },
   props: {
     data: {
       type: Array,
       default: () => {
         return [
           {
             name: 'test1',
             age: 10
           },
           {
             name: 'test2',
             age: 10
           }
         ]
       },
       array: true
     },
     columns: {
       type: Array,
       default: () => {
         return [
           {
             title: 'name',
             key: 'name'
           },
           {
             title: 'age',
             key: 'age'
           }
         ]
       },
       array: true
     },
     width: {
       type: [Number, String],
       default: ''
     },
     height: {
       type: [Number, String],
       default: ''
     },
     stripe: {
       type: Boolean,
       default: false
     },
     border: {
       type: Boolean,
       default: false
     },
     showHeader: {
       type: Boolean,
       default: true
     },
   }
 }
 </script>


