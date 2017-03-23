/* detail页面模拟数据 */
import * as API from '../urls';

const list_data = [
	 {  
      src:'https://m.smzdm.com/p/7010188/?from=index',
      imglink:'https://tp-y.zdmimg.com/201703/12/58c564dd7a1464767.png_d320.jpg',
      time:"03-12 23:20",
      business: "京东",
      content:'千元赠品来袭：京东 家电各品类大促',
      price:"满5000送飞利浦粉钻，各档优惠券",
      comment:"4312"

    },
    {
      src:'https://m.smzdm.com/p/7010188/?from=index',
      imglink:'https://tp-y.zdmimg.com/201703/12/58c564dd7a1464767.png_d320.jpg',
      time:"03-12 23:20",
      business: "京东",
      content:'千元赠品来袭：京东 家电各品类大促',
      price:"满5000送飞利浦粉钻，各档优惠券",
      comment:"431"
    }
];
const products = {
    title:"什么值得买",
    imgurl: "//new.brand.smzdm.com/common/upload_pic_ajax/",
    list: list_data
};
    

/* 
* 输出最后数据 
* path	代表你要请求的接口
* data	代表你要输出到这个页面中的数据
*/
export const detail = [
	{
		path: API.finder_detail,
    data: products
	}
];