/* 2631. 分组

请你编写一段可应用于所有数组的代码，使任何数组调用 array. groupBy(fn) 方法时，它返回对该数组 分组后 的结果。

数组 分组 是一个对象，其中的每个键都是 fn(arr[i]) 的输出的一个数组，该数组中含有原数组中具有该键的所有项。

提供的回调函数 fn 将接受数组中的项并返回一个字符串类型的键。

每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。

请在不使用 lodash 的 _.groupBy 函数的前提下解决这个问题。 */

/**
 * @param {Function} fn
 * @return {Object}
 */

const _ = require('loadsh')
array = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
]
fn = function (list) {
    return String(list[0]);
}
Array.prototype.groupBy = function (fn) {
    return this.reduce((pre, acc) => {
        const key = fn(acc)
        if (!pre.hasOwnProperty(key)) {
            pre[key] = [acc]
        } else {
            pre[key].push(acc)
        }
        return pre
    }, {})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
const list = [
    { name: 'Alice', birthYear: 1990 },
    { name: 'Bob', birthYear: 1972 },
    { name: 'Jose', birthYear: 1999 },
    { name: 'Claudia', birthYear: 1974 },
    { name: 'Marcos', birthYear: 1995 }
];

// fn = async (person) => {
//     const decade = await new Promise((resolve) => {
//         const a = Math.floor(person.birthYear / 10) * 10
//         setTimeout(() => {
//             resolve(a)
//         }, 100)
//     });
//     return String(decade);
// }
fn = (person) => {
    const decade = Math.floor(person.birthYear / 10) * 10
    return String(decade);
}
console.log("🚀 ~ array.groupBy(fn):", _.groupBy(list, fn))


const treeData = [
    {
        id: '1',
        children: '1-1'
    },
    {
        id: '1-1',
        children: '1-1'
    },
    {
        id: '1-1-1',
        children: null
    },
    {
        id: '2',
        children: null
    }
]
function buildTree(list, keys, index = 0) {
    if (index >= keys.length) return list;
    const group = list.groupBy((item) => item[keys[index]]);
    Object.keys(group).forEach((key) => {
        const list = group[key];
        group[key] = buildTree(list, keys, index + 1);
    });
    return group;
}

console.log("🚀 ~ array.groupBy(fn):", buildTree(treeData, ['children', 'id']))