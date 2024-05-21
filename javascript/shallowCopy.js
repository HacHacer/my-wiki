let objA = {
    a: 'abc',
    b: '123',
    c: {
      d: 'ddd',
      e: 'eee',  
    },
    [Symbol()]: {
        f: 'fff',
        g: 'ggg'
    },
    get m () { return 1 }
}
Object.defineProperty(objA, 'h', {
    value: 4,
    enumerable: false
})
function shallowCopy1 (obj) {
	if (typeof obj !== 'object') {
		return
	}
	let newObj = obj.constructor === Array ? [] : {}
	// for (let key in obj) {
	// 	if (obj.hasOwnProperty(key)) {
	// 		newObj[key] = obj[key]
	// 	}
	// }
    Reflect.ownKeys(obj).forEach(key => {
        if (obj.hasOwnProperty(key)) {
			newObj[key] = obj[key]
		}
    })
	return newObj
}

const sObj=shallowCopy1(objA)
console.log('sObj :>> ', sObj);
sObj.a = '123'
const assObj=Object.assign({},  objA)
assObj.c='321'
Object.assign(assObj, objA)
console.log('objA.a :>> ', objA.c);
// 输出结果为
// a: "abc"
// b: "123"
// c: {d: "ddd", e: "eee"}
// m: 1