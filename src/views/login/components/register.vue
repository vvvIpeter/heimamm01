<template>
  <el-dialog class="reg_title" title="用户注册" :visible.sync="dialogFormVisible">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item prop="nickname" label="昵称" :label-width="formLabelWidth">
        <el-input v-model="form.nickname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="phone" label="手机" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码" :label-width="formLabelWidth">
        <el-input v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="imgCode" label="图形码" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="17">
            <el-input v-model="form.imgCode" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="7" class="col_imgBox">
            <img class="imgBox" src="../../../assets/login_captcha.png" alt="">
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="code" label="验证码" :label-width="formLabelWidth">
       <el-row>
         <el-col :span="17">
            <el-input v-model="form.code" autocomplete="off"></el-input>
         </el-col>
         <el-col :span="7" class="col_imgBox">
           <img class="imgBox" src="../../../assets/login_captcha.png" alt="">
         </el-col>
       </el-row>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
   methods: {
      submit(){
        // 校验规则
        this.$refs.form.validate(valid=>{
          if(valid){
            this.$message({
              message:'校验成功',
              type:'success'
            })
          }else{
            this.$message.error('校验失败')
          }
        })
      }
    },
  data() {
    return {
      dialogFormVisible: false,
      // 设置文本
      formLabelWidth: "67px",
      form: {
        nickname: "",
        email: "",
        phone: "",
        password: "",
        imgCode: "",
        code: ""
      },
      rules: {
            nickname: [
                    { required: true, message: '昵称不能为空', trigger: 'blur' },
                    { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: '手机不能为空', trigger: 'blur' },
                    { min: 11, max: 11, message: '长度是 11 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                ],
                imgCode: [
                    { required: true, message: '图形码不能为空', trigger: 'blur' },
                    { min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' },
                    { min: 6, max: 6, message: '长度在 6 个字符', trigger: 'blur' }
                ]
      }
    };
  }
};
</script>
<style lang="less">
.el-dialog {
  .el-dialog__header {
    background: linear-gradient(to right, #0dc1ef, #1394fc);
    padding: 0;
    height: 53px;
    line-height: 53px;
    text-align: center;
    .el-dialog__title {
      color: #ffffff;
    }
  }
  .col_imgBox{
    text-align: right;
    height: 41px;
 .imgBox{
    width: 143px;
    height: 41px;
  }
  }
.dialog-footer{
  text-align: center;
}
 
}
</style>