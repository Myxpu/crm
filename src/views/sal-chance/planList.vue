<template>
  <div class="app-container">
    客户开发计划
    <br />
    <br />

    <el-button type="default">关于</el-button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <br />
    <br />
    <!--查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <!-- 客户名称 -->
      <el-form-item>
        <el-input v-model="searchObj.chcCustName" placeholder="客户名称" />
      </el-form-item>

      <!-- 负责人 -->
      <el-form-item>
        <el-input v-model="searchObj.chcLinkman" placeholder="负责人" />
      </el-form-item>

      <!-- 概要 -->
      <el-form-item>
        <el-input v-model="searchObj.chcTitle" placeholder="概要" />
      </el-form-item>

      <el-button type="primary" icon="el-icon-search" @click="fetchData()">
        查询
      </el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>
    <!-- 表格 -->
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50" />
      <el-table-column prop="chcId" label="编号" />
      <el-table-column prop="chcCustName" label="客户名称" />
      <el-table-column prop="chcLinkman" label="负责人" />
      <el-table-column prop="chcTel" label="公司电话" />
      <el-table-column prop="chcTel" label="状态" />
      <el-table-column prop="chcTitle" label="概要" />
      <el-table-column v-show="true" label="操作">
        <!-- 查看 -->
        <i class="el-icon-view"></i>
      </el-table-column>
      <el-table-column  v-show="false" label="操作">
        <!-- 制定计划 -->
        <i class="el-icon-plus"></i>
        <!-- 执行计划 -->
        <i class="el-icon-setting"></i>
        <!-- 开发成功 -->
        <i class="el-icon-circle-check-outline"></i>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchObj: {},
    }
  },
}
</script>