import Vue from 'vue'
import * as api from './api'
import {setStore, getStore} from '../config/mUtils'

export default {
	// SET_HOT_CITY:(state,{hotcity}) => {
	// 	console.log(hotcity)
	// 	state.hotcity = hotcity
	// }
	SET_USER_INFO:(state,{userInfo}) => {
		
	},
	RECORD_USERINFO:(state,info) => {
		state.userInfo = info;
		state.login = true;
		setStore('user_id',info.user_id)
	}
}