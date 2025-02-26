/* 
2727. 判断对象是否为空
简单
给定一个对象或数组，判断它是否为空。

一个空对象不包含任何键值对。
一个空数组不包含任何元素。
你可以假设对象或数组是通过 JSON.parse 解析得到的。
JSON只有两种结构数组和对象
  */


/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    // return Reflect.ownKeys(obj).filter(i=>obj.hasOwnProperty(i))
    return Object.keys(obj)
    for (const key in object) return false
    return true //O(1)的时间和空间复杂度
};
const inputs=[[null, false, 0], { "x": 5, "y": 42 },{},[]]
!(function(){
    inputs.forEach(i=>{
        console.log('object :>> ', isEmpty(i));
    })
})()