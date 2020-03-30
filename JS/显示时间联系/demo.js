
function showDate(){
	var d = new Date();
	var year = d.getFullYear(); //年
	var mouth = d.getMonth()+1; //月
	var date = d.getDate(); //日
	var week = d.getDay(); //星期
	if(week == 0){
		week = "日";
	}
	
	var hour = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	console.log("现在是："+year+"年"+mouth+"月"+date+"日"+"星期"+week+","+hour+"点"+min+"分"+sec+"秒");
	// return [d,year,mouth,date,week,hour,min,sec];
	
}
// var arr = showDate();
// console.log(typeof arr);
// console.log(arr);

// console.log("现在是："+year+"年"+mouth+"月"+date+"日"+"星期"+week+hour+"点"+min+"分"+sec+"秒");

function numOfDate(n){
	// var arr = [1,3,5,7,8,10,12];
	// // console.log(mouth);
	// // console.log(arr.includes(mouth));
	
	// //使用includes判断月份有几天。老版本可以使用indexOf判断。
	// // arr.includes(mouth)? d.setDate((date+n)%31):d.setDate((date+n)%30);
	// console.log(date);
	// d.setDate(date+n);
	// return d;
	var d = new Date();
	// var date = d.getDate(); //日
	d.setDate(d.getDate()+n);
	
	var newDate = d.getDate();
	
	var year = d.getFullYear(); //年
	var mouth = d.getMonth()+1; //月
	var week = d.getDay(); //星期
	if(week == 0){
		week = "日";
	}
	var hour = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	
	console.log(n+"天后是："+year+"年"+mouth+"月"+newDate+"日"+"星期"+week+","+hour+"点"+min+"分"+sec+"秒");
	
}
showDate();
numOfDate(3);
