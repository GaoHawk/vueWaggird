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
import Nav1 from '@/views/nav1'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      component: Login,
      name: '',
      hidden: true
    },
    {
      path: '/',
      redirect: {
        path: '/login',
      },
    },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '/1',
      name: 'Top',
      iconCls: 'el-icon-message',
      component: Home,
      redirect: {
        name: '导航一'
      },
      children: [{
          path: '/nav1',
          name: '导航一',
          iconCls: 'el-icon-message',
          component: Nav1,
          redirect: {
            name: 'page4'
          },
          children: [{
              path: '/1/Page4',
              name: 'page4',
              component: Page4
            },
            {
              path: '/1/main',
              component: Main,
              name: '主页',
              hidden: true
            },
            {
              path: '/1/table',
              component: Table,
              name: 'Table'
            },

          ]
        },
        {
          path: '/nav2',
          name: '导航二',
          iconCls: 'fa fa-id-card-o',
          component: Nav1,
          redirect: {
            name: 'page5'
          },
          children: [{
            path: '/1/Page5',
            name: 'page5',
            component: Page5
          }]
        }

      ]
    },

    {
      path: '/2',
      name: 'Top2',
      component: Home,
      redirect: {
        name: '导航三'
      },
      children: [{
          path: '/nav1',
          name: '导航三',
          iconCls: 'el-icon-message',
          component: Nav1,
          redirect: {
            path: '/2/Page4'
          },
          children: [{
              path: '/2/Page4',
              name: 'page4',
              component: Page4
            }


          ]
        },
        {
          path: '/nav2',
          name: '导航四',
          iconCls: 'fa fa-id-card-o',
          component: Nav1,
          redirect: {
            path: '/2/Page5'
          },
          children: [{
            path: '/2/Page5',
            name: 'page5',
            component: Page5
          }]
        }

      ]
    },
    // {
    //   path: '*',
    //   hidden: true,
    //   redirect: {
    //     path: '/404'
    //   }
    // }
  ]
})
