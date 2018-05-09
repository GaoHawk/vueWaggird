<template>
<el-container>
  <el-aside width="auto">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="handleselect">
    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
      <el-submenu :index="index+''" v-if="!item.leaf" :key="index">
      <template slot="title">
        <i :class="item.iconCls"></i>
        <span>{{item.name}}</span>
      </template>
      <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}
      </el-menu-item>
      </el-submenu>
      <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" :key="index">

      <i :class="item.iconCls"></i>
      <span>{{item.children[0].name}}</span>
      </el-menu-item>



    </template>
</el-menu>
  </el-aside>
  <el-container>
    <el-header>
       <el-col :span="4">
        	<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
       </el-col>
        <el-col :span="16"></el-col>
        <el-col :span="4" class="userinfo">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
    </el-header>
    <el-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>

    </el-main>
  </el-container>
</el-container>
</template>
<style scoped>
.el-header {
  text-align: justify;
  background: #20a0ff;
  color: #fff;
  line-height: 60px;
}
.el-menu {
  min-width: 200px;
}
.el-menu--collapse {
  min-width: auto;
}
.el-icon-message {
  text-align: left !important;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  /* text-align: center; */
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<script>
export default {
  data() {
    return {
      isCollapse: true,
      sysUserName: "",
      sysUserAvatar: ""
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleselect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key);
    },
    collapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
