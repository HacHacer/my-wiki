/* 2627. 函数防抖
请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 t ，并返回该函数的 函数防抖 后的结果。

函数防抖 方法是一个函数，它的执行被延迟了 t 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。
你编写的防抖函数也应该接收传递的参数。

例如，假设 t = 50ms ，函数分别在 30ms 、 60ms 和 100ms 时调用。
前两个函数调用将被取消，第三个函数调用将在 150ms 执行。如果改为 t = 35ms ，
则第一个调用将被取消，第二个调用将在 95ms 执行，第三个调用将在 135ms 执行。 *//**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let id = null
    return function (...args) {
        clearTimeout(id)
        id = setTimeout(() => {
            fn.apply(this, args)
        }, t);
    }
};
let start = Date.now();

function log(...inputs) {
    console.log([Date.now() - start, inputs])
}
// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);

/* 给定一个函数 fn 和一个以毫秒为单位的时间 t，返回该函数的受限制版本。

首先无延迟地调用受限制的函数，然后在 t 毫秒的时间间隔内无法执行，但应存储在延迟结束后为调用 fn 提供的最新函数参数。

例如，t = 50ms，该函数在 30ms、40ms 和 60ms 时调用。第一个函数调用将在接下来的 t 毫秒内阻止调用函数。
第二个函数调用将保存参数，第三个调用参数应覆盖第二个调用中当前存储的参数，
因为第二个和第三个调用是在 80 毫秒之前调用的。
延迟过去后，应使用延迟期间提供的最新参数调用受限制的函数，并且它还应该创建另一个 80ms + t 的延迟周期。
 */
var throttle = function (fn, wait) {
    let flag = false
    let arg
    const wrapper = (...args) => {
        arg = args
        if (!flag) {
            fn.apply(this, args)
            flag = true
            arg = undefined
            setTimeout(() => {
                flag = false
                if (arg) wrapper(...arg)
            }, wait)
        }
    }
    return wrapper
}


const throttle2 = (fn, t) => {
    let pending = false;
    let nextArgs;
    const wrapper = (...args) => {
        nextArgs = args;
        if (!pending) {
            fn(...args);
            pending = true;
            nextArgs = undefined;
            setTimeout(() => {
                pending = false;
                if (nextArgs) wrapper(...nextArgs);
            }, t);
        }
    };
    return wrapper;
};
const dlog2 = throttle(log, 50);
setTimeout(() => dlog2(1), 50);
setTimeout(() => dlog2(3), 125);
setTimeout(() => dlog2(2), 105);