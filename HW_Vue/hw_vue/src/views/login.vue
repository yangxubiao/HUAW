<template>
<div>
        <div id="register">
         <div id="register-top">
             <div class="register-top-letf">
            <a href="javascript:;">
                <img src="img/login/huawei.png" alt="">
            </a>
               <h2>欢迎登录</h2>
            </div>
            <div class="register-top-right">
                <router-link to="/register">
                    <img src="img/login/logintop02.png" alt="">注册页面，调查问卷
                </router-link>
            </div>
         </div>
         <div id="register-middle">
            <div class="register-middle-center">
                <img src="img/login/login-middleicon-tips01.png" alt="">
                依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版
                <a href="javascript:;" target="_blank">《华为隐私政策》</a>
                已上线，将更有利于保护您的个人隐私。
            </div>
         </div>
         <div id="register-bottom-parent">
         <div id="register-bottom">
            <div class="register-bottom-left">
              <div class="register-bottom-left-top">
                 <img src="img/login/login-middleicon-tips01.png" alt="">
                 <span>华为不会以任何理由要求您转账汇款，谨防诈骗.</span>
              </div>
              <div class="register-bottom-left-middle">
                   <a href="javscript:;">
                       扫描登录
                    </a>
                    <a href="javascript:;">
                       账户登录
                    </a>
              </div>
              <table id="register-bottom-left-bottom">
                   <tr>
                       <td>
                           <div class="register-bottom-left-bottom-user">
                           </div>
                           <input type="text"  v-model="uname" placeholder="邮箱/用户名/已验证手机"> 
                              <p v-text="Nmsg"></p>
                      </td>
                   </tr>
                   <tr> 
                        <td>
                            <div class="register-bottom-left-bottom-upwd"></div>
                            <input type="password"  v-model="upwd" placeholder="密码"> 
                            <p v-text="Upwd"></p>
                        </td>
                    </tr>
                    <tr>
                            <td>
                               <a href="javascript:;">忘记密码</a>
                            </td>
                     </tr>
                      <tr>
                         <td>
                                <a href="javascript:;"  @click="login">登录</a>
                        </td>
                     </tr>
                </table>
                <div id="register-bottom-left-baseline">
                    <ul>
                        <li>
                            <a href="javscript:;">
                               <div class="qq"></div> 
                                <span>QQ</span>
                                <b>|</b>
                            </a>
                        </li>
                        <li>
                                <a href="javscript:;">
                                   <div class="weixin"></div> 
                                    <span>微信</span>
                                </a>
                            </li>
                            <li>
                                 <router-link to="/register">
                                    <div class="weixin"></div> 
                                    <span>立即注册</span>
                                </router-link>
                            </li>
                    </ul>
                </div>
            </div>
         </div>
    </div>
</div>
<div id="register-baseline">
      <ul>
            <li>
              <a href="javascript:;">关于我们<span>|</span></a>
            </li>
            <li>
                <a href="javascript:;">联系我们<span>|</span></a>
            </li>
            <li>
            <a href="javascript:;">人才招聘<span>|</span></a>
            </li>
            <li>
            <a href="javascript:;">商家入驻<span>|</span></a>
            </li>
            <li>
            <a href="javascript:;">广告服务<span>|</span></a>
            </li>
            <li>
            <a href="javascript:;">手机华为<span>|</span></a>
            </li>
            <li>
            <a href="javascript:;">友情链接<span>|</span></a>
            </li>
            <li>
            <a href="javascript:;">销售联盟<span>|</span></a>
            </li>
            <li>
            <a href="javascript:;">华为社区<span>|</span></a>
            </li>
            <li>
            <a href="javascript:;">华为公益<span>|</span></a>
            </li>
            <li>
                <a href="javascript:;">English Site</a>
            </li>
      </ul>
      <p>
         Copyright&nbsp;©&nbsp;2004-2019&nbsp;&nbsp;华为JD.com&nbsp;版权所有
      </p>
</div>
</div>
</template>

<script>
export default {
    data(){
        return {
                uname:"",
                upwd:"",
                Nmsg:"",
                Upwd:"",
        }
    },
    methods:{
     login(){
         if(this.uname.trim().length!=0&&this.upwd.trim().length!=0){
                var url="/user/login?uname="+this.uname+"&upwd="+this.upwd;
                  this.axios.get(url).then(res=>{
                     if(res.data.code==1){
                          var user=JSON.stringify(res.data.data[0]);
                           localStorage.setItem('user',user);
                           user=JSON.parse(localStorage.getItem('user'))
                           this.$router.push("/index");
                       }else{
                          alert("用户名或密码错误")
                     }
              })
         }
     }
    },
    watch:{
       uname(){
          if(this.uname.trim().length<=9&&this.uname.trim().length>=6)
            this.Nmsg="用户名格式正确" 
            else
            this.Nmsg="用户名最少6~9个字母或数字和下划线";
       },
       upwd(){
          if(this.upwd.trim().length<=9&&this.upwd.trim().length>=6)
            this.Upwd="密码格式正确" 
            else
            this.Upwd="密码最少6~9个数字";
       },
    }
}
</script>

<style scoped>
 * {
  margin: 0;
  padding: 0; }

ul {
  list-style: none; }

#register #register-top {
  width: 1190px;
  height: 100px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px; }

#register #register-top .register-top-letf a {
  float: left;margin-top:20px; }

#register #register-top .register-top-letf h2 {
  float: left;
  margin-top: 20px;
  margin-left: 35px;
  color: #666;
  font: 500 25px "Arial,Verdana"; }

#register #register-top .register-top-right {
  margin-top: 40px; }

#register #register-top .register-top-right a {
  display: block;
  font: 500 12px "Arial,Verdana";
  color: #999;
  text-decoration: none; }

#register #register-top .register-top-right a:hover {
  text-decoration: underline;
  color: #e83632; }

#register #register-top .register-top-right a img {
  vertical-align: middle; }

#register #register-middle {
  width: 100%;
  height: 40px;
  background: #fff8f0;
  text-align: center;
  box-sizing: border-box;
  padding: 12px 0; }

#register #register-middle .register-middle-center {
  color: #999;
  font-size: 14px; }

#register #register-middle .register-middle-center img {
  vertical-align: middle; }

#register #register-middle .register-middle-center a {
  color: #222;
  text-decoration: none; }

#register #register-middle .register-middle-center a:hover {
  text-decoration: underline; }

#register #register-bottom:before {
  content: "";
  display: table; }

#register #register-bottom {
  width: 1200px;
  height: 475px;
  margin: 0 auto;
  background:#081638 url("/img/login/login_middle1.png") no-repeat; }

#register #register-bottom .register-bottom-left {
  width: 346px;
  height: 438px;
  background: #fff;
  margin-left: 50rem;
  margin-top: 1rem; }

#register #register-bottom .register-bottom-left .register-bottom-left-top {
  width: 100%;
  height: 40px;
  background: #fff8f0;
  text-align: center;
  line-height: 40px; }

#register #register-bottom .register-bottom-left .register-bottom-left-top span {
  color: #999;
  font-size: 12px; }

#register #register-bottom .register-bottom-left .register-bottom-left-top img {
  vertical-align: middle; }

#register #register-bottom .register-bottom-left .register-bottom-left-middle {
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #f0f0f0; }

#register #register-bottom .register-bottom-left .register-bottom-left-middle a {
  display: inline-block;
  width: 49%;
  height: 100%;
  box-sizing: border-box;
  color: #666;
  text-decoration: none;
  text-align: center;
  line-height: 54px;
  font-size: 17px;
  font-weight: bold; }

#register #register-bottom .register-bottom-left .register-bottom-left-middle a:visited {
  color: #e4393c; }

#register #register-bottom .register-bottom-left #register-bottom-left-bottom {
  width: 100%;
  height: 55%;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px; }
  #register #register-bottom .register-bottom-left #register-bottom-left-bottom  td {
    width: 100%;
    height: 38px; }
    #register #register-bottom .register-bottom-left #register-bottom-left-bottom  td div {
      float: left;
      width: 38px;
      height: 38px;
      border-top: 1px solid #bdbdbd;
      border-bottom: 1px solid #bdbdbd;
      border-left: 1px solid #bdbdbd;
      background: url("/img/login/pwd-middle02.png") 0px 0px; }
    #register #register-bottom .register-bottom-left #register-bottom-left-bottom  td input {
      width: 85%;
      height: 36px;
      outline: none;
      font-size: 14px;
      text-indent: 0.6em;
      margin-bottom: 20px; }
  #register #register-bottom .register-bottom-left #register-bottom-left-bottom tr:first-child p {
    margin-top: -12px; color:firebrick;text-align:center}
  #register #register-bottom .register-bottom-left #register-bottom-left-bottom  tr:nth-child(2) td div {
    background: url("/img/login/pwd-middle02.png") -47px 0px; }
  #register #register-bottom .register-bottom-left #register-bottom-left-bottom  tr:nth-child(2) td p {
    margin-top: 6px;  color:firebrick;text-align:center}
  #register #register-bottom .register-bottom-left #register-bottom-left-bottom tr:nth-child(2) td input {
    margin-bottom: 0px; }
  #register #register-bottom .register-bottom-left #register-bottom-left-bottom  tr:nth-child(3) td a {
    display: block;
    font-size: 12px;
    color: #666;
    text-decoration: none;
    margin-left: 83%;
    padding: 20px 0px; }
    #register #register-bottom .register-bottom-left #register-bottom-left-bottom  tr:nth-child(3) td a:hover {
      color: #e4393c;
      text-decoration: underline; }
  #register #register-bottom .register-bottom-left #register-bottom-left-bottom  tr:nth-child(4) td a {
    display: block;
    width: 100%;
    height: 35px;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    line-height: 35px;
    background-image: linear-gradient(to left, #e85356 50%, #e4393c 100%);
    border: 1px solid #e85356;
    border: none; }

#register-bottom-left-baseline {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  margin-top: 30px;
  padding: 0 20px; }
  #register-bottom-left-baseline ul li {
    float: left;
    width: 78px;
    height: 48px;
    padding: 13px 0px;
    box-sizing: border-box; }
    #register-bottom-left-baseline ul li a {
      float: left;
      width: 100%;
      height: 100%;
      font-size: 12px;
      text-decoration: none; }
      #register-bottom-left-baseline ul li a div {
        width: 19px;
        height: 18px;
        display: inline-block;
        vertical-align: middle;
        background: url("/img/login/QQ-weixin-middle.png") no-repeat 0px 0px; }
      #register-bottom-left-baseline ul li a span {
        font-size: 12px;
        padding-bottom: 0px;
        color: #66667e; }
        #register-bottom-left-baseline ul li a span:hover {
          text-decoration: underline;
          color: #e83632; }
      #register-bottom-left-baseline ul li a b {
        padding: 0 13px;
        color: #66667e; }
  #register-bottom-left-baseline ul li:nth-child(2) div {
    background: url("/img/login/QQ-weixin-middle.png") no-repeat -20px 0px; }
  #register-bottom-left-baseline ul li:last-child {
    float: right; }
    #register-bottom-left-baseline ul li:last-child div {
      background: url("/img/login/loginbase05.png") no-repeat -103px -74px; }
    #register-bottom-left-baseline ul li:last-child span {
      font-size: 13px;
      color: red; }
      #register-bottom-left-baseline ul li:last-child span:hover {
        text-decoration: underline; }

#register #register-bottom-parent {
  width: 100%;
  height: 475px;
  background: #081638; }

#register-baseline {
  width: 1190px;
  height: 80px;
  margin: 20px auto; }
  #register-baseline ul:after {
    content: "";
    display: block;
    clear: both; }
  #register-baseline ul {
    width: 50rem;
    margin: 0 auto; }
    #register-baseline ul li {
      float: left; }
      #register-baseline ul li a {
        font-size: 12px;
        color: #666;
        text-decoration: none; }
        #register-baseline ul li a:hover {
          text-decoration: underline;
          color: #e83632; }
        #register-baseline ul li a span {
          padding: 0 10px;
          color: #666; }
  #register-baseline p {
    font-size: 12px;
    color: #666;
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px; }

</style>

