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




// 使用cors模块 解决跨域
//引入cors模块
const cors=require('cors');  
//对应端口是web服务器端口
server.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080']
  }));
// 引入数据库
const mysql=require('mysql');
//创建连接池
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'qczx'
})

// 汽车首页文章
server.get('/Article',(req,res)=>{
    pool.query('SELECT * FROM car_article ',(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
//文章详细页面
server.get('/articlecontent',(req,res)=>{
    var sql=req.query
    pool.query('SELECT * from car_article WHERE id=?',[sql.id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//查询页面-推荐
server.get('/tuijian_title',(req,res)=>{
    var sql='SELECT subject FROM  car_article WHERE id <= ?';
    pool.query(sql,[10],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
//查询页面 进行查询
server.get('/search_title',(req,res)=>{
    pool.query('SELECT id,subject FROM  car_article WHERE subject LIKE "%'+req.query.subject+'%"',(err, result)=>{
        if(err) throw err
        res.send(result)
    })
})
//获取车A-Z
 server.get('/getAllcar',(req,res)=>{
     pool.query('SELECT * FROM firstname',(err,result)=>{
        if(err) throw err
        res.send(result)
     })      
 })
 //获取所有车型
 server.get('/getcars',(req,res)=>{
    pool.query('SELECT * FROM allcar',(err,result)=>{
       if(err) throw err
       res.send(result)
    })      
})
//获取热门车排行榜
server.get('/hotcar1',(req,res)=>{
    pool.query('SELECT * from hotcar_car WHERE  cartype = ?',['car'],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
server.get('/hotcar2',(req,res)=>{
    pool.query('SELECT * from hotcar_suv WHERE  cartype = ?',['suv'],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//获取车辆详细信息
server.get('/getcarInfo',(req,res)=>{
    var cartype=req.query.carname
    var sql='SELECT * FROM allcar WHERE cartype = ?'
    pool.query(sql,[cartype],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})







//设置端口号
server.listen(8888);



 