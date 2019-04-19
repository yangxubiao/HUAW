    
<template>
<div>
   <div id="nav">
    <div id="nav-inner">
       <ul class="nav-innerfr">
         <li>
              <router-link to="/index">首页</router-link>
         </li>
         <li>
           <span>|</span>
         </li>
         <li>
             <a href="javascript:;">华为官网</a>
         </li>
         <li>
              <span>|</span>
         </li>
         <li>
              <a href="javascript:;">荣耀官网</a>
         </li>
         <li>
           <span>|</span>
         </li>
         <li>
              <a href="javascript:;">花粉俱乐部</a>
         </li>
         <li>
           <span>|</span>
         </li>
         <li>
              <a href="javascript:;">V码(优购码)</a>
         </li>
         <li>
           <span>|</span>
         </li>
         <li>
              <a href="javascript:;">企业购</a>
         </li>
         <li>
           <span>|</span>
         </li>
         <li>
              <a href="javascript:;">Select Region</a>
         </li>
         <li>
           <span>|</span>
         </li>
         <li>
              <a href="javascript:;">更多精彩V</a>
              <div class="navEvent">
                    <ul>
                        <li>
                              <a href="javascript:;">EMUI</a>
                        </li>
                        <li>
                                    <a href="javascript:;">应用市场</a>
                       </li>
                       <li>
                              <a href="javascript:;">华为终端云空间</a>
                       </li>
                       <li>
                              <a href="javascript:;">开发者联盟</a>
                 </li>
                    </ul>
              </div>
         </li>
     </ul>
     <ul class="nav-innerfl">
          <li>
                 <div v-if="show==false">
                        <a href="javascript:;" @click="l">请登录&nbsp;</a>
                        <router-link href="javascript:;"  to="/register">注册</router-link>
                            <div id="login" v-show="toggle">
                                <div class="item">
                                    <div class="item-top">
                                       <span @click="l">X</span> 
                                    </div>
                                    <div class="item-middle">
                                          账户登录
                                    </div>
                                   <div class="item-bottom">
                                        <input type="text" v-model="obj.uname" required  autofocus placeholder="请输入您的用户名" />
                                        <input type="password" v-model="obj.upwd" required placeholder="请输入您的用户密码" />
                                          <router-link to="/register" class="left">注册账户</router-link>
                                        <a href="javascript:;" class="right">忘记密码?</a>  
                                      
                                        <span v-text="text"></span>
                                        <button @click="login">登录</button>                          
                                  </div>
                                  <div class="item-baseline">
                                   继续访问即代表您已同意<a href="javascript:;">华为商城服务协议</a>和<a href="javascript:;">华为隐私政策</a>
                                  </div>
                                </div>
                            </div>
                </div>
                <div v-else>
                     <a href="javascript:;" v-html="`welcome ${user.uname}&nbsp;`"></a>
                     <a href="javascript:;" @click="destroyS">注销</a>
                </div>
             </li>
             <li>
               <span>|</span>
             </li>
             <li>
                 <a href="javascript:;">我的订单</a>
             </li>
             <li>
                  <span>|</span>
             </li>
             <li>
                  <a href="javascript:;">客户服务</a>
                  <div class="navEvent">
                      <ul>
                           <li>
                               <a href="javascript:;">服务中心</a>
                           </li>
                           <li>
                               <a href="javascript:;">联系客服</a>
                           </li>
                      </ul>
                  </div>
             </li>
             <li>
               <span>|</span>
             </li>
             <li>
                  <a href="javascript:;">网站导航V</a>
                  <div class="navEvent">
                     <dl>
                         <dt>频道</dt>
                         <dd>
                             <a href="javsacript:;">华为专区</a>
                             <a href="javsacript:;">荣耀专区</a>
                             <a href="javsacript:;">华为专区</a>
                          </dd>
                     </dl>
                     <dl>
                          <dt>手机</dt>
                          <dd>
                              <a href="javsacript:;">手机</a>
                              <a href="javsacript:;">智能家居</a>
                              <a href="javsacript:;">平板&笔记本</a>
                              <a href="javsacript:;">通用配件</a>
                              <a href="javsacript:;">智能穿戴</a>
                              <a href="javsacript:;">专属配件</a>
                           </dd> 
                      </dl>     
                      <dl>
                              <dt>增值服务</dt>
                              <dd>
                                  <a href="javsacript:;">以旧换新</a>
                                  <a href="javsacript:;">礼品包装</a>
                                  <a href="javsacript:;">补够保障</a>
                                  <a href="javsacript:;">一口价换电池</a>
                               </dd> 
                          </dl>     
                          <dl>
                                  <dt>会员</dt>
                                 <dd>
                                      <a href="javsacript:;">会员频道</a>
                                   </dd> 
                              </dl>    
                  </div>
             </li>
             <li>
               <span>|</span>
             </li>
             <li>
                  <a href="javascript:;">手机版V</a>
             </li>
             <li>
               <span>|</span>
             </li>
             <li>
                  <router-link to="/shopping">购物车</router-link>
                  <div class="navEvent">
                            <img src="img/navbar-img/navbar-imgShopping.jpg" alt="">
                            <p>你购物车是空的,赶紧选购吧</p>
                          <a href="javascript:;">去逛逛吧</a>
                  </div>
             </li>
     </ul>
     </div> 
  </div>
  <!-- 二楼导航链接  -->
  <div id="navSlide">
      <div id="navSlide-top">
         <ul class="navLink">
               <li>
                   <img src="img/navbar-img/navbarleft01.png" alt="">  
               </li>
               <li>
                  <a href="#content"   data-toggle="content">手机</a>
                  <a href="#content1"  data-toggle="content">笔记本电脑</a>
                  <a href="#content2"  data-toggle="content">平板&穿戴</a>
                  <a href="#content3"  data-toggle="content">智能家具</a>
                  <a href="#content4"  data-toggle="content">配件</a>
                  <a href="javascript:;">年货节</a>
               </li>
               <li>
                  <input type="text" placeholder="请输入您要搜素的内容？？？">
               </li>
         </ul>
      </div>
      <div id="navSlide-bottom">
          <!-- 手机 -->
          <ul id="content" >
                  <li>     
                          <a href="javascript:;">全部手机<span>></span></a>
                          <a href="javascript:;">HUAWEI Mate系列</a>
                          <a href="javascript:;">HUAWEI P系列</a>
                          <a href="javascript:;">HUAWEI nova系列</a>
                          <a href="javascript:;">华为畅享系列</a>
                          <a href="javascript:;">HUAWEI 麦芒系列</a>  
                  </li>
             <li v-for="(elem,i) of navPhone" :key="i"  @click="handleClick(elem.lid)"> 
                <img :src="elem.pic" alt="">
                <a href="javascript:;">
                    <p v-text="elem.title">HUAWEI mate 20</p>
                    <p v-text="'￥'+elem.price.toFixed(2)">￥4399</p>
                </a>
             </li>
             <!-- <li> <img src="img/navbar-img/navbar-phone/phone2.png" alt="">
              <a href="javascript:;">
                      <p>HUAWEI mate 20 Pro</p>
                      <p>￥5399</p>
                  </a>
             </li>
             <li> <img src="img/navbar-img/navbar-phone/phone3.png" alt="">
              <a href="javascript:;">
                      <p>HUAWEI mate 20 X</p>
                      <p>￥4999</p>
                  </a> 
             </li>
           <li> <img src="img/navbar-img/navbar-phone/phone4.png" alt="">
               <a href="javascript:;">
                      <p>HUAWEI nova 4</p>
                      <p>￥3399</p>
                  </a>
              <li>
             <li> <img src="img/navbar-img/navbar-phone/phone5.png" alt="">
                <a href="javascript:;">
                      <p>HUAWEl P20 Pro</p>
                      <p>￥4488</p>
                  </a>        
            </li>
             <li> <img src="img/navbar-img/navbar-phone/phone6.png" alt="">
              <a href="javascript:;">
                      <p>HUAWEI Mate 10 Pro</p>
                      <p>￥3599</p>
               </a>
           </li> -->
          </ul>
          <!-- 笔记本电脑-->
          <ul id="content1" >
                  <li>
                          <a href="javascript:;">全部笔记本电脑</a>
                          <span>></span>
                          <a href="javascript:;">笔记本电脑</a>
                          <a href="javascript:;">笔记本配件</a>
                  </li>
                 <li v-for="(elem,i)  of navComputer" :key="i" @click="handleClick(elem.lid)"> 
                     <img :src="elem.pic" alt="">
                 <a href="javascript:;">
                      <p v-text="elem.title"></p>
                      <p v-text="'￥'+elem.price.toFixed(2)"></p>
                  </a>
             </li>
             <!-- <li> <img src="img/navbar-img/navbar-computer/computer2.png" alt="">
              <a href="javascript:;">
                      <p>HUAWEI MateBook X Pro</p>
                      <p>￥7988</p>
                  </a>
             </li>
             <li> <img src="img/navbar-img/navbar-computer/computer3.png" alt="">
              <a href="javascript:;">
                      <p>HUAWEI MateBook X</p>
                      <p>￥6188</p>
                  </a>
            </li>
              <li><img src="img/navbar-img/navbar-computer/computer4.png" alt="">
                  <a href="javascript:;">
                          <p>HUAWEI MateBook E</p>
                          <p>￥4288</p>
                      </a>
               </li>
              <li><img src="img/navbar-img/navbar-computer/computer5.png" alt="">
                  <a href="javascript:;">
                          <p>HUAWEI MateBook D</p>
                          <p>￥5188</p>
                      </a>
              </li>
              <li><img src="img/navbar-img/navbar-computer/computer-mouse6.png" alt="">
                  <a href="javascript:;">
                          <p>HUAWEI 蓝牙鼠标</p>
                          <p>￥179</p>
                      </a>
              </li> -->
          </ul> 
          <!-- 平板电脑 -->
           <ul id="content2" >
                  <li>
                          <a href="javascript:;">全部平板&穿戴</a>
                          <a href="javascript:;">平板电脑</a>
                          <a href="javascript:;">手环/手表</a>
                          <a href="javascript:;">VR</a>
                      </li>
             <li v-for="(elem,i) of navFlat" :key="i" @click="handleClick(elem.lid)"> 
                  <img :src="elem.pic" alt="">
              <a href="javascript:;" >
                      <p v-text="elem.title"></p>
                      <p v-text="'￥'+elem.price.toFixed(2)"></p>
                  </a>
            </li>
             <!-- <li> <img src="img/navbar-img/navbar-flat-wear/flat-wear2.png" alt="">
              <a href="javascript:;">
                      <p>华为儿童手表 3 Pro</p>
                      <p>￥938</p>
                  </a>
            </li>
             <li> <img src="img/navbar-img/navbar-flat-wear/flat-wear3.png" alt="">
              <a href="javascript:;">
                      <p>华为畅享平板</p>
                      <p>￥1249</p>
                  </a>
            </li>
              <li><img src="img/navbar-img/navbar-flat-wear/flat-wear4.png" alt="">
                  <a href="javascript:;">
                          <p>华为平板 M5 10.8英寸</p>
                          <p>￥2288</p>
                      </a>
              </li>
              <li><img src="img/navbar-img/navbar-flat-wear/flat-wear5.png" alt="">
                  <a href="javascript:;">
                          <p>华为手环 B5</p>
                          <p>￥979</p>
                      </a>
              </li>
             <li> <img src="img/navbar-img/navbar-flat-wear/flat-wear6.png" alt="">
              <a href="javascript:;">
                      <p>HUAWEI WATCH 2 Pro</p>
                      <p>￥2239</p>
                  </a>
            </li> -->
           </ul>
           <!-- 智能家具 -->
           <ul id="content3"  >
                  <li>
                          <a href="javascript:;">全部智能家具</a>
                          <a href="javascript:;">路由器</a>
                          <a href="javascript:;">字母/分布式路由</a>
                          <a href="javascript:;">电脑/wifi放大器</a>
                          <a href="javascript:;">照明</a>
                          <a href="javascript:;">清洁</a>
                          <a href="javascript:;">环境</a>
                          <a href="javascript:;">安防</a>
                          <a href="javascript:;">健康</a>
                          <a href="javascript:;">厨电</a>
                          <a href="javascript:;">影音</a>
                          <br>
                          <a href="javascript:;" class="products-my_a">卫浴</a>
                          <a href="javascript:;">出行</a>
                          <a href="javascript:;">智趣</a>
                          <a href="javascript:;">其他</a>  
                      </li>
             <li v-for="(elem,i) of navCapacity" :key="i" @click="handleClick(elem.lid)">
                 <img :src="elem.pic" alt="">
              <a href="javascript:;">
                      <p v-text="elem.title"></p>
                      <p v-text="'￥'+elem.price.toFixed(2)"></p>
                  </a>
            </li>
             <!-- <li> <img src="img/navbar-img/navbar-capacity/capacity2.png" alt="">
              <a href="javascript:;">
                      <p>华为Al 音响</p>
                      <p>￥369</p>
                  </a>
             </li>
              <li><img src="img/navbar-img/navbar-capacity/capacity3.png" alt="">
                  <a href="javascript:;">
                          <p>华为路由 Q2</p>
                          <p>￥799</p>
                      </a>
              </li>
             <li><img src="img/navbar-img/navbar-capacity/capacity4.jpg" alt="">
              <a href="javascript:;">
                      <p>华为路由器 A1</p>
                      <p>￥309</p>
                  </a>
             </li>
              <li><img src="img/navbar-img/navbar-capacity/capacity5.png" alt="">
                  <a href="javascript:;">
                          <p>华为随行WiFi 2 畅享版</p>
                          <p>￥319</p>
                      </a>
              </li>
             <li> <img src="img/navbar-img/navbar-capacity/capacity6.png" alt="">
              <a href="javascript:;">
                      <p>720全效空气净化器</p>
                      <p>￥1199</p>
                  </a>
             </li> -->
           </ul>
           <ul id="content4" >
                  <li>
                          <a href="javascript:;">全部配件</a>
                          <a href="javascript:;">保护膜</a>
                          <a href="javascript:;">保护套</a>
                          <a href="javascript:;">触控笔</a>
                          <a href="javascript:;">表带</a>
                          <a href="javascript:;">耳机</a>
                          <a href="javascript:;">音响</a>
                          <a href="javascript:;">全景相机</a>
                          <a href="javascript:;">电源/充电器/线材</a>
                          <a href="javascript:;">自拍杆/支架</a>
                          <a href="javascript:;">存储</a>
                          <a href="javascript:;">智能硬件</a>
                  </li>
             <li v-for="(elem,i) of  navParts" :key="i" @click="handleClick(elem.lid)">  
                 <img :src="elem.pic" alt="">
              <a href="javascript:;">
                        <p v-text="elem.title"></p>
                      <p v-text="'￥'+elem.price.toFixed(2)"></p>
                  </a>
            </li>
             <!-- <li> <img src="img/navbar-img/navbar-parts/parts2.png" alt="">
              <a href="javascript:;">
                      <p>HUAWEI Mate 20 Pro 旅行...</p>
                      <p>￥99</p>
                  </a>
            </li>
             <li> <img src="img/navbar-img/navbar-parts/parts3.png" alt="">
              <a href="javascript:;">
                      <p>华为10000 移动电源 Super</p>
                      <p>￥229</p>
                  </a>
            </li>   
             <li> <img src="img/navbar-img/navbar-parts/parts4.png" alt="">
              <a href="javascript:;">
                      <p>华为主动降噪耳机3</p>
                      <p>￥349</p>
                  </a>
            </li>
              <li><img src="img/navbar-img/navbar-parts/parts5.png" alt="">
                  <a href="javascript:;">
                          <p>华为车载快速充电器</p>
                          <p>￥159</p>
                      </a>
              </li>
             <li> <img src="img/navbar-img/navbar-parts/parts6.png" alt="">
              <a href="javascript:;">
                      <p>华为补光灯自拍杆</p>
                      <p>￥119</p>
                  </a>
            </li> -->
          </ul> 
      </div>
  </div>
  </div>
</template>


<script>
import store from '@/store.js'
export default {
     data() {
         return {
               toggle:false,
                 show:false,
                 navPhone:"",
                 navComputer:"",
                 navFlat:"",
                 navCapacity:"",
                 navParts:"",
                 user:{},
                text:"",
                obj:{
                    uname:"",
                    upwd:""
                },
                pid:""
             }
     },
     methods:{
         destroyS(){
             localStorage.setItem("user",0)
                this.show=false;
         },
         l(){      
             this.toggle=!this.toggle;
         },
           handleClick(pid) {
           localStorage.setItem('pid',pid);
             this.$router.push({
                  name: 'details',
                  params: {
                     pid: pid,
                     lid: 1
                 }
              })
          },
       login(){
          if(this.obj.uname.trim()!=""&&this.obj.upwd.trim()!=""){
              var url="/user/login?uname="+this.obj.uname+"&upwd="+this.obj.upwd
                this.axios.get(url).then(res=>{
                    if(res.data.code==1){
                     localStorage.setItem('user',JSON.stringify(res.data.data[0]))
                     this.user=JSON.parse(localStorage.getItem('user'));
                        this.toggle=false;
                          this.show=true;
                    }else{
                       this.text="用户名或密码有误"
                    }
                })
          }else{
              this.text="用户名或密码不能为空";
          }
       }
     },    
     created(){
     
          this.axios.get('/index',{
       }).then(response=>{
            var product=response.data.product;
            this.navPhone=product.slice(49,55);
            this.navComputer=product.slice(55,61);
            this.navFlat=product.slice(61,67);
            this.navCapacity=product.slice(67,73);
            this.navParts=product.slice(73,79);
       });
      if(localStorage.getItem("user")!=null&&localStorage.getItem("user")!=0){
             this.user=JSON.parse(localStorage.getItem("user"))  
              this.show=true;         
        }
     },
     mounted(){ 
      $(function(){
        /*<!-- 一楼导航链接 -->*/ 
        var $l=$("#nav");
         var $liJ=$("#nav #nav-inner ul.nav-innerfr>li:last-child");
         var $liC=$liJ.parent().next().children(":nth-child(5)");
         var $liI=$liC.parent().children(":nth-child(7)");
         var $liS=$liC.parent().children(":last-child");
          function vali(toggle){
            toggle.hover(
               function(){
                 $(this).children(":last-child").show();
               },
              function(){
               $(this).children(":last-child").hide();
              }
             );
          }
         vali($liJ);
         vali($liC);
         vali($liI);
         vali($liS);
         });
         /* 二楼导航链接 */
         (function(){
             var $uls=$("#navSlide #navSlide-bottom>ul");
           $("#navSlide #navSlide-top").on("mouseenter","a",function(){
                var id=$(this).attr("href");
                  if(id!="javascript:;"){
                    $uls.hide();
                    $(id).show();
                  }else{
                     $uls.hide();
                }
            });
            $("#navSlide").on("mouseleave",function(){
                      $uls.slideUp();
            })
         })();
      }
 }
</script>

<style scoped>
*{margin:0;padding:0}
ul{list-style:none}
a{text-decoration:none}
#navSlide #navSlide-bottom ul a{
  position:relative;
  width:142px;
  height:181px;
}
#nav{
    width:100%;
    height:2.5rem;
    background:#f9f9f9;
}
#nav #nav-inner{
    width:1200px;
    height:2.5rem;
    margin:0 auto;
    line-height:2.5rem;
}
#nav  #nav-inner>ul>li,#nav #nav-inner>ul{
    float:left;
}
#nav  #nav-inner ul li a,#nav  #nav-inner ul li span{
    color:#a4a4a4;
    font-size:12px;
    cursor:pointer
}
#nav #nav-inner ul li span{
    padding:4px;
}
#nav  #nav-inner ul li a:hover{
    color:#ca151d;
}
#nav  #nav-inner .nav-innerfl{
    margin-left:10rem;
} 
#nav  #nav-inner .nav-innerfl  li:first-child>div{
    float:left;
} 
#nav  #nav-inner .nav-innerfl  li:first-child #login{
     position:fixed;
     width:100%;height:100%;
     top:0px;left:0px;display:flex;
     background:rgba(0,0,0,.5);
     z-index:1000;
} 
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item{ 
     width:500px;height:500px;
     background:#fff;
     margin:auto;
} 
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item div.item-top{ 
      width:100%;height:30px;background:#ca151d;line-height:30px;
} 
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item div.item-top span{ 
           font-size:16px;color:#fff;margin-left:480px;
} 
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item-middle{ 
     width:100%;height:80px; line-height:80px;font-size:20px;text-align:center;color:#ca151d;
}
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item-bottom{ 
     width:80%;height:300px;padding:0 50px;
}
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item-bottom>input{ 
     width:100%;height:50px;border:0;border-bottom:1px solid #ddd;text-indent:1rem;
     outline-style:none;margin-bottom:10px
}
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item-bottom>a{ 
      font-size:14x;color:blue;
}
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item-bottom>span{ 
      display:block;width:100%;height:50px;text-align:center;color:#ca151d;font-size:16px;line-height:50px;
}
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item-baseline{ 
      text-align:center;font-size:14px;color:#717171;
}
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item-baseline a{ 
    font-size:14px;color:blue;text-decoration:underline;
    }
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item-bottom>button{ 
      width:60%;height:42px;background:#B40707;outline-style:none;border:0;border-radius:30px;display:block;margin:0 auto;color:#fff;
}
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item-bottom>button:hover{ 
      background:#c70000;
}
#nav  #nav-inner .nav-innerfl  li:first-child #login div.item-bottom>a.right{ 
   margin-left:18rem;
} 
#nav  #nav-inner  .nav-innerfr li:last-child,#nav #nav-inner .nav-innerfl li:nth-child(5),#nav #nav-inner .nav-innerfl li:nth-child(7),#nav #nav-inner .nav-innerfl li:nth-child(11){
     padding:0 10px;
     position:relative;
}  
#nav  #nav-inner  .nav-innerfr li:last-child:hover,#nav #nav-inner .nav-innerfl li:nth-child(5):hover,#nav #nav-inner .nav-innerfl li:nth-child(7):hover,#nav #nav-inner .nav-innerfl li:nth-child(11):hover{
    background:#fff;
}  
/**/
#nav  #nav-inner  .nav-innerfr li:last-child div.navEvent{
    display:none;
    position:absolute;
    top:40px;
    left:-43px;
    width:119px;
    height:170px;
    background:#fff;   
    z-index:5;
}
#nav  #nav-inner  .nav-innerfr li:last-child div.navEvent ul{
    text-align:center;
}
#nav #nav-inner .nav-innerfl li:nth-child(5) div.navEvent{
    display:none;
    position:absolute;
    top:40px;
    height:70px;
    left:0px;
    width:68px;
    background:#fff;
    text-align:center;
    box-sizing:border-box;
    z-index:5;
}
#nav #nav-inner .nav-innerfl li:nth-child(5) div.navEvent ul li:last-child{
     width:100%;
     height:20px;
     margin-top:-14px;
}
#nav #nav-inner .nav-innerfl li:nth-child(7) div.navEvent{
    display:none;
    position:absolute;
    top:40px;
    height:163px;
    left:-835px;
    width:911px;
    background:#fff;
    text-align:center;
    box-sizing:border-box;
   z-index:5;
}
#nav #nav-inner .nav-innerfl li:nth-child(7) div.navEvent dl{
    float:left;
    margin-left:4rem;
}
#nav #nav-inner .nav-innerfl li:nth-child(7) div.navEvent dt{
    padding-right:115px;
    box-sizing:border-box;
}
#nav #nav-inner .nav-innerfl li:nth-child(7) div.navEvent dd{
    width:150px;
    text-align:justify;
}
#nav #nav-inner .nav-innerfl li:nth-child(7) div.navEvent dd a{
    display:inline-block;
    width:72px;
    height:20px;
    line-height:20px;
}
#nav #nav-inner .nav-innerfl li:nth-child(11) div.navEvent{
    display:none;
    position:absolute;
    top:40px;
    height:180px;
    left:-380px;
    width:436px;
    background:#fff;  
    text-align:center; 
    z-index:5;
}
#nav #nav-inner .nav-innerfl li:nth-child(11) div.navEvent img{
    width:100px;
    height:70px;
}
#nav #nav-inner .nav-innerfl li:nth-child(11) div.navEvent p{
    color:#a4a4a4;
}
#nav #nav-inner .nav-innerfl li:nth-child(11) div.navEvent a{
       display:inline-block;
       width:9rem;
       height:2.3rem;
       background:#fff;
       border:1px solid #a4a4a4;
       font-size:14px;
}
#nav #nav-inner .nav-innerfl li:nth-child(11) div.navEvent a:hover{
    border:1px solid #ca151d;
}
/* navbar ordel */
#navSlide{
  width:100%;
  position:relative;
  box-shadow:0px 0px 3px 3px #ddd;
} 
#navSlide #navSlide-top{
    width:1200px;
    height:80px;
    margin:0 auto;
    box-sizing:border-box;
    padding:20px 0px;
}
#navSlide #navSlide-top .navLink li{
    float:left;
}
#navSlide #navSlide-top .navLink li:first-child img{
    width:205px;height:36px;
}
#navSlide #navSlide-top .navLink li:nth-child(2){
    height:36px;
    line-height:36px;
    margin-left:2rem;
}
#navSlide #navSlide-top .navLink li:nth-child(2) a{
    color:#333;
    font-size:16px;
    margin-left:20px;
} 
#navSlide #navSlide-top .navLink li:nth-child(2) a:hover{
    color:#ca151d;
} 
#navSlide #navSlide-top .navLink li:nth-child(3){
     width:320px;
     height:30px;
     border-radius:10px;
     margin-left:10rem;
} 
#navSlide #navSlide-top .navLink li:nth-child(3) input{
    width:320px;
    height:30px;
    background:#f0f0f0;
    outline:none;
    border:0;
    text-indent:1rem;
    border-radius:10px;
}
#navSlide #navSlide-bottom{
    width:100%;
  background:#fff;
  position:absolute;
}
#navSlide #navSlide-bottom ul{
    position:absolute;
    width:1200px;
    height:260px;
    left:50%;
    margin-left:-600px;
    z-index:11;
    display:none;
    background:#fff;
}
#navSlide #navSlide-bottom ul a{
    font-size:14px;
    color:#717171;
}
#navSlide #navSlide-bottom ul a:hover{
    color:#ca151d;
}
#navSlide #navSlide-bottom ul li a:first-child{
    color:#3a3a3a;
}
#navSlide #navSlide-bottom ul li a:first-child span{
     padding-left:30px;
     font-size:16px;
}
#navSlide #navSlide-bottom ul li:first-child a{
    margin-left:30px;
}
#navSlide #navSlide-bottom ul li+li{
    float:left;
    text-align:center;
    margin-left:45px;
    padding-top:2rem;
}
#navSlide #navSlide-bottom ul li+li a p:nth-child(1){
       color:#222;
       font-size:12px;
}
#navSlide #navSlide-bottom ul li+li a p:nth-child(2){
    color:#ca151d;
}
</style>