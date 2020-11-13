<template>
<div class="box">
  <div class="loginBox">
    <p>
        <span style=" color:green">律  </span><span>动</span>
    </p>
    <el-form :model="loginData" ref="loginDataRef" label-width="auto" class="demo-ruleForm">
      <el-form-item label="手机号" prop="phone">
        <el-input type="input"  v-model="loginData.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="input" v-model="loginData.password"></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="warning" >注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      loginData: {
        phone: '13351129365',
        password: 'kaixin9999'
      }
    }
  },
  methods: {
    async login () {
      const { data: res } = await this.$http.get('login/cellphone', { params: this.loginData })
      // console.log(res.code)
      if (res.code !== 200) return this.$message.error('账号或密码错误')
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
.box{
  width: 100%;
  height: 100%;
  background-color:rgb(176, 187, 248);
  position: relative;
}
.loginBox{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  text-align: center;
}
span{
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
}
p{
  margin-bottom: 15px;
}
.btn{
  position: relative;
}
.el-button{
  position: absolute;
  right: 0;
}
.el-button:nth-child(1){
  right: 80px;
}
</style>
