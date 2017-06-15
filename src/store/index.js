import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import * as api from './api'

Vue.use(Vuex)
const state = {
	hotcity:[], // 热门城市
	userInfo:null, //用户信息
}
export default new Vuex.Store({
	state,
	actions,
	mutations,
})


// 第二种写法写在一个文件夹中
// export default new Vuex.Store({
// 	state:{
// 		hotcity:[]
// 	},
// 	actions:{
// 		FETCH_HOTCITY ({commit}) {
// 			return api.fetchHotCity().then(({data}) => {
// 				commit('SET_HOT_CITY',{hotcity:{data}.data})
// 			})
// 		}
// 	},
// 	mutations:{
// 		SET_HOT_CITY:(state,{hotcity}) => {
// 			console.log(hotcity)
// 			state.hotcity = hotcity
// 		}
// 	}
// })