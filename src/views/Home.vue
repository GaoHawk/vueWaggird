<template>
<el-container>
  <el-aside width="auto">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="handleselect">
    <template v-for="(item,index) in currentOptions.children" v-if="!item.hidden">
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
        <el-col :span="16">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="selectPanel"
           background-color="#20a0ff"
           text-color="#fff"
           active-text-color="rgb(235, 239, 74)" v-if="power==1">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">我的工作台</el-menu-item>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
          </el-menu>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="selectPanel"
           background-color="#20a0ff"
           text-color="#fff"
           active-text-color="rgb(235, 239, 74)" v-else>
            <el-menu-item index="1">处理中心</el-menu-item>
          </el-menu>
        </el-col>
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
      <div class="grid-content">

          <div class="tabs">
            <div class="customTag" v-for="tag in dynamicTags" @click="clickTag(tag)" :key="tag" style="display:inline;">
              <el-tag
                :key="tag"
                closable
                :disable-transitions="false"
                @close="closeTag(tag)">
                {{tag}}
              </el-tag>
            </div>
          </div>
        <el-col :span="24" >
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </div>

    </el-main>
  </el-container>
</el-container>
</template>
<style scoped>
.customTag + .customTag {
  margin-left: 15px;
}
.customTag {
  cursor: pointer;
}
.tabs {
  height: 30px;
  line-height: 30px;
  position: relative;
  width: calc(100% + 20px);
  position: relative;
  padding-left: 20px;
  left: -20px;
  top: -9px;
}
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
  /* background-color: #e9eef3; */
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
.userinfo {
  text-align: right;
  padding-right: 35px;
  float: right;
}
.userinfo .userinfo-inner {
  cursor: pointer;
  color: #fff;
}
.userinfo .userinfo-inner img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 10px 0px 10px 10px;
  float: right;
}
</style>
<script>
import defaultAvatar from "../../static/card.jpg";
export default {
  data() {
    return {
      isCollapse: true,
      sysUserName: "",
      sysUserAvatar: "",
      currentPath: "",
      currentOptions: "",
      activeIndex: "",
      power: 0,
      dynamicTags: ["标签一", "标签二", "标签三"]
    };
  },
  methods: {
    clickTag(tag) {
      console.log(tag);
      this.$router.push({ name: tag });
    },
    closeTag(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
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
    selectPanel(key, keyPath) {
      console.log(key);
      console.log(this.$router);

      let route = this.$router.options.routes;
      for (let i = 0; i < route.length; i++) {
        if (route[i].path == "/" + key) {
          this.currentOptions = route[i];
        }
      }
      this.$router.push({ path: "/" + key });
    },
    collapse() {
      this.isCollapse = !this.isCollapse;
    },
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.push({ path: "/login" });
        })
        .catch(() => {});
    }
  },
  mounted() {
    let current = this.$router.history.current.path;
    this.currentPath = current.slice(0, 2);
    this.activeIndex = current.slice(1, 2);
    let route = this.$router.options.routes;
    let defGroup = [];

    for (let i = 0; i < route.length; i++) {
      if (route[i].path == this.currentPath) {
        this.currentOptions = route[i];
      }
      if (route[i].path == "/1") {
        defGroup = route[i];
      }
    }

    let nameGroup = [];

    //  设置默认组
    for (let j = 0; j < defGroup.children.length; j++) {
      for (let h = 0; h < defGroup.children[j].children.length; h++) {
        let child = defGroup.children[j].children[h];
        nameGroup.push(child.name);
      }
    }
    console.log(nameGroup);
    this.dynamicTags = nameGroup;
    var user = sessionStorage.getItem("user");

    if (user) {
      user = JSON.parse(user);
      if (user.account === "admin") {
        this.power = 1;
      }
      this.sysUserName = user.name || "张某某";
      this.sysUserAvatar = user.avatar || defaultAvatar;
    }
    console.log(this);
  }
};
</script>
