
<script type="text/ecmascript-6">
//      //封装过期控制代码
//      window.onload=function(){}
//      function set(key,value){
//         var curTime = new Date().getTime();
//         localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
//     }
//     function get(key,exp){
//         var data = localStorage.getItem(key);
//         var dataObj = JSON.parse(data);
//         if (new Date().getTime() - dataObj.time>exp) {
//             console.log('信息已过期');
//             //alert("信息已过期")
//         }else{
//             //console.log("data="+dataObj.data);
//             //console.log(JSON.parse(dataObj.data));
//      //       var dataObjDatatoJson = JSON.parse(dataObj.data)
//             return dataObj;
//         }
//     }
//     // var obj={uname:"dingding",upwd:123456};
//     // set('obj',obj);
//     // var obj=get('obj',1000*60);
//     // console.log(obj)  
//    function s(){
//     var data=new Date().getTime();
//     return data;
//    }
  
//    function g(){
//     var date=new Date().getTime();
//     return date;
//    }
//    var data=s();
//    var date=g()
//    console.log(60-data);
//     console.log(data);
//     console.log(date);
// </script>
