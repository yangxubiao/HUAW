//引入express模板
const express=require("express");
//引入pool.js连接池
const pool=require("../pool")
//创建路由
var router=express.Router();
router.get("/login",(req,res)=>{
 var $uname=req.query.uname;
 var $upwd=req.query.upwd;          
pool.query("SELECT * FROM  hw_user WHERE uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
    if(err) throw err;
     if(result.length>0){
      res.send({code:1,data:result})
     }else{
       res.send({code:-1,data:"not User"});
     }
   })
 })
router.get("/register",(req,res)=>{
  var uname=req.query.uname;
  var upwd=req.query.upwd;
 
  pool.query("SELECT uid FROM  hw_user where uname = ?",[uname],(err,result)=>{
    if(err) throw err;
     if(result.length>0){
         res.send({code:1,msg:"用户名已存在,请重新输入"})
     }else{
      pool.query("INSERT INTO hw_user(uname,upwd) VALUES(?,?)",[uname,upwd],(err,result)=>{
        if(err)  throw err;
    
          if(result.affectedRows>0){
            console.log(uname);
            console.log(upwd);
            pool.query("SELECT * FROM  hw_user WHERE uname=? ",[uname],(err,result)=>{
              if(err) throw err;
               if(result.length>0){
                        console.log(result);
                       res.send({code:-1,data:result})
                   }else{
                       res.send({code:-1,msg:"查找失败"})
                  }
               })
            }else{
               res.send({code:-1,msg:"插入失败"})
            }
         })
      }
   });








   
})
module.exports=router;
