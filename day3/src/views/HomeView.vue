<template>
  <div class="home">
    <div class="box">
      <h1>Login Form</h1>
      <div class="box1">
        <el-input placeholder="请输入账号" prefix-icon="el-icon-user-solid" v-model="username"></el-input>
        <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="password" show-password class="dl"></el-input>
        <el-button type="primary" class="bu" @click="Login">Login</el-button>
        <p>usemame:admin &emsp;&emsp;password:123456</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from '../utlis/request'
export default {
  name: 'HomeView',
  components: {

    HelloWorld
  }, data() {
    return {
      username: '',
      password: ''
    }
  }, created() {

  }, methods: {
    Login() {
      if (this.username == '' || this.password == '') {
        this.$message.error('请输入用户名或密码');
        this.username = ''
        this.password = ''
        return
      }
      axios.post('lejuAdmin/index/login',{username: this.username,password: this.password}).then(res => {
        console.log(res);
        if(res.data.code==20000){
         sessionStorage.setItem('token',res.data.data.token)
          this.$message({
          message: '恭喜你，登陆成功',
          type: 'success'
        });
        this.$router.push('/about')
        this.username = ''
        this.password = ''
        }else if(res.data.code==20002){
          this.$message.error(res.data.message);
          this.username = ''
        this.password = ''
        }
      })
    }
  }

}
</script>
<style lang="scss">
.box {
  width: 100%;
  height: 100vh;
  background-color: #2d3a4b;
  overflow: hidden;

  h1 {
    text-align: center;
    margin-top: 180px;
    color: #fff;
  }

  .box1 {
    width: 500px;
    height: 300px;
    margin-top: 30px;
    margin-left: 700px;

    .dl {
      margin-top: 40px;

    }

    .el-input__inner {
      background-color: #283443;
      color: #fff;
    }
  }

  .bu {
    width: 100%;
    margin-top: 42px;
  }

  p {
    width: 100%;
    color: #fff;
    margin-top: 40px;
  }
}
</style>

