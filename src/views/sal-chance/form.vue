<template>
  <div class="app-container">
    <el-form style="width: 1000px" label-width="120px">
      <el-form-item  v-show="chcIdShow"  label="编号">
         <el-input :disabled="true" v-model="salChance.chcId" />
      </el-form-item>
      <el-form-item label="客户名称">
        <el-input v-model="salChance.chcCustName" />
      </el-form-item>

      <el-form-item label="客户名称">
        <el-input v-model="salChance.chcCustName" />
      </el-form-item>
      <el-form-item label="负责人">
        <el-input v-model="salChance.chcLinkman" />
      </el-form-item>
      <el-form-item label="机会来源">
        <el-input v-model="salChance.chcSource" />
      </el-form-item>
      <el-form-item label="成功几率(%)">
        <el-input v-model="salChance.chcRate" />
      </el-form-item>
      <el-form-item label="公司电话">
        <el-input v-model="salChance.chcTel" />
      </el-form-item>
      <el-form-item label="客户等级">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="概要">
        <el-input v-model="salChance.chcTitle" />
      </el-form-item>
      <el-form-item label="地区">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="机会描述">
        <el-input type="textarea" v-model="salChance.chcLinkman" />
      </el-form-item>
      <el-form-item label="指派给">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in basDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="指派时间">
        <el-date-picker
          v-model="salChance.chcDueDate"
          type="datetime"
          placeholder="选择日期时间"
        ></el-date-picker>
      </el-form-item>

      <el-form-item>
        <router-link :to="'/sal-chance/list'">
          <el-button type="primary">返回</el-button>
        </router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate()"
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