<template>
<div>
<my-header></my-header>
          <div id="alert" v-show="alert">
              请先<router-link to="/login">登录</router-link>或者<router-link to="/register">注册</router-link>
          </div>
     <div id="details">
         <div class="details-floor1-top"><a href="javscript:;">首页</a>&nbsp;&gt;&nbsp;<a href="javascript:;" >笔记本&平板</a>&nbsp;&gt;&nbsp;<a href="javascript:;">笔记本电脑</a>&nbsp;&gt;&nbsp;
         <span id="bread-pro-name" v-text="product[p].title"></span></div>
         <div class="details-floor1-left">
            <a class="details-floor1-md">
                <ul>
                    <li v-for="(elem,l) of pics" :key="l">
                     <a href="javascript:;">
                        <img :src="pics[o].md" alt="">
                     </a>
                    </li>
                    <!--<li>
                        <img src="img/product_details/md/product_details_md01_01.png" alt="">
                    </li>
                    <li>
                        <img src="img/product_details/md/product_details_md01_01.png" alt="">
                    </li>-->
                </ul>
            </a>
            <div id="super" v-show="show" :style="superStyle"></div>
            <div id="super-mask" @mouseenter="visible($event)" @mouseleave="hidden" @mousemove="dong($event)"></div>
            <div id="details-floor1-lg" v-show="show" >
               <ul  :style="lgStyle">
                    <li v-for="(elem,l) of pics" :key="l">
                        <img :src="pics[o].lg" alt=""  :style="lgImg">
                    </li>
                   <!--<li>
                        <img src="img/product_details/lg/product_details_lg01_02.png" alt="">
                    </li>-->
               </ul>
            </div>
            <div class="details-floor1-sm">
              <button  class="slide" @click="smLeft" :disabled="smMove==0?true:false">
                  <img src="img/products/arrow-left.png" alt="">
              </button>
              <div id="sm">
                <ul class="details-floor1-sm-middle" :style="ulSmStyle">
                   <li v-for="(elem,i) of pics" :key="i" :class="i==o?'active':''">
                     <a href="javascript:;">
                        <img :src="elem.sm" alt="" @mouseenter="toggleImg(i)">
                     </a>                          
                 </li> 
                 <!--<li>
                        <a href="javascript:;">
                           <img src="img/product_details/sm/product_details_sm01_02.png" alt="">
                        </a>
                    </li>
                    <li>
                    <a href="javascript:;">
                        <img src="img/product_details/sm/product_details_sm01_03.png" alt="">
                    </a>
                </li>
                <li>
                        <a href="javascript:;">
                            <img src="img/product_details/sm/product_details_sm01_04.png" alt="">
                        </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                                <img src="img/product_details/sm/product_details_sm01_05.png" alt="">
                            </a>
                        </li>-->
              </ul>
              </div>                                                
                 <button class="slide" @click="smRight" :disabled="smMove==pics.length-5?true:false">
                <img src="img/products/arrow-right.png" alt="">
            </button>
          </div>
         </div>
         <div class="details-floor1-right">
                <h1 class="details-floor1-right-title" v-text="product[p].subtitle"></h1>
                <span v-text="product[p].welfare"></span>
              <div class="details-floor1-right-info">
                  <div class="details-floor1-right-info-top">
                      <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                      <span class="price" v-text="'￥'+product[p].price"></span>
                  </div>
                  <div class="details-floor1-right-info-middle">
                        <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                        <span class="middle">限时特价</span>
                        <span v-text="product[p].dat"></span>
                  </div>
                      <div class="details-floor1-right-info-bottom">
                        <span class="middle">分期免息</span>
                        <span>花呗、掌上生活、工行分期支付可享免息 </span>
                  </div>
                  <div class="details-floor1-right-info-bottom">
                        <span class="middle">赠送积分</span>
                        <span>购买即赠商城积分，积分可抵现~</span>
                  </div>
              </div>
              <div class="details-floor1-left-promise">
                  <p>服务说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;已满48元免运费<span>|</span>由华为商城负责，并提供售后服务</p>
                  <p v-cloak>商品编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{product[p].encode}}</p>
                  <div class="details-floor1-right-bottom">
                    <ul>
                        <li>选择颜色</li>
                        <li v-for="(elem,p) of color" :key="p"   @click="skip(`pid=${elem.pid}&lid=${p+1}`)" 
                          :class="p==c?'active':''">
                       <img src="img/products/sm/computer01sm.png" alt="">
                          <span v-text="elem.product_color"></span></li>
                        <!-- <li><a href="javascript:;"><img src="img/products/sm/computer01sm.png" alt=""><span>深空灰</span></a></li>
                        <li><a href="javascript:;"><img src="img/products/sm/computer01sm.png" alt=""><span>樱粉金</span></a></li> -->
                    </ul>
                    <ul class="ul-middle">
                        <li><a href="javascript:;">选择配置</a></li>
                        <li v-for="(elem,i) of spec" :key="i" :class="i==p?'active':''"><a href="javascript:;" v-text="elem.product_spec" @click="change(i)"></a></li>
                        <!-- <li><a href="javascript:;">15/8GB/512GB</a></li>
                        <li><a href="javascript:;">17/8GB/512GB</a></li> -->
                    </ul>
                    <ul class="ul-bottom">
                        <li><a href="javascript:;">选择显卡</a></li>
                        <li class="active"><a href="javascript:;" >官方标配</a></li>
                    </ul>
                    <div class="details-floor1-right-products">
                        <label>已选择商品:</label>
                        <div v-text="product[p].product_pname"></div>
                        <label>已选择商品:</label>
                        <div v-text="product[p].product_pname"></div>
                    </div>
                    <a href="javascript:;" class="alear"  @click="car">加入购物车</a>
                  </div>
              </div>
         </div>
     </div>
     <div id="details_img">
          <img :src="product[p].details_img1" alt="">
          <img :src="product[p].details_img2" alt="">
          <img :src="product[p].details_img3" alt="">
     </div>
     <div id="params">
         <div class="params-title">
             <p></p>
             <p>规格参数</p>
         </div>
         <div class="params-item1">
             <h2>主要参数</h2>
             <ul><li><label>传播名</label><span>荣耀10青春版</span></li><li><label>后置摄像头</label><span>1300万像素（主摄像头，f/1.8光圈）+200万像素，主摄像头支持自动对焦。备注：不同拍照模式的照片像素可能有差异，请以实际为准。</span></li><li><label>电池容量</label><span>3400mAh（典型值）</span></li><li><label>前置摄像头</label><span>2400万像素，f/2.0光圈，支持固定焦距。备注：不同拍照模式的照片像素可能有差异，请以实际为准。</span></li><li><label>屏幕尺寸</label><span>6.21英寸</span></li><li><label>运行内存（RAM）</label><span>4GB（备注：可使用的内存容量小于此值，因为手机软件占用部分空间）</span></li><li><label>屏幕色彩</label><span>1670万色</span></li><li><label>机身内存（ROM）</label><span>64GB（备注：可使用的内存容量小于此值，因为手机软件占用部分空间）</span></li><li><label>最大支持扩展</label><span>512GB（非标配）</span></li><li><label>分辨率</label><span>FHD+ 1080x2340 像素</span></li><li><label>CPU型号</label><span>Hisilicon Kirin 710*（*因使用多种封装工艺，Hisilicon Kirin 710处理器系列包含Kirin 710和Kirin 710F，功能参数一致）</span></li><li><label>CPU核数</label><span>八核</span></li><li><label>双卡</label><span>双卡双待单通</span></li></ul>
         </div>
             <div class="params-item1">
             <h2>主体</h2>
             <ul><li><label>品牌</label><span>Honor</span></li><li><label>传播名</label><span>荣耀10青春版</span></li><li><label>操作系统</label><span>Android 9</span></li><li><label>用户界面</label><span>EMUI 9.0.1</span></li><li><label>CPU型号</label><span>Hisilicon Kirin 710*（*因使用多种封装工艺，Hisilicon Kirin 710处理器系列包含Kirin 710和Kirin 710F，功能参数一致）</span></li><li><label>CPU核数</label><span>八核</span></li><li><label>CPU主频</label><span>4×Cortex A73 2.2GHz +4*Cortex A53 1.7GHz</span></li><li><label>双卡</label><span>双卡双待单通</span></li></ul>
         </div>
            <div class="params-item1 item2">
             <h2>网络</h2>
             <label>网络制式</label>
             <p>支持移动/联通/电信 4G+/4G/3G/2G；主卡：4G网络制式：移动4G（TD-LTE）/联通4G（TD-LTE/LTE FDD）/电信 4G（TD-LTE/LTE FDD）；3G网络制式：移动3G（TD-SCDMA）/联通3G（WCDMA）/电信3G（CDMA 2000）；2G网络制式 移动2G（GSM）/联通2G（GSM）/电信2G（CDMA 1X）；副卡：4G网络制式：移动4G（TD-LTE）/联通4G（TD-LTE/LTE FDD）/电信 4G（TD-LTE/LTE FDD）；3G网络制式： 联通3G（WCDMA）；2G网络制式：移动2G（GSM）/联通2G（GSM）/电信2G（CDMA 1X）；备注：*电信双卡时，副卡（非默认移动数据卡）不支持电信2G；说明： *卡槽1、2可以任意切换为默认移动数据卡；*如果两张都是电信卡，副卡（非默认移动数据卡）必须开通电信VoLTE业务，才能同时使用电信双卡。*4G网络使用，需要根据运营商网络和相关业务部署情况确定是否支持</p>            
         </div>
         <a href="javascript:;" id="parent-a" @click="toggle" :class="extendent==true?'active':''">查看全部参数</a>
        <div id="parent-item" v-show="extendent">
          <div class="params-item1">
             <h2>屏幕</h2>
             <ul><li><label>屏幕尺寸</label><span>6.21英寸</span></li><li><label>屏幕色彩</label><span>1670万色</span></li><li><label>屏幕类型</label><span>TFT LCD（IPS）</span></li><li><label>分辨率</label><span>FHD+ 1080x2340 像素</span></li><li><label>屏幕像素密度</label><span>415 PPI</span></li></ul>
          </div>
           <div class="params-item1">
             <h2>传感器</h2>
            <ul><li><label>环境光传感器</label><span>支持</span></li><li>
              <label>陀螺仪</label><span>不支持</span></li><li><label>指南针</label><span>支持</span></li><li><label>接近光传感器</label><span>支持</span></li><li><label>重力传感器</label><span>支持</span></li><li><label>其他传感器</label><span>指纹传感器</span></li></ul>
          </div>
           <div class="params-item1">
             <h2>存储</h2>
              <ul><li><label>运行内存（RAM）</label><span>4GB（备注：可使用的内存容量小于此值，因为手机软件占用部分空间）</span></li><li><label>机身内存（ROM）</label><span>64GB（备注：可使用的内存容量小于此值，因为手机软件占用部分空间）</span></li><li><label>最大支持扩展</label><span>512GB（非标配）</span></li></ul>
          </div>
            <div class="params-item1">
              <h2>拍摄功能</h2>
              <ul><li><label>后置摄像头</label><span>1300万像素（主摄像头，f/1.8光圈）+200万像素，主摄像头支持自动对焦。备注：不同拍照模式的照片像素可能有差异，请以实际为准。</span></li><li><label>前置摄像头</label><span>2400万像素，f/2.0光圈，支持固定焦距。备注：不同拍照模式的照片像素可能有差异，请以实际为准。</span></li><li><label>拍摄功能</label><span>AI美拍、大光圈、夜景、人像、录像、专业相机、全景、流光快门、HDR等</span></li></ul>
          </div>
           <div class="params-item1">
              <h2>传输功能</h2>
               <ul><li><label>WLAN</label><span>支持</span></li><li><label>WLAN&nbsp;协议</label><span>802.11 a/b/g/n/ac</span></li><li><label>WLAN&nbsp;频率</label><span>2.4G/5G</span></li><li><label>蓝牙</label><span>BT4.2，支持BLE</span></li><li><label>GPS</label><span>支持</span></li><li><label>Glonass</label><span>支持</span></li><li><label>北斗</label><span>支持</span></li><li><label>AGPS</label><span>支持</span></li></ul>
          </div>
             <div class="params-item1">
              <h2>其他</h2>
            <ul><li><label>电池类型</label><span>锂聚合物电池</span></li><li><label>电池容量</label><span>3400mAh（典型值）</span></li><li><label>电池更换</label><span>不支持（内置不可拆卸）</span></li><li><label>充电器</label><span>5V/2A充电器</span></li><li><label>快充</label><span>不支持</span></li><li><label>数据线接口</label><span>USB 2.0</span></li><li><label>耳机接口</label><span>3.5mm</span></li><li><label>SIM卡类型</label><span>卡槽1：nano SIM卡；卡槽2：nano SIM卡或Micro SD卡二选一</span></li><li><label>软件名称</label><span>华为终端智能设备人机交互通信软件V5.0</span></li><li><label>产品工作温度</label><span>0℃~35℃</span></li><li><label>产品存储温度</label><span>–20℃~+45℃</span></li><li><label>机身尺寸</label><span>154.8mm（长）×73.64mm（宽）×7.95mm（厚）（备注：受产品配置和制造工艺影响，实际机身尺寸或有差异，请以实物为准）</span></li><li><label>机身重量</label><span>约162克（含电池）（备注：受产品配置和制造工艺影响，实际机身重量或有差异，请以实物为准）</span></li></ul>
          </div>
       </div>
     </div>
     <my-footer></my-footer>
  </div>
</template>
<script>
import store from '@/store'
export default {
     data() {
         return {
          alert:false,
           color:"",
           spec:"",
           product:[{title:""}],
           pics:"" ,
           ulSmStyle:{
              width:0,
              "margin-left":0
            },
            extendent:false,
            smMove:0,
            o:0,
            c:0,
            show:false,
            superStyle:{
              top:0,
              left:0
            },
            p:0,
            lgStyle:{
              "margin-top":0+"px",
              "margin-left":0+"px",
               width:450+"px",
              height:450+"px",
            },
            lgImg:{
              width:200+"%",
              height:200+"%"
            },
            user:{},
            lid:'',
            pid:''
         }
     },
     methods:{
         car(){    
            if(localStorage.getItem('user')==0){
                   this.alert=true;
            }else{
                 var uid=JSON.parse(localStorage.getItem('user')).uid;
                   var pid=localStorage.getItem('pid');
                   var lid=localStorage.getItem('lid');
                   var q=localStorage.getItem('q');
                   var url="/product/car?pid="+pid+"&lid="+lid+"&q="+q+"&uid="+uid;
                   this.axios.get(url).then(res=>{
               
              })   
             }
         },
       toggle(){
         if(!this.extendent)
         this.extendent=true
         else
         this.extendent=false
       },
       change(q){
         localStorage.setItem('q',q);
         var q=localStorage.getItem('q');
              this.p=q;
       },
        skip(params){
            this.lid=parseInt(params.split("=")[2]);
            this.pid=parseInt(params.split("=")[1]);
            localStorage.setItem('pid',this.pid);
            localStorage.setItem('lid',this.lid);
              this.c=this.lid-1;
               this.load();
        },
       load(){
        var url=`/product/details?pid=${localStorage.getItem('pid')}&lid=`+localStorage.getItem('lid');
        this.axios.get(url).then(res=>{
              var product=res.data;
              this.color=product.color;
              this.spec=product.spec;
              this.product=product.product;
              this.pics=product.pics;
              this.ulSmStyle.width=this.pics.length*70+"px"
                  this.p=localStorage.getItem('q');
            })
       },
        dong(e){
         var left=e.offsetX-122.5;
         var top=e.offsetY-122.5;
         if(left<0) left=0;
         else if(left>225) left=225;
         if(top<0) top=0;
         else if(top>225) top=225;
         this.superStyle.top=top+"px";
         this.superStyle.left=left+"px";
         this.lgStyle['margin-top']=-top*1.6+"px";
         this.lgStyle['margin-left']=-left*1.6+"px";
        },
       visible(){
        this.show=true;
       },
       hidden(){
        this.show=false;
       },
      toggleImg(i){
         this.o=i;
      },
       smLeft(){  
         if(this.smMove!=0){
            this.smMove--;  
            this.ulSmStyle['margin-left']=-this.smMove*66+"px";
         }
       },
       smRight(){ 
          if(this.smMove!=this.pics.length-5){
             this.smMove++;  
             this.ulSmStyle['margin-left']=-this.smMove*66+"px";
          }
       },
     },
    created(){
            if(this.$route.params.pid!=undefined&&this.$route.params.pid!=localStorage.getItem("pid")){
                   localStorage.setItem('q',0);
            }
            if(this.$route.params.pid!=undefined){
             if(window.localStorage){
               localStorage.setItem("pid",this.$route.params.pid);   
               localStorage.setItem("lid",this.$route.params.lid);
              }
            }
                  this.lid=localStorage.getItem('lid');
                    this.c=this.lid-1;
                        this.load()
      },
}
</script>

<style scoped>
[v-cloak]{
  display:none
}
*{margin:0;padding:0}
ul{
      list-style:none;
  }
   a{
    text-decoration:none;
   }
   body {
  color: #3a3a3a; }
  #alert{
      position:absolute;top:50%;left:50%;width:300px;height:100px;background-color:#538468;z-index:1000;margin-left:-150px;margin-top:-50px;
      line-height:100px;text-align:center;font-size:20px;
  }
#details {
  width: 1200px;
  height: 650px;
  margin: 0 auto; }
  #details .details-floor1-top {
    width: 100%;
    height: 30px;
    line-height: 30px; }
    #details .details-floor1-top a, #details .details-floor1-top span {
      font-size: 14px;
      color: #333; }
  #details .details-floor1-left {
    height: 536px;
    width: 450px;
    float: left;
   position:relative;
  }
    #details .details-floor1-left .details-floor1-md {
      display: block;
      width: 450px;
      height: 450px; 
      overflow:hidden;
    }
      #details .details-floor1-left .details-floor1-md img {
        width: 450px;
        height: 450px; }
    #details .details-floor1-left .details-floor1-sm {
      width: 450px;
      height: 68px; }
      #details .details-floor1-left .details-floor1-sm button.slide, #details .details-floor1-left .details-floor1-sm ul, #details .details-floor1-left .details-floor1-sm li {
        float: left; }
         #details .details-floor1-left .details-floor1-sm #sm{
        width: 320px;
        height: 68px;
         float: left;
         overflow:hidden;
         padding-top:4px;
         background:#fff;
         margin:0  30px;
         } 
         #details .details-floor1-right>span:nth-child(2){
           color:#ca141d;
           font-size:14px;
           text-decoration:underline;
         }
        #details .details-floor1-left .details-floor1-sm #sm ul{
          transition:all 0.5s linear;
        }
        .active{
          border:1px solid red !important;
          color:#ca141d !important;
        }
        #details .details-floor1-left .details-floor1-sm .details-floor1-sm-middle a{
          display:inline-block;
          width: 66px;
          height: 66px; }
        #details .details-floor1-left .details-floor1-sm .details-floor1-sm-middle img {
          width: 60px;
          height: 60px; }
        #details .details-floor1-left .details-floor1-sm .details-floor1-sm-middle li {
          text-align: center;       
          height: 66px;
          float:left;
        }
      #details .details-floor1-left .details-floor1-sm button.slide {
        display: block;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        text-align: center;
        line-height: 2.4rem;    
        border: 1px solid #ddd;
        margin-top: 15px; }
        #details .details-floor1-left .details-floor1-sm button.slide:hover {
          background: rgba(0, 0, 0, 0.2); }
  #details .details-floor1-right {
    width: 718px;
    height: 590px;
    float: left;
    margin-left: 30px; }
    #details .details-floor1-right .details-floor1-right-title {
      font-size: 21px;
      font-weight: 400;
      margin-bottom: 10px; }
    #details .details-floor1-right .details-floor1-right-info {
      width: 100%;
      height: 136px;
      background: #f5f5f5;
      box-sizing: border-box;
      padding-top: 10px;
      margin-top: 15px;
      margin-bottom: 20px; }
      #details .details-floor1-right .details-floor1-right-info span {
        font-size: 14px; }
      #details .details-floor1-right .details-floor1-right-info span.middle {
        display: inline-block;
        width: 5rem;
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        color: #ca141d;
        border: 1px solid #ca141d;
        margin: 0 18px; }
      #details .details-floor1-right .details-floor1-right-info div {
        margin-bottom: 10px; }
      #details .details-floor1-right .details-floor1-right-info .details-floor1-right-info-top .price {
        display: inline-block;
        margin-left: 15px;
        color: #ca141d; }
      #details .details-floor1-right .details-floor1-right-info .details-floor1-right-info-bottom span:first-child {
        margin-left:78px; }
    #details .details-floor1-right .details-floor1-left-promise {
      width: 100%;
      height: 65px;
      box-sizing: border-box;
      padding: 8px;
      border-bottom: 1px solid #f0f0f0; }
      #details .details-floor1-right .details-floor1-left-promise p {
        font-size: 14px;
        margin-bottom: 6px; }
        #details .details-floor1-right .details-floor1-left-promise p span {
          padding: 20px; }
    #details .details-floor1-right .details-floor1-right-bottom {
      width: 100%;
      height: 300px;
      box-sizing: border-box;
      padding: 20px 0; }
         #details .details-floor1-right .details-floor1-right-bottom  a.alear{
             display:inline-block;height:3rem;width:12rem;line-height:3rem;text-align:center;
             background:#fc600c;color:#fff;font-size:1.2rem;
         }
      #details .details-floor1-right .details-floor1-right-bottom a {
        color: #3a3a3a; }
      #details .details-floor1-right .details-floor1-right-bottom ul {
        width: 100%;
        margin-bottom: 10px; }
      #details .details-floor1-right .details-floor1-right-bottom ul:after {
        content: "";
        display: block;
        clear: both; }
      #details .details-floor1-right .details-floor1-right-bottom li {
        font-size: 12px;
        float: left;
        box-sizing: border-box;
        padding: 11px 0; }
      #details .details-floor1-right .details-floor1-right-bottom li + li{
        cursor:pointer;
        width: 98px;
        height: 32px;
        box-sizing: border-box;
        padding: 6px 0;
        text-align: center;
        border: 1px solid #a4a4a4;
        margin-left: 10px;
        float: left; }
        #details .details-floor1-right .details-floor1-right-bottom li + li img {
          width: 30px;
          height: 30px;
          vertical-align: middle; }
        #details .details-floor1-right .details-floor1-right-bottom li + li span {
          font-size: 12px; }
      #details .details-floor1-right .details-floor1-right-bottom li:first-child {
        width: 85px;
        height: 40px; }
      #details .details-floor1-right .details-floor1-right-bottom ul.ul-middle li + li {
        width: 140px;
        height: 30px; }
      #details .details-floor1-right .details-floor1-right-bottom ul.ul-bottom li + li {
        width: 80px;
        height: 30px; }
      #details .details-floor1-right .details-floor1-right-bottom .details-floor1-right-products {
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        padding: 0px 0px;
        font-size: 14px;
        font-size: 12px; }
        #details .details-floor1-right .details-floor1-right-bottom .details-floor1-right-products label, #details .details-floor1-right .details-floor1-right-bottom .details-floor1-right-products div {
          float: left; }
        #details .details-floor1-right .details-floor1-right-bottom .details-floor1-right-products div {
          color: #ca141d;
          margin-left: 20px; }
          #details .details-floor1-left  #super{
               width:224px;
               height:224px;
               background:rgba(253,253,253,0.5);
               position:absolute;
               top:0px;
               left:0px;
               border:1px solid #F0f0f0;
          }
          #details .details-floor1-left  #super-mask{
            width:450px;
            height:450px;
            background:transparent;
            position:absolute;
            top:0px;
            left:0px;
       }
       #details .details-floor1-left  #details-floor1-lg{
           position:absolute;
           width:600px;
           height:550px;
           top:0px;
           left:480px;
           border:1px solid #F0f0f0;
           overflow:hidden;
           background:#fff;
       }
       #details .details-floor1-left  #details-floor1-lg ul li img{
              width:450px;
              height:450px;
       }
  #details_img{
    width:100%;
  }
  #details_img img{
    width: inherit;
     height: inherit
  }
  #params{
    width:1200px;
    height:100%;
    /*border:5px solid red*/
    margin:0 auto;
  }
  #params .params-title{
    width:100%;
    height:20px;
    padding:25px 0;
    border:1px solid #f0f0f0;
  }
  #params  .params-title p:first-child{
     width:4px;
     height:27px;
     float:left;
     background:#ca141d;
     margin-right:10px;
  }
   #params .params-title  p:last-child{
     float:left;
       font-size:20px;
   }
     #params div.params-item1{
       width:100%;
       padding:25px 0;
       color:#3a3a3a;
       border-bottom:1px solid #d8d8d8;
     }
     #params div.params-item1:after{
       content:"";
       display:block;
       clear:both;
     }
      #params div.params-item1 h2{
         float:left;
         width:150px;
         height:100%;
      }
     #params div.params-item1 ul{
       list-style:none;
       font-size:14px;
       float:left;
     }
      #params div ul li{
        margin-bottom:10px;
      }
    #params div.params-item1 label{
      display:inline-block;
      width:130px;
      height:100%;
    }
    .params-item1{
      background:#f5f5f5;
    }
      #params div+div.item2{
      font-size:14px;
      }
      #params div+div.item2 label{
        float:left;
      }
       #params div+div.item2 p{
        float:left;
        width:72%;
      }
      #parent-a{
        display: block;
        width:150px;
        height:40px;
        line-height:40px;
        border:1px solid #d8d8d8;
        text-align:center;
        color:#a4a4a4;
        margin:0 auto;
      }
</style>