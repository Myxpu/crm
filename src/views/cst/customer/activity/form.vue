<template>
  <div class="app-container">
    <el-form
      label-width="160px"
      label-position="righte"
      style="width: 1400px"
      :model="activity"
      ref="activity"
      :rules="rules"
    >
      <el-form-item v-show="false" label="用户编号">
        <el-input v-model="activity.atvCustNo" />
      </el-form-item>

      <el-form-item label="时间" prop="atvDate">
          <el-date-picker
            v-model="activity.atvDate"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
      </el-form-item>

      <el-form-item label="地点" prop="atvPlace">
        <el-input v-model="activity.atvPlace" />
      </el-form-item>
      <el-form-item label="概要" prop="atvTitle">
        <el-input v-model="activity.atvTitle" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="activity.atvDesc" />
      </el-form-item>
      <el-form-item>
        <el-button
          style="margin-right: 50px"
          type="primary"
          @click="saveOrUpdate('activity')"
        >
          保存
        </el-button>

        <el-button @click="$router.back(-1)">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import customer from '@/api/cst/customer/activity'

export default {
  data() {
    return {
      activity: {},
      rules: {
        atvDate: [
          {
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        atvPlace: [
          { required: true, message: '请输入地点', trigger: 'change' },
        ],
        atvTitle: [
          { required: true, message: '请输入概要', trigger: 'blur' },
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
    if (this.$route.params.atvId) {
      this.fetchData()
    } else {
      this.activity.atvCustNo = this.$route.params.custNo
    }
  },
  methods: {
    fetchData() {
      customer.findByActivityInfo(this.$route.params.atvId).then((response) => {
        this.activity = response.data
      })
    },
    saveOrUpdate(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //判断保存还是修改
          if (!this.activity.atvId) {
            this.saveActivity()
          } else {
            this.updateActivity()
          }
        } else {
          return false
        }
      })
    },
    saveActivity() {
      customer.addActivity(this.activity).then((response) => {
        this.$message({
          type: 'success',
          message: '添加成功！',
        })
        this.$router.push({
          path: '/cst/customer/activityList/' + this.activity.atvCustNo,
        })
      })
    },
    updateActivity() {
      customer.updateActivity(this.activity).then((response) => {
        this.$message({
          type: 'success',
          message: '修改成功！',
        })
        this.$router.push({
          path: '/cst/customer/activityList/' + this.activity.atvCustNo,
        })
      })
    },
  },
}
</script>
