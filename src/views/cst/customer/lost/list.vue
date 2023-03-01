<template>
  <div class="app-container">
    联系人
    <br />
    <br />

    <el-button type="default">关于</el-button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <router-link :to="'/cst/customer/createLinkman'">
      <el-button>返回</el-button>
    </router-link>
    <br />
    <br />

    <el-form :inline="true" class="demo-form-inline">
      <!-- 客户经理/负责人 -->
      <el-form-item label="客户名称">
        <el-input v-model="searchObj.lstCustName" />
      </el-form-item>
      <el-form-item label="客户经理">
        <el-input v-model="searchObj.lstCustManagerName" />
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="searchObj.lstStatus" placeholder="请选择">
          <el-option
            v-for="item in lstStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value"
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
      <el-table-column type="index" width="50">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="lstCustNo" label="编号" />
      <el-table-column prop="lstCustName" label="客户名称" />
      <el-table-column prop="lstCustManagerName" label="客户经理" />
      <el-table-column prop="lstLastOrderDate" label="上次下单时间" />
      <el-table-column prop="lstLostDate" label="确认流失时间" />
      <el-table-column prop="lstStatus" label="状态" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 确认流失 -->
          <router-link :to="'/cst/customer/confirmForm/' + scope.row.lstId">
            <el-link :underline="false">
              <i class="el-icon-check"></i>
            </el-link>
          </router-link>
          <!-- 暂缓流失 -->
          <router-link :to="'/cst/customer/deferForm/' + scope.row.lstId">
            <el-link :underline="false">
              <i class="el-icon-time"></i>
            </el-link>
          </router-link>
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
import customer from '@/api/cst/customer/lost'
export default {
  data() {
    return {
      searchObj: {},
      list: [],
      lstStatus: [
        {
          value: 1,
          label: '确认流失',
        },
        {
          value: 2,
          label: '暂缓流失',
        },
        {
          value: 3,
          label: '流失预警',
        },
      ],
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
        .getLost(this.searchObj, this.page, this.limit)
        .then((response) => {
          this.list = response.data.rows
          this.total = response.data.total
        })
    },
    resetData() {
      this.searchObj = {}
      this.lstStatus = [
        {
          value: 1,
          label: '确认流失',
        },
        {
          value: 2,
          label: '暂缓流失',
        },
        {
          value: 3,
          label: '流失预警',
        },
      ]
      this.fetchData()
    },
  },
}
</script>

<style>
i {
  margin-left: 20px;
}
</style>