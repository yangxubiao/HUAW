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
    var count=parseInt(req.query.sum);
    var i=req.query.q;
     pool.query("SELECT * FROM hw_car WHERE uid=? and pid=? and lid=? and i=?",[uid,pid,lid,i],(err,result)=>{
         if(err) throw err;
         if(result.length>0){
              var titleU=result[0].title;
             let sum=parseInt(result[0].count)+count                                
                   pool.query("UPDATE hw_car SET count=? WHERE uid=? and i=? and pid=? and lid=?",[sum,uid,i,pid,lid],(err,result)=>{
                     if(err) throw err;
                       res.send({code:1,data:titleU});     
                })
            }else{
            pool.query("SELECT title,price FROM hw_product_details WHERE pid=? AND lid=? ",[pid,lid],(err,result)=>{
                            if(err) throw err;
                            var title=result[i].title;
                            var price=result[i].price;
                            pool.query("SELECT * FROM hw_product_pic WHERE pid=? AND lid=?",[pid,lid],(err,result)=>{
                                if(err) throw err;
                                var p=0;
                                var pic=result[p].sm;
                            pool.query("INSERT INTO hw_car VALUES(?,?,?,?,?,?,?,?)",[uid,title,price,pic,count,pid,lid,i],(err,result)=>{
                                    if(err) throw err;
                                    if(result.affectedRows>0){
                                        res.send({code:1,data:title})
                                    }
                            })
                         })
                        })
                   }
     })
  });
  router.get('/loadMore',(req,res)=>{
      var uid=req.query.uid;
      pool.query("SELECT * FROM hw_car WHERE uid=?",[uid],(err,result)=>{
          if(err) throw err;
          if(result.length>0)
           res.send({code:1,data:result})
           else{
               res.send({code:-1,mas:'null data'})
           }
      })
  })
  router.get('/deletes',(req,res)=>{
      var uid=req.query.uid;
      var pid=req.query.pid;
      var lid=req.query.lid;
      var i=req.query.i;
      pool.query("DELETE FROM hw_car WHERE uid="+uid+" and pid in("+pid+") and lid in("+lid+") and i in("+i+")",(err,result)=>{
            if(err) throw err;
          if(result.affectedRows>0){
               res.send({code:1,data:result})
          }else{
            res.send({code:-1,data:"没找到商品"})
          }
      })
  })
module.exports=router;
