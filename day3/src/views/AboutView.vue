<template>
  <div class="about">
    <el-container>
      <el-aside :width="isCollapse?'60px':'200px'">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" router>

          <el-menu-item index="zy">
            <i class="el-icon-suitcase-1"></i>
            <span slot="title">主页</span>
          </el-menu-item>

          <el-submenu :index="item.name" v-for="item in list" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="ele.name" v-for="ele in item.children" :key="ele.id">{{ele.title}}</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

        </el-menu>


      </el-aside>
      <el-main>
        <mbx :item="isCollapse" @dj="dj"></mbx>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import axios from '../utlis/request'
import mbx from '@/components/mbx.vue'
export default {
  components:{
    mbx
  },
  data() {
    return {
      list: [],
      isCollapse: false
    }
  }, created() {
    axios.get('admin/sysAuth/index/getInitMenus').then(res => {
      console.log(res);
      this.list = res.data.data.permissionList
    })
  },methods:{
    dj(i){
      // console.log(i);  
      this.isCollapse=i
    }
  },
 
}
</script>
<style lang="scss">
.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;

}

.el-aside {
  background-color: #304156;
  color: #ffffff;

  line-height: 100vh;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;

  height: 100vh;
}
</style>

