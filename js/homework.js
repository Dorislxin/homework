window.onload = function(){
//life处的选项卡
var life_tit=document.getElementById("life_tit");
var life_con=document.getElementById("life_con");
var tits=life_tit.getElementsByTagName('li');
var con=life_con.getElementsByTagName('img');
for (var i=0;i<tits.length;i++){
	tits[i].id=i;
	tits[i].onclick=function(){
		for(var j=0;j<tits.length;j++){
			tits[j].className="";
			con[j].style.display="none";
		}
		this.className="mom";
		con[this.id].style.display="block";
	}
}

//hot_right处的选项卡
var hot_tit= document.getElementById('hot_tit');
var divs= document.getElementsByClassName("hot_con");
var titles=hot_tit.getElementsByTagName("li");
for(var i=0;i<titles.length;i++){
	titles[i].id=i;
	titles[i].onclick=function(){
		for(var j=0;j<titles.length;j++){
			titles[j].className="";
			divs[j].style.display="none";
		}
		this.className="active";
		divs[this.id].style.display="block";
	}
}

//life_left处的选项卡
var t=document.getElementById('know_tab_title');
var know_tab_con=document.getElementById('know_tab_con');
var top=t.getElementsByTagName('li');
var mods=know_tab_con.getElementsByClassName('know_mod');
for(var i=0;i<top.length;i++){
	top[i].id=i;
	top[i].onmouseover=function(){
		for(var j=0;j<top.length;j++){
			top[j].className="";
			mods[j].style.display="none";
		}
		this.className="active";
		mods[this.id].style.display="block";
	}
}


//头部搜索栏的选项卡
var head=document.getElementById('tab_tit');
var back=document.getElementById('back_search');
var lis=head.getElementsByTagName('li');
var inputs=back.getElementsByTagName('input');
for(var i=0;i<lis.length;i++){
	lis[i].id=i;
	lis[i].onclick=function(){
		for(var j=0;j<lis.length;j++){
			lis[j].className="";
			inputs[j].style.display="none";
		}
		this.className="select";
		inputs[this.id].style.display="block";
	}
}



//content_right的coupons的选项卡
var cou_tit=document.getElementById('cou_tit');
var cou_con=document.getElementById('cou_con');
var cou_lis=cou_tit.getElementsByTagName('li');
var cou_mod=cou_con.getElementsByClassName('cou_mod');
for (var i=0;i<cou_lis.length;i++){
	cou_lis[i].id=i;
	cou_lis[i].onmouseover=function(){
		for (var j=0;j<cou_lis.length;j++){
			cou_lis[j].className="";
			cou_mod[j].style.display="none";
		}
		this.className="active";
		cou_mod[this.id].style.display="block";
	}
}


//life_right的轮播
var lun_left=document.getElementById('lun_img_left');
var img_right=document.getElementById('lun_img_right');
var left=lun_left.getElementsByClassName('img_box');
var right=img_right.getElementsByTagName('img');
var index=0;
timer=setInterval(function(){
	index++;
	if (index>=right.length) {index=0;}
	for(var k=0;k<right.length;k++){
		right[k].className="";
		left[k].style.display="none";
	}
	right[index].className="active";
	left[index].style.display="block";
},2000);
for(var i=0;i<left.length;i++){
	right[i].id=i;
	right[i].onclick=function(){
		for(var j=0;j<right.length;j++){
			right[j].className="";
			left[j].style.display="none";
		}
		this.className="active";
		left[this.id].style.display="block";
	}
}



//life_right部分效果
var r=document.getElementsByClassName('rest_menu');
for(var i=0;i<r.length;i++){
	r[i].id=i;
	r[i].onmouseover=function(){
		var divs=r[this.id].getElementsByTagName('div');
		divs[0].style.display="none";
		divs[1].style.display="block";
	}
	r[i].onmouseout=function(){
		var divs=r[this.id].getElementsByTagName('div');
		divs[0].style.display="block";
		divs[1].style.display="none";
	}
}





}