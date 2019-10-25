<template>
  <el-row class="myAsideBox" :width="showWidth">
    <el-aside class="myAside" width="260px">
      <el-menu
        router
        :unique-opened=true
        :default-active="this.$route.path"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#5e5e5e"
        active-text-color="#fff">
        <el-submenu v-for="(item) in asideData" :key="item.id" :index="item.id">
          <template slot="title">
            <i :class="item.icon + ' titleIconfonts'"></i>
            <span>{{ item.menuTitle }}</span>
          </template>
          <el-menu-item v-for="(item1) in item.child" :key="item1.id" :index="item1.url | item1.id">
            <template>
              <i :class="item1.icon + ' menuiconfonts'"></i>
              {{ item1.menuItem }}
              <i class="icon-arrow_right menuiconfontsarrow"></i>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-row class="">
      <span :class="showClass"></span>
    </el-row>
  </el-row>
</template>

<script>
export default {
  props: ['asideData'],
  data () {
    return {
      showWidth: '260px',
      showClass: 'icon-arrow_left'
    }
  }
}
</script>

<style>
</style>
