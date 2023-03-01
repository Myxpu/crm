//引入axios的初始化模块
import request from '@/utils/request'
const BASE_API = "http://localhost:8080/crm/basDict"
export default {
    // 分页条件查询
    findByBasDict(dictType){
        return request({
            url: `${BASE_API}/list/${dictType}`,
            method: 'get',
        })
    }
}