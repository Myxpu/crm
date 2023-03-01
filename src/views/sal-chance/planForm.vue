<template>
  <div class="app-container">
    <el-form style="width: 1000px" label-width="120px">
      <el-form-item  v-show="chcIdShow"  label="编号">
         <el-input :disabled="true" v-model="salChance.chcId" />
      </el-form-item>
      <el-form-item label="编号">
        <el-input v-model="salChance.chcCustName" />
      </el-form-item>
      <el-form-item label="机会来源">
        <el-input v-model="salChance.chcCustName" />
      </el-form-item>

      <el-form-item label="客户名称">
        <el-input v-model="salChance.chcCustName" />
      </el-form-item>
      <el-form-item label="成功几率(%)">
        <el-input v-model="salChance.chcLinkman" />
      </el-form-item>
      <el-form-item label="负责人">
        <el-input v-model="salChance.chcSource" />
      </el-form-item>
      <el-form-item label="公司电话">
        <el-input v-model="salChance.chcRate" />
      </el-form-item>
      <el-form-item label="概要">
        <el-input v-model="salChance.chcTel" />
      </el-form-item>
      <el-form-item label="机会描述">
            <el-input v-model="salChance.chcTel" />
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
      chcIdShow:false
  
    }
  },
  created(){
    if( this.$route.params.id){
      this.chcIdShow=true
      this.salChance.chcId=this.$route.params.id
    }
  }
}
</script>