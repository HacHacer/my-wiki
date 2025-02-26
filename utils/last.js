/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    return this[this.length - 1] !== undefined ? this[this.length - 1] : -1
};


const arr = [1, 2, 3];
arr.last(); // 3
const arr2 = [1, 2, null];
const arr3 = [];
console.log('object :>> ', arr3.last());