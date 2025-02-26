const data = { text: 'hello world', text: 'nihao' }
const bucket = new WeakMap()

// 副作用函数
let activeEffect

const effect = (fn) => {
    activeEffect = fn
    fn()
}
// const obj = new Proxy(data, () => ({
//     get(target, key) {
//         bucket.add(effect)
//         return target[key]
//     },
//     set(target, key, newVal) {
//         target[key] = newVal
//         bucket.forEach(fn => {
//             fn()
//         })
//         return true
//     }
// }))

const obj = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        // 没有 activeEffect，直接 return
        if (!activeEffect) return target[key]
        // 根据 target 从“桶”中取得 depsMap，它也是一个 Map 类型：key --> effects
        let depsMap = bucket.get(target)
        // 如果不存在 depsMap，那么新建一个 Map 并与 target 关联
        if (!depsMap) {
            bucket.set(target, (depsMap = new Map()))
        }
        // 再根据 key 从 depsMap 中取得 deps，它是一个 Set 类型，
        // 里面存储着所有与当前 key 相关联的副作用函数：effects
        let deps = depsMap.get(key)
        // 如果 deps 不存在，同样新建一个 Set 并与 key 关联
        if (!deps) {
            depsMap.set(key, (deps = new Set()))
        }
        // 最后将当前激活的副作用函数添加到“桶”里
        deps.add(activeEffect)

        // 返回属性值
        return target[key]
    },
    // 拦截设置操作
    set(target, key, newVal) {
        console.log('key :>> ', key);
        // 设置属性值
        target[key] = newVal
        // 根据 target 从桶中取得 depsMap，它是 key --> effects
        const depsMap = bucket.get(target)
        if (!depsMap) return
        // 根据 key 取得所有副作用函数 effects
        const effects = depsMap.get(key)
        console.log('effects :>> ', effects);
        // 执行副作用函数
        effects && effects.forEach(fn => fn())
    }
})

const obj2 = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
        track(target, key)
        // 返回属性值
        return target[key]
    },
    // 拦截设置操作
    set(target, key, newVal) {
        // 设置属性值
        target[key] = newVal
        // 把副作用函数从桶里取出并执行
        trigger(target, key)
    }
})

// 在 get 拦截函数内调用 track 函数追踪变化
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
    deps.add(activeEffect)
}
// 在 set 拦截函数内调用 trigger 函数触发变化
function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    effects && effects.forEach(fn => fn())
}

effect(function a1() {
    console.log(' :>> ', obj.text);
})
effect(function a2() {
    console.log(' :>> ', obj.text);
})

obj.text = 'hello matt'