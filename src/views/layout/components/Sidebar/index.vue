
<template>

  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in datas" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>

</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/* Layout */
import Layout from '@/views/layout/Layout'
import { asyncRouterMap, constantRouterMap } from '@/router'
export default {
  components: { SidebarItem },
  data() {
    return {
      datas: asyncRouterMap,
      datalists: [
        {
          path: '/user',
          component: Layout,
          redirect: 'noredirect',
          alwaysShow: true,
          name: 'userManage',
          meta: {
            title: '用户管理',
            icon: 'chart'
          },
          children: [
            {
              path: 'user',
              component: () => import('@/views/user/user'),
              name: 'user',
              meta: {
                title: '会员管理',
                noCache: true
              }
            },
            {
              path: 'address',
              component: () => import('@/views/user/address'),
              name: 'address',
              meta: {
                title: '收货地址',
                noCache: true
              }
            },
            {
              path: 'collect',
              component: () => import('@/views/user/collect'),
              name: 'collect',
              meta: {
                title: '会员收藏',
                noCache: true
              }
            },
            {
              path: 'footprint',
              component: () => import('@/views/user/footprint'),
              name: 'footprint',
              meta: {
                title: '会员足迹',
                noCache: true
              }
            },
            {
              path: 'history',
              component: () => import('@/views/user/history'),
              name: 'history',
              meta: {
                title: '搜索历史',
                noCache: true
              }
            },
            {
              path: 'feedback',
              component: () => import('@/views/user/feedback'),
              name: 'feedback',
              meta: {
                title: '意见反馈',
                noCache: true
              }
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
      console.log(123)
    }
  }
}
</script>
