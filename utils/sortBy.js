/* 2724. 排序方式

给定一个数组 arr 和一个函数 fn，返回一个排序后的数组 sortedArr。你可以假设 fn 只返回数字，并且这些数字决定了 sortedArr 的排序顺序。sortedArr 必须按照 fn 的输出值 升序 排序。

你可以假设对于给定的数组，fn 不会返回重复的数字。 */


/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))
};


const arr = [[3, 4], [5, 2], [10, 1]]//输出：[[10, 1], [5, 2], [3, 4]]
const fn = (x) => x[1]

sortBy(arr,fn)
console.log("🚀 ~ sortBy(arr,fn):", sortBy(arr,fn))
