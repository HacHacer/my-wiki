
// 用一个全局变量存储被注册的副作用函数
let activeEffect
function effect(fn) {
    const effectFn = () => {
        // 调用 cleanup 函数完成清除工作
        cleanup(effectFn)  // 新增
        activeEffect = effectFn
        fn()
    }
    effectFn.deps = []
    effectFn()
}
function cleanup(effectFn) {
    // 遍历 effectFn.deps 数组
    for (let i = ; i < effectFn.deps.length; i++) {
        // deps 是依赖集合
        const deps = effectFn.deps[i]
        // 将 effectFn 从依赖集合中移除
        deps.delete(effectFn)
    }
    // 最后需要重置 effectFn.deps 数组
    effectFn.deps.length = 
     }
function track(target, key) {
    // 没有 activeEffect，直接 return
    if (!activeEffect) return
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    // 把当前激活的副作用函数添加到依赖集合 deps 中
    deps.add(activeEffect)
    // deps 就是一个与当前副作用函数存在联系的依赖集合
    // 将其添加到 activeEffect.deps 数组中
    activeEffect.deps.push(deps) // 新增
}

