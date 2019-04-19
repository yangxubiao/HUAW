    // axios({
    //      method:'get',
    //      url:'http://127.0.0.1:3000/index',
    //       }).then(function(response){
    //                 var  index=response.data;
    //                  var {carousel,product}=index; 
    //                 var floor2=product.slice(0,8);
    //                 var  floor3=product.slice(8,23);
    //                 var floor5=product.slice(23,31);
    //                 var floor6=product.slice(31,49);
    //                 var carousel1=carousel.slice(0,3);
    //                 var navPhone=product.slice(49,55);
                    
    //                 var navComputer=product.slice(55,61);
                    
    //                 var navFlat=product.slice(61,67);
                    
    //                 var navCapacity=product.slice(67,73);
                    
    //                 var navParts=product.slice(73,79);
                    
    //                 new Vue({
    //                     el:"#container",
    //                     data(){
    //                       return {
    //                         phone:navPhone,
    //                         computer:navComputer,
    //                         flat:navFlat,
    //                         capacity:navCapacity,
    //                         parts:navParts,
                            
    //                         floor6:floor6,
    //                         floor5:floor5,
    //                         floor3:floor3,
    //                         floor2:floor2,
    //                         carousel1:carousel1
    //                       }
    //                     },
    //                 })
    //  });

 $(window).scroll(function(){
       var $scroll=document.body.scrollTop||document.documentElement.scrollTop;
        var $div=$("div.scroll");
         if($scroll>=300)
            $div.show();
          else
         $div.hide();
 })
//顶部img的close() 
var a=document.getElementsByTagName("a")[0];
a.onclick=function(){
 a.previousElementSibling.remove();
}
 //jQuery 写动态效果拖拽
var switchs=false;
var $span=$("#dynamic span");
$span.mousedown(function(e){
    switchs=true;
    if(switchs==true){
     offsetX=e.offsetX;
     offsetY=e.offsetY;
    }
  $(window).mousemove(function(e){
      if(switchs==true){
      var left=e.clientX-offsetX;
      var top=e.clientY-offsetY;
      $span.css("margin-left",left);
      $span.css("margin-top",top);
      }
  })
})
$span.mouseup(function(){
    switchs=false;
});


//轮播图上的侧边导航navslide
$(function(){
  var $ul=$("#aside-parent>ul");
  var $uls=$ul.next().children();
  $ul.on("mouseenter","li",function(){
    var id=$(this).attr("data-toggle");
    $uls.addClass("my_hide");
     $(id).removeClass()
  })
$ul.parent().on("mouseleave",function(){$uls.addClass("my_hide");})
});





//floor4楼下的鼠标移进移出
(function(){ 
var $ulImg=$("#floor4 ul:first-child");
 var $imgs=$ulImg.children();
var imgW=parseInt($imgs.css("width"))
 var n="";
 var $ulA=$ulImg.next();
 var $as=$ulA.children();
$ulImg.css({width:imgW*$imgs.length})
 function origin(){
     for(var key of $as){
key.className=""
     }
 }
 function fn(){
   time=setInterval(function(){
        n++;
   if(n<$imgs.length){
    $ulImg.css({marginLeft:-imgW*n})
    }else{
        n=0;
     $ulImg.css({marginLeft:-imgW*n}) 
    };
    origin();
    $as[n].className="active";
    },3000) 
  }
 fn();
 $("#floor4").hover(
      function(){
          clearInterval(time);
  },      function(){
         fn();
   });
 $ulA.on("mouseenter","li",function(){
          var i=$(this).index();
               n=i;
            origin();     
         $as[i].className="active";
$ulImg.css({marginLeft:-imgW*i})                                     
 })
 })();


// floor
//floor 3楼的小轮播
//查找触发事件元素
setTimeout(function(){
// 1111111111111 carousel 轮播
(function(){
  // //获取包裹元素的ul
   var $ul=$("#carousel>div.carousel-inner>ul.carousel-item");
    var $lis=$ul.children().children();
    var $liw=parseInt($lis.css("width"));
     $ul.css({width:$liw*$lis.length});
     var n="";
    var time="";
     var origins=$ul.next().find("a");
     var $as=$ul.siblings("a");
     function origin(){
      for(var key of origins){
          key.className=""
        }
       origins[n].className="active1";
     }
     function fn(){
         time=setInterval(function(){
             n++
           if(n<$lis.length){
            $ul.css({marginLeft:-$liw*n});
           }else{
               n=0;
             $ul.css({marginLeft:-$liw*n});
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
    $ul.next().on("mouseenter","a",function(){
       var i=$(this).parent().index();
        for(var key of origins){
            key.className="";
       }
                n=i;
        origins[i].className="active1";
        $ul.css({marginLeft:-$liw*i});
    });
    
   $as.on("click",function(){
          var a=$(this);    
        if(a.is(".next")&&n<$lis.length-1){
             n++;
              origin();
       $ul.css({marginLeft:-$liw*n});  
        }else if(a.is(".next")){
             n=0;
             origin();
           $ul.css({marginLeft:-$liw*n});  
        }else if(a.is(".prev")&&n!=0){
              n--;
               origin();
             $ul.css({marginLeft:-$liw*n});  
        }else if(a.is(".prev")){
             n=$lis.length-1;
             origin();
          $ul.css({marginLeft:-$liw*n});  
         }
   });
  })();






// 3楼点击滚动轮播
(function(){
    var ul=$("#floor03>ul");
    var lis=ul.children();
    var liw=parseInt(lis.css("width"));
    ul.css({
        width:liw*lis.length
    });
        var n=0;
        var i=5;

        function vali(){
            ul.css({
                marginLeft:-liw*n
            }) 
        }
    $("#floor03>a").on("click",function(){
        var a=$(this); 
         if(a.is(".lr2")&&i<lis.length){
               i+=5;     
               n+=5;   
               console.log(n)
               vali();
            }else if(a.is(".lr2")){
               i=5;   
               n=0;
               console.log(n)
              vali();
         }else if(!a.is(".lr2")&&n==0){
              n=lis.length-5;   
              i=lis.length;
              console.log(n)
                vali()
          }else if(!a.is(".lr2")){
                n-=5;
                i-=5;
                console.log(n);
              vali(); 
           }
    })
  })();


// 6楼点击滚动轮播
  //查找触发元素
(function(){
  var $ul=$("#floor6>ul");
  var $lis=$ul.children();
  var liw=parseInt($lis.css("width"));
  $ul.css({width:liw*$lis.length});
  var i=6;
  var n=0;
  $ul.parent().on("click","button",function(){
      var btn=$(this);
       if(btn.is(".lr2")&&i<$lis.length){
              i+=6;
              n+=6;
        $ul.css({marginLeft:-liw*n});
        btn.siblings(".lr").prop("disabled",false);
       }else if(btn.is(".lr2")){
             btn.prop("disabled",true)
       }else if(!btn.is("lr2")&&n==0){
          btn.prop("disabled",true)
       }else if(!btn.is("lr2")){
              n-=6;
              i-=6;
          $ul.css({marginLeft:-liw*n});
         btn.siblings(".lr2").prop("disabled",false);
       }
  })
  })();
  
},1000);

//比如  li下包含img  shi
   



 







