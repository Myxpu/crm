import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/sal-chance',
    component: Layout,
    redirect: '/sal-chance/list',
    name: 'salChance',
    meta: { title: '营销管理', icon: 'el-icon-s-marketing' },
    // false（默认值）：当且仅当父节点下只有一个子节点时，不显示父节点
    // true：任何时候都显示父节点和子节点
    alwaysShow: true,
    children: [
      {
        path: 'list',
        name: 'saleList', //每个路由节点的name的名字不能相同
        component: () => import('@/views/sal-chance/list'), //指向template模板组件
        meta: { title: '销售机会管理' } //定义导航的标题
      },
      {
        path: 'edit/:id',
        name: 'saleEdit', //每个路由节点的name的名字不能相同
        component: () => import('@/views/sal-chance/form'), //指向template模板组件
        meta: { title: '编辑销售机会', noCache: true }, //定义导航的标题
        hidden: true
      },
      {
        path: 'create',
        name: 'saleCreate', //每个路由节点的name的名字不能相同
        component: () => import('@/views/sal-chance/form'), //指向template模板组件
        meta: { title: '新建销售机会', noCache: true }, //定义导航的标题
        hidden: true
      },
      {
        path: 'planList',
        name: 'planList',
        component: () => import('@/views/sal-chance/planList'),
        meta: { title: '客户开发计划' }
      },
      {
        path: 'planForm',
        name: 'planForm',
        component: () => import('@/views/sal-chance/planForm'),
        meta: { title: '制定计划', noCache: true },
        hidden: true
      }
    ]
  },

  {
    path: '/cst/customer',
    component: Layout,
    redirect: '/cst/customer/list',
    name: 'customer',
    meta: { title: '客户管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: '客户信息管理列表',
        component: () => import('@/views/cst/customer/list'),
        meta: { title: '客户信息管理', icon: 'table' }
      },
      {
        path: 'edit/:custNo',
        name: '编辑客户信息',
        component: () => import('@/views/cst/customer/form'),
        meta: { title: '编辑客户信息', noCache: true },
        hidden: true
      },
      //联系人
      {
        path: 'linkmanList/:custNo',
        name: '联系人列表',
        component: () => import('@/views/cst/customer/linkman/list'),
        meta: { title: '联系人', noCache: true },
        hidden: true
      },
      {
        path: 'editLinkman/:lkmId',
        name: '编辑联系人',
        component: () => import('@/views/cst/customer/linkman/form'),
        meta: { title: '编辑联系人', noCache: true },
        hidden: true
      },
      {
        path: 'createLinkman/:custNo',
        name: '新建联系人',
        component: () => import('@/views/cst/customer/linkman/form'),
        meta: { title: '新建联系人', noCache: true },
        hidden: true
      },
      // 交往记录
      {
        path: 'activityList/:custNo',
        name: '交往记录列表',
        component: () => import('@/views/cst/customer/activity/list'),
        meta: { title: '交往记录', noCache: true },
        hidden: true
      },
      {
        path: 'creteActivity/:custNo',
        name: '新建交往记录',
        component: () => import('@/views/cst/customer/activity/form'),
        meta: { title: '新建交往记录', noCache: true },
        hidden: true
      }, {
        path: 'editActivity/:atvId',
        name: '编辑交往记录',
        component: () => import('@/views/cst/customer/activity/form'),
        meta: { title: '编辑交往记录', noCache: true },
        hidden: true
      },
      //历史订单
      {
        path: 'ordersList',
        name: '历史订单',
        component: () => import('@/views/cst/customer/orders/list'),
        meta: { title: '历史订单', noCache: true },
        hidden: true
      },
      {
        path: 'lostList',
        name: '客户流失管理',
        component: () => import('@/views/cst/customer/lost/list'),
        meta: { title: '客户流失管理', icon: 'tree' }
      },
      {
        path: 'confirmForm/:lstId',
        name: '确认流失',
        component: () => import('@/views/cst/customer/lost/confirmForm'),
        meta: { title: '确认流失', noCache: true },
        hidden: true
      },
      {
        path: 'deferForm/:lstId',
        name: '暂缓流失',
        component: () => import('@/views/cst/customer/lost/deferForm'),
        meta: { title: '确认流失', noCache: true },
        hidden: true
      }
    ]
  },

  {
    path: '/cst/service',
    component: Layout,
    meta: { title: '服务管理', icon: 'el-icon-goods' },
    alwaysShow: true,
    children: [
      {
        path: 'createService',
        name: '服务创建',
        component: () => import('@/views/cst/service/create/form'),
        meta: { title: '服务创建' }
      }, {
        path: 'distService',
        name: '服务分配',
        component: () => import('@/views/cst/service/dist/list'),
        meta: { title: '服务分配' }
      },
      {
        path: 'handleService',
        name: '服务处理列表',
        component: () => import('@/views/cst/service/handle/list'),
        meta: { title: '服务处理' }
      },
      {
        path: 'handleForm',
        name: '服务处理',
        component: () => import('@/views/cst/service/handle/form'),
        meta: { title: '服务处理' }
      },
      {
        path: 'feedback',
        name: '服务反馈',
        component: () => import('@/views/cst/service/feedback/list'),
        meta: { title: '服务反馈' }
      }, {
        path: 'fileList',
        name: '服务归档',
        component: () => import('@/views/cst/service/file/list'),
        meta: { title: '服务归档' }
      },
      {
        path: 'fileForm',
        name: '服务归档表单',
        component: () => import('@/views/cst/service/file/form'),
        meta: { title: '服务归档表单', noCache: true },
        hidden: true
      }
    ]
  },



]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/cst/service',
    component: Layout,
    meta: { title: '服务管理', icon: 'el-icon-goods' },
    alwaysShow: true,
    children: [
      {
        path: 'createService',
        name: '服务创建',
        component: () => import('@/views/cst/service/create/form'),
        meta: { title: '服务创建', role: ['manager'] }
      }, {
        path: 'distService',
        name: '服务分配',
        component: () => import('@/views/cst/service/dist/list'),
        meta: { title: '服务分配', role: ['admin'] }
      },
      {
        path: 'handleService',
        name: '服务处理列表',
        component: () => import('@/views/cst/service/handle/list'),
        meta: { title: '服务处理', role: ['manager'] }
      },
      {
        path: 'handleForm',
        name: '服务处理',
        component: () => import('@/views/cst/service/handle/form'),
        meta: { title: '服务处理', role: ['manager'] }
      },
      {
        path: 'feedback',
        name: '服务反馈',
        component: () => import('@/views/cst/service/feedback/list'),
        meta: { title: '服务反馈' }
      }, {
        path: 'fileList',
        name: '服务归档',
        component: () => import('@/views/cst/service/file/list'),
        meta: { title: '服务归档', role: ['manager'] }
      },
      {
        path: 'fileForm',
        name: '服务归档表单',
        component: () => import('@/views/cst/service/file/form'),
        meta: { title: '服务归档表单', noCache: true, role: ['manager'] },
        hidden: true
      }
    ]
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
