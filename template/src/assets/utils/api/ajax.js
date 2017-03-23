import axios from 'axios';

export default{

	getData(str_url,callback,errorHandle){
		axios.get(str_url).then(res => {
			callback(res.data);
		}).catch(error => {
			errorHandle(error);
		});
	},
	postData(str_url,param_data,callback,errorHandle){
		axios.post(str_url,{
			params:param_data
		}).then(res=>{
			callback(res.data);
		}).catch(error => {
			errorHandle(error);
		});
	}
};