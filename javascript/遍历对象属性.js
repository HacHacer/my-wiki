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
    get m () { return 1 },//属性描述符,
    iterator() {
        return {
            next: () => {
                return {
                    value: 1,
                    done: true
                }
            }
        }
    }
}
Object.defineProperty(objA, 'h', {
    value: 4,
    enumerable: false//不可枚举
})
Object.defineProperty(objA, Symbol(), {
    value: 5,
    enumerable: false//不可枚举
})

// for (const key in objA) {
//     console.log('key :>> ', key);//a,b,c,m
//     if (Object.hasOwnProperty.call(objA, key)) {
//         console.log('key :>> ', key);//a,b,c,m
//     }
   
// }
// Object.keys(objA).forEach(key => {
//     console.log('key :>> ', key);//a,b,c,m
// })
// const b={}
// Reflect.ownKeys(objA).forEach(key => {
//     console.log('key :>> ', key);//a,b,c,m,h,Symbol()
//     b[key]=objA[key]
// })
// console.log('b :>> ', b);


const arr=[1,2,3]
// for of 只能用在可迭代的对象上
const objB=new Set([1,2,3])
// for (const iterator of objA) {
//     console.log('iterator :>> ', iterator);
// }
// for (const iterator of arr) {
//     console.log('iterator :>> ', iterator);
// }
const range={
    from:1,
    to:5
}

range[Symbol.iterator]=function () { //使用箭头函数会导致this为空对象{}
    return {
        current:this.from,
        last:this.to,
        next(){
            return {
                value:this.current++,
                done:this.current>this.last+1
            }
        }
    }
    return {
        current:this.from,
        last:this.to,
        next() {
            if (this.current<=this.last) {
                return {
                    value:this.current++,
                    done:false
                }
            }else{
                return {
                    done:true
                }
            }
        }
    }
}
for (const iterator of range) {
    console.log('iterator :>> ', iterator);
}
const test='hello'
const iterator=test[Symbol.iterator]()


while(true){
    let result=iterator.next()
    if (result.done) {
        break
    }
    
}