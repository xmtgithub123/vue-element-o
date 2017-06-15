// import fetch from '../config/fetch'
// import {getStore} from '../config/mUtils'
import axios from 'axios'
/**
 * 获取首页默认地址
 */
export const cityGuess = () => axios('https://mainsite-restapi.ele.me/v1/cities', {params:{type: 'guess'}});
/**
 * 获取首页热门城市
 */
export const hotcity = () => axios('https://mainsite-restapi.ele.me/v1/cities',{params:{type:'hot'}});
/**
 * 获取首页所有城市
 */
export const groupcity = () => axios('https://mainsite-restapi.ele.me/v1/cities', {params:{type: 'group'}});
// export const groupcity = () => axios('http://cangdu.org:8001', {params:{type: 'group'}});
/**
 * 获取当前所在城市
 */
export const currentcity = number => axios('https://mainsite-restapi.ele.me/v1/cities/' + number);
/**
 * 获取搜索地址
 */
// export const searchplace = (cityid, value) => fetch('https://mainsite-restapi.ele.me/v1/pois', {type: 'search',city_id: cityid,keyword: value});
export const searchplace = (cityid, value) => axios('https://mainsite-restapi.ele.me/v1/pois', {params:{type:'search',city_id:'cityid',keyword:'value'}});