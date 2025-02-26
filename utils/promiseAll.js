/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {

    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([])
            return
        }

        let result = []
        let count = 0
        functions.forEach(async (item, index) => {
            try {
                const res = await item()
                result[index] = res
                count++
                if (count === functions.length) {
                    resolve(result)
                }
            } catch (error) {
                reject(error)
            }
        })
    })
};
const start = Date.now()

functions = [
    () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
functions2 = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]
functions3 = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]
!(async function () {
    try {
        const res = await promiseAll(functions3)
        console.log({ 't': Date.now() - start, 'resolved': res });
    } catch (err) {
        console.log({ 't': Date.now() - start, 'rejected': err });
    }
})()
