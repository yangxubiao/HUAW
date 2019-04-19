const express=require("express");
const pool=require("../pool")
var router=express.Router();
var carousel,product;
var  index={carousel,product}
router.get("/",(req,res)=>{
   pool.query("SELECT * FROM hw_index_product",(err,result)=>{
       if(err) throw err;
       index.product=result;
       pool.query("SELECT * FROM hw_index_carousel",(err,result)=>{
           if(err) throw err;
            index.carousel=result;
    //    res.writeHead(200,{
    //        'Access-Control-Allow-Credentials':'true',
    //        'Access-Control-Allow-Credentials':"http://localhost:8080"
    //        })
    //          res.write(JSON.stringify(index));
    //    res.end();
             res.send(index);
       })
   })
})

module.exports=router;