<template>
 <div>
    <!--  <div class="scroll"> -->
       <!-- <div class=scroll-item> -->
        <!-- <img src="../img/navbar-top/scroo-top.jpg" alt=""> -->
        <!-- <input type="text" placeholder="请输入您要搜素的内容 ！ ！ ！">
      </div> </div>  -->
<!--<my-header :params="this.$route.query[0]"></my-header>-->
<my-header></my-header>
<div id="container">
<!--  一楼导航链接  二楼导航链接  --> 
 <header></header> 
 <!-- carousel 轮播  -->
 <div id="carousel">
    <div class="carousel-inner">
     <ul class="carousel-item" :style="carouselStyle">
        <li  v-for="(elem,i) of carousel1" :key="i">
            <img :src="`${elem.img}`" alt="">
        </li>
         <!--<li>
           <img src="../img/carousel/bannar2.jpg" alt="">
        </li>
           <li>
           <img src="../img/carousel/bannar3.jpg" alt="">
        </li>-->
     </ul>
     <div id="aside-parent">
        <ul class="origin">
            <li>
                <a href="javascript:;" class="active1"></a>
            </li>
            <li>
                <a href="javascript:;"></a>
            </li>
            <li>
                <a href="javascript:;"></a>
            </li>
        </ul>
            <a href="javascript:;" class="next">
                <img src="img/carousel/arrow-right.png" alt="">
            </a>
            <a href="javascript:;" class="prev">
                <img src="img/carousel/arrow-left.png" alt="">
            </a>
                <!-- 轮播侧向导航链接 -->
            <div class="ul">
            <ul  id="aside">
                    <li data-toggle="#aside-element1" >
                        <div>
                            <a href="javascript:;">
                            <span>手机</span>
                            </a>
                        </div>
                            
                        <div>
                            <a href="javascript:;">
                                <span>荣耀</span></a>
                                <a href="javascript:;">
                                <span>HUAWEI P系列</span>
                            </a>
                        </div>
                        <div></div>
                    </li>
                    <li  data-toggle="#aside-element2">
                        <div>
                            <a href="javascript:;">
                            <span>笔记本</span>
                            <span>&</span>
                            <span>平板</span>
                            </a>
                        </div>
                                
                        <div>
                            <a href="javascript:;">
                            <span>平板电脑</span></a>
                            <a href="javascript:;">
                            <span>笔记本电脑</span>
                            </a>
                        </div>
                        <div></div>
                    </li>
                    <li  data-toggle="#aside-element3">
                            <div>
                                <a href="javascript:;">
                                <span>智能穿戴</span>
                                </a>
                            </div>       
                            <div>
                                <a href="javascript:;">
                                <span>手环</span></a>
                                <a href="javascript:;">
                                <span>手表</span>
                                </a>
                                <a href="javascript:;">
                                <span>VR</span>
                                </a>
                            </div>
                            <div></div>
                        </li>
                        <li  data-toggle="#aside-element4">
                            <div>
                                    <a href="javascript:;">
                                    <span>智能家居</span>
                                    </a>
                                </div>
                                        
                                <div>
                                    <a href="javascript:;">
                                    <span>路由器</span></a>
                                    <a href="javascript:;">
                                    <span>电视盒子</span>
                                    </a>
                                    <a href="javascript:;">
                                    <span>照明</span>
                                    </a>
                                </div>
                                <div></div>
                            </li>
                            <li  data-toggle="#aside-element5">
                                    <div>
                                        <a href="javascript:;">
                                        <span>通用配件</span>
                                        </a>
                                    </div>
                                            
                                    <div>
                                        <a href="javascript:;">
                                        <span>移动电源</span></a>
                                        <a href="javascript:;">
                                        <span>耳机</span>
                                        </a>
                                        <a href="javascript:;">
                                        <span>音响</span>
                                        </a>
                                    </div>
                                    <div></div>
                                </li>
                                <li  data-toggle="#aside-element6">
                                        <div>
                                            <a href="javascript:;">
                                            <span>专属配件</span>
                                            </a>
                                        </div>   
                                        <div>
                                            <a href="javascript:;">
                                            <span>保护壳</span></a>
                                            <a href="javascript:;">
                                            <span>保护套</span>
                                            </a>
                                            <a href="javascript:;">
                                            <span>贴膜</span>
                                            </a>
                                        </div>
                                        <div></div>
                                    </li>
            </ul>
            <!-- 轮播上隐藏的侧边链接 -->
            <div class="aside-item">
                    <!-- 111111111111 -->
                <ul id="aside-element1" class="my_hide">
                    <li>
                        <a href="javascript:;">
                            <img src="img/carousel/aside/phone1.png" alt="">
                            <span>荣耀</span>
                        </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                            <img src="img/carousel/aside/phone2.png" alt="">  
                            <span>HUAWEl P系列</span>
                            </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                            <img src="img/carousel/aside/phone3.png" alt="">
                            <span>荣耀畅玩系列</span>
                            </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                            <img src="img/carousel/aside/phone4.png" alt="">
                            <span>HUAWEl Mate系列</span>
                            </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                            <img src="img/carousel/aside/phone5.png" alt="">
                            <span>HUAWEl nova系列</span> 
                            </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                            <img src="img/carousel/aside/phone6.png" alt="">
                            <span>华为畅享系列</span> 
                            </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                            <img src="img/carousel/aside/phone7.png" alt="">
                            <span>HUAWEl 麦芒系列</span>
                            </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                                加载更多
                            </a>
                    </li>
                </ul>
                <!-- 22222 ??????????????????-->
                <ul id="aside-element2" class="my_hide">
                        <li>
                            <a href="javascript:;">
                            <img src="img/carousel/computer/computer1.png" alt="">
                            <span>荣耀</span>
                            </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                                <img src="img/carousel/computer/computer2.png" alt="">  
                                <span>HUAWEl P系列</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="img/carousel/computer/computer3.png" alt="">
                                <span>荣耀畅玩系列</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                加载更多
                            </a>
                        </li>
                    </ul>


                    <!--333333333333   ?????-->
                <ul id="aside-element3" class="my_hide">
                        <li>
                            <a href="javascript:;">
                            <img src="img/carousel/wrist/wrist1.png" alt="">
                            <span>荣耀</span>
                            </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                                <img src="img/carousel/wrist/wrist2.png" alt="">  
                                <span>HUAWEl P系列</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="img/carousel/wrist/wrist3.png" alt="">
                                <span>荣耀畅玩系列</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                加载更多
                            </a>
                        </li>
                    </ul>
                    <!-- 444444444444444 -->
                    <ul id="aside-element4" class="my_hide">
                            <li>
                                <a href="javascript:;">
                                <img src="img/carousel/capacity/capasity1.png" alt="">
                                <span>荣耀</span>
                                </a>
                        </li>
                        <li>
                                <a href="javascript:;">
                                        <img src="img/carousel/capacity/capasity2.png" alt="">
                                    <span>HUAWEl P系列</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="img/carousel/capacity/capasity3.png" alt="">
                                    <span>荣耀畅玩系列</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="img/carousel/capacity/capasity4.png" alt="">
                                    <span>HUAWEl Mate系列</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="img/carousel//capacity/capasity5.png" alt="">
                                    <span>HUAWEl nova系列</span> 
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="img/carousel/capacity/capasity6.png" alt="">
                                    <span>华为畅享系列</span> 
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="img/carousel/capacity/capasity7.png" alt="">
                                    <span>HUAWEl 麦芒系列</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    加载更多
                                </a>
                            </li>
                        </ul>
                        <!-- 5555555555555555 -->
                        <ul id="aside-element5" class="my_hide">
                                <li>
                                    <a href="javascript:;">
                                    <img src="img/carousel/exclusive/exclusive1.png" alt="">
                                    <span>荣耀</span>
                                    </a>
                                </li>
                            <li>
                                    <a href="javascript:;">
                                            <img src="img/carousel/public/public2.png" alt="">
                                        <span>HUAWEl P系列</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="img/carousel/public/public3.png" alt="">
                                        <span>荣耀畅玩系列</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="img/carousel/public/public4.png" alt="">
                                        <span>HUAWEl Mate系列</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="img/carousel/public/public5.png" alt="">
                                        <span>HUAWEl nova系列</span> 
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="img/carousel/public/public6.png" alt="">
                                        <span>华为畅享系列</span> 
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="img/carousel/public/public7.png" alt="">
                                        <span>HUAWEl 麦芒系列</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        加载更多
                                    </a>
                                </li>
                            </ul>
                            <!-- 6666666666666666666666 -->
                            <ul id="aside-element6" class="my_hide">
                                    <li>
                                        <a href="javascript:;">
                                        <img src="img/carousel/exclusive/exclusive1.png" alt="">
                                        <span>荣耀</span>
                                        </a>
                                </li>
                                <li>
                                        <a href="javascript:;">
                                                <img src="img/carousel/exclusive/exclusive2.png" alt="">
                                            <span>HUAWEl P系列</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <img src="img/carousel/exclusive/exclusive3.png" alt="">
                                            <span>荣耀畅玩系列</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <img src="img/carousel/exclusive/exclusive4.png" alt="">
                                            <span>HUAWEl Mate系列</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <img src="img/carousel/exclusive/exclusive5.png" alt="">
                                            <span>HUAWEl nova系列</span> 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <img src="img/carousel/exclusive/exclusive6.png" alt="">
                                            <span>华为畅享系列</span> 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            加载更多
                                        </a>
                                    </li>
                                </ul>
            </div>
            </div>
            </div>
        </div>

     </div>
<!--product-->
<div id="floor">
           <ul class="products-register">
         <li class="products-register-left">
              <div>
                  <img src="img/products/register_left01.png" alt="">
                  <div>                                           
                    <span>你好! 请 <a href="javascrip:;"  >登录 </a><span>/</span>

                   <a href="/javacsript:;" >&nbsp;注册</a></span>

                   <a href="javascript:;" class="new" >新人福利</a>
                   <a href="javascript:;" class="new a2">会员频道</a>
                </div> 
              </div>
         </li>
         <li class="products-register-center">
             <ul>
                 <li>
                     <a href="javascript:;">
                         <div>
                             <img src="img/products/register_center01.jpg" alt="">
                         </div>
                         <div>企业购特惠</div>
                     </a>
                 </li>
                 <li>
                        <a href="javascript:;">
                            <div>
                                <img src="img/products/register_center02.jpg" alt="">
                            </div>
                            <div>依旧换新</div>
                        </a>
                    </li>
                    <li>
                            <a href="javascript:;">
                                <div>
                                    <img src="img/products/register_center03.jpg" alt="">
                                </div>
                                <div>会员领券</div>
                            </a>
                        </li>
                        <li>
                                <a href="javascript:;">
                                    <div>
                                        <img src="img/products/register_center04.jpg" alt="">
                                    </div>
                                    <div>优选配件</div>
                                </a>
                            </li>
                            <li>
                                    <a href="javascript:;">
                                        <div>
                                            <img src="img/products/register_center05.jpg" alt="">
                                        </div>
                                        <div>荣耀数码</div>
                                    </a>
                                </li>
                                <li>
                                        <a href="javascript:;">
                                            <div>
                                                <img src="img/products/register_center06.jpg" alt="">
                                            </div>
                                            <div>华为数码</div>
                                        </a>
                                </li>

             </ul>
         </li>
         <li class="products-register-bottom">
             <div class="products-register-bottom-top">
                   <div class="products-register-bottom-top-left">
                           <a href="javascript:;">公告</a>
                   </div>
                   <div class="products-register-bottom-top-right">
                        <ul >
                                <li><a href="javascript:;">购荣耀畅玩8A赢精美项链中奖名单公布</a></li>
                                <li><a href="javascript:;">购荣耀10青春版赢定制礼盒* 中奖名单公布</a></li>
                                <li><a href="javascript:;">华为安居智能摄像机购机福利</a></li>
                                <li><a href="javascript:;">小程序支付随机立减1-3180，最高免单</a></li>
                                <li><a href="javascript:;">318智能家居——享科技 AI生活</a></li>
                                <li><a href="javascript:;">购荣耀畅玩8A赢精美项链中奖名单公布</a></li>
                        </ul>
                   </div>
             </div>
             <div class="products-register-bottom-bottom">
                   <ul>
                       <li>
                          <img src="img/products/register_right01.jpg" alt="">
                          <span>优购码</span>
                        </li>
                        <li>
                                <img src="img/products/register_right02.jpg" alt="">
                                <span>实名认证</span>
                              </li>
                              <li>
                                    <img src="img/products/register_right03.jpg" alt="">
                                    <span>补购认证</span>
                             </li>
                   </ul>
             </div>
         </li>
          </ul>
            <!-- floor1 -->
      <div id="floor1">
       <a href="javascript:;">
             <img src="img/products/floor1_01.jpg" alt="">
       </a>
       <a href="javascript:;">
             <img src="img/products/floor1_02.jpg" alt="">
         </a>
         <a href="javascript:;">
             <img src="img/products/floor1_03.jpg" alt="">
        </a>
        <a href="javascript:;">
              <img src="img/products/floor1_04.png" alt="">
        </a>
      </div> 
      <h2 class="floot-title">热销单品</h2>
            <!-- floor2-->
     <div id="floor2">
        <ul>
          <li>
              <a href="javascript:;">
                <img src="img/products/floor2_01.jpg" alt="">
              </a>
          </li>
          <li v-for="(elem,i) of floor2" :key="i"   @click="handleClick(elem.lid)">
                <a  href="javascript:;">
                    <span v-text="`${elem.fiery}`"></span>
                <div>
                    <img :src="`${elem.pic}`" alt="">
                </div>
                <div class="grid-title" v-text="`${elem.title}`"></div>
                <p class="grid-desc" v-text="`${elem.welfare}`"> </p>
                <p class="grid-price" v-text="`￥${elem.price}`"></p>
                </a>
          </li>
          <!--<li>
                    <a href="javascript:;">
                        <span>爆款</span>
                    <div>
                        <img src="../img/products/floor2_03.png" alt="">
                    </div>
                    <div class="grid-title">荣耀10青春版</div>
                    <p class="grid-desc">4+64GB减100&nbsp; </p>
                    <p class="grid-price">¥1299</p>
                    </a>
          </li>
          <li>
                        <a href="javascript:;">
                            <span>爆款</span>
                        <div>
                            <img src="../img/products/floor2_04.png" alt="">
                        </div>
                        <div class="grid-title">荣耀10青春版</div>
                        <p class="grid-desc">4+64GB减100&nbsp; </p>
                        <p class="grid-price">¥1299</p>
                        </a>
          </li>
          <li>
                <a href="javascript:;">
                    <span>爆款</span>
                <div>
                    <img src="../img/products/floor2_05.png" alt="">
                </div>
                <div class="grid-title">荣耀10青春版</div>
                <p class="grid-desc">4+64GB减100&nbsp; </p>
                <p class="grid-price">¥1299</p>
                </a>
          </li>
          <li>
                <a href="javascript:;">
                    <span>爆款</span>
                <div>
                    <img src="../img/products/floor2_06.png" alt="">
                </div>
                <div class="grid-title">荣耀10青春版</div>
                <p class="grid-desc">4+64GB减100&nbsp; </p>
                <p class="grid-price">¥1299</p>
                </a>
          </li>
          <li>
                <a href="javascript:;">
                    <span>爆款</span>
                <div>
                    <img src="../img/products/floor2_07.png" alt="">
                </div>
                <div class="grid-title">荣耀10青春版</div>
                <p class="grid-desc">4+64GB减100&nbsp; </p>
                <p class="grid-price">¥1299</p>
                </a>
          </li>
          <li>
                <a href="javascript:;">
                    <span>爆款</span>
                <div>
                    <img src="../img/products/floor2_08.png" alt="">
                </div>
                <div class="grid-title">荣耀10青春版</div>
                <p class="grid-desc">4+64GB减100&nbsp; </p>
                <p class="grid-price">¥1299</p>
                </a>
          </li>
          <li>
                <a href="javascript:;">
                    <span>爆款</span>
                <div>
                    <img src="../img/products/floor2_09.png" alt="">
                </div>
                <div class="grid-title">荣耀10青春版</div>
                <p class="grid-desc">4+64GB减100&nbsp; </p>
                <p class="grid-price">¥1299</p>
                </a>
            </li>-->
        </ul>
      </div>
      <h2 class="floot-title">精品推荐</h2>
           <!-- floor3-->
     <div id="floor03">
        <ul class="floor03-ul" :style="f3StyleUl">
            <li class="floor03-item" v-for="(elem,i) of floor3" :key="i"  @click="handleClick(elem.lid)"> 
                <a href="javascript:;">
                    <span v-text="`${elem.fiery}`"></span>
                    <div>
                        <img :src="`${elem.pic}`" alt="">
                          <p v-text="`${elem.welfare}`"> </p>
                    </div>
                    <div v-text="`${elem.title}`"></div>
                    <p v-text="`￥${elem.price}`"></p>
               </a>
            </li>
            <!--<li class="floor03-item">
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor3_02.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
            </li>
            <li class="floor03-item">
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor3_03.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
            </li>
            <li class="floor03-item">
                        <a href="javascript:;">
                            <span>特惠</span>
                            <div>
                                <img src="../img/carousel/floor3_04.png" alt="">
                                  <p>专业降噪通话 待机10天&nbsp; </p>
                            </div>
                            <div>荣耀智能体脂秤</div>
                            <p>¥129</p>
                       </a>
            </li>
            <li class="floor03-item">
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor3_05.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
           </li>
           <li class="floor03-item">
                <a href="javascript:;">
                    <span>特惠</span>
                    <div>
                        <img src="../img/carousel/floor3_06.png" alt="">
                          <p>专业降噪通话 待机10天&nbsp; </p>
                    </div>
                    <div>荣耀智能体脂秤</div>
                    <p>¥129</p>
               </a>
            </li>
             <li class="floor03-item">
                <a href="javascript:;">
                    <span>特惠</span>
                    <div>
                        <img src="../img/carousel/floor3_07.png" alt="">
                          <p>专业降噪通话 待机10天&nbsp; </p>
                    </div>
                    <div>荣耀智能体脂秤</div>
                    <p>¥129</p>
               </a>
            </li>
            <li class="floor03-item">
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor3_08.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
             </li>
             <li class="floor03-item">
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor3_09.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
             </li>
             <li class="floor03-item">
                        <a href="javascript:;">
                            <span>特惠</span>
                            <div>
                                <img src="../img/carousel/floor3_10.png" alt="">
                                  <p>专业降噪通话 待机10天&nbsp; </p>
                            </div>
                            <div>荣耀智能体脂秤</div>
                            <p>¥129</p>
                       </a>
             </li>
             <li class="floor03-item">
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor3_11.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
             </li>
             <li class="floor03-item">
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor3_12.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
             </li>
             <li class="floor03-item">
                        <a href="javascript:;">
                            <span>特惠</span>
                            <div>
                                <img src="../img/carousel/floor3_13.png" alt="">
                                  <p>专业降噪通话 待机10天&nbsp; </p>
                            </div>
                            <div>荣耀智能体脂秤</div>
                            <p>¥129</p>
                       </a>
             </li>
             <li class="floor03-item">
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor3_14.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
             </li>
             <li class="floor03-item">
                        <a href="javascript:;">
                            <span>特惠</span>
                            <div>
                                <img src="../img/carousel/floor3_15.png" alt="">
                                  <p>专业降噪通话 待机10天&nbsp; </p>
                            </div>
                            <div>荣耀智能体脂秤</div>
                            <p>¥129</p>
                       </a>
             </li>-->
        </ul>
        <a href="javascript:;" class="lr" @click="f3ulLeft">
            <img src="img/products/arrow-left.png" alt="">
        </a>
        <a href="javascript:;" class="lr lr2" @click="f3ulRight">
                <img src="img/products/arrow-right.png" alt="">
            </a>
     </div>
           <!-- floor4-->
    <div id="floor4">
        <ul :style="f4StyleUl">
           <li v-for="(elem,i) of carousel2" :key="i"  @click="handleClick(elem.lid)">
               <a href="javascript:;">
                   <img :src="elem.img" alt="">
               </a>
           </li>
                        <img src="img/carousel/floor3_bottom03.jpg" alt="">
         <!--  <li>
                <a href="javascript:;">
                    <img src="img/carousel/floor3_bottom02.jpg" alt="">
                </a>
            </li>
            <li>
                    <a href="javascript:;">
                    </a>
                </li>-->
        </ul>
        <ul>                                   
           <!-- <li class="active"  v-for="(elem,i)  in f4slide" :style="f4circle" :key="i"></li> -->
        </ul>
    </div>
          <!-- floor5-->
    <div id="floor5">
       <div class="floor5-top">
            <h2 class="floor5-top-left">智能家居</h2>
            <ul class="floor5-top-center">
                    <li><a href="javascript:;">路由器</a></li>
                    <li><a href="javascript:;">子母/分布式路由</a></li>
                    <li><a href=javascript:;>电力猫/wifi放大器</a></li>
                    <li><a href="javascript:;">随行wifi</a></li>
                    <li><a href="javascript:;">电视盒子</a></li>
                    <li><a href="javascript:;">照明</a></li>
                    <li><a href="javascript:;">清洁</a></li>
                    <li><a href="javascript:;">节能</a></li>
                    <li><a href="javascript:;">环境</a></li>
                    <li><a href="javascript:;">安防</a></li>
                    <li><a href="javascript:;">健康</a></li>
                    <li><a href="javascript:;">厨电</a></li>
                    <li><a href="javascript:;">影音</a></li>
                    <li><a href="javascript:;">卫浴</a></li>
                    <li><a href="javascript:;">其他</a></li>
                    <li><a href="javascript:;">查看更多&nbsp;<span>&gt;</span></a></li>
            </ul>
        </div>
        <div class="floor5-middle">
            <ul>
                <li>
                    <a href="javascript:;">
                        <img src="img/products/floor5_01.jpg" alt="">
                    </a>
                </li>
                <li v-for="(elem,i) of floor5" :key="i"  @click="handleClick(elem.lid)">
                         <a href="javascript:;"> 
                                <span v-text="`${elem.fiery}`"></span>
                            <div>
                                <img :src="`${elem.pic}`" alt="">
                            </div>
                            <div class="grid-title" v-text="`${elem.title}`"></div>
                            <p class="grid-desc" v-text="`${elem.welfare}`"></p>
                            <p class="grid-price" v-text="`￥${elem.price}`"></p>
                           </a> 
                </li>
            <!--    <li>
                            <a href="javascript:;">
                                   <span>爆款</span>
                               <div>
                                   <img src="../img/products/floor5_03.png" alt="">
                               </div>
                               <div class="grid-title">荣耀10青春版</div>
                               <p class="grid-desc">4+64GB减100&nbsp; </p>
                               <p class="grid-price">¥1299</p>
                               </a>
                </li>
                <li>
                                <a href="javascript:;">
                                       <span>爆款</span>
                                   <div>
                                       <img src="../img/products/floor5_04.png" alt="">
                                   </div>
                                   <div class="grid-title">荣耀10青春版</div>
                                   <p class="grid-desc">4+64GB减100&nbsp; </p>
                                   <p class="grid-price">¥1299</p>
                                   </a>
                </li>
                <li>
                                    <a href="javascript:;">
                                           <span>爆款</span>
                                       <div>
                                           <img src="../img/products/floor5_05.png" alt="">
                                       </div>
                                       <div class="grid-title">荣耀10青春版</div>
                                       <p class="grid-desc">4+64GB减100&nbsp; </p>
                                       <p class="grid-price">¥1299</p>
                                       </a>
                </li>
                <li>
                        <a href="javascript:;">
                               <span>爆款</span>
                           <div>
                               <img src="../img/products/floor5_06.png" alt="">
                           </div>
                           <div class="grid-title">荣耀10青春版</div>
                           <p class="grid-desc">4+64GB减100&nbsp; </p>
                           <p class="grid-price">¥1299</p>
                           </a>
                </li>  
                <li>
                        <a href="javascript:;">
                               <span>爆款</span>
                           <div>
                               <img src="../img/products/floor5_07.png" alt="">
                           </div>
                           <div class="grid-title">荣耀10青春版</div>
                           <p class="grid-desc">4+64GB减100&nbsp; </p>
                           <p class="grid-price">¥1299</p>
                           </a>
                </li> 
                <li>
                        <a href="javascript:;">
                               <span>爆款</span>
                           <div>
                               <img src="../img/products/floor5_08.png" alt="">
                           </div>
                           <div class="grid-title">荣耀10青春版</div>
                           <p class="grid-desc">4+64GB减100&nbsp; </p>
                           <p class="grid-price">¥1299</p>
                           </a>
                </li>   
                <li>
                        <a href="javascript:;">
                               <span>爆款</span>
                           <div>
                               <img src="../img/products/floor5_09.png" alt="">
                           </div>
                           <div class="grid-title">荣耀10青春版</div>
                           <p class="grid-desc">4+64GB减100&nbsp; </p>
                           <p class="grid-price">¥1299</p>
                           </a>
                </li>-->           
            </ul>
        </div>
      
     </div>
         <!-- floor6-->
     <div id="floor6" >
        <ul :style="f6StyleUl">
            <li v-for="(elem,i) of floor6" :key="i"  @click="handleClick(elem.pid)">
                <a href="javascript:;">
                    <span v-text="`${elem.fiery}`"></span>
                    <div>
                        <img :src="`${elem.pic}`" alt="">
                          <p v-text="`${elem.welfare}`"> </p>
                    </div>
                    <div v-text="`${elem.title}`"></div>
                    <p v-text="`￥${elem.price}`"></p>
               </a>
            </li>
        <!--  <li>
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor6_02.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
            </li>
            <li>
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor6_18.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
            </li>
            <li>
                        <a href="javascript:;">
                            <span>特惠</span>
                            <div>
                                <img src="../img/carousel/floor6_04.png" alt="">
                                  <p>专业降噪通话 待机10天&nbsp; </p>
                            </div>
                            <div>荣耀智能体脂秤</div>
                            <p>¥129</p>
                       </a>
            </li>
            <li>
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor6_05.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
           </li>
           <li>
                <a href="javascript:;">
                    <span>特惠</span>
                    <div>
                        <img src="../img/carousel/floor6_06.png" alt="">
                          <p>专业降噪通话 待机10天&nbsp; </p>
                    </div>
                    <div>荣耀智能体脂秤</div>
                    <p>¥129</p>
               </a>
          </li>
          <li>
                <a href="javascript:;">
                    <span>特惠</span>
                    <div>
                        <img src="../img/carousel/floor6_07.png" alt="">
                          <p>专业降噪通话 待机10天&nbsp; </p>
                    </div>
                    <div>荣耀智能体脂秤</div>
                    <p>¥129</p>
               </a>
            </li>
            <li>
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor6_08.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
            </li>
            <li>
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor6_09.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
            </li>
            <li>
                        <a href="javascript:;">
                            <span>特惠</span>
                            <div>
                                <img src="../img/carousel/floor6_10.png" alt="">
                                  <p>专业降噪通话 待机10天&nbsp; </p>
                            </div>
                            <div>荣耀智能体脂秤</div>
                            <p>¥129</p>
                       </a>
            </li>
            <li>
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor6_11.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
           </li>
           <li>
                <a href="javascript:;">
                    <span>特惠</span>
                    <div>
                        <img src="../img/carousel/floor6_12.png" alt="">
                          <p>专业降噪通话 待机10天&nbsp; </p>
                    </div>
                    <div>荣耀智能体脂秤</div>
                    <p>¥129</p>
               </a>
          </li>
          <li>
                <a href="javascript:;">
                    <span>特惠</span>
                    <div>
                        <img src="../img/carousel/floor6_13.png" alt="">
                          <p>专业降噪通话 待机10天&nbsp; </p>
                    </div>
                    <div>荣耀智能体脂秤</div>
                    <p>¥129</p>
               </a>
            </li>
            <li>
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor6_14.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
            </li>
            <li>
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor6_15.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
            </li>
            <li>
                        <a href="javascript:;">
                            <span>特惠</span>
                            <div>
                                <img src="../img/carousel/floor6_16.png" alt="">
                                  <p>专业降噪通话 待机10天&nbsp; </p>
                            </div>
                            <div>荣耀智能体脂秤</div>
                            <p>¥129</p>
                       </a>
            </li>
            <li>
                    <a href="javascript:;">
                        <span>特惠</span>
                        <div>
                            <img src="../img/carousel/floor6_17.png" alt="">
                              <p>专业降噪通话 待机10天&nbsp; </p>
                        </div>
                        <div>荣耀智能体脂秤</div>
                        <p>¥129</p>
                   </a>
           </li>
           <li>
                <a href="javascript:;">
                    <span>特惠</span>
                    <div>
                        <img src="../img/carousel/floor6_18.png" alt="">
                          <p>专业降噪通话 待机10天&nbsp; </p>
                    </div>
                    <div>荣耀智能体脂秤</div>
                    <p>¥129</p>
               </a>
          </li>-->
        </ul>
        <button  class="lr" @click="f6ulLeft"  :disabled="f6move==0?true:false">
            <img src="img/products/arrow-left.png" alt="">
        </button>
        <button class="lr lr2" @click="f6ulRight" :disabled="f6move==this.floor6.length-6?true:false">
                <img src="img/products/arrow-right.png" alt="">
        </button>
     </div>
  <img src="img/products/xinren.jpg" alt="">
   </div>
</div>
    <my-footer></my-footer>
 </div>
</template>


<script>

export default {
      data() {
         return {
           
                floor2:"",
                floor3:"",
                floor5:"",
                floor6:"",
                carousel1:"",
                carousel2:"",
                f3StyleUl:{
                    width:0,
                   "margin-left":0
                },
                f3move:0,
                f6StyleUl:{
                    width:0,
                   "margin-left":0
                },
                f6move:0,
                f4StyleUl:{
                    width:0,
                   "margin-left":0
                },
                f4move:0,
                 carouselStyle:{
                     width:0
                 }
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
         f3ulLeft(){
             if(this.f3move==0){
                 this.f3move=this.floor3.length-5;
                 this.f3StyleUl['margin-left']=-242*this.f3move+"px";
             }else{
                 this.f3move-=5;
                 this.f3StyleUl['margin-left']=-242*this.f3move+"px"; 
             }
         },
         f3ulRight(){     
            if(this.f3move!=this.floor3.length-5){
                this.f3move+=5;   
                 this.f3StyleUl['margin-left']=-242*this.f3move+"px";
            }else{
                this.f3move=0;
             this.f3StyleUl['margin-left']=-242*this.f3move+"px";
            }
         },
          f6ulLeft(){
           if(this.f6move!=0){
               this.f6move-=6;
              this.f6StyleUl['margin-left']=-202*this.f6move+"px"; 
            }
          },
          f6ulRight(){     
            if(this.f6move!=this.floor6.length-6){
                this.f6move+=6;  
              this.f6StyleUl['margin-left']=-202*this.f6move+"px"; 
            } 
          }
     },
     mounted(){   
      //轮播图上的侧边导航navslide
      //轮播图上的侧边导航navslide
    //   this.$router
        $(function(){
            (function(){
        var $ul=$("#aside-parent>div.ul>ul");
        var $uls=$ul.next().children();
        $ul.on("mouseenter","li",function(){
        var id=$(this).attr("data-toggle");
        $uls.addClass("my_hide");
            $(id).removeClass()
        })
            $ul.parent().on("mouseleave",function(){$uls.addClass("my_hide");})
          })();
        });

setTimeout(function(){
// 1111111111111 carousel 轮播
(function(){
  // //获取包裹元素的ul
   var $ul=$("#carousel>div.carousel-inner>ul.carousel-item");
  //  console.log($ul);
     var $lis=$ul.children();
    //  console.log($lis)
     var width=window.innerWidth;
    //  console.log(width)
       $lis.css({width});
      $ul.css({width:width*$lis.length})
   window.onresize=function(){
         width = window.innerWidth;
            $lis.css({width});
         $ul.css({width:width*$lis.length}) 
       }
      var n="";
     var time="";
      var origins=$ul.next().children(":first").find("a");
      var $as=$ul.next().children("a");
      function origin(){
       for(var key of origins){
           key.className="";
          }
        origins[n].className="active1";
       };
     function fn(){
          time=setInterval(function(){
             n++
           if(n<$lis.length){
            $ul.css({marginLeft:-width*n});
           }else{
               n=0;
             $ul.css({marginLeft:-width*n});
            }
             origin();
           },3000)   
     }
   fn();
    $ul.parent().hover(
       function(){
      clearInterval(time)
     },
        function(){
            fn();
        }
   );
     origins.parent().on("mouseenter","a",function(){
        var i=$(this).parent().index();
        for(var key of origins){
             key.className="";
        }
                 n=i;
        origins[i].className="active1";
         $ul.css({marginLeft:-width*i});
     });
    
    $as.on("click",function(){
           var a=$(this);    
         if(a.is(".next")&&n<$lis.length-1){
             n++;
             origin();
        $ul.css({marginLeft:-width*n});  
         }else if(a.is(".next")){
             n=0;
              origin();
           $ul.css({marginLeft:-width*n});  
          }else if(a.is(".prev")&&n!=0){
              n--;
               origin();
              $ul.css({marginLeft:-width*n});  
         }else if(a.is(".prev")){
                n=$lis.length-1;
             origin();
           $ul.css({marginLeft:-width*n});  
         }
    });
  })();
},500);
  (function(f4move,length,f4StyleUl){
    var time="";
    function fn(){
       time=setInterval(function(){
        if(f4move<3-1){
            f4move++;    
            f4StyleUl['margin-left']=-1200*f4move+"px";
        }else{
           f4move=0;
           f4StyleUl['margin-left']=-1200*f4move+"px"; 
        }
    },2000)
     }
    fn();
      $("#floor4").hover(
      function(){
          clearInterval(time);
    },
       function(){
          fn();
      });         
    })(this.f4move,this.carousel2.length,this.f4StyleUl);
  },
     created(){ 
         var t=setTimeout(function(){
            localStorage.clear()
         },1000*60*60*3);
       this.axios.get('/index',{
       }).then(response=>{
                       var  index=response.data;
                       var {carousel,product}=index;
                      this.floor2=product.slice(0,8);
                      this.floor3=product.slice(8,23);
                      this.floor5=product.slice(23,31);
                      this.floor6=product.slice(31,49);
                      this.carousel1=carousel.slice(0,3);
                      this.phone=product.slice(49,55);
                      this.f3StyleUl.width=this.floor3.length*242+"px";
                      this.f6StyleUl.width=this.floor6.length*202+"px";
                      this.carousel2=carousel.slice(3,6);
                      this.f4StyleUl.width=this.carousel2.length*1200+"px";
       })
     }
}
</script>

<style scoped>
/* 顶部img的close()  */
 *{margin:0;padding:0}
 ul{
     list-style:none;
 }
 a{
     text-decoration:none;
 }
 /* fixed固定的影藏得搜索框 */
 div.scroll{
    width:100%;
    height:4rem;
    background:#e00012;
    position:fixed;
    justify-content:space-around;
    z-index:9;
    display:none;
}
div.scroll div.scroll-item{
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-around;
}
div.scroll div.scroll-item img{
    width:22rem;
    height:4rem;
}
div.scroll div.scroll-item input{
    width:30rem;
    height:3rem;
    margin-top:0.5rem;
     border-radius:2rem;
     border:0;
     outline-style:none;
     text-indent:2em;
}   
/* 顶部关闭的a图片 */
 div.my_img>a{
    position:absolute;top:1rem;left:98rem;
    color:#fff;
    text-decoration:none;
    line-height:auto;
 }
 #navbar a,span{
   text-decoration:none;  
   color:#a4a4a4;
   font-size:0.8rem;
}
#navbar{
    margin-left:0rem;
    padding-top:0.4rem;
    width:100%;
    height:2.5rem;
    display:flex;
    background:#f9f9f9;
}
#navbar a:hover{
    color:red;
}
 /*动态拖拽效果图*/
 #dynamic span{
    position:fixed;
    /* background-image:url('./img/top-dynamic/timg.gif'); */
    width:13.7rem;
    height:15rem;
    z-index:10;
    background-size:cover;
}  



/* 目标滑动 */
#carousel{
   width:100%;
   height:550px;
   overflow:hidden;
}
#carousel div.carousel-inner{
    width:100%;
    height:550px;
    margin:0 auto;
    position:relative;
 
}
#carousel div.carousel-inner ul.carousel-item{
   float:left;
   height:550px;
}
#carousel div.carousel-inner ul.carousel-item  li{
    float:left;
}
#carousel div.carousel-inner ul.carousel-item li img{
    width:100%;
    height:550px;
}




#carousel div.carousel-inner ul.origin{
    position:absolute;
    bottom:17%;
    left:85%;
    width:100px;
    height:20px;
    line-height:20px;
}



#carousel div.carousel-inner ul.origin li{
     float:left;
     margin-left:10px;
}




#carousel div.carousel-inner ul.origin li a{
    display:inline-block;
    width:0.6rem;
    height:0.6rem;
    border-radius:50%;
    border:2px solid #f0f0f0;  
}



#carousel div.carousel-inner #aside-parent{
    width:1200px;
    height:550px;
    position:absolute;
    left:50%;
    margin-left:-600px;
}

#carousel div.carousel-inner #aside-parent>a{
   position:absolute;
   width:3.5rem;
   height:3.5rem;
   top:13.5rem;
   left:66rem;
   background:rgba(0,0,0,0.1);
   text-align:center;
   line-height:3.8rem;
   border-radius:50%;
}

#carousel div.carousel-inner #aside-parent>a.prev{
    top:13.5rem;
    left:14rem;
}

#carousel div.carousel-inner #aside-parent>a:hover{
    background:rgba(0,0,0,0.3); 
}

.active1{
    background:#fff;
    box-shadow:0px 0px 3px 5px rgba(255,255,255,0.3);
}




/* 轮播样式结束 */
 /* 轮播侧向导航链接 */
 #carousel #aside{
    width:13rem;
    height:30rem;
    background:#fbf5f5;
    list-style:none;
    position:absolute;
    top:0rem;left:0rem;
    z-index:5;
    border-radius:0.8rem;
}
#carousel #aside li{
 width:100%;
 height:5rem;
 position:relative;
 padding:0rem;
}
#carousel #aside li:first-child{
border-top-left-radius:0.8rem;
border-top-right-radius:0.8rem;
}
#carousel #aside li:last-child{
    border-bottom-left-radius:0.8rem;
    border-bottom-right-radius:0.8rem;
    }
#carousel #aside li:hover{
    width:100%;
    background:#fff;
} 
#carousel #aside li div:first-child{
      padding-top:1rem;
}
#carousel #aside li div:last-child{
    position:absolute;
    width:60%;
    height:1px;
    background:#a8a8a8;
    bottom:0;
}
#carousel #aside li div{
    margin-left:1.5rem;
}
#carousel #aside li div a{
     text-decoration:none;
     color:#000;
 }
 #carousel #aside li div a span:hover{
    color:red;
 }
 #carousel #aside li:last-child div:last-child{
     display:none;
 }
 #carousel #aside li div:nth-child(1) a span{
     font-size:1rem;
 }
 #carousel #aside li div:nth-child(2){
     margin-top:0.3rem;
 }
 /* <!-- 轮播上隐藏的侧边链接 --> */
 #carousel div.aside-item ul{
    position:absolute;top:0rem;left:12rem;
    display:flex;
    flex-direction:column;flex-wrap:wrap;
    background:#fff;z-index:5;height:30rem;width:30rem;
    list-style:none;overflow:hidden;
    padding-left:2rem;
 }
 .my_hide{
  visibility:hidden;
 } 
 #carousel div.aside-item ul a{
     display:block;
     width:13rem;
     height:5rem;
     border-radius:0.2rem;
     margin-bottom:1.5rem;
     text-decoration:none;
     line-height:5rem; 
 }
 #carousel div.aside-item ul li:nth-child(1) a,
 #carousel div.aside-item ul li:nth-child(5) a{
     margin-top:2rem;
 }
 #carousel div.aside-item ul li a span{
  display:inline-block;
   position:relative;top:-2rem;
   color:#777;
   font-size:0.8rem;
}

#carousel div.aside-item ul li:last-child a{
    text-align:center;
    background:#0aaeed;
    width:10rem;
    height:3rem;
    border-radius:1rem;
    color:#fff;
    margin-top:1rem;
    line-height:3rem;
}
#carousel div.aside-item ul li a:hover{
    background:#eee;
}
#carousel div.aside-item ul:nth-child(2),
#carousel div.aside-item ul:nth-child(3){
    height:30rem;width:15rem;
}
#carousel div.aside-item ul:nth-child(2) li:nth-child(3) a img{
    width:5rem;
    height:5rem;
}

    @keyframes chenge {
  17% {
    transform: translateY(-20px); }
  34% {
    transform: translateY(-40px); }
  51% {
    transform: translateY(-60px); }
  68% {
    transform: translateY(-80px); }
  85% {
    transform: translateY(-100px); }
  100% {
    transform: translateY(-120px); } }

#floor {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: -65px;
  background: #fcfcfc; }
  #floor ul.products-register {
    width: 100%;
    height: 88px;
    background: #fff;
    box-sizing: border-box;
    margin-bottom: 20px; }
    #floor ul.products-register li {
      float: left; }
    #floor ul.products-register .products-register-left {
      width: 23%;
      height: 88px;
      box-sizing: border-box;
      padding: 15px 15px;
      border-right: 1px solid #f0f0f0; }
      #floor ul.products-register .products-register-left div {
        width: 210px; }
        #floor ul.products-register .products-register-left div img {
          width: 52px;
          height: 52px;
          vertical-align: top; }
        #floor ul.products-register .products-register-left div span {
          font-size: 15px;
          margin-left: 5px; }
          #floor ul.products-register .products-register-left div span a {
            color: #333;
            text-decoration: none; }
            #floor ul.products-register .products-register-left div span a:hover {
              color: #cb242b; }
        #floor ul.products-register .products-register-left div div {
          position: absolute;
          top: 15px;
          left: 75px;
          width: 13%; }
          #floor ul.products-register .products-register-left div div a.new {
            display: inline-block;
            margin-top: 7px;
            margin-left: 7px;
            font-size: 14px;
            border: 1px solid #e47b7f;
            width: 66px;
            height: 20px;
            color: #de5b60;
            background: #fff;
            line-height: 20px;
            text-align: center;
            text-decoration: none;
            border-radius: 5px 5px 5px 5px; }
            #floor ul.products-register .products-register-left div div a.new:hover {
              color: #fff;
              background: #de5b60; }
          #floor ul.products-register .products-register-left div div a.new.a2 {
            color: #fde4b3;
            background: #595454;
            border: 1px solid #595454; }
            #floor ul.products-register .products-register-left div div a.new.a2:hover {
              opacity: 0.9; }
    #floor ul.products-register li:nth-child(2) {
      width: 56%;
      height: 88px;
      border-right: 1px solid #f0f0f0; }
      #floor ul.products-register li:nth-child(2) ul {
        width: 100%;
        box-sizing: border-box;
        padding: 15px 15px 0 15px;
        height: 88px; }
        #floor ul.products-register li:nth-child(2) ul li {
          float: left;
          width: 104px;
          height: 64px; }
          #floor ul.products-register li:nth-child(2) ul li a {
            display: block;
            width: 84px;
            height: 64px;
            text-decoration: none; }
            #floor ul.products-register li:nth-child(2) ul li a div:first-child {
              width: 42px;
              height: 42px;
              margin: 0 auto; }
            #floor ul.products-register li:nth-child(2) ul li a div:last-child {
              width: 84px;
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              color: #777;
              text-align: center; }
              #floor ul.products-register li:nth-child(2) ul li a div:last-child:hover {
                color: #cb242b; }
    #floor ul.products-register li:nth-child(3) {
      width: 250px;
      height: 88px; }
      #floor ul.products-register li:nth-child(3) .products-register-bottom-top {
        width: 100%;
        height: 43px;
        box-sizing: border-box;
        padding: 10px 10px; }
        #floor ul.products-register li:nth-child(3) .products-register-bottom-top .products-register-bottom-top-left {
          width: 33px;
          height: 20px;
          float: left; }
          #floor ul.products-register li:nth-child(3) .products-register-bottom-top .products-register-bottom-top-left a {
            font-size: 16px;
            text-decoration: none;
            color: #777; }
        #floor ul.products-register li:nth-child(3) .products-register-bottom-top .products-register-bottom-top-right {
          width: 185px;
          height: 20px;
          float: left;
          margin-left: 8px; }
          #floor ul.products-register li:nth-child(3) .products-register-bottom-top .products-register-bottom-top-right ul {
            width: 185px;
            height: 20px;
            overflow: hidden; }
            #floor ul.products-register li:nth-child(3) .products-register-bottom-top .products-register-bottom-top-right ul li {
              width: 185px;
              height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-bottom: 10px;
              animation: chenge 25s linear infinite; }
              #floor ul.products-register li:nth-child(3) .products-register-bottom-top .products-register-bottom-top-right ul li a {
                color: #6f6f6f;
                font-size: 12px;
                text-decoration: none; }
                #floor ul.products-register li:nth-child(3) .products-register-bottom-top .products-register-bottom-top-right ul li a:hover {
                  color: #cb242b;
                  box-shadow: 0px 0px 5px 3px #ddd; }
      #floor ul.products-register li:nth-child(3) .products-register-bottom-bottom {
        width: 248px;
        height: 45px; }
        #floor ul.products-register li:nth-child(3) .products-register-bottom-bottom ul {
          width: 248px;
          height: 25px;
          padding: 10px 0; }
          #floor ul.products-register li:nth-child(3) .products-register-bottom-bottom ul li {
            float: left;
            margin-left: 6.8px; }
            #floor ul.products-register li:nth-child(3) .products-register-bottom-bottom ul li img {
              vertical-align: middle; }
          #floor ul.products-register li:nth-child(3) .products-register-bottom-bottom ul li:nth-child(2), #floor ul.products-register li:nth-child(3) .products-register-bottom-bottom ul li:nth-child(3) {
            width: 79.2px;
            height: 24.2px; }
  #floor h2.floot-title {
    width: 1200px;
    margin: 0 auto;
    height: 90px;
    box-sizing: border-box;
    padding: 50px 0;
    font-size: 26px;
    color: #333;
    font-weight: 500; }

* {
  margin: 0;
  padding: 0; }

#floor1 {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 200px; }
  #floor1 a {
    display: inline-block;
    width: 290px;
    height: 200px;
    border-radius: 10px;
    margin-left: 5px;
    transition: all 0.5s linear; }
    #floor1 a:hover {
      box-shadow: 0 0 4px 3px #ddd;
      transform: translateY(-10px); }

* {
  margin: 0;
  padding: 0; }

a {
  text-decoration: none; }

#floor #floor2 {
  width: 1200px;
  height: 604px; }
  #floor #floor2 a {
    transition: all 0.5s linear; }
    #floor #floor2 a:hover {
      box-shadow: 0px 0px 4px 3px #ccc;
      transform: translateY(-10px); }
  #floor #floor2 ul li:first-child {
    transition: all 0.5s linear; }
    #floor #floor2 ul li:first-child:hover {
      box-shadow: 0px 0px 4px 3px #ccc;
      transform: translateY(-10px); }
    #floor #floor2 ul li:first-child img {
      display: inline-block;
      width: 230px;
      height: 592px;
      transition: all 0.5s linear; }
      #floor #floor2 ul li:first-child img:hover {
        box-shadow: 0px 0px 4px 3px #ccc;
        transform: translateY(-10px); }
  #floor #floor2 ul li {
    float: left; }
  #floor #floor2 ul li + li {
    margin-left: 12px;
    margin-bottom: 12px; }
    #floor #floor2 ul li + li a {
      display: inline-block;
      width: 230px;
      height: 290px;
      background: #f9f9f9;
      text-align: center;
      transition: all 0.5s linear; }
      #floor #floor2 ul li + li a span {
        display: block;
        padding: 0 9px;
        margin: 0 auto;
        height: 22px;
        width: 44px;
        box-sizing: border-box;
        line-height: 22px;
        color: #fff;
        border-radius: 0 0 6px 6px;
        background: #FF6A6E; }
      #floor #floor2 ul li + li a div:nth-child(2) {
        margin-top: 15px;
        margin-bottom: 10px; }
      #floor #floor2 ul li + li a div:nth-child(3) {
        width: 210px;
        margin: 0 auto;
        padding: 0;
        height: 21px;
        font-size: 14px;
        color: #222;
        line-height: 21px; }
      #floor #floor2 ul li + li a p:nth-child(4) {
        color: #777;
        font-size: 12px;
        text-align: center; }
      #floor #floor2 ul li + li a p:nth-child(5) {
        margin-top: 10px;
        color: #d0021b;
        font-size: 14px; }
      #floor #floor2 ul li + li a img {
        border: 0;
        width: 150px;
        height: 150px; }

#floor #floor03 {
  width: 1200px;
  height: 310px;
  position: relative;
  margin-bottom: 30px;
  overflow: hidden; }
  #floor #floor03 a.lr {
    position: absolute;
    top: 32%;
    left: 0;
    width: 1.5rem;
    height: 4rem;
    background: #f0f0f0;
    text-align: center;
    line-height: 4rem;
    border-radius: 5px; }
    #floor #floor03 a.lr:hover {
      background: rgba(0, 0, 0, 0.6); }
  #floor #floor03 a.lr2 {
    top: 32%;
    left: 98%; }
  #floor #floor03 ul.floor03-ul {
    height: 311px; }
    #floor #floor03 ul.floor03-ul li:first-child {
      margin: 0;
      padding: 0; }
    #floor #floor03 ul.floor03-ul li.floor03-item {
      float: left;
      width: 242px;
      box-sizing: border-box; }
      #floor #floor03 ul.floor03-ul li.floor03-item a {
        width: 232px;
        height: 295px;
        display: inline-block;
        background: #fff;
        border-radius: 20px;
        text-align: center;
        margin-top: 10px;
        transition: all 0.5s linear; }
        #floor #floor03 ul.floor03-ul li.floor03-item a:hover {
          box-shadow: 0px 0px 4px 3px #ccc;
          transform: translateY(-10px); }
        #floor #floor03 ul.floor03-ul li.floor03-item a span {
          display: block;
          padding: 0 9px;
          margin: 0 auto;
          height: 22px;
          width: 44px;
          box-sizing: border-box;
          line-height: 22px;
          color: #fff;
          border-radius: 0 0 6px 6px;
          background: #FF6A6E; }
        #floor #floor03 ul.floor03-ul li.floor03-item a div:nth-child(2) {
          width: 230px;
          height: 205px;
          position: relative;
          text-align: center;
          margin: 20px 0 0 0;
          margin-right: 0px; }
          #floor #floor03 ul.floor03-ul li.floor03-item a div:nth-child(2) img {
            width: 150px;
            height: 150px; }
          #floor #floor03 ul.floor03-ul li.floor03-item a div:nth-child(2) p {
            font-size: 14px;
            line-height: 36px;
            position: absolute;
            bottom: 0px;
            width: 100%;
            background: #f3f3f3;
            color: #777; }
        #floor #floor03 ul.floor03-ul li.floor03-item a div:nth-child(3) {
          color: #333;
          height: 24px;
          padding-top: 10px;
          background: #fcfcfc;
          width: 231px; }
        #floor #floor03 ul.floor03-ul li.floor03-item a p:last-child {
          font-size: 14px;
          color: #d0021b;
          line-height: 21px;
          background: #fcfcfc; }

#floor #floor4 {
  width: 1200px;
  height: 120px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px; }
  #floor #floor4 ul img {
    width: 1200px; }
  #floor #floor4 ul:first-child {
    height: 120px; }
    #floor #floor4 ul:first-child li {
      float: left; }
  #floor #floor4 ul:last-child {
    position: absolute;
    top: 85%;
    left: 92%;
    width: 4rem;
    height: 1rem; }
    #floor #floor4 ul:last-child li {
      float: left;
      width: 0.7rem;
      height: 0.7rem;
      margin-left: 0.2rem;
      border: 2px solid #f0f0f0;
      border-radius: 50%; }

.active {
  background: #d0021b;
  box-shadow: 0px 0px 4px 3px  #d0021b; }

#floor #floor5 {
  width: 1200px; }
  #floor #floor5 .floor5-top {
    width: 1200px;
    height: 80px;
    box-sizing: border-box;
    padding: 30px 0; }
    #floor #floor5 .floor5-top h2 {
      font-size: 26px;
      color: #333;
      float: left;
      width: 104px; }
    #floor #floor5 .floor5-top .floor5-top-center {
      width: 1200px;
      height: 35px;
      line-height: 35px; }
      #floor #floor5 .floor5-top .floor5-top-center li {
        float: left;
        margin-left: 18px; }
        #floor #floor5 .floor5-top .floor5-top-center li a {
          color: #999;
          font-size: 14px; }
          #floor #floor5 .floor5-top .floor5-top-center li a:hover {
            color: #cb242b; }
      #floor #floor5 .floor5-top .floor5-top-center li:last-child {
        margin-left: 5.5rem; }
        #floor #floor5 .floor5-top .floor5-top-center li:last-child a {
          color: #333;
          font-size: 16px; }
          #floor #floor5 .floor5-top .floor5-top-center li:last-child a:hover {
            color: #cb242b; }
          #floor #floor5 .floor5-top .floor5-top-center li:last-child a span {
            font-size: 20px;
            color: #333; }
  #floor #floor5 .floor5-middle {
    width: 100%; }
    #floor #floor5 .floor5-middle a {
      transition: all 0.5s linear; }
      #floor #floor5 .floor5-middle a:hover {
        box-shadow: 0px 0px 4px 3px #ccc;
        transform: translateY(-10px); }
    #floor #floor5 .floor5-middle ul:after {
      content: "";
      display: block;
      clear: both; }
    #floor #floor5 .floor5-middle ul li:first-child {
      transition: all 0.5s linear; }
      #floor #floor5 .floor5-middle ul li:first-child:hover {
        box-shadow: 0px 0px 4px 3px #ccc;
        transform: translateY(-10px); }
    #floor #floor5 .floor5-middle ul li {
      float: left; }
    #floor #floor5 .floor5-middle ul li:nth-child(5) {
      margin-left: 0; }
    #floor #floor5 .floor5-middle ul li + li {
      margin-left: 12px;
      margin-bottom: 12px; }
      #floor #floor5 .floor5-middle ul li + li img {
        width: 150px;
        height: 150px; }
      #floor #floor5 .floor5-middle ul li + li a {
        display: inline-block;
        width: 230px;
        height: 290px;
        background: #f9f9f9;
        text-align: center;
        transition: all 0.5s linear; }
        #floor #floor5 .floor5-middle ul li + li a span {
          display: block;
          margin: 0 auto;
          height: 22px;
          width: 44px;
          box-sizing: border-box;
          line-height: 22px;
          color: #fff;
          border-radius: 0 0 6px 6px;
          background: #FF6A6E;
          margin-bottom: 0rem; }
        #floor #floor5 .floor5-middle ul li + li a div:nth-child(2) {
          margin-top: 15px;
          margin-bottom: 10px; }
        #floor #floor5 .floor5-middle ul li + li a div:nth-child(3) {
          width: 210px;
          margin: 0 auto;
          padding: 0;
          height: 21px;
          font-size: 14px;
          color: #222;
          line-height: 21px; }
        #floor #floor5 .floor5-middle ul li + li a p:nth-child(4) {
          color: #777;
          font-size: 12px;
          text-align: center; }
        #floor #floor5 .floor5-middle ul li + li a p:nth-child(5) {
          margin-top: 10px;
          color: #d0021b;
          font-size: 14px; }

#floor #floor6 {
  width: 1200px;
  height: 311px;
  position: relative;
  margin-bottom: 30px;
  overflow: hidden; }
  #floor #floor6 button.lr {
    outline: none;
    position: absolute;
    top: 32%;
    left: 0;
    width: 1.5rem;
    height: 4rem;
    background: #f0f0f0;
    text-align: center;
    line-height: 4rem;
    border-radius: 5px; }
    #floor #floor6 button.lr:hover {
      background: rgba(0, 0, 0, 0.6); }
  #floor #floor6 button.lr2 {
    top: 32%;
    left: 98%; }
  #floor #floor6 ul {
    height: 311px;
    transition: all 1s linear; }
    #floor #floor6 ul li {
      float: left;
      width: 202px;
      box-sizing: border-box; }
      #floor #floor6 ul li a {
        width: 190px;
        height: 240px;
        display: inline-block;
        text-align: center;
        background: #fcfcfc;
        border-radius: 10px;
        margin-top: 10px;
        transition: all 0.5s linear; }
        #floor #floor6 ul li a:hover {
          box-shadow: 0px 0px 4px 3px #ccc;
          transform: translateY(-10px); }
        #floor #floor6 ul li a span {
          display: block;
          padding: 0 9px;
          margin: 0 auto;
          height: 22px;
          width: 44px;
          box-sizing: border-box;
          line-height: 22px;
          color: #8b3232;
          border-radius: 0  6px 6px;
          background: #FF6A6E; }
        #floor #floor6 ul li a div:nth-child(2) {
          width: 195px;
          height: 205px;
          position: relative;
          text-align: center;
          margin-top: 20px; }
          #floor #floor6 ul li a div:nth-child(2) img {
            width: 120px;
            height: 120px; }
          #floor #floor6 ul li a div:nth-child(2) p {
            font-size: 14px;
            line-height: 36px;
            position: absolute;
            bottom: 0px;
            border-radius: 0 0 10px 10px;
            width: 100%;
            background: #f3f3f3;
            color: #777; }
        #floor #floor6 ul li a div:nth-child(3) {
          color: #333;
          height: 24px; }
        #floor #floor6 ul li a p:last-child {
          font-size: 14px;
          color: #d0021b;
          line-height: 21px; }

</style>