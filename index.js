fs=require('fs')
console.log(fs.existsSync('./test.txt'));
fs.exists('./test.txt',function(exists){
    console.log('exists :>> ', exists);
})