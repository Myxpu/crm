<template>
  <div class="app-container">
    客户信息管理
    <br />
    <br />

    <el-button type="default">关于</el-button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <br />
    <br />
    查询表单
    <el-form :inline="true" class="demo-form-inline">
      <!-- 客户名称 -->
      <el-form-item>
        <el-input v-model="searchObj.custName" placeholder="客户名称" />
      </el-form-item>

      <!-- 客户编号 -->
      <el-form-item>
        <el-input v-model="searchObj.custNo" placeholder="客户编号" />
      </el-form-item>

      <!-- 地区 -->
      <el-form-item>
        <el-select v-model="searchObj.custRegion" placeholder="请选择地区">
          <el-option
            v-for="item in regionList"
            :key="item.dictId"
            :label="item.dictItem"
            :value="item.dictItem"
          ></el-option>
        </el-select>
      </el-form-item>

      <!-- 客户经理/负责人 -->
      <el-form-item>
        <el-input
          v-model="searchObj.custManagerName"
          placeholder="客户经理/负责人"
        />
      </el-form-item>

      <!-- 客户等级 -->
      <el-form-item>
        <el-select
          v-model="searchObj.custLevelLabel"
          placeholder="请选择客户等级"
        >
          <el-option
            v-for="item in levelList"
            :key="item.dictId"
            :label="item.dictItem"
            :value="item.dictItem"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-button type="primary" icon="el-icon-search" @click="fetchData()">
        查询
      </el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>
    <!-- 表格 -->
    <el-table :data="list" border stripe>
      <el-table-column width="50px" type="index" label="序号">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="custName" label="客户名称" />
      <el-table-column prop="custNo" label="客户编号" />
      <el-table-column prop="custRegion" label="地区" />
      <el-table-column prop="custManagerName" label="客户经理/负责人" />
      <el-table-column prop="custLevelLabel" label="客户等级" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 编辑 -->
          <router-link :to="'/cst/customer/edit/' + scope.row.custNo">
            <i class="el-icon-setting"></i>
          </router-link>
          <!-- 联系人 -->
          <router-link :to="'/cst/customer/linkmanList/' + scope.row.custNo">
            <i class="el-icon-user"></i>
          </router-link>
          <!-- 交往记录 -->
          <router-link :to="'/cst/customer/activityList/' + scope.row.custNo">
            <i class="el-icon-phone-outline"></i>
          </router-link>
          <!-- 历史订单 -->
          <i class="el-icon-shopping-bag-1"></i>
          <!-- 删除 -->
          <el-link :underline="false">
            <i @click="del(scope.row.custNo)" class="el-icon-delete"></i>
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
import customer from '@/api/cst/customer/customer'
import basDict from '@/api/cst/basDict/basDict'
export default {
  data() {
    return {
      listLoading: true,
      searchObj: {
        custName: '',
        custNo: '',
        custRegion: '',
        custManagerName: '',
        custLevelLabel: '',
      },
      list: [], //客户列表
      total: 0,
      page: 1,
      limit: 10,
      regionList: [], //地区列表
      levelList: [], //客户等级列表
    }
  },
  created() {
    this.fetchData()
    this.initRegionList()
    this.initLevelList()
  },
  methods: {
    fetchData(page = 1) {
      this.page = page
      this.listLoading = true
      customer
        .getPageList(this.page, this.limit, this.searchObj)
        .then((response) => {
          if (response.success === true) {
            this.list = response.data.rows
            this.total = response.data.total
          }
          this.listLoading = false
        })
    },
    //初始化地区列表
    initRegionList() {
      basDict.findByBasDict(1).then((response) => {
        console.log(response.data)
        this.regionList = response.data
      })
    },
    //初始化客户等级列表
    initLevelList() {
      basDict.findByBasDict(2).then((response) => {
        this.levelList = response.data
      })
    },
    resetData() {
      this.searchObj = {}
      this.regionList = []
      this.levelList = []
      this.fetchData()
      this.initRegionList()
      this.initLevelList()
    },
    del(custNo) {
      this.$confirm('此操作将永久删除客户记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        customer.delCustomer(custNo).then((response) => {
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