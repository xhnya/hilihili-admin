import request from '@/utils/request'
export default {
   /** page-images-admin  */
  getPageImage(params){
     return request({
       url: '/table/list',
       method: 'get',
       params
     })
   },
  testErrorMessage(code,message){
    return request({
      url: '/admin/images/errors',
      method: 'get',
      params: {
        code: code,
        message: message
      }
    })
  },
  addPageImages(param){
    return request({
      url: '/admin/images/add',
      method: 'post',
      data: param
    })
  },
  selectRotationChartDes(param){
    return request({
      url: '/admin/images/selectRotationChartDes',
      method: 'get',
      params: {
        value: param
      }
    })
  },
  getPageImagesList(param) {
    return request({
      url: '/admin/images/getPageImagesList',
      method: 'get',
      params: param
    })
  }
}
