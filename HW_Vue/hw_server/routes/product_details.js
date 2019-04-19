const express=require("express");
var router=express.Router();
const pool=require("../pool");
router.get("/details",(req,res)=>{
    var pid=req.query.pid;
    var lid=req.query.lid;
    var spec,pics,color,product;
    var products={
        spec,
        pics,
        color,
        product
    }
    pool.query("SELECT * FROM hw_product_details WHERE pid=? AND lid=?",[pid,lid],(err,result)=>{
        if(err) throw err;
             products.product=result;
        pool.query("SELECT * FROM hw_product_spec WHERE pid=? AND lid=?",[pid,lid],(err,result)=>{
            if(err) throw err;
                products.spec=result;
          pool.query("SELECT * FROM hw_product_color WHERE pid=? AND lid=? ",[pid,lid],(err,result)=>{
              if(err) throw err;
                   products.color=result; 
                pool.query("SELECT * FROM hw_product_pic WHERE pid=? AND lid=?",[pid,lid],(err,result)=>{
                    if(err) throw err;
                      products.pics=result; 
                         res.send(products);
                 })
           })
        })
    })
});

router.get('/car',(req,res)=>{
    var uid=req.query.uid;
    var pid=req.query.pid;
    var lid=req.query.lid;
    var sum=req.query.sum;
    var i=req.query.q;
    var count=req.query.count;
    if(sum){ 
       count=sum
    }else{
       if(!count){count=1}else{
           count++;
    }
}
console.log(count);
    // pool.query("SELECT * FROM hw_car WHERE uid=? and pid=? and lid=?",[uid,pid,lid],(err,result)=>{
    //     if(err) throw err;
    //     if(result.length>0){
    //     pool.query("UPDATE hw_car SET count=? WHERE uid=? and lid=? and pid=?",[count,uid,lid,pid],(err,result)=>{
    //              if(err) throw err;
    //              console.log(err.result);      
    //          })
    //               }else{
    //                   console.log(result.length)
    //               }
    // })


    // pool.query("SELECT title,price FROM hw_product_details WHERE pid=? AND lid=? ",[pid,lid],(err,result)=>{
    //     if(err) throw err;
    //     //   result[i];
    //        var title=result[i].title;
    //        var price=result[i].price;
    //     pool.query("SELECT * FROM hw_product_pic WHERE pid=? AND lid=?",[pid,lid],(err,result)=>{
    //         if(err) throw err;
    //         var p=0;
    //         var pic=result[0].sm;
    //      pool.query("INSERT INTO hw_car VALUES(?,?,?,?,?,?,?)",[uid,title,price,pic,count,pid,lid],(err,result)=>{
    //              if(err) throw err;
    //              if(result.affectedRows>0){
    //                  res.send({code:1,data:title})
    //              }
    //        })
    //     })
    // })
})
module.exports=router;
