<template>
  <div class="login">
    <div class="leftbox">
      <div class="title">
        <img class="titleimg" src="../../assets/titlelogo.png" alt />
        <span class="titlename">黑马面面</span>
        <span class="titleline"></span>
        <span class="titlelogin">用户登录</span>
      </div>
      <!-- 使用表单元素完成结构 -->
      <el-form ref="form" :model="form" label-width="0px" class="elform" :rules="rules">
        <el-form-item>
          <el-input v-model="form.phone" prefix-icon="el-icon-user" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="logincode">
          <el-row>
            <el-col :span="16">
              <el-input v-model="form.logincode" prefix-icon="el-icon-key" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="8" class="loginBox">
              <img class="loginCode" src="../../assets/login_captcha.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="isCheck">
          <el-checkbox v-model="form.isCheck">
            我已阅读和同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="width:100%">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="openregister" style="width:100%">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img class="rightimg" src="../../assets/login_banner_ele.png" alt />
    <!-- 使用组件 注意书写位置 -->
    <register ref="register"></register>
  </div>
</template>
<script>
//导入注册组件
import register from "./components/register";
export default {

  // 注册组件
  components: {
    register
  },
  data() {
    return {
      form: {
        phone: "",
        password: "",
        logincode: "",
        isCheck: []
      },
      rules: {
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ],
        logincode: [
          // 非空：
          { required: true, message: "验证码不能为空", trigger: "blur" },
          // 长度
          { min: 4, max: 4, message: "验证的长度应该为 4", trigger: "blur" }
        ],
        isCheck: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    openregister() {
      this.$refs.register.dialogFormVisible = true;
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message({
            message:'登录成功',
            type:'success'
          })
        } else {
          this.$message.error('验证失败')
        }
      });
    }
  }
};
</script>
<style lang="less">
.login {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  // background-color: #0094ff;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .leftbox {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding: 48px 42px 86px;
    box-sizing: border-box;
    .title {
      display: flex;
      align-items: center;
      .titleimg {
        width: 22px;
        height: 17px;
      }
      .titlename {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-left: 16px;
        margin-right: 14px;
      }
      .titleline {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
      }
      .titlelogin {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-left: 12px;
      }
    }
    .loginBox{
      // width: 110px;
      height: 40px;
      .loginCode{
     height: 100%;
    width: 100%;
    }
    }
    .elform {
      margin-top: 29px;
    }
  }
  .rightimg {
    width: 633px;
    height: 435px;
  }
}
</style>