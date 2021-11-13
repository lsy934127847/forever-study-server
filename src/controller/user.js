const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {

  async __before() {
    
    return true; // 继续向后执行
}

  // indexAction() {
  //   return this.display();
  // }
  getAllAction(){

    // this.baseGetList() // 调用基类中的方法
    return this.success(  )
  }


  async getAction(){
      // 获取请求参数  // /api/module/1  options = { id: '1' } //也能解析出来
    
    let  data =  await this.model('user').where().select()
    
     // data =  await this.model('user').where(search).page(currentPage,pageSize).countSelect()
      /*
         data =   {
               errno: 0,
               errmsg: "",
               data: {
                   count: 20,  // 共20条
                   totalPages: 2, // 共2页
                   pageSize: 10, // 每页10条
                   currentPage: 1, // 当前第一页
                   data: [] // 数据
                   }
               }
         */
      return this.success(data)
  }

  // 用户注册
  async postAction(){
    let {
      Faccount_number,
      Fpassword,
      Fnickname,
      Fphone,
    } = this.post()

    let addData = {
      Faccount_number,
      Fpassword,
      Fnickname,
      Fphone,
    }
   let res =  await this.model('user').add(addData)
   return this.success(res)
  }
}
