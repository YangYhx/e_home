import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const coms = {
  Home: ()=>import('@/views/home/home'),
  sayEearly: ()=> import('@/views/say-early/index'),
  myapp: ()=> import('@/views/myapp/index'),
  login: ()=> import('@/views/login/index'),
  neweye: () => import('@/views/news/neweye'),
  life: () => import('@/views/news/life'),
  onechack: () => import('@/views/news/onechack'),
  showidentity: ()=> import('@/views/news/showidentity'),
  today: ()=> import('@/views/news/today'),
  interaction: () => import('@/views/loginafter/interaction')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: coms.Home
    },
    {
      path: '/myapp',
      name: 'myapp',
      meta:{
        title:'我的党建'
      },
      component: coms.myapp
    },
    {
      path: '/sayEarly',
      name: 'sayEarly',
      meta:{title:'要闻早知道'},
      component: coms.sayEearly
    },
    {
      path: '/login',
      name: 'login',
      meta:{title:'登录'},
      component: coms.login
    },
    {
      path:'/neweye',
      name:'neweye',
      meta:{title:'信工新闻眼'},
      component:coms.neweye
    },
    {
      path:'/life',
      name:'life',
      meta:{title:'掌上组织生活'},
      component:coms.life
    },
    {
      path:'/interaction',
      name:'interaction',
      meta:{title:'党员云互动'},
      component:coms.interaction
    },
    {
      path:'/onechack',
      name:'onechack',
      meta:{title:'党建一点通'},
      component:coms.onechack
    },
    {
      path:'/showidentity',
      name:'showidentity',
      meta:{title:'党员亮身份'},
      component:coms.showidentity
    },
    {
      path:'/today',
      name:'today',
      meta:{title:'党史上的今天'},
      component:coms.today
    },
    {
      path:'/newdetail',
      name:'newdetail',
      meta:{title:'信工新闻眼'},
      component:()=> import('@/views/news/newdetail')
    },
    {
      path:'/anystudy',
      name:'anystudy',
      meta:{title:'随时随地学'},
      component:() => import('@/views/news/anystudy')
    },
    {
      path:'/activity',
      name:'activity',
      meta:{
        title:'特色活动'
      },
      component: () => import('@/views/news/activity')
    },
    {
      path:'/anyphoto',
      name:'anyphoto',
      meta:{title:'随时随地拍'},
      component: () => import('@/views/news/anyphoto')
    },
    {
      path:'/system',
      name:'system',
      meta:{title:'制度建设'},
      component: () => import('@/views/news/system')
    },
    {
      path:'/study',
      name:'study',
      meta:{title:'政治学习'},
      component:() => import('@/views/news/study')
    },
    {
      path:'/findorg',
      name:'findorg',
      meta:{title:'流动党员找组织'},
      component: () => import('@/views/news/findorg')
    },
    {
      path:'/personinfo',
      name:'personinfo',
      meta:{title:'个人信息'},
      component: () => import('@/views/loginafter/personinfo')
    },
    {
      path:'/edit',
      name:'edit',
      meta:{title:'个人信息'},
      component: () => import('@/views/loginafter/Editinfo')
    },
    {
      path:'/score',
      name:'score',
      meta:{title:'个人量化积分'},
      component:()=> import('@/views/loginafter/score')
    },
    {
      path:'/scoredetail',
      name:'scoredetail',
      meta:{title:'积分明细'},
      component:()=>import('@/views/loginafter/scoredetail')
    }
  ]
})
