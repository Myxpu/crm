<template>
  <div class="app-container">
    销售机会管理
    <br />
    <br />

    <el-button type="default" >关于</el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <router-link :to="'/sal-chance/create'">
      <el-button type="default">新建</el-button>
    </router-link>
    <br />
    <br />
    <!--查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <!-- 客户名称 -->
      <el-form-item>
        <el-input v-model="searchObj.chcCustName" placeholder="客户名称" />
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
      <el-table-column prop="chcTitle" label="概要" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link
            :to="'/sal-chance/edit/' + scope.row.id"
            style="margin-right: 5px"
          >
            <el-button type="primary" size="mini" icon="el-icon-edit">
              修改
            </el-button>
          </router-link>

          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="removeById(scope.row.id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchObj: {},
      list:[]
    }
  },
}
</script>