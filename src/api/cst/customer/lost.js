//引入axios的初始化模块
import request from '@/utils/request'
const BASE_API = "http://localhost:8080/crm/cstLost"
export default{
    //查询客户流失记录
    getLost(lost, page, limit) {
        return request({
            url: `${BASE_API}/${page}/${limit}`,
            method: 'post',
            data: lost
        })
    },
    //查询客户流失信息
    getLostInfo(lstId) {
        return request({
            url: `${BASE_API}/${lstId}`,
            method: 'get'
        })
    },
    //确认或暂缓客户流失
    updateLost(lost) {
        return request({
            url: `${BASE_API}/updateLost`,
            method: 'put',
            data: lost
        })
    }
}