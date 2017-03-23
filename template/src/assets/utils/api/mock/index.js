import Mock from 'mockjs';

import { detail } from './mock.detail.js';

function addToMock(list_arr){
	list_arr.forEach(n => {
		Mock.mock(n.path,n.data);
	});
}

addToMock(detail);

export default Mock;

