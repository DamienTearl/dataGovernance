<template>
  <el-row class="homePageBox">
    <el-container>
      <el-header>
        <el-row>
          <el-col :md="7" :lg="6">
            <el-row class="logoBox">
              <img src="~@/assets/images/logoall.png" alt="">
            </el-row> 
          </el-col>
          <el-col :md="14" :lg="12">
            <el-menu
              router
              :default-active="'/' + this.$route.path.split('/')[1] + '/' + this.$route.path.split('/')[2]"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#006ab6"
              text-color="#fff">
              <el-menu-item index="/homepage/dataApplication"><i class="icon-ico_top_sjyy iconfonts"></i>&nbsp;&nbsp;数据应用</el-menu-item>
              <el-menu-item index="/homepage/dataAssets"><i class="icon-ico_top_sjzc iconfonts"></i>&nbsp;&nbsp;数据资产</el-menu-item>
              <el-menu-item index="/homepage/metaData">元数据</el-menu-item>
              <el-menu-item index="/homepage/dataQuality">数据质量</el-menu-item>
              <el-menu-item index="/homepage/dataStandard">数据标准</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :md="3" :lg="6">
            <el-row class="user-set">
              <span><i class="icon-ico_top_set iconfonts verticalstyle"></i>&nbsp;&nbsp;设置</span>
              <span><i class="icon-ico_top_out iconfonts verticalstyle"></i>&nbsp;&nbsp;退出</span>
            </el-row>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </el-row>
</template>

<script>
export default {

}
</script>

<style>
.homePageBox .el-header {
  background-color: #006ab7;
}
.homePageBox .logoBox {
  padding: 15px 0;
  text-align: left;
}
.user-set {
  line-height: 60px;
  text-align: right;
  color: #fff;
  font-size: 14px;
}
.iconfonts {
  color: #fff!important;
  font-size: 20px;
}
.verticalstyle {
  vertical-align: -4px;
}
.user-set > span:last-child {
  margin-left: 20px;
}
.el-menu--horizontal>.el-menu-item.is-active {
  background-color: #004d85!important;
  color: #fff!important;
  border-bottom: 1px solid #004d85!important;
}
ul.el-menu-vertical-demo.el-menu .el-submenu__title {
  color: #0861b1!important;
  background-color: #d7eefe!important;
  padding: 0 12px!important;
}
ul.el-menu-vertical-demo.el-menu .el-menu-item.is-active {
  background-color: #006ab6!important;
}
</style>
