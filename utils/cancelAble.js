
/**
 * 创建一个可取消的延时执行函数。
 * 
 * 该函数返回一个定时器ID，以及一个用于取消定时器的函数。
 * 主要用于在需要的情况下延迟执行某个函数，并提供取消执行的能力。
 * 
 * @param fn 要延迟执行的函数
 * @param args 函数的参数数组
 * @param t 延迟执行的时间（毫秒）
 * @returns 返回一个函数，调用该函数将取消延迟执行的函数
 */
const cancelAble = (fn, args, t) => {
    // 设置定时器，延迟执行传入的函数fn
    const id = setTimeout(() => fn.apply(this, args), t)
    // 返回一个函数，调用该函数将清除定时器，取消执行
    return () => clearTimeout(id)
}


// const log=()=>console.log('log')
// const cancel =cancelAble(log,[],1000)
// setTimeout(cancel,2000)


// 间隔取消
const cancelAbleRepeat = (fn, args, t) => {
    let cancelFlag = false
    fn(...args)
    const startInterval = () => {
        setTimeout(() => {
            fn(...args)
            if (cancelFlag) return
            startInterval()
        }, t)
    }
    startInterval()
    const clearInterval = () => {
        cancelFlag = true
    }
    return clearInterval
}
// 优化方案
const cancelAbleRepeatBetter = (fn, args, t) => {
    let cancelFlag = null
    fn(...args)
    const startInterval = () => {
        cancelFlag = setTimeout(() => {
            fn(...args)
            startInterval()
        }, t)
    }
    startInterval()
    const clearInterval = () => {
        if (cancelFlag) {
            clearTimeout(cancelFlag)
        }
    }
    return clearInterval
}


// 间隔取消最佳实现
const cancelAbleRepeat2 = (fn, args, t) => {
    fn(...args)
    const id = setInterval(fn(...args), t)
    return () => clearInterval(id)
}


const result = []

const fn = (x) => x * 2;
const args = [4], t = 1000, cancelTimeMs = 5000;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    console.log({ "time": diff, "returned": fn(...argsArr) });
}

const cancel = cancelAbleRepeat(log, args, t);

setTimeout(cancel, cancelTimeMs);

