import Vue from 'vue'
import Vuex from 'vuex'
import { Socket } from 'net';

Vue.use(Vuex)

// let LS=window.sessionStorage
// const LStorage={
//   getItem(key){
//     try{
//       return JSON.parse(LS.getItem(key))
//     }catch(err){
//       return null
//     }
//   },
//   setItem:(key,val)=>{
//     LS.setItem(key,JSON.stringify(val))
//   },
//   clear(){
//     LS.clear()
//   },
//   removeItem(key){
//     LS.removeItem(key)
//   }
// }
// var key={uname:11}
// LStorage.setItem(key);
// console.log(LStorage.getItem(key));
// //LStorage.getItem(key): 通过key可以获取sessionStorage的value
// //LStorage.setItem(key, val): 存储数据
// //LStorage.clear(): 清除所有的session记录
// //LStorage.removeItem(key): 删除制定的session记录
// const myPlugins=(socket)=>{
//   //socket.session 格式[]
//   return store=>{
//     socket.session.map(evl=>{
//       if(LStorage.getItem(evl,key)){
//         store.commit(evl.commitFun,LStorage.getItem(evl.key))
//       }
//     })
//     //关联store的commit事件
//     store.subscribe((mutation,state)=>{
//       socket.session.map(evl=>{
//         LStorage.setItem(evl.key,state[evl.module][evl.key])
//       })
//     })
//   }
// }


export default new Vuex.Store({
  state: {
       user:{
        lid:1
       }
  },
  // plugins:[myPlugins({
  //      session:[
  //        { 
  //          //需要保存的字段
  //          key:"",
  //          //modules模块,可以根据自己的路径决定需不需要这个参数
  //          module:"",
  //          //commit方法
  //          commitFun:"",
  //       }
  //      ]
  // })],
  mutations: {
    
  },
  actions: {

  }
});