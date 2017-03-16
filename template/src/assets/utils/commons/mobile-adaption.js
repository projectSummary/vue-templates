/**
 * [getRem 移动端适配函数]
 * @param  {[type]} pwidth [设计稿宽度]
 * @param  {[type]} prem   [相对比例值，比如取值1rem=100px，则该值为100]
 * @return {[type]}        [description]
 */
function getRem(pwidth,prem) {
	var $html = document.querySelector('html');
	var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
	if (oWidth > 750) {
	    $html.style.fontSize = 750/10 + 'px';
	} else {
	    $html.style.fontSize = oWidth * .1 + 'px';
	}
}
window.onload = function () {
	getRem();
}
window.onresize = function () {
	getRem();
}