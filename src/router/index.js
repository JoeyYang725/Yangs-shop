import Vue from 'vue';
import VueRouter from 'vue-router';
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
}
Vue.use(VueRouter)
const Msite=()=>import('../pages/Msite/Msite.vue');
const Search=()=>import('../pages/Search/Search.vue');
const Profile=()=>import('../pages/Profile/Profile.vue');
const Order=()=>import('../pages/Order/Order.vue');
const Login=()=>import('../pages/Login/Login.vue');
export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
  ]
})