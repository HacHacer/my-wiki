const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
 res.send('hahahh')
});
app.get('/api/jsonp', (req, res) => {
  const funcName = req.query.callback;
    //得到要通过 JSONP 形式发送给客户端的数据
    const data = { name: 'zs', age: 20 };
    //根据前两步得到的数据 拼接处一个函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;
    //把上一步得到的字符串相应给客户端的<script>标签进行解析执行
    res.send(scriptStr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});