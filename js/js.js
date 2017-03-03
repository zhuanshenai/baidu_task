window.onload=function(){
	(function(){
		//输入框变化
		var input=document.querySelectorAll(".inpt");
		Array.prototype.slice.call(input).forEach(function(item){
			item.onmousedown=function(){
				this.style.background="#ddf0fe";
				this.style.borderColor="#0e70b6";
			};
			item.onmouseleave=function(){
				item.style.background="";
				this.style.borderColor="";
			};
		});
		var model=document.querySelector(".model");
		var strong=model.querySelectorAll("strong");
		var circle=model.querySelectorAll(".circle");
		for(var i=0;i<circle.length;i++){
			circle[i].index=i;
			circle[i].onclick=function(){
				this.style.borderColor="#0e70b6";
				strong[this.index].style.background="#0e70b6";
			};
			circle[i].onmouseover=function(){
				this.style.borderColor="#0e70b6";
			};
			circle[i].onmouseout=function(){
				this.style.borderColor="";
			};
		}
		
		var password=document.querySelector("#password");
		var ssid=document.querySelector("#ssid");
		
		circle[0].onclick=function(){
			this.style.borderColor="#0e70b6";
			strong[0].style.background="#0e70b6";
			password.disabled="disabled";
			ssid.disabled="disabled";
			if(password.disabled!=""){
				circle[1].style.borderColor="";
				strong[1].style.background="";
			}
		}
		circle[1].onclick=function(){
			this.style.borderColor="#0e70b6";
			strong[1].style.background="#0e70b6";
			password.disabled="";
			ssid.disabled="";
			if(password.disabled==""){
				circle[0].style.borderColor="";
				strong[0].style.background="";
			}
		}

		var ap=document.querySelector(".ap");
		var circ=ap.querySelectorAll(".circle");
		var str=ap.querySelectorAll("strong");
		for(var i=0;i<circ.length;i++){
			circ[i].index=i;
			circ[i].onmouseover=function(){
				for(var j=0;j<circ.length;j++){
					circ[j].style.borderColor="";
				};
				this.style.borderColor="#0e70b6";
			}
			circ[i].onclick=function(){
				for(var j=0;j<circ.length;j++){
					circ[j].style.borderColor="";
					str[j].style.background="";
				};
				this.style.borderColor="#0e70b6";
				str[this.index].style.background="#0e70b6";
			};
		}
	})();
}