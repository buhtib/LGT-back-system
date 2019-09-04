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
     * 提交
     */
    handleSubmit(e) {
        const { form } = this;

        form.validateFields(err => {
            if (!err) {
                this.buttonIsLoading = true;
                const psd = _md5(form.getFieldValue('psd'))
                let params = {
                    ...form.getFieldsValue(),
                    psd
                }

                //登陆请求
                _axios.post('login', params)
                .then(data => {
                    this._callBackLogin(data);
                })
                .finally(() => {
                    this.buttonIsLoading = false;
                })
            }
        });
    },

}