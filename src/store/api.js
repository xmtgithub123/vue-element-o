import axios from 'axios'
const defaults = {
	baseURL:'https://mainsite-restapi.ele.me',
	// transformResponse:[(data)=> {
	// 	return JSON.parse(replaceImageUrl(data))
	// }]
}

Object.assign(axios.defaults,defaults)
// export const fetchHotCity = ()=> {
// 	return axios.get(`/v1/cities`,{params: {type:'hot'}})
// }