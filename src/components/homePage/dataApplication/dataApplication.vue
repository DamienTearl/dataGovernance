<template>
  <el-container>
    <Aside :asideData="menuData"></Aside>
    <el-main class="mainModel">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Aside from '@/components/homePage/aside';
export default {
  components: {
    Aside
  },
  data () {
    return {
      menuData: [
        { id: '1', menuTitle: '需求管理', icon: 'icon-ico_sjyy1_xqgl', child: [{id: '1-1', menuItem: '需求流程管理', icon: 'icon-ico_sjyy2_xqlcgl', url: '/homepage/dataApplication/DemandManagement1'}, {id: '1-2', menuItem: '需求设计管理', icon: 'icon-ico_sjyy2_xqsjgl', url: '/homepage/dataApplication/DemandManagement2'}, {id: '1-3', menuItem: '需求开发及上线管理', icon: 'icon-ico_sjyy2_xqkajsxgl'}] },
        { id: '2', menuTitle: '功能接口管理', icon: 'icon-ico_sjyy1_gnjkgl', child: [{id: '2-1', menuItem: '数据接口定义管理', icon: 'icon-ico_sjyy2_sjjkdygl'}, {id: '2-2', menuItem: 'BI工具数据接口自动化解析', icon: 'icon-ico_sjyy2_bigjsjjkzdhjx'}, {id: '2-3', menuItem: '数据接口数据映射补录', icon: 'icon-ico_sjyy2_sjjksjysbl'}, {id: '2-4', menuItem: '数据质量检验自动化配置', icon: 'icon-ico_sjyy2_sjzljyzdhpz'}] },
        { id: '3', menuTitle: '数据服务管理', icon: 'icon-ico_sjyy1_sjfwgl', child: [{id: '3-1', menuItem: '数据服务需求流程管理', icon: 'icon-ico_sjyy2_sjfwxqlcgl'}, {id: '3-2', menuItem: '数据服务清单管理', icon: 'icon-ico_sjyy2_sjfwqdgl'}, {id: '3-3', menuItem: '数据服务监控管理', icon: 'icon-ico_sjyy2_sjfwjkgl'}, {id: '3-4', menuItem: '数据服务设计管理', icon: 'icon-ico_sjyy2_sjfwsjgl'}, {id: '3-5', menuItem: '自助式数据服务', icon: 'icon-ico_sjyy2_zzssjfw'}] },
        { id: '4', menuTitle: '数据标准数据查询', icon: 'icon-ico_sjyy1_sjbzsjcx', child: [{id: '4-1', menuItem: '数据模型、数据标准继承', icon: 'icon-ico_sjyy2_sjmxsjbzjc'}, {id: '4-2', menuItem: '数据查询引擎开发', icon: 'icon-ico_sjyy2_sjcxyqkf'}, {id: '4-3', menuItem: '权限管理集成', icon: 'icon-ico_sjyy2_qxgljc'}] },
      ]
    }
  }
}
</script>

<style>

</style>
