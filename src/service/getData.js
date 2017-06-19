import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'
let baseURL = 'http://cangdu.org:8001'

 //https://mainsite-restapi.ele.me
import axios from 'axios'
/**
 * 获取首页默认地址
 */
export const cityGuess = () => axios(baseURL + '/v1/cities', {params:{type: 'guess'}});
/**
 * 获取首页热门城市
 */
export const hotcity = () => axios(baseURL + '/v1/cities',{params:{type:'hot'}});
/**
 * 获取首页所有城市
 */
export const groupcity = () => axios(baseURL + '/v1/cities', {params:{type: 'group'}});
// export const groupcity = () => axios('http://cangdu.org:8001', {params:{type: 'group'}});
/**
 * 获取当前所在城市
 */
export const currentcity = number => axios(baseURL + '/v1/cities/' + number);
/**
 * 获取搜索地址
 */
// export const searchplace = (cityid, value) => fetch('https://mainsite-restapi.ele.me/v1/pois', {type: 'search',city_id: cityid,keyword: value});
export const searchplace = (cityid, value) => axios(baseURL + '/v1/pois', {params:{type:'search',city_id:'cityid',keyword:'value'}});
/**
 * 获取短信验证码
 */

export const mobileCode = phone => axios.post(baseURL + '/v4/mobile/verify_code/send', {params:{mobile: phone,scene: 'login',type: 'sms'}});


/**
 * 获取图片验证码
 */

export const getcaptchas = () => fetch(baseURL + '/v1/captchas', {},'POST');

/**
 * 检测帐号是否存在
 */

export const checkExsis = (checkNumber, type) => axios(baseURL + '/v1/users/exists', {params:{[type]: checkNumber,type}});
/**
 * 手机号登录
 */

export const sendLogin = (code, mobile, validate_token) => axios.post(baseURL + '/v1/login/app_mobile', {params:{code,mobile,validate_token}});
// /**
//  * 账号密码登录
//  */
// export const accountLogin = (username, password, captcha_code) => fetch(baseURL + '/v2/login', {username, password, captcha_code}, 'POST');

/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => fetch( baseURL + '/v2/login', {username, password, captcha_code}, 'POST');