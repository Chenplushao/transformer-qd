<template>
  <div class="register" :style="'background-image:url('+ Background +');'">
    <el-form ref="ruleForm" :model="ruleForm" :rules="registerRules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username" placeholder="用作登录账号使用">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password" placeholder="请设置您的密码">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email" placeholder="选填">
        <el-input v-model="ruleForm.email" />
      </el-form-item>
      <el-form-item label="手机号" prop="phone" placeholder="请输入11位手机号">
        <el-input v-model="ruleForm.phone" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="ruleForm.gender">
          <el-option label="男性" value="男性" />
          <el-option label="女性" value="女性" />
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
    </el-form>
  </div>
</template>

<script>
import Background from '@/assets/images/background.jpg'
import { registerNewUser } from '@/api/register'

export default {
  name: 'Register',
  data() {
    return {
      Background: Background,
      ruleForm: {
        email: '',
        gender: '男性',
        nickname: '',
        password: '',
        phone: '',
        username: ''
      },
      registerRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 7, max: 12, message: '长度在 7 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度在 11 个的字符', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个的字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          registerNewUser(this.ruleForm.email, this.ruleForm.gender, this.ruleForm.nickname, this.ruleForm.password, this.ruleForm.phone, this.ruleForm.username)
          this.$router.push({ path: '@/views/login' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
