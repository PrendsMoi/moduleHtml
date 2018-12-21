/*
 * @Description: 工具类函数
 * @Author: Arivn
 * @Date: 2018-12-19 12:02:45
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2018-12-21 15:30:13
 */
 // 设置属性
 const setProps = (originalProps) => {
  const newProps = {}
  if(!originalProps || originalProps.length <= 0) {
    return null
  }

  for(let i in originalProps) {
    newProps[i] = originalProps[i].array ? originalProps[i].default() : originalProps[i].default
  }
  return newProps
 }
 // 获取提供的值
 const getvalidValue = (originalProps) => {
  const validValue = {}
  if(!originalProps || originalProps.length <= 0) {
    return null
  }

  for(let i in originalProps) {
    validValue[i] = originalProps[i].validValue || null
  }

  // console.log(validValue)
  return validValue
 }
 // 获得组件prop数组
 const getComponetGroup = (componentList) => {
   const group = []
   for(const key in componentList) {
     const { props } = componentList[key].component
     if(!componentList[key].hide) {
      group.push({
        title: componentList[key].name,
        component: key,
        props: setProps(props),
        validValue: getvalidValue(props)
      })
     }
   }
  //  console.log(group)
   return group
 }

 export { getComponetGroup }
