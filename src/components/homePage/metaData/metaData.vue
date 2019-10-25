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
        { id: '1', menuTitle: '元数据采集', icon: 'icon-ico_ysj1_ysjcj', child: [{id: '1-1', menuItem: '元数据采集注册', icon: 'icon-ico_ysj2_ysjsj', url: '/homepage/metaData/metadataCollection1'}, {id: '1-2', menuItem: '元数据采集历史查询', icon: 'icon-ico_ysj2_sjyljpzgn', url: '/homepage/metaData/metadataCollection2'}] },
        { id: '2', menuTitle: '元数据维护', icon: 'icon-ico_ysj1_ysjbl', child: [{id: '2-1', menuItem: '元数据映射维护', icon: 'icon-ico_ysj2_sgysjdrgn', url: '/homepage/metaData/metadataMaintenance1'}, {id: '2-2', menuItem: '元数据变更监控', icon: 'icon-ico_ysj2_ysjqstjcx', url: '/homepage/metaData/metadataMaintenance2'}, {id: '2-3', menuItem: '元数据版本查询', icon: 'icon-ico_ysj2_dxjgxxxdgn', url: '/homepage/metaData/metadataMaintenance3'}] },
        { id: '3', menuTitle: '元数据应用', icon: 'icon-ico_ysj1_ysjyy', child: [{id: '3-1', menuItem: '血缘分析', icon: 'icon-ico_ysj2_ysjcx', url: '/homepage/metaData/metadataApplication1'}, {id: '3-2', menuItem: '影响性分析', icon: 'icon-ico_ysj2_xyfx', url: '/homepage/metaData/metadataApplication2'}, {id: '3-3', menuItem: '元模型比较', icon: 'icon-ico_ysj2_ymxkf', url: '/homepage/metaData/metadataApplication3'}] },
      ]
    }
  }
}
</script>

<style>

</style>
