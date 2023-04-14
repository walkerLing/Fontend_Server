const express = require('express') //引入express 模块
const app = express()              //创建实例
const mysql = require('mysql')     //引入mysql 模块
// 创建数据库连接 填入数据库信息 
//填自己数据库的信息!!!!!!!!!!!
const conn = mysql.createConnection({
  user:'root',          //用户名
  password:'LINGyiMING155',	//密码
  port:3306,
  host:'localhost',		//主机（默认都是local host）
  database:'login'       //数据库名注意！！！不是你新建连接起的连接名
})
// 测试连接
conn.connect(err=>{
  console.log(err,'如果为null 就是连接成功');
})
// 开启服务器
app.listen(3000,()=>{
  console.log('服务器在3000端口开启。。。。。');
})

app.get('/a',(req,res)=>{
    let sqlStr =  "INSERT INTO userlogin VALUES('Gao','456')"
       //执行mysql 语句
       conn.query(sqlStr,(err)=>{
           console.log(err,'如果为null，sql语句执行成功')
       })
       //成功后的页面显示
       res.send('插入成功')
   })


