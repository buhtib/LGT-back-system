/**
 * methods 事件管理
 */


export default {
 // 键盘enter 登陆
 handleKeyup(event) {
    const e = event || window.event || arguments.callee.caller.arguments[0];
    if (!e) return;
    if (e.keyCode == "13") this._handleSubmit();
  },
  /**
   * 切换tab
   * @param {string} _key 切换tab后得到tab的key
   */
  handleTabClick (_key) {
    this.activeKey = _key
    if(_key === 'admin') {
      this.superAdmin = true
    }else {
      this.superAdmin = false
    }
    
  },

  /**
   * 提交
   */
  handleSubmit(e) {
    const { form, superAdmin, adminForm } = this;
    // from类型的确定
    const currentForm = this.superAdmin ? adminForm : form
    
    currentForm.validateFields( err => {
      if (!err) {
        const psd =_md5(currentForm.getFieldValue('psd'))
        this.buttonIsLoading = true;
        let param = {
          ...currentForm.getFieldsValue(),
          psd,
          superAdmin
        }
        //登陆请求
        // _fetch('login', param, 'POST')
        // .then(data=>{
        //   this._callBackLogin(data);
        // })
        // .finally(() => {
        //   this.buttonIsLoading = false;
        // })

        // test
          this._callBackLogin(param);

      }
    });
  },
  
}