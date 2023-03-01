//引入axios的初始化模块
import request from '@/utils/request'
const BASE_API = "http://localhost:8080/crm/cstCustomer"
export default {
    // 分页条件查询
    getPageList(page, limit, searchObj) {
        return request({
            url: `${BASE_API}/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },
    //根据客户编号查询客户
    getById(custNo) {
        return request({
            url: `${BASE_API}/${custNo}`,
            method: 'get',
        })
    },
    //修改客户信息
    update(customer) {
        return request({
            url: `${BASE_API}/update`,
            method: 'put',
            data: customer
        })
    },
    delCustomer(custNo) {
        return request({
            url: `${BASE_API}/${custNo}`,
            method: 'delete'
        })
    }
  
    
}