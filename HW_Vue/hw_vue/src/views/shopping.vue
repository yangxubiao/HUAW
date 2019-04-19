    
<template>
  <div>
     <my-header></my-header>
     <div id="container">
     <div id="shopping">
        <div id="shopping-top">
           <p >我的购物车</p>
           <div class="login"  v-show="visible">
               {{shoppingText}}
           <router-link to="/login">登录</router-link>
           </div>
        </div>
        <div id="shopping-middle1">
            <ul class="first1">
              <li class="first">
                <label>
                  <input type="checkbox">&nbsp;&nbsp;&nbsp;全选
                </label>
               </li>
              <li>商品</li>
              <li>单价</li> 
              <li>数量</li> 
              <li>小计</li> 
              <li>操作</li>
          </ul>
           <div class="middle-middle">
              <ul>
                  <li>   
                     <label>
                         <input type="checkbox">
                     </label>
                      <img src="img/product_details/sm/product_details_sm01_01_01.png" alt="">
                       <div>
                          <span class="shoppingText"> 荣耀10青春版 2400万AI自拍 6.21英寸高屏占比珍珠屏 全网通 4GB+64GB（幻夜黑）</span>
                          <span class="price">￥1420</span>
                          <div class="number">
                               <button>-</button>
                               <input type="text">
                               <button>+</button>
                          </div>
                             <span class="price1">￥1420</span>
                             <span class="delete">删除</span>
                        </div>
                   </li>
              </ul>
           </div>
         <ul class="first2">
           <li class="first2-item1">
               <label>
                  <input type="checkbox">&nbsp;&nbsp;&nbsp;全选
                </label>
           </li>
           <li class="first2-item1">删除</li>
            <li class="first2-item2">
              <a href="javascipt:;">立即结算</a>
            </li>
            <li class="first2-item3">
               <p>总机:&nbsp;<span>￥1249</span>&nbsp;</p>
               <p>选择&nbsp;<span>1</span>&nbsp;件商品</p>
            </li>
         </ul>
        </div>
       <div id="shopping-middle" >
         <div class="shopping-middle">
             <img src="img/shopping/shopping-logo.png" alt="">
             <p>您的购物车里什么也没有哦~</p>
             <a href="javascript:;">去逛逛</a>
         </div>
      </div>
     </div>
       
      <div id="shopping-bottom">
         <h3>热销推荐</h3>
         <ul>
              <li v-for="item of navPhone" @click="handleClick(item.lid)">
                <div>
                    <img :src="item.pic" alt="">  
                 </div> 
                 <p v-text="item.title"></p>
                 <span v-text="'￥'+item.price"></span>
              </li>
         </ul>
      </div>
     </div>
     <my-footer></my-footer>
  </div>
 </template>
 
 
 
 <script>
 import store from '@/store'
   export default {
       data(){
           return {
             shoppingText:"您还没有登录！登录后可查看之前加入的商品",
             visible:true,
             user:{},
             navPhone:[],
           }
       },
       methods:{
           handleClick(pid) {
               this.$router.push({
                   name: 'details',
                   params: {
                       pid: pid,
                       lid: 1
                   }
               })
             },
         load(){
           this.axios.get('/index',{
            }).then(response=>{
             var product=response.data.product;
             this.navPhone=product.slice(50,55);
          });
         },
         loadMore(){
           // var url=""
           // this.axios.get()
         }
       },
       created(){
          // this.user=store.state.user;
          // console.log(this.user);
          //   if(store.state.user.uid!=undefined){
          //            this.visible=false;
          //   };
            this.load();
       },
      watch:{
         user:{
           handler(newVal){
             this.user=newVal;
             console.log(1)
              
           },
              deep:true
         }
      }  
   }
   
 </script>
 <style scoped>
 *{margin:0;padding:0}
 ul,ol,dl{list-style:none}
 a{text-decoration:none}
 #container{
   width:100%;height:100%;background:#f5f5f5;
 }
       #shopping{
         width:1200px;
         height:100%;
         margin:0 auto;
          margin-bottom:10px;
       }
       #shopping #shopping-top{
           width:100%;
           height:50px;
           line-height:50px;
           border: 1px solid #eace85;
           background: #fffdee;
           margin-top:5px;
           color:red;
       } 
           #shopping #shopping-top>p{
             float:left;font-size:16px;margin:0;padding:0;
       } 
            #shopping #shopping-top div{
             float:right;font-size:16px;
       } 
            #shopping #shopping-middle{
            width:100%;height:500px;
            position:relative;
            margin:50px 0;
            background:#fff;
            display:none;
       } 
            #shopping #shopping-middle .shopping-middle{
            position:absolute;top:50%;left:50%;width:250px;height:300px;
            margin-top:-150px;margin-left:-125px;text-align:center;
       } 
        #shopping #shopping-middle .shopping-middle>p{
                 font-size: 18px;color: #a4a4a4;margin:16px;
           } 
         #shopping #shopping-middle .shopping-middle>a{
            margin:0 auto;display:block;width:172px;height:40px; font-size:16px;color: #fff;background: #ca141d;border-radius:5px;line-height:40px;
           } 
           #shopping-bottom{
             width:1200px; margin:50px auto;height:200px;background:#fff;
               padding:30px 0;position:relative;
            }
            #shopping-bottom>h3{
                 position:absolute;top:-30px;color:#3a3a3a;font-size:18px;font-weight:400;
             } 
           #shopping-bottom ul li{
             float:left;
             width:220px;height:200px;
             cursor:pointer;text-align:center;
           } 
           #shopping-bottom ul li+li{
             margin-left:22.5px;
           }
             #shopping-bottom ul li>p{
              margin:8px 0;
           } 
           #shopping-bottom ul li>span{
                color:#ca141d;         
            } 
           #shopping #shopping-middle1{
             width:100%;
             height:100%;
             border:5px solid red;
             margin-top:30px;
           }
           #shopping #shopping-middle1>ul.first1{
             width:97.5%;height:30px;background:#fff;color:#a4a4a4;font-size:14px;padding-left:30px;margin-bottom:20px;
           }
           #shopping #shopping-middle1>ul.first1>li.first>label{
              display:inline-block;width:150px;height:30px;
           }
            #shopping #shopping-middle1>ul.first1>li{
             float:left;
           } 
            #shopping #shopping-middle1>ul.first1>li:nth-child(2){
              width:450px;height:30px;
           } 
       #shopping #shopping-middle1>ul.first1>li:nth-child(2)~li{
              width:100px;height:30px;margin-left:30px;
           } 
            #shopping #shopping-middle1>.middle-middle{
               width:97.5%;height:100%;padding-left:30px;background:#fff;
            }
             #shopping #shopping-middle1>.middle-middle>ul:after{
               content:"";display:block;clear:both;
            }
             #shopping #shopping-middle1>.middle-middle>ul>li{
              height:80px;border:1px solid red;padding:15px 0;width:100%;float:left;
            }
             #shopping #shopping-middle1>.middle-middle>ul>li>label{
                 position:relative;top:30px;float:left;margin-right:20px;
            }
                #shopping #shopping-middle1>.middle-middle>ul>li>img{
                  width:80px;height:80px;vertical-align:top;float:left;
            }
               #shopping #shopping-middle1>.middle-middle>ul>li>div{
                float:left;width:87.6%;border:1px solid red;height:100%;margin-left:30px;
            }
                #shopping #shopping-middle1>.middle-middle>ul>li>div>.shoppingText{
                 display:inline-block; width:420px;height:100%;color:#3a3a3a;font-size:14px;
            }
             #shopping #shopping-middle1>.middle-middle>ul>li>div>.price{
               position:relative; width:140px;height:20px;top:-17px;padding:0 50px;
            } 
             #shopping #shopping-middle1>.middle-middle>ul>li>div>.number{
                   display:inline-block;  position:relative; top:-17px;text-align:center;padding-left:27px;
            }
            #shopping #shopping-middle1>.middle-middle>ul>li>div>.number>input{
                 width:30px;
            }
              #shopping #shopping-middle1>.middle-middle>ul>li>div>.number>button{
                 width:20px;
            }
            #shopping #shopping-middle1>.middle-middle>ul>li>div>.price1{
                display:inline-block;  position:relative; top:-17px;padding-left:60px;
            } 
             #shopping #shopping-middle1>.middle-middle>ul>li>div>.delete{
                display:inline-block;  position:relative; top:-17px;padding-left:95px;color:#a4a4a4;
            } 
             #shopping #shopping-middle1>ul.first2{
                  width:97.5%;height:50px;padding-left:30px;background:#fff;margin-top:20px;
             }
               #shopping #shopping-middle1>ul.first2>.first2-item1{
                  float:left;width:90px;margin-top:15px;
             }
                #shopping #shopping-middle1>ul.first2>.first2-item2{
                  float:right;
             }
                 #shopping #shopping-middle1>ul.first2>.first2-item2>a{
                 width: 180px;height: 50px;line-height: 50px;display: block;background: #ca151e;font-size: 18px;color: #fff;text-align: center;
             }
               #shopping #shopping-middle1>ul.first2>.first2-item3{
                  float:right;margin-right:20px;margin-top:5px;
             }
              #shopping #shopping-middle1>ul.first2>.first2-item3 span{
                color:red;
             }
 </style>