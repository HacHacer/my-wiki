const str=(a)=>{
    console.log(JSON.stringify(a));
}

const a=[1,'2',false,null,{a:1,b:2},[1,2,3],new Date(),]
const b=[Symbol('a'),Symbol('b'),()=>{console.log(1)},undefined,{b:undefined},new Set(),Date,new RegExp(),RegExp,/123/]

const show=(arr)=>{
    arr.forEach(element => {
        str(element)
    });
}

show(a)
show(b)