/*
 * @Description: 深拷贝
 * @Author: Arivn
 * @Date: 2018-12-14 14:50:08
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2018-12-18 14:58:00
 */
const deepCopy = (original) => {
//   console.log('deepcopy')
//   console.log(original)
  const isArrayOrObject = function(o){
    return Object.prototype.toString.call(o) == "[object Array]" || Object.prototype.toString.call(o) == "[object Object]"
  }
  if(!isArrayOrObject(original)){
      //不是对象或者数组直接返回
      return original
  }
  const createObj = function(o){
      return Object.prototype.toString.call(o) == "[object Array]" ? [] : {}
  }

  const obj = createObj(original)

  const copy = function(target, container){
      for(let i in target){
          if(isArrayOrObject(target[i])){
              container[i] = createObj(target[i])
              copy(target[i], container[i])
          }else{
              container[i] = target[i]
          }
      }
      return container
  }

  return copy(original, obj)
}

export default deepCopy