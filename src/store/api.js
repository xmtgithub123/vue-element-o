import axios from 'axios'
import {getStore} from '../config/mUtils'

const defaults = {
	baseURL:'http://cangdu.org:8001',
	// transformResponse:[(data)=> {
	// 	return JSON.parse(replaceImageUrl(data))
	// }]
}

Object.assign(axios.defaults,defaults)
// export const fetchHotCity = ()=> {
// 	return axios.get(`/v1/cities`,{params: {type:'hot'}})
// }

export const fetchUserInfo = ()=> {
	return axios.get(`/v1/user`,{params: {user_id:getStore('user_id')}})
}