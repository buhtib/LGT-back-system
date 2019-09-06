/**
 * 登陆成功 后提示信息
 * @return ｛String｝ 提示时间信息
 */
export function timeFix() {
    const time = new Date()
    const hour = time.getHours()
    return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 19 ? '下午好' : '晚上好'
}

//阿里图标管理 js路径
export const scriptUrl = '//at.alicdn.com/t/font_1360177_6ijzrcoz919.js';

//isMobile
export function isMobile(title) {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag 
}