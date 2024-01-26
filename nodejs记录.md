# 常见 APi

## fs 模块

> fs 很多方法都有异步和同步的形式

---

```javascript
fs = require("fs");

fs.linkSync(
  `${process.cwd()}/create-modules-storage`,
  `${process.cwd()}/create-modules-storage.text`
);//复制并重命名

fs.existsSync("./test.txt");
// 创建唯一的临时目录
fs.mkdtemp(prefix[, options], callback)
fs.mkdtempSync(prefix[, options])
//创建目录
fs.mkdir(path[, mode], callback)
fs.mkdirSync(path[, mode])
//打开文件或目录
fs.open(path[, flags][, mode], callback)
fs.openSync(path[, flags][, mode]) // 返回一个文件描述符
// 打开目录
fs.opendir(path[, options], callback)
fs.opendirSync(path[, options]) // 返回一个 Dir 对象
//读取文件状态
fs.stat(path, callback)
fs.statSync(path)
// 读取文件
fs.readFileSync("./test.txt", "utf-8");
fs.readFile("./test.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
    return;
  }
//删除
fs.rmdir(path, callback)
fs.rmdirSync(path)
//写入
fs.writeFile(file, data[, options], callback)
fs.writeFileSync(file, data[, options]) // 返回 undefined
});
```

```javascript
import.meta.url; //当前文件的路径
path.resolve(); //路径处理

process.cwd(); //当前工作目录
```
