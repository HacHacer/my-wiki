/*
请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。要求此函数可以解析任何值。
*/
/**
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis))
}


let t = Date.now()
sleep(1000).then(() => console.log(Date.now() - t)) // 100