//引入axios的初始化模块
import request from '@/utils/request'
const BASE_API = "http://localhost:8080/crm/cstLinkman"
export default{
    //通过客户编号查询联系人
    getLinkman(custNo, page, limit) {
        return request({
            url: `${BASE_API}/${custNo}/${page}/${limit}`,
            method: 'get'
        })
    },
    //通过联系人id获取联系人信息
    findByLinkInfo(lkmId) {
        return request({
            url: `${BASE_API}/${lkmId}`,
            method: 'get'
        })
    },
    //新增联系人信息
    addLinkman(cstLinkman) {
        return request({
            url: `${BASE_API}/addLinkman`,
            method: 'post',
            data: cstLinkman
        })
    },
    //修改联系人信息
    updateLinkman(cstLinkman) {
        return request({
            url: `${BASE_API}/updateLinkman`,
            method: 'put',
            data: cstLinkman
        })
    },
    //删除联系人
    delLinkman(lkmId) {
        return request({
            url: `${BASE_API}/${lkmId}`,
            method: 'delete'
        })
    }
}