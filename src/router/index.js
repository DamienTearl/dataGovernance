import Vue from 'vue'
import Router from 'vue-router'
import LoginIn from '@/components/loginIn/login'
import HomePage from '@/components/homePage/homepage'
// 数据应用
import DataApplication from '@/components/homePage/dataApplication/dataApplication'
import DemandManagement1 from '@/components/homePage/dataApplication/demandManagement/demandManagement1.vue'
import DemandManagement2 from '@/components/homePage/dataApplication/demandManagement/demandManagement2.vue'
// 元数据
import MetaData from '@/components/homePage/metaData/metaData'
import MetadataCollection1 from '@/components/homePage/metaData/metadataCollection/metadataCollection1'
import MetadataCollection2 from '@/components/homePage/metaData/metadataCollection/metadataCollection2'
import MetadataMaintenance1 from '@/components/homePage/metaData/metadataMaintenance/metadataMaintenance1'
import MetadataMaintenance2 from '@/components/homePage/metaData/metadataMaintenance/metadataMaintenance2'
import MetadataMaintenance3 from '@/components/homePage/metaData/metadataMaintenance/metadataMaintenance3'
import MetadataApplication1 from '@/components/homePage/metaData/metadataApplication/metadataApplication1'
import MetadataApplication2 from '@/components/homePage/metaData/metadataApplication/metadataApplication2'
import MetadataApplication3 from '@/components/homePage/metaData/metadataApplication/metadataApplication3'


Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
let route = new Router({
  routes: [
    {
      path: '/login',
      name: 'LoginIn',
      component: LoginIn
    }, {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
      redirect: '/homepage/dataApplication/DemandManagement1',
      children: [{
        path: 'dataApplication',
        name: 'DataApplication',
        component: DataApplication,
        redirect: '/homepage/dataApplication/DemandManagement1',
        children: [{
          path: 'demandManagement1',
          name: 'DemandManagement1',
          component: DemandManagement1,
        }, {
          path: 'demandManagement2',
          name: 'DemandManagement2',
          component: DemandManagement2,
        }]
      }, {
        path: 'metaData',
        name: 'MetaData',
        component: MetaData,
        redirect: '/homepage/metaData/metadataCollection1',
        children: [{
          path: 'metadataCollection1',
          name: 'MetadataCollection1',
          component: MetadataCollection1,
        }, {
          path: 'metadataCollection2',
          name: 'MetadataCollection2',
          component: MetadataCollection2,
        }, {
          path: 'metadataMaintenance1',
          name: 'MetadataMaintenance1',
          component: MetadataMaintenance1,
        }, {
          path: 'metadataMaintenance2',
          name: 'MetadataMaintenance2',
          component: MetadataMaintenance2,
        }, {
          path: 'metadataMaintenance3',
          name: 'MetadataMaintenance3',
          component: MetadataMaintenance3,
        }, {
          path: 'metadataApplication1',
          name: 'MetadataApplication1',
          component: MetadataApplication1,
        }, {
          path: 'metadataApplication2',
          name: 'MetadataApplication2',
          component: MetadataApplication2,
        }, {
          path: 'metadataApplication3',
          name: 'MetadataApplication3',
          component: MetadataApplication3,
        }]
      }]
    }, 
  ]
})
route.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    console.log('1' + to.path)
    next()
  } else {
    if (window.sessionStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  }
})

export default route
