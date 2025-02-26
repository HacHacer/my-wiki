
function timeout(args, t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(args);
            resolve(args)
        }, t)
    })
}
const red = (t) => {
    return timeout('red', t)
}
const blue = (t) => {
    return timeout('blue', t)
}
const yellow = (t) => {
    return timeout('yellow', t)
}
const t = 1000
// red(t)
async function a() {
    await red(t)
    await blue(t)
    await yellow(t)
}

setInterval()
