//加载 express模块
const express=require('express');
//创建express应用
const server=express();
//引入body模块
const bodyParser = require('body-parser');
//数据JSON类型
server.use(bodyParser.json());
//解析post请求数据
server.use(bodyParser.urlencoded({ extended: false }));
//引入cors模块
const cors=require('cors');
// 使用cors模块 解决跨域  
//对应端口是web服务器端口
server.use(cors({
    origin:['http://127.0.0.1:5500','http://localhost:5500']
  }));
// 引入数据库
const mysql=require('mysql');
//创建连接池
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'wyyyy'
})


//接收前端传过来的用户名密码 去数据库查找
server.post('/getUser',(req,res)=>{
       var phone=req.body.user_phone;//手机号
       var pw=req.body.user_pw;//密码
       console.log(phone,pw);
       //查询 是否存在
       var sql='SELECT * FROM user_zc  WHERE uphone=? ';
        pool.query(sql,[phone],(err,result)=>{
            if(err) throw err;
            if(result.length < 1 ){
                //如果不存在则进行插入
                var sql2="INSERT INTO user_zc SET uphone= ?,upw=?";
                pool.query(sql2,[phone,pw],(err,result)=>{
                    if(err) throw err;
                   if(result.affectedRows ==1){
                       res.send({code:200,msg:'注册成功'})
                   }
                })
            }else{
                res.send({coed:400,msg:'已存在'})
            }
        })
        
})




//设置端口号
server.listen(8888);



 