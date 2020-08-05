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
    database:'weilai'
})

//用户预约试驾
//接收前端传过来的姓名 ,手机号,地址 存到数据库中
server.post('/userInfo',(req,res)=>{
    let obj=req.body
    //先去查询手机号是否存在 如果存在就不让再次预约 直接弹出函数
    var sql2='select * from testdrive WHERE phone = ?'
    pool.query(sql2,[obj.phone],(err,result)=>{
        if(err) throw err
        // console.log(result)
        if(result.length >= 1){
            res.send({code:410})
        }else{
            //不存在就存入数据库
            var sql='INSERT INTO testdrive  SET ? '
            pool.query(sql,[obj],(err,result)=>{
                if(err) throw err;
                // console.log(result)
                // console.log(result.affectedRows)
                if(result.affectedRows == 1){
                    res.send({code:200})
                }
            })
        }    
    })
         
})

//管理员登录
server.post('/adminLogin',(req,res)=>{
    let obj=req.body
    //查询管理员是否存在
    var sql='select * from admin WHERE name=? AND upd =? ';
    pool.query(sql,[obj.name,obj.upd],(err,result)=>{
        if(err) throw err
        //如果大于等于1 管理员存在
        // console.log(result)
        if(result.length >=1){
            res.send({code:210})
        }else{
            res.send({code:444})//444不存在 
        }
    })
})




//向前端发送所有已经预约成功的信息
server.post('/userVal',(req,res)=>{
        var sql='select * from testdrive';
        pool.query(sql,(err,result)=>{
            if(err) throw err
             
             res.status(210).send(result)
        })

})



//设置端口号
server.listen(8888);



 