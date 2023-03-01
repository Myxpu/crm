<template>
  <div class="app-container">
    <el-form
      label-width="160px"
      :inline="true"
      class="demo-form-inline"
      label-position="righte"
      style="width: 1400px"
    >
      <el-form-item v-show="chcIdShow" label="客户">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="服务类型">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="创建人">
        <el-input v-model="salChance.chcCustName" />
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="salChance.chcCustName" />
      </el-form-item>
      <el-form-item label="概要">
        <el-input v-model="salChance.chcSource" />
      </el-form-item>
      <el-form-item label="创建时间">
           <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="服务请求">
       <el-input type="textarea" v-model="salChance.c"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate()"
          style="margin-left: 30px"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      salChance: {},
      basDict: [],
      chcIdShow: false,
    }
  },
  created() {
    if (this.$route.params.id) {
      this.chcIdShow = true
      this.salChance.chcId = this.$route.params.id
    }
  },
}
</script>
