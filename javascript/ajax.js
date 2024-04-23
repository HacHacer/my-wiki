const xhr=new XMLHttpRequest()
xhr.onload((res)=>{
if(xhr.status===200){
    console.log('xhr.res :>> ', xhr.res);
}
})

xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1')

xhr.send()