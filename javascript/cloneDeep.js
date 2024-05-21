let objB = {
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    obj: {
        name: '我是一个对象',
        id: 1
    },
    arr: [0, 1, 2],
    func: function() {
        console.log('我是一个函数')
    },
    date: new Date(),
    reg: new RegExp('/我是一个正则/ig'),
    err: new Error('我是一个错误'),

    [Symbol()]: {
        f: 'fff',
        g: 'ggg'
    }
}
Object.defineProperties(objB, {
    h: {
        value: 4,
        enumerable: false,
        writable: false,
        configurable: false      
    },
    m: {
        get() {
            console.log('调用了get')
            return [1,2,3]
        },
        set(val) {
            console.log('调用了set')
        }
    }
})

//Json.parse(Json.stringify(obj))
// 只能处理Number,String,Boolean,Array,Object
/*
不能复制：undefined、function、Symbol、不可枚举属性
不能正确复制：Date、RegExp、Error、属性描述符
*/
function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function deepCopy(obj){
    if(!obj||typeof obj!=='object'){
        return obj;
    }
    let newObj=obj instanceof Array?[]:{};
    Reflect.ownKeys(obj).forEach(i=>{
        if(obj.hasOwnProperty(i)){
            newObj[i]=typeof obj[i]==='object'?deepCopy(obj[i]):obj[i];
        }
    })
    return newObj
}
// const cloneObj=cloneDeep(objB)
// console.log('cloneObj :>> ', cloneObj);
/*{
  num: 0,
  str: '',
  boolean: true,
  nul: null,
  obj: { name: '我是一个对象', id: 1 },
  arr: [ 0, 1, 2 ],
  date: '2024-04-24T08:18:46.439Z',
  reg: {},
  err: {}
}*/

const cloneObj2=deepCopy(objB)
console.log('cloneObj2 :>> ', cloneObj2);