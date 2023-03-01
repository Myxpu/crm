<template>
  <div class="app-container">
    <el-form
      label-width="160px"
      label-position="right"
      style="width: 1400px"
      :model="cstLost"
      ref="cstLost"
      :rules="rules"
    >
      <el-form-item label="编号">
        <el-input :disabled="true" v-model="cstLost.lstCustNo" />
      </el-form-item>
      <el-form-item label="客户名称">
        <el-input :disabled="true" v-model="cstLost.lstCustName" />
      </el-form-item>

      <el-form-item label="客户经理">
        <el-input :disabled="true" v-model="cstLost.lstCustName" />
      </el-form-item>
      <el-form-item label="上次下单时间">
        <el-date-picker
          :disabled="true"
          v-model="cstLost.lstLastOrderDate"
          type="datetime"
          placeholder="选择日期时间"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="暂缓措施">
        <el-input :disabled="true" v-model="cstLost.lstReason" />
      </el-form-item>
      <el-form-item label="追加暂缓措施" prop="desc">
        <el-input type="textarea" v-model="cstLost.desc"></el-input>
      </el-form-item>

      <el-button style="margin-left: 400px" @click="$router.back(-1)">
        返回
      </el-button>
      <el-button
        type="primary"
        @click="save(2,'cstLost')"
        style="margin-left: 30px"
      >
        确认流失
      </el-button>
      <el-button
        type="primary"
        @click="save(1,'cstLost')"
        style="margin-left: 30px"
      >
        保存
      </el-button>
    </el-form>
  </div>
</template>

<script>
import customer from '@/api/cst/customer/lost'
export default {
  data() {
    return {
      cstLost: {
          desc:''
      },
      lstReason: '',
      rules: {
        desc: [
         { required: true, message: '请填写追加暂缓措施', trigger: 'blur' }
        ],
      },
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      customer.getLostInfo(this.$route.params.lstId).then((response) => {
        this.cstLost = response.data
      })
    },
    save(no, formName) {
      if (no == 1) {
        this.cstLost.lstStatus = '确认流失'
      } else {
        this.cstLost.lstStatus = '暂缓流失'
      }
      this.cstLost.lstReason =  this.cstLost.lstReason+this.cstLost.desc
      this.$refs[formName].validate((valid) => {
        if (valid) {
          customer.updateLost(this.cstLost).then((response) => {
            this.$message({
              type: 'success',
              message: '修改成功！',
            })
            this.$router.push({ path: '/cst/customer/lostList' })
          })
        } else {
          return false
        }
      })
    },
  },
}
</script>
