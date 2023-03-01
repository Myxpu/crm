<template>
  <div class="app-container">
    <el-form
      label-width="160px"
      label-position="righte"
      style="width: 1400px"
      :model="cstLinkman"
      ref="cstLinkman"
      :rules="rules"
    >
      <el-form-item v-show="false" label="用户编号">
        <el-input v-model="cstLinkman.lkmCustNo" />
      </el-form-item>

      <el-form-item label="姓名" prop="lkmName">
        <el-input v-model="cstLinkman.lkmName" />
      </el-form-item>

      <el-form-item label="性别" prop="lkmSex">
        <el-radio v-model="cstLinkman.lkmSex" label="男">男</el-radio>
        <el-radio v-model="cstLinkman.lkmSex" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="职位" prop="lkmPostion">
        <el-input v-model="cstLinkman.lkmPostion" />
      </el-form-item>
      <el-form-item label="办公电话" prop="lkmTel">
        <el-input v-model="cstLinkman.lkmTel" />
      </el-form-item>
      <el-form-item label="手机" prop="lkmMobile">
        <el-input v-model="cstLinkman.lkmMobile" />
      </el-form-item>
      <el-form-item label="备注" prop="lkmMemo">
        <el-input v-model="cstLinkman.lkmMemo" />
      </el-form-item>

      <el-form-item>
        <el-button
          style="margin-right: 50px"
          type="primary"
          @click="saveOrUpdate('cstLinkman')"
        >
          保存
        </el-button>

        <el-button @click="$router.back(-1)">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import customer from '@/api/cst/customer/linkman'

export default {
  data() {
    return {
      cstLinkman: {
        lkmCustNo:''
      },
      rules: {
        lkmName: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          {
            min: 2,
            max: 50,
            message: '长度在 2 到 50 个字符',
            trigger: 'blur',
          },
        ],
        lkmSex: [{ required: true, message: '请选择性别', trigger: 'change' }],
        lkmPostion: [
          { required: true, message: '请输入职位', trigger: 'blur' },
          {
            min: 2,
            max: 50,
            message: '长度在 2 到 50 个字符',
            trigger: 'blur',
          },
        ],
        lkmTel: [
          { required: true, message: '请输入办公电话', trigger: 'blur' },
          {
            min: 2,
            max: 50,
            message: '长度在 2 到 50 个字符',
            trigger: 'blur',
          },
        ],
        lkmMobile: [
          { required: true, message: '请输入手机', trigger: 'blur' },
          {
            min: 2,
            max: 50,
            message: '长度在 2 到 50 个字符',
            trigger: 'blur',
          },
        ],
        lkmMemo: [
          { required: true, message: '请输入备注', trigger: 'blur' },
          {
            min: 2,
            max: 50,
            message: '长度在 2 到 50 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  created() {
    if (this.$route.params.lkmId) {
      this.fetchData()
    } else {
      this.cstLinkman.lkmCustNo = this.$route.params.custNo
    }
  },
  methods: {
    fetchData() {
      customer.findByLinkInfo(this.$route.params.lkmId).then((response) => {
        this.cstLinkman = response.data
      })
    },
    saveOrUpdate(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //判断保存还是修改
          if (!this.cstLinkman.lkmId) {
            this.saveLinkman()
          } else {
            this.updateLinkman()
          }
        } else {
          return false
        }
      })
    },
    saveLinkman() {
      customer.addLinkman(this.cstLinkman).then((response) => {
        this.$message({
          type: 'success',
          message: '添加成功！',
        })
        this.$router.push({
          path: '/cst/customer/linkmanList/' + this.cstLinkman.lkmCustNo,
        })
      })
    },
    updateLinkman() {
      customer.updateLinkman(this.cstLinkman).then((response) => {
        this.$message({
          type: 'success',
          message: '修改成功！',
        })
        this.$router.push({
          path: '/cst/customer/linkmanList/' + this.cstLinkman.lkmCustNo,
        })
      })
    },
  },
}
</script>
