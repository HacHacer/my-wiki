/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 * 给定两个 promise 对象 promise1 和 promise2，返回一个新的 promise。
 * promise1 和 promise2 都会被解析为一个数字。
 * 返回的 Promise 应该解析为这两个数字的和
 */

var addTwoPromises = async function (promise1, promise2) {
    const result = await Promise.all([promise1, promise2])
    return result.reduce((pre, cur) => pre += cur, 0)
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log)
addTwoPromises(promise1, promise2).then(console.log)

// 标准答案
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    try {
      const [res1, res2] = await Promise.all([promise1, promise2]);
      return res1 + res2;
    } catch (error) {
      console.error(error);
      throw error; // 重新抛出错误以保持将错误传播给调用者的行为
    }
  };
  
//   作者：力扣官方题解
//   链接：https://leetcode.cn/problems/add-two-promises/solutions/2506145/shi-yong-promise-chu-li-yi-bu-cao-zuo-by-m5ob/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。