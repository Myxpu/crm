<template>
  <div class="app-container">
    <el-form
      label-width="160px"
      :inline="true"
      class="demo-form-inline"
      label-position="righte"
      style="width: 1400px"
    >
      <el-form-item v-show="chcIdShow" label="编号">
        <el-input :disabled="true" v-model="salChance.chcId" />
      </el-form-item>
      <el-form-item label="服务类型">
        <el-input v-model="salChance.chcCustName" />
      </el-form-item>

      <el-form-item label="概要">
        <el-input v-model="salChance.chcCustName" />
      </el-form-item>
      <el-form-item label="客户">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="服务请求">
        <el-input v-model="salChance.chcSource" />
      </el-form-item>
      <el-form-item label="创建人">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分配给">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <br />
      <br />
      <br />
      <el-form-item label="服务处理">
        <el-input v-model="salChance.chcTitle" />
      </el-form-item>
      <el-form-item label="处理人">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="处理时间">
        <el-input v-model="salChance.chcLinkman" />
      </el-form-item>
      <el-form-item label="处理结果">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="满意度">
        <el-input v-model="salChance.chcLinkman" />
      </el-form-item>


    

      <el-form-item >
        
        <router-link :to="'/sal-chance/list'">
          <el-button style="margin-left: 30px"  type="primary">返回</el-button>
        </router-link>
        
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
