const fun1=(str)=>{
    console.log('2222',str)
}

const fn2=(()=>{
    let a=1;
    return ()=>({
        getValue(){
            console.log(a)
        },
        setValue(num){
            a=num
        }
    })
})()

const fn3=()=>{
    let a=1;
    return {
        getValue(){
            console.log(a)
        },
        setValue(num){
            a=num
        }
    }
}


const test=fn3()
test.setValue(333)
test.getValue()