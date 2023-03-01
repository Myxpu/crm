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
      <el-form-item label="订单编号">
        <el-input :disabled="true" v-model="searchObj.chcTitle"/>
      </el-form-item>
      <el-form-item label="日期">
        <el-input :disabled="true" v-model="searchObj.chcTitle" />
      </el-form-item>
        <el-form-item label="送货地址">
        <el-input :disabled="true" v-model="searchObj.chcTitle" />
      </el-form-item>
        <el-form-item label="总金额">
        <el-input :disabled="true" v-model="searchObj.chcTitle" />
      </el-form-item>
        <el-form-item label="状态">
        <el-input :disabled="true" v-model="searchObj.chcTitle" />
      </el-form-item>
    </el-form>

    

    <!-- 表格 -->
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50" />
      <el-table-column prop="chcId" label="商品" />
      <el-table-column prop="chcCustName" label="数量" />
      <el-table-column prop="chcLinkman" label="单位" />
      <el-table-column prop="chcTel" label="单价(元)" />
      <el-table-column prop="chcTitle" label="金额(元)" />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchObj: {},
      list: [],
    }
  },
}
</script>