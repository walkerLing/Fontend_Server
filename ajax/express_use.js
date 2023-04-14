// 1、引入express
const express = require('express');
// 2、创建应用对象
const app = express();
// 3、创建路由规则
// request和response分别是对请求报文和响应报文的封装
app.get('/',(request,reponse)=>{
    // 设置简单响应
    reponse.send('HELLO EXPRESS');
})
// 4、监听端口启动服务
app.listen(8000,()=>{
    console.log('服务端已经启动，8000端口监听中')
})
// 借助这个服务，与前端ajax做一个交互