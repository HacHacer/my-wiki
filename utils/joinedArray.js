/* 2722. 根据 ID 合并两个数组
中等
相关企业
现给定两个数组 arr1 和 arr2 ，返回一个新的数组 joinedArray 。两个输入数组中的每个对象都包含一个 id 字段。

joinedArray 是一个通过 id 将 arr1 和 arr2 连接而成的数组。joinedArray 的长度应为唯一值 id 的长度。返回的数组应按 id 升序 排序。

如果一个 id 存在于一个数组中但不存在于另一个数组中，则该对象应包含在结果数组中且不进行修改。

如果两个对象共享一个 id ，则它们的属性应进行合并：

如果一个键只存在于一个对象中，则该键值对应该包含在对象中。
如果一个键在两个对象中都包含，则 arr2 中的值应覆盖 arr1 中的值。 */


/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = (arr1, arr2) => Object.values([...arr1, ...arr2].reduce((a, b) => (a[b.id] = Object.assign(a[b.id] ?? {}, b), a), {})).sort((a, b) => a.id - b.id);


arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 }
]
arr2 = [
    { "id": 3, "x": 5 }
]
arr1 = [
    { "id": 1, "x": 2, "y": 3 },
    { "id": 2, "x": 3, "y": 6 }
]
arr2 = [
    { "id": 2, "x": 10, "y": 20 },
    { "id": 3, "x": 0, "y": 0 }
]
// join(arr1, arr2)
console.log("🚀 ~ join(arr1,arr2):", join(arr1, arr2))
