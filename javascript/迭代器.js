const a=Object.create(null)
const b=Object.create({
    c:1,
    d:()=>{console.log(1)}
})

console.log('b :>> ', b);

for (const item in b) {
    console.log('item :>> ', item);
}
// for (const iterator of b) {
//     console.log('iterator :>> ', iterator);
// }