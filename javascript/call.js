Function.prototype.call2=function(context,...args){
    if(typeof this!=='function'){
        throw new TypeError('not a function')
    }
    context=context||window
    context.fn=this
    let result=context.fn(...args)
    delete context.fn
    return result
}
Function.prototype.call3 = function (context, ...args) {
    if (context === null || context === undefined) {
	context = window
    }

    context = context instanceof Object ? context : {}

    let key = Math.random()
    while (context[key]) {
	key = Math.random()
    }

    context[key] = this
    const result = context[key](...args)
    delete context[key]

    return result
}
let name = 'Jack'
const obj = {name: 'Tom'}
function sayHi() {console.log('Hi! ' + this.name)}

sayHi() // Hi! Jack
sayHi.call2(obj) // Hi! Tom


global.data='111'
Object.defineProperty(global,'data',{
    enumerable:false,
    configurable:false,
    set(value){
        if(value!=='111'){
            throw Error('123123')
        }
        return value
    },
    get(){
        return '1111'
    }
})
// global.data='111'
// console.log('data :>> ', global.data);

// console.log('Math.max(...[1,2,3,4,5]) :>> ', Math.max(...[1,2,3,4,5]));
const a=Math.max.apply(null,[1,2,3,4,5])
const b=Math.min.call(null,1,2,3,4,5)
console.log('a :>> ', a);


Function.prototype.callDe=function(content,...args){
     if(typeof this!=='function'){
        throw Error('need function')
     }
     const context=content||global
     context.fn=this
     const result=context.fn(...args)
     delete context.fn
     return result
}

Function.prototype.applyDe=function(content,args){
    if(typeof this!=='function'){
        throw Error('need function')
    }
    return this.callDe(content,...args)
}

Function.prototype.bindDe=function(content,...args){
    if(typeof this!=='function'){
        throw Error('need function')
    }
    const context=content||global
    const fn=this
    return function(...args2){
        return fn.callDe(context,...args,...args2)
    }
}
const c=Math.max.callDe(null,1,2,3,4,5)
const d=Math.min.applyDe(null,[1,2,3,4,5])
console.log(c);
console.log(d);