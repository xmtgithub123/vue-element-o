import Vue from 'vue'
import {fetchUserInfo,fetchHotCity} from './api'

export default {
	// async FETCH_HOTCITY({commit}) {
	// 	try{
	// 		const res = await fetchHotCity()
	// 		commit('SET_HOT_CITY',{hotcity:res.data})
	// 	}
	// 	catch(err) {
	// 		console.log('获取数据失败',err)
	// 	}
		
	// }

	//获取用户信息
	 async getUserInfo({commit,state}) {
 		let res = await fetchUserInfo()
 		commit('SET_USER_INFO',{userInfo:res.data})
	 }
}