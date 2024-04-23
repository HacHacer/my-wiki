Function.prototype.call2=function(context,...args){
    if(typeof this!=='function'){
        throw new TypeError('not a function')
    }
    context=context||window
    console.log('context :>> ', context);
    context.fn=this
    console.log('this :>> ', this);
    let result=context.fn(...args)
    console.log('result :>> ', result);
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
