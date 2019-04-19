<template>
  <div id="register">
     <div class="register-header">
       <div class="inner">
        <img src="img/register/logo.png" alt="">
               <span>|</span>
               <span>华为商城</span>            
       </div>
     </div>
     <div class="register-middle">
       <div class="top">
            <a href="javscript:;">注册</a>
             <a href="javscript:;">电子邮箱</a>
             <div class="right">
                 <span>已有华为帐号&nbsp;&nbsp;</span><router-link to="/login">登录></router-link>
             </div>
         </div>
         <div class="bottom">
             <ul>
                 <li>
                     <div>
                         <div>用户名</div>
                          <input type="text" placeholder="请输入您的用户名" v-model="uname" @blur="UnameReg">
                          <span v-html="Nmsg"></span>
                     </div>
                 </li>
                 <li>
                     <div>
                         <div>密码</div>
                          <input type="password" placeholder="请输入您的密码" v-model="upwd" @blur="UpwdReg">
                          <span v-html="Pmsg"></span>
                     </div>
                 </li>
                   <li>
                     <div>
                         <div>确认密码</div>
                          <input type="password" placeholder="请再次输入您的密码" v-model="upwd2" @blur="UpwdReg2"> 
                          <span v-html="P2msg"></span>
                     </div>
                 </li>
                  <li>
                     <button @click="register">注册</button>
                 </li>
             </ul>
         </div>
     </div>
     <div class="bottom">
        <p>华为帐号用户协议&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于华为帐号与隐私的声明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;常见问题</p>
        <p>Copyright © 2011-2019  华为软件技术有限公司  版权所有  保留一切权利  苏B2-20070200号 | 苏ICP备09062682号-9</p>
     </div>
  </div>
</template>
<script>
import store from '@/store'
  export default {
      data(){
          return {
              uname:"",
              upwd:"",
              upwd2:"",
              Nmsg:"",
              Pmsg:"",
              P2msg:""
          }
      },
      methods:{
        UnameReg(){
          var reg=/^\w{6,9}$/;
          if(reg.test(this.uname.trim())){
              this.Nmsg="";
              return true;
           }else{
              this.Nmsg="用户名至少6~9位数字,字母和下划线";
              return false;
           }
        },
        UpwdReg(){
           var reg=/^\d{6,9}$/;
           if(reg.test(this.upwd.trim())){
               this.Pmsg="";
               return true;
           }else{
               this.Pmsg="用户名至少6~9位数字";
                return false;
           }
        },
        // UnameReg(){
        // this.text(/^\w{6,9}$/,this.uname,this.Nmsg,"用户名至少6~9位数字,字母和下划线")
        // },
        // UpwdReg(){
        // this.text(/^\d{6,9}$/,this.upwd,this.Pmsg,"用户名至少6~9位数字");
        // },
        // text(reg,txt,span,msg){
        // console.log(reg,txt,span,msg);
        // if(reg.test(txt.trim())){
        //   span="";
        // return true;
        // }else{
        //   span=msg;
        // console.log(span);
        // return false;
        // }
        // },
       UpwdReg2(){
           if(this.upwd.trim()==this.upwd2.trim()){
            this.P2msg="";
               return true;
           }else{
              this.P2msg="两次密码不一致,请重新输入！！！"
                return false;
           }
        },
        register(){
          var n=this.UnameReg();
          var p=this.UpwdReg2();
          if(n==true&&p==true){
            var url="/user/register?uname="+this.uname+"&upwd="+this.upwd;
              this.axios.get(url).then(res=>{
                    if(res.data.code==1){
                      this.Nmsg=res.data.msg;
                   }else{
                     console.log(res.data.data[0]);
                        var user=JSON.stringify(res.data.data[0]);
                           localStorage.setItem('user',user);
                           user=JSON.parse(localStorage.getItem('user'))
                            this.$router.push("/index");
                    }
              })
          }else{
            console.log(-1);
          }
        },
      },
       watch:{
          uname(){
             if(this.uname.trim().length>=6&&this.uname.trim().length<=9){
                   this.UnameReg();
             }
          },
          upwd(){
             if(this.upwd.trim().length>=6&&this.upwd.trim().length<=9){
                   this.UpwdReg();
             }
          }
       }  
  }
  
</script>



<style scoped>
*{margin:0;padding:0}
body{font: 12px/1.5 Arial, Helvetica, sans-serif;color:#fff;}
ul,ol,dl,a{list-style:none;text-decoration:none;}
#register{
  background:#f2f2f2;
}
#register>.register-header{
      width:100%;
      background:#333;
      height:70px;
}
#register>.register-header>div.inner{
  width:1000px;height:inherit;margin:0 auto;line-height:80px;
}
#register>.register-header>div.inner span:nth-child(2){
  width:2px;height:20px;
  margin:0 20px;
  color:#fff;
  position:relative;top:-9px;
}
#register>.register-header>div.inner span:nth-child(3){
  color:#fff;font-size:20px;
  position:relative;top:-8px;
} 
 #register>.register-middle{
   width:1000px;
   height:100%;
   margin:20px auto;
 }
 #register>.register-middle>div.top:after{
   content:"";
   display:block;
   clear:both;
 }
  #register>.register-middle>div.top>a{
     float:left;
     width:146px;
     height:35px;
     line-height:35px;
     text-align:center;
     background:#B40707;
     color:#fff;
     margin-right:12px;
  }
   #register>.register-middle>div.top>a:nth-child(2){
          background:#ccc;
   }
  #register>.register-middle>div.top>div.right{
    float:right;
    font-size:14px;
    margin-top:15px;
  }
  #register>.register-middle>div.bottom{
    width:100%;
    height:547px;
    box-sizing:border-box;
    padding:100px 270px;
    background:#fff;
  }
   #register>.register-middle>div.bottom>ul>li>div{
     width:100%;
     height:42px;
     border:1px solid #ccc;
     border-radius:20px;
     text-align:center;
   }
   #register>.register-middle>div.bottom>ul>li>div>div{
     float:left;
     width:90px;
     padding:0 16px;
     height:42px;
     text-align-last: justify;
     line-height:42px;
     border-right:1px solid #ccc;
   } 
  #register>.register-middle>div.bottom>ul>li{
    margin-bottom:30px;
  }
   #register>.register-middle>div.bottom>ul>li>div>input{
     width:66%;
     height:42px;
     border:0;
     outline-style:none;
     text-indent:1rem;
   }
  #register>.register-middle>div.bottom>ul>li>button{
    display:block;
     width:200px;height:38px;
     border:0;
     background:#B40707;
     color:#fff;
     margin:0 auto;
     outline-style:none;
     border-radius:20px;
  }
   #register>.register-middle>div.bottom>ul>li>button:hover{
     background:#C70000;
   }
      #register>.register-middle>div.bottom>ul>li span{
        display:block;
        color:red;
      }
    #register>div.bottom{
      width:1000px;
      height:30px;
      margin:0 auto;
      color:#999;
      padding:30px 0;
      font-size:12px;
      border-top:1px solid #d8d8d8; 
    }
    #register>div.bottom p{
         margin:0 auto;
         text-align:center;
   } 
</style>