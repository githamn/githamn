//变换背景颜色
/**
 * 产生随机整数，包含下限值，包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
 function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
//随机设置背景色
function setBGC() {
	var colorArr = new Array("#02fc07", "#02fc07, "#02fc07", "#02fc07", "#02fc07", "#02fc07");
	var i = random(0, 5);
	document.getElementById("imgBg").style.background = colorArr[i];
              document.getElementById("realclock").style.background = colorArr[i];
}
setInterval(setBGC, 1000);