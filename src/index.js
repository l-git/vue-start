
console.log('index')
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);



import Index from './components/Index.vue'
import C1 from './components/C1.vue'
import C2 from './components/C2.vue'

//import asynComp from './components/asynComp.vue'

const asynComp = () => import('./components/asynComp.vue')


console.log(Vue)

const routes = [
    { path: '/', component: Index,
    children:[
        {
            path:'c2',
            component:C2
        },
        {
            path:'asynComp',
            component:asynComp
        },
    ]
},
    { path: '/c1', component: C1 },
  ]
  
  // 3. 创建 router 实例，然后传 `routes` 配置
  // 你还可以传别的配置参数, 不过先这么简单着吧。
  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  

var vm=new Vue({
    router,
}).$mount('#app')



