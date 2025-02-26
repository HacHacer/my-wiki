/* 2637. 有时间限制的 Promise 对象
请你编写一个函数，它接受一个异步函数 fn 和一个以毫秒为单位的时间 t。它应根据限时函数返回一个有 限时 效果的函数。函数 fn 接受提供给 限时 函数的参数。

限时 函数应遵循以下规则：

如果 fn 在 t 毫秒的时间限制内完成，限时 函数应返回结果。
如果 fn 的执行超过时间限制，限时 函数应拒绝并返回字符串 "Time Limit Exceeded" 。
 */
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        return Promise.race([fn.apply(null, args), new Promise((resolve, rejected) => setTimeout(() => rejected('Time Limit Exceeded'), t))])
    }
};
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded2");
            }, t);
            fn(...args).then(resolve).catch(reject).finally(() => clearTimeout(timeout));;
        })
    }
};

//   作者：力扣官方题解
//   链接：https://leetcode.cn/problems/promise-time-limit/solutions/2506142/promise-shi-jian-xian-zhi-by-leetcode-so-wegv/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

const start = performance.now()
let result;
fn = async (n) => {
    await new Promise(res => setTimeout(res, 220));
    return n * n;
}
inputs = [5]
t = 150
const limited = timeLimit(fn, t)

!(async function () {
    try {
        const res = await limited(...inputs)
        result = { "resolved": res, "time": Math.floor(performance.now() - start) };
    } catch (err) {
        result = { "rejected": err, "time": Math.floor(performance.now() - start) };
    }
    console.log(result) // 输出结果
})()