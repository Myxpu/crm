<template>
  <div class="app-container">
    联系人
    <br />
    <br />

    <el-button type="default">关于</el-button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <router-link :to="'/cst/customer/createLinkman/' + this.lkmCustNo">
      <el-button>新建</el-button>
    </router-link>

    <el-button style="margin-left: 5px" @click="$router.back(-1)">
      返回
    </el-button>

    <br />
    <br />

    <el-form :inline="true" class="demo-form-inline">
      <!-- 客户经理/负责人 -->
      <el-form-item label="客户名称">
        <el-input :disabled="true" v-model="lkmCustName" />
      </el-form-item>
      <el-form-item label="客户编号">
        <el-input :disabled="true" v-model="lkmCustNo" />
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50" label="序号">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="lkmName" label="姓名" />
      <el-table-column prop="lkmSex" label="性别" />
      <el-table-column prop="lkmPostion" label="职位" />
      <el-table-column prop="lkmTel" label="办公电话" />
      <el-table-column prop="lkmMobile" label="手机" />
      <el-table-column prop="lkmMemo" label="备注" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 编辑联系人 -->
          <router-link :to="'/cst/customer/editLinkman/' + scope.row.lkmId">
            <el-link :underline="false">
              <i class="el-icon-setting"></i>
            </el-link>
          </router-link>
          <!-- 删除联系人 -->
          <el-link :underline="false">
            <i @click="del(scope.row.lkmId)" class="el-icon-delete"></i>
          </el-link>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center"
      layout="total, prev, pager, next, jumper"
      @current-change="fetchData"
    />
  </div>
</template>

<script>
import customer from '@/api/cst/customer/linkman'
export default {
  data() {
    return {
      list: [], //联系人列表
      lkmCustName: '', //客户人名称
      lkmCustNo: '', //客户人编号
      total: 0,
      page: 1,
      limit: 10,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(page = 1) {
      this.page = page
      customer
        .getLinkman(this.$route.params.custNo, this.page, this.limit)
        .then((response) => {
          this.list = response.data.rows
          this.total = response.data.total
          this.lkmCustName = this.list[0].lkmCustName
          this.lkmCustNo = this.list[0].lkmCustNo
        })
    },
    del(lkmId) {
      this.$confirm('此操作将永久删除联系人记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        customer.delLinkman(lkmId).then((response) => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
          this.fetchData()
        })
      })
    },
  },
}
</script>

<style>
i {
  margin-left: 20px;
}
</style>