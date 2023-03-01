<template>
  <div class="app-container">
    <el-form
      label-width="160px"
      :inline="true"
      class="demo-form-inline"
      label-position="righte"
      style="width: 1400px"
      :model="customer"
      ref="customer"
      :rules="rules"
    >
      <el-form-item label="客户名称" prop="custName">
        <el-input v-model="customer.custName" />
      </el-form-item>

      <el-form-item label="客户编号">
        <el-input v-model="customer.custNo" />
      </el-form-item>
      <el-form-item label="地区" prop="custRegion">
        <el-select v-model="customer.custRegion" placeholder="请选择地区">
          <el-option
            v-for="item in regionList"
            :key="item.dictId"
            :label="item.dictItem"
            :value="item.dictItem"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="负责人" prop="custManagerName">
        <el-input v-model="customer.custManagerName" />
      </el-form-item>
      <el-form-item label="客户等级" prop="custLevelLabel">
        <el-select
          v-model="customer.custLevelLabel"
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
      <el-form-item label="客户信誉度" prop="custCredit">
        <el-rate
          style="margin-top: 10px"
          v-model="customer.custCredit"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
        ></el-rate>
      </el-form-item>
      <br />
      <el-form-item label="客户满意度" prop="custSatisfy">
        <el-rate
          style="margin-top: 10px"
          v-model="customer.custSatisfy"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
        ></el-rate>
      </el-form-item>
      <br />
      <br />
      <br />
      <el-form-item label="地址" prop="custAddr">
        <el-input v-model="customer.custAddr" />
      </el-form-item>
      <el-form-item label="邮政编码" prop="custZip">
        <el-input v-model="customer.custZip" />
      </el-form-item>
      <el-form-item label="电话" prop="custTel">
        <el-input v-model="customer.custTel" />
      </el-form-item>
      <el-form-item label="传真" prop="custFax">
        <el-input v-model="customer.custFax" />
      </el-form-item>
      <el-form-item label="网址" prop="custWebsite">
        <el-input v-model="customer.custWebsite" />
      </el-form-item>

      <br />
      <br />
      <br />

      <el-form-item label="营业执照注册号">
        <el-input v-model="customer.custLicence_no" />
      </el-form-item>
      <el-form-item label="法人" prop="chcLinkman">
        <el-input v-model="customer.chcLinkman" />
      </el-form-item>
      <el-form-item label="注册资金(万元)">
        <el-input v-model="customer.chcLinkman" />
      </el-form-item>
      <el-form-item label="年营业额">
        <el-input v-model="customer.chcLinkman" />
      </el-form-item>
      <el-form-item label="开户银行" prop="custBank">
        <el-input v-model="customer.custBank" />
      </el-form-item>
      <el-form-item label="银行账号" prop="custBankAccount">
        <el-input v-model="customer.custBankAccount" />
      </el-form-item>
      <el-form-item label="地税登记号">
        <el-input v-model="customer.custLocalTaxNo" />
      </el-form-item>
      <el-form-item label="国税登记号">
        <el-input v-model="customer.custNationalTaxNo" />
      </el-form-item>

      <br />
      <br />
      <br />

      <el-form-item style="margin-left: 400px">
        <router-link :to="'/cst/customer/linkmanList'">
          <el-button style="margin-left: 30px" type="primary">联系人</el-button>
        </router-link>
        <router-link :to="'/cst/customer/activityList'">
          <el-button style="margin-left: 30px" type="primary">
            交往记录
          </el-button>
        </router-link>
        <router-link :to="'/cst/customer/ordersList'">
          <el-button style="margin-left: 30px" type="primary">
            历史订单
          </el-button>
        </router-link>
        <router-link :to="'/cst/customer/list'">
          <el-button style="margin-left: 30px" type="primary">返回</el-button>
        </router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <el-button
          type="primary"
          @click="save('customer')"
          style="margin-left: 30px"
        >
          保存
        </el-button>
        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import customer from '@/api/cst/customer/customer'
import basDict from '@/api/cst/basDict/basDict'
export default {
  data() {
    return {
      basDict: [],
      customer: {},//客户
      regionList: null, //地区列表
      levelList: null, //客户等级列表
      rules: {
        custName: [
          { required: true, message: '请输入客户名称', trigger: 'blur' },
          {
            min: 2,
            max: 50,
            message: '长度在 2 到 50 个字符',
            trigger: 'blur',
          },
        ],
        custRegion: [
          { required: true, message: '请选择地区', trigger: 'change' },
        ],
        custManagerName: [
          { required: true, message: '请输入负责人', trigger: 'blur' },
          {
            min: 2,
            max: 50,
            message: '长度在 2 到 50 个字符',
            trigger: 'blur',
          },
        ],
        custAddr: [
          { required: true, message: '请输入地址', trigger: 'blur' },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 50 个字符',
            trigger: 'blur',
          },
        ],
        custZip: [
          { required: true, message: '请输入邮政编码', trigger: 'blur' },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 50 个字符',
            trigger: 'blur',
          },
        ],
        custWebsite: [
          { required: true, message: '请输入网址', trigger: 'blur' },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 50 个字符',
            trigger: 'blur',
          },
        ],
        custTel: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 50 个字符',
            trigger: 'blur',
          },
        ],
        custBank: [
          { required: true, message: '请输入开户银行', trigger: 'blur' },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 50 个字符',
            trigger: 'blur',
          },
        ],
        custFax: [
          { required: true, message: '请输入传真', trigger: 'blur' },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 50 个字符',
            trigger: 'blur',
          },
        ],
        custBankAccount: [
          { required: true, message: '请输入银行账号', trigger: 'blur' },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 50 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  created() {
    this.fetchData()
    this.initRegionList()
    this.initLevelList()
  },
  methods: {
    fetchData() {
      customer.getById(this.$route.params.custNo).then((response) => {
        this.customer = response.data
      })
    },
    //初始化地区列表
    initRegionList() {
      basDict.findByBasDict(1).then((response) => {
        this.regionList = response.data
      })
    },
    //初始化客户等级列表
    initLevelList() {
      basDict.findByBasDict(2).then((response) => {
        this.levelList = response.data
      })
    },
    //保存修改
     save(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            customer.update(this.customer).then(response=>{
              this.$message({
                type:'success',
                message:'修改成功！'
              })
              this.$router.push({path:'/cst/customer/list'})
            })
          } else {
            return false;
          }
        });
      },
  },
}
</script>
