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
export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/search',
      component:Search
    }
  ]
})