// 服务端
// 1、引入express
const express = require('express');
// 2、创建应用对象
const app = express();
// 3、创建路由规则
// request和response分别是对请求报文和响应报文的封装
// 设置路由，若url路径为/server，则就会执行回调函数中的代码，并且由response做相应
app.get('/server',(request,response)=>{
    // 设置响应头，设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置简单响应体
    response.send('HELLO AJAX GET');
})

// app.post改成app.all,可以接收任何类型的请求
app.all('/json-server',(request,response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头,* 表示可以接收所有类型的头信息
    response.setHeader('Access-Control-Allow-Headers','*');
    // 目标为响应一个数据
    const data ={
        name:'atguigu'
    };
    // 不能直接接收对象，需要对对象进行字符串的转换
    let str = JSON.stringify(data);
    // 设置简单响应体,send只能接收字符串和buffer
    response.send(str);
})

// // 针对IE缓存
// app.get('/ie',(request,response)=>{
//     // 设置响应头，设置允许跨域 
//     response.setHeader('Access-Control-Allow-Origin','*')
//     // 设置简单响应体
//     response.send('HELLO IE 2');
// })

// // 延时响应
// app.get('/delay',(request,response)=>{
//     // 设置响应头，设置允许跨域 
//     response.setHeader('Access-Control-Allow-Origin','*')
//     setTimeout(() => {
//         // 设置响应体
//         response.send('延时响应');
//     }, 3000);
// })



// axios服务
app.all('/axios-server',(request,response)=>{
    // 设置响应头，设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头,* 表示可以接收所有类型的头信息
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
})


// 4、设置网页端监听端口启动服务
app.listen(8000,()=>{
    console.log('服务端已经启动，8000端口监听中')
})
// 借助这个服务，与前端ajax做一个交互