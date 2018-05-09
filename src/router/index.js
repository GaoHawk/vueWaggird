import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/404'
import Main from '@/views/Main'
import Table from '@/views/nav1/Table'
import Form from '@/views/nav1/Form'
import user from '@/views/nav1/user'
import Page4 from '@/views/nav2/Page4'
import Page5 from '@/views/nav2/Page5'
import Page6 from '@/views/nav3/Page6'
import echarts from '@/views/charts/echarts'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      component: Login,
      name: '',
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '/',
      name: '导航一',
      iconCls: 'el-icon-message',
      component: Home,
      children: [{
          path: '/main',
          component: Main,
          name: '主页',
          hidden: true
        },
        {
          path: "/form",
          component: Form,
          name: 'Form'
        },
        {
          path: '/table',
          component: Table,
          name: "列表"
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: "导航二",
      iconCls: 'fa fa-id-card-o',
      children: [{
          path: '/page4',
          component: Page4,
          name: '页面4'
        },
        {
          path: '/page5',
          component: Page5,
          name: '页面5'
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: "",
      iconCls: 'fa fa-address-card',
      leaf: true,
      children: [{
        path: '/page6',
        component: Page6,
        name: '导航三'
      }]
    },
    {
      path: '/',
      component: Home,
      name: 'Charts',
      iconCls: 'fa fa-bar-chart',
      children: [{
        path: '/echarts',
        component: echarts,
        name: 'echarts'
      }]
    },
    {
      path: '*',
      hidden: true,
      redirect: {
        path: '/404'
      }
    }
  ]
})
