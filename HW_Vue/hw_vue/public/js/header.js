// $(function(){
//     //1.发送ajax请求,请求headre.html中的<header>片段
//     $.ajax({
//         url:"header.html",
//         type:"get",
//         success(header){
//         //2.将片段替换到当前所在页面的<header>元素上
//         $(`<link rel="stylesheet" href="../entire/css/header.css">`).appendTo("head");
//         $(header).replaceAll("header")
//      //用片段创建新的<header>    查找页面上旧的<header>
//       //  动态创建link
     
    // $(function(){
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
       //  });
         /* 二楼导航链接 */
       //  (function(){
             var $uls=$("#navSlide #navSlide-bottom>ul");
           $("#navSlide #navSlide-top").on("mouseenter","a",function(){
             console.log($(this));
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
   //      })();
//         }
//     })
// })

