//引入axios的初始化模块
import request from '@/utils/request'
const BASE_API = "http://localhost:8080/crm/cstActivity"
export default{
      //查询交往记录
      getActivity(custNo, page, limit) {
        return request({
            url: `${BASE_API}/${custNo}/${page}/${limit}`,
            method: 'get'
        })
    },
    //通过交往记录id交往记录信息
    findByActivityInfo(atvId) {
        return request({
            url: `${BASE_API}/${atvId}`,
            method: 'get'
        })
    },
    //新增交往记录
    addActivity(activity) {
        return request({
            url: `${BASE_API}/addActivity`,
            method: 'post',
            data: activity
        })
    },
    //修改交往记录
    updateActivity(activity) {
        return request({
            url: `${BASE_API}/updateActivity`,
            method: 'put',
            data: activity
        })
    },
    //删除交往记录
    delActivity(atvId) {
        return request({
            url: `${BASE_API}/${atvId}`,
            method: 'delete'
        })
    },
}