

    //Global variables and functions
	var nodes = 0,nav_active = false,down_active = false,delay = false,slide_bar = false,dialog = false,side_nav = false,btn_nav = false;
	function pw(val){
		return (val/100) * innerWidth;
	}
	function ph(val){
		return (val/100) * innerHeight;
	}
	function $(node){
		return document.querySelector(node);
	}
	function GoInFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}
    class MDApp{
    	Toast(message,millisec){    		
    		$(".toast").style.display = "block";
    		$(".toast").style.animation = "none";
    		$(".toast").offsetHeight;
    		$(".toast").style.animation = null;
    		$(".toast").style.animation = "fade 1s ease-in-out";
    		$(".toast").innerHTML = message;
    		setTimeout(() => {
	    		$(".toast").style.animation = "none";
	    		$(".toast").offsetHeight;
	    		$(".toast").style.animation = null;
	    		$(".toast").style.animation = "fade 1s ease-in-out reverse";
	    		setTimeout(() => {
	    			$(".toast").style.display = "none";
	    		},950);
    		},millisec);
    	}
    	SnackBar(message,millisec){
    		$(".snack").style.animation = "none";
    		$(".snack").offsetHeight;
    		$(".snack").style.animation = null;
    		$(".snack").style.animation = "snack 1s ease-in-out";
    		$(".snack").style.transform = "translateY(0vh)";
    		$(".snack").innerHTML = message;
    		setTimeout(() => {
	    		$(".snack").style.animation = "none";
	    		$(".snack").offsetHeight;
	    		$(".snack").style.animation = null;
	    		$(".snack").style.animation = "snack 1s ease-in-out reverse";
	    		setTimeout(() => {
	    			$(".snack").style.transform = "translateY(10vh)";
	    		},950);
    		},millisec);
    	}
    	fullScreen(){
    		GoInFullscreen(document.querySelector("body"));
    	}
    	navbar(backcolor,element){
    		if(!nav_active && !down_active && !delay && !slide_bar){
    			$(".nav_bar").style.backgroundColor = backcolor;
    			$(".nav_bar").innerHTML = "";
    			if(element != undefined){
    				$(".nav_bar").appendChild(element.node);
    		    }
				$(".nav_bar").style.animation = "none";
				$(".nav_bar").offsetHeight;
				$(".nav_bar").style.animation = null;
				$(".nav_bar").style.zIndex = "1";
				$(".nav_bar").style.animation = "nav_active 0.5s ease-in-out";
				$(".nav_bar").style.transform = "translateX(0)";
				setTimeout(() => {
					nav_active = true;
				},500);
			}
			else{
				$(".nav_bar").style.animation = "none";
					$(".nav_bar").offsetHeight;
					$(".nav_bar").style.animation = null;
					$(".nav_bar").style.zIndex = "1";
					$(".nav_bar").style.animation = "nav_active 0.5s ease-in-out reverse";
					$(".nav_bar").style.transform = "translateX(-85vw)";
					setTimeout(() => {
						nav_active = false;
					},500);
			}
    	}
    	risebar(backcolor,element){
    		if(!down_active && !nav_active && !delay && !slide_bar){
    			    $(".down_bar").style.backgroundColor = backcolor;
	    			$(".down_bar").innerHTML = "";
	    			if(element != undefined){
	    				$(".down_bar").appendChild(element.node);
	    			}
					$(".down_bar").style.animation = "none";
					$(".down_bar").offsetHeight;
					$(".down_bar").style.animation = null;
					$(".nav_bar").style.zIndex = "-1";
					$(".down_bar").style.animation = "down_active 0.5s ease-in-out";
					$(".down_bar").style.transform = "translateY(-50vh)";
					setTimeout(() => {
						down_active = true;
					},500);
			}
    	}
    	delayBar(color,wheelcolor,message){
    		$(".delay").style.boxShadow = "0 0 2vw grey";
    		if(!delay && !slide_bar){
    			$(".delay").style.zIndex = "5";
    			$(".delay").style.backgroundColor = color;
    			if(color == "transparent"){
    				$(".delay").style.boxShadow = "0 0 0 transparent";
    			}
    			var pro = new Progress(wheelcolor);
    			pro.node.style.marginTop = "2vh";
    			var text = new MDText(message,"none","black",5,"bold");
    			text.node.style.marginTop = "4vh";
    			$(".app").animate([
    					{ backgroundColor:"transparent" },
    					{ backgroundColor:"lightgrey" }
    				],500);
    			$(".nav_bar").animate([
    					{ opacity:1 },
    					{ opacity:0.3 }
    				],500);
    			$(".down_bar").animate([
    					{ opacity:1 },
    					{ opacity:0.3 }
    				],500);
    			if($(".action_bar")){
    				$(".action_bar").animate([
    					{ opacity:1 },
    					{ opacity:0.3 }
    				],500);
    			}
    			setTimeout(() => {
    				$(".app").style.backgroundColor = "lightgrey";
    				$(".nav_bar").style.opacity = "0.3";
    				$(".down_bar").style.opacity = "0.3";
                    if($(".action_bar")){
                    	$(".action_bar").style.opacity = "0.3";
                    }
    			},480);
				$(".delay").appendChild(pro.node);
				$(".delay").appendChild(text.node);
    	        $(".delay").style.animation = "none";
				$(".delay").offsetHeight;
				$(".delay").style.animation = null;
				$(".delay").style.animation = "fade 0.5s ease-in-out";
				$(".delay").style.opacity = "1";
				setTimeout(() => { delay = true; },500);
    		}
    		else{
    			$(".app").animate([
    					{ backgroundColor:"lightgrey" },
    					{ backgroundColor:"transparent" }
    				],500);
    			$(".nav_bar").animate([
    					{ opacity:0.3 },
    					{ opacity:1 }
    				],500);
    			$(".down_bar").animate([
    					{ opacity:0.3 },
    					{ opacity:1 }
    				],500);
    			if($(".action_bar")){
    				$(".action_bar").animate([
    					{ opacity:0.3 },
    					{ opacity:1 }
    				],500);
    			}
    			setTimeout(() => {
    				$(".app").style.backgroundColor = "transparent";
    				$(".nav_bar").style.opacity = "1";
    				$(".down_bar").style.opacity = "1";
                    if($(".action_bar")){
                    	$(".action_bar").style.opacity = "1";
                    }
    			},480);
    			$(".delay").style.zIndex = "-2";
    			$(".delay").style.animation = "none";
				$(".delay").offsetHeight;
				$(".delay").style.animation = null;
				$(".delay").style.animation = "fade 0.5s ease-in-out reverse";
				$(".delay").style.opacity = "0";
				setTimeout(() => { delay = false;$(".delay").innerHTML = ""; },500);
    		}
    	}
    	slideBar(element,width,height){
    		if(!down_active && !nav_active && !delay && !slide_bar){
    			$(".delay").style.boxShadow = "0 0 0 transparent";
    			$(".delay").style.backgroundColor = "transparent";
    			$(".delay").innerHTML = "";
    			$(".delay").style.zIndex = "1";
    			$(".delay").style.width = width + "vw";
    			$(".delay").style.height = height + "vh";
    			$(".delay").style.left = (innerWidth - pw(width)) / 2;
    			$(".delay").appendChild(element.node);
    			$(".delay").style.animation = "none";
				$(".delay").offsetHeight;
    			$(".delay").style.animation = "fade 2s ease-in-out";
    			$(".slidefirst").style.animation = "none";
				$(".slidefirst").offsetHeight;
				$(".slidefirst").style.animation = null;
				$(".slidefirst").style.animation = "slide1 1s ease-in-out";
				$(".slidefirst").style.left = "0";
				$(".slidesecond").style.animation = "none";
				$(".slidesecond").offsetHeight;
				$(".slidesecond").style.animation = null;
				$(".slidesecond").style.animation = "slide2 1s ease-in-out";
				$(".slidesecond").style.right = "0";
				setTimeout(() => {
					$(".delay").style.opacity = "1";
				},1950);
				setTimeout(() => {
					slide_bar = true;
				},1000);
    		}
    		else{
    			$(".slidefirst").style.animation = "none";
				$(".slidefirst").offsetHeight;
				$(".delay").style.animation = "none";
				$(".delay").offsetHeight;
				$(".delay").style.animation = "fade 2s ease-in-out reverse";
				$(".slidefirst").style.animation = null;
				$(".slidefirst").style.animation = "slide1 1s ease-in-out reverse";
				$(".slidefirst").style.left = "140vw";
				$(".slidesecond").style.animation = "none";
				$(".slidesecond").offsetHeight;
				$(".slidesecond").style.animation = null;
				$(".slidesecond").style.animation = "slide2 1s ease-in-out reverse";
				$(".slidesecond").style.right = "140vw";
				setTimeout(() => {
					$(".delay").style.width = "75vw";
    			    $(".delay").style.height = "20vh";
    			    $(".delay").style.left = "15vw";
					delay = false;
					slide_bar = false;
					$(".delay").innerHTML = "";
				},1000);
    		}
    	}
    	btnnav(backcolor,color,btns){
    		if(!btn_nav){
	    		$(".btnnav").style.backgroundColor = backcolor;
	    		$(".btnnav").style.height = "10vh";
	    		let btext = btns.trim().split(",");
	    		for(let i = 0;i < btext.length;i++){
	    			let btn = document.createElement("button");
	    			btn.setAttribute("class","btnnv");
	    			btn.innerHTML = btext[i];
	    			btn.style.color = color;
	    			btn.style.width = "calc(100vw/" + btext.length + ")";
	    			$(".btnnav").appendChild(btn);
	    		}
	    		btn_nav = true;
	    		$(".app").style.height = "90vh";
    		}
    		else{
    			$(".btnnav").style.backgroundColor = "transparent";
	    		$(".btnnav").style.height = "0";
	    		$(".btnnav").innerHTML = "";
	    		$(".app").style.height = "100vh";
	    		btn_nav = false;
    		}
    	}
    	sidenav(backcolor,color,btns){
    		if(!side_nav){
	    		$(".sidenav").style.backgroundColor = backcolor;
	    		$(".sidenav").style.width = "20vw";
	    		let btext = btns.trim().split(",");
	    		for(let i = 0;i < btext.length;i++){
	    			let btn = document.createElement("button");
	    			btn.setAttribute("class","sidenv");
	    			btn.innerHTML = btext[i];
	    			btn.style.color = color;
	    			if(!$(".action_bar")){
	    				btn.style.height = "calc(100vh/" + btext.length + ")";
	    		    }
	    		    else{
	    		    	btn.style.height = "calc(90vh/" + btext.length + ")";
	    		    	$(".sidenav").style.height = "90vh";
	    		    	$(".sidenav").style.top = "10vh";
	    		    }
	    			$(".sidenav").appendChild(btn);
	    			$(".app").style.marginLeft = "-20vw";
	    		}
	    		$(".app").style.paddingLeft = "20vw";
	    		side_nav = true;
    		}
    		else{
    			$(".sidenav").style.backgroundColor = "transparent";
	    		$(".sidenav").style.width = "0";
	    		$(".sidenav").innerHTML = "";
	    		side_nav = false;
    		}
    	}
    	Dialog(elem,btns,btncolor,color){
    		$(".mddialog").innerHTML = "";
    		if(!dialog){
    			$(".mddialog").style.display = "flex";
    			dialog = true;
	    		$(".mddialog").appendChild(elem.node);
	    		if(btns != undefined){
	    			let div = document.createElement("div");
	    			div.setAttribute("class","mddialogtext");
	    			let btn = btns.split(",");
	    			for (let i = 0; i < btn.length;i++){
	    				let txt = document.createElement("button");
	    				if(btncolor != undefined){
	    					txt.style.backgroundColor = btncolor;
	    		        }
	    				txt.innerHTML = btn[i];
	    				txt.addEventListener("click",() => {
	    					txt.animate([{
			    				backgroundColor:"white"
			    			},{
			    				backgroundColor:color,
			    			},
			    			{
			    				backgroundColor:"white"
			    			}
			    			],500);
	    				});
	    				if(color != undefined){
	    					txt.style.color = color;
	    				}
	    				else{
	    					txt.style.color = "#6B8E23";
	    				}
	    				div.appendChild(txt);
	    			}
	    			$(".mddialog").appendChild(div);
	    		}
    	    }
    	    else{
    	    	$(".mddialog").style.display = "none";
    	    	dialog = false;
    	    }
    	}
		add(element){
			if(element.container){
				this.node.appendChild(element.container);
				console.log(element);
			}
			else if(element.node){
				switch(element.node.getAttribute("class")){
					case "fab":
					    document.querySelector("body").insertBefore(element.node,document.querySelector("body").childNodes[0]);
						break;
					case "bottom_action_bar":
						$("body").insertBefore(element.node,$(".app"));
						break;
					default:
						this.node.appendChild(element.node);
				}
			}
		}
		custom(element){
			this.node.appendChild(element);
		}
		timePicker(){
			let picker = document.createElement("input");
			picker.type = "time";
			$("body").appendChild(picker);
		}
		constructor(layout){
			if(layout != null){
				this.node.style.position = layout;
			}
			this.node = document.createElement("div");
			this.node.setAttribute("class","app");
			this.node.addEventListener("click",() => {
				if(nav_active){
					$(".nav_bar").style.animation = "none";
					$(".nav_bar").offsetHeight;
					$(".nav_bar").style.animation = null;
					$(".nav_bar").style.zIndex = "1";
					$(".nav_bar").style.animation = "nav_active 0.5s ease-in-out reverse";
					$(".nav_bar").style.transform = "translateX(-85vw)";
					setTimeout(() => {
						nav_active = false;
					},500);
				}
				if(slide_bar){
					$(".slidefirst").style.animation = "none";
					$(".slidefirst").offsetHeight;
					$(".delay").style.animation = "none";
					$(".delay").offsetHeight;
					$(".delay").style.zIndex = "-2";
					$(".delay").style.animation = "fade 2s ease-in-out reverse";
					$(".slidefirst").style.animation = null;
					$(".slidefirst").style.animation = "slide1 1s ease-in-out reverse";
					$(".slidefirst").style.left = "140vw";
					$(".slidesecond").style.animation = "none";
					$(".slidesecond").offsetHeight;
					$(".slidesecond").style.animation = null;
					$(".slidesecond").style.animation = "slide2 1s ease-in-out reverse";
					$(".slidesecond").style.right = "140vw";
					setTimeout(() => {
						$(".delay").style.width = "75vw";
	    			    $(".delay").style.height = "20vh";
	    			    $(".delay").style.left = "15vw";
						delay = false;
						slide_bar = false;
						$(".delay").innerHTML = "";
					},1000);
				}
				if(down_active){
					$(".down_bar").style.animation = "none";
					$(".down_bar").offsetHeight;
					$(".down_bar").style.animation = null;
					$(".down_bar").style.animation = "down_active 0.5s ease-in-out reverse";
					$(".down_bar").style.transform = "translateY(0vh)";
					setTimeout(() => {
						down_active = false;
						$(".down_bar").style.backgroundColor = "";
						$(".down_bar").innerHTML = "";
					},500);
				}
			});
			this.nav = document.createElement("div");
			this.nav.setAttribute("class","nav_bar");
			this.downbar = document.createElement("div");
			this.downbar.setAttribute("class","down_bar");
			this.upControl = document.createElement("button");
			this.upControl.setAttribute("class","actcontrol");
			this.upControl.id = "actupc";
			this.upControl.style.bottom = "87vh";
			this.downControl = document.createElement("button");
			this.downControl.setAttribute("class","actcontrol");
			this.downControl.id = "actdownc";
			this.toast = document.createElement("button");
			this.toast.setAttribute("class","toast");
			this.snack = document.createElement("div");
			this.snack.setAttribute("class","snack");
			this.delay = document.createElement("div");
			this.delay.setAttribute("class","delay");
			this.slidefirst = document.createElement("div");
			this.slidefirst.setAttribute("class","slidefirst");
			this.slidesecond = document.createElement("div");
			this.slidesecond.setAttribute("class","slidesecond");
			this.btnnavbar = document.createElement("div");
			this.btnnavbar.setAttribute("class","btnnav");
			this.sidenavbar = document.createElement("div");
			this.sidenavbar.setAttribute("class","sidenav");
			this.dialog = document.createElement("div");
			this.dialog.setAttribute("class","mddialog");
			if(!$(".app")){
				$("body").appendChild(this.nav);
				$("body").appendChild(this.node);
				$("body").appendChild(this.downbar);
				$("body").appendChild(this.upControl);
				$("body").appendChild(this.downControl);
				$("body").appendChild(this.btnnavbar);
				$("body").insertBefore(this.toast,$(".app"));
				$("body").insertBefore(this.snack,$(".app"));
				$("body").insertBefore(this.delay,$(".app"));
				$("body").insertBefore(this.delay,$(".app"));
				$("body").insertBefore(this.slidefirst,$(".app"));
				$("body").insertBefore(this.slidesecond,$(".app"));
				$("body").insertBefore(this.sidenavbar,$(".app"));
				$("body").insertBefore(this.dialog,$(".app"));
			}
		}
	}
	class MDButton{
		update(){
			this.node.style.width = this.width;
			this.node.style.height = this.height;
			this.node.style.backgroundColor = this.backColor;
			this.node.style.color = this.txtColor;
			this.node.innerHTML = this.text;
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,this.node.getAttribute(attribute) + value);
		}
		inner(value){
				this.node.innerHTML = value;
		}
		constructor(w,h,txt,backcolor,txtcolor){
			this.width = pw(w);
			this.height = pw(h);
			this.backColor = backcolor;
			this.txtColor = txtcolor;
			this.text = txt;
			this.node = document.createElement("button");
			this.node.id = "e" + nodes;
			nodes++;
			this.node.setAttribute("class","button");
			this.update();
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){	
				this.node.innerHTML = value;	
		}
		del(){
			this.node.remove();
		}
	}
	function MDButtonRaised(w,h,txt,backcolor){
		this.update = function(){
			this.node.style.width = this.width;
			this.node.style.height = this.height;
			this.node.style.borderColor = this.backColor;
			this.node.style.color = this.backColor;
			this.node.innerHTML = this.text;
		}
		this.width = pw(w);
		this.height = pw(h);
		this.backColor = backcolor; 
		this.text = txt;
		this.node = document.createElement("button");
		this.node.id = "e" + nodes;
		this.node.setAttribute("class","buttonraised");
		this.node.addEventListener("click",() => {
			this.node.animate([
					{ backgroundColor:"transparent" },
					{ backgroundColor:backcolor },
					{ backgroundColor:"transparent" }
				],500);
		});
		this.update();
		nodes++;
		this.act = function(mode,action){
				this.node.addEventListener(mode,action);
		}
		this.css = function(css){
				this.node.style = this.node.getAttribute("style") + css;
		}
		this.del = function(){
			this.node.remove();
		}
	}
	class ActionBar{
		update(){
			this.image.style.backgroundImage = "url(" + this.icon + ")";
			this.node.style.backgroundColor = this.backColor;
			this.node.style.color = this.txtColor;
			this.node.appendChild(this.image);
			this.node.innerHTML += this.text;
		}
		constructor(txt,color,txtcolor,icon){
			this.text = txt;
			this.backColor = color;
			this.txtColor = txtcolor;
			this.icon = icon;
			this.node = document.createElement("div");
			this.image = document.createElement("button");
			this.image.setAttribute("class","acticon");
			this.node.id = "e" + nodes;
			nodes++;
			this.node.setAttribute("class","action_bar");
			this.update();
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		iconact(mode,action){
				this.node.childNodes[0].addEventListener(mode,action);
		}
		value(data){
				this.node.value = data;
		}
		css(css){
				this.node.style = this.node.getAttribute("style") + css;
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
				this.node.innerHTML = value;
		}
		del(){
			this.node.remove();
		}
	}
	class BottomActionBar{
		update(){
			this.image.style.backgroundImage = "url('account.png')";
			this.node.style.backgroundColor = this.backColor;
			this.node.style.color = this.txtColor;
			this.node.appendChild(this.image);
			this.node.innerHTML += this.text;
		}
		constructor(txt,color,txtcolor,icon){
			this.text = txt;
			this.backColor = color;
			this.txtColor = txtcolor;
			this.icon = icon;
			this.node = document.createElement("div");
			this.image = document.createElement("button");
			this.image.setAttribute("class","acticon");
			this.node.id = "e" + nodes;
			nodes++;
			this.node.setAttribute("class","bottom_action_bar");
			this.update();
		}
		act(mode,action){			
				this.node.addEventListener(mode,action);
		}
		value(data){			
				this.node.value = data;			
		}
		css(css){
			if(this.node){
				this.node.style = this.node.getAttribute("style") + css;
			}
			else{
				this.node.style = this.node.getAttribute("style") + css;
			}
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
				this.node.innerHTML = value;
		}
		del(){
			this.node.remove();
		}
	}
	class ActionBarWithControl{
		update(){
			this.image.style.backgroundImage = "url('account.png')";
			this.node.style.backgroundColor = this.backColor;
			this.node.style.color = this.txtColor;
			this.node.appendChild(this.image);
			this.node.innerHTML += this.text;
			$("#actupc").style.display = "block";
			$("#actupc").style.backgroundColor = this.controlColor;
		}
		constructor(txt,color,txtcolor,icon,controlcolor){
			this.text = txt;
			this.backColor = color;
			this.txtColor = txtcolor;
			this.controlColor = controlcolor;
			this.icon = icon;
			this.node = document.createElement("div");
			this.image = document.createElement("button");
			this.image.setAttribute("class","acticon");
			this.node.id = "e" + nodes;
			nodes++;
			this.node.setAttribute("class","action_bar");
			this.update();
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		value(data){
				this.node.value = data;
		}
		css(css){
				this.node.style = this.node.getAttribute("style") + css;
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){	
				this.node.innerHTML = value;
		}
		del(){
			this.node.remove();
		}
	}
	class BottomActionBarWithControl{
		update(){
			this.image.style.backgroundImage = "url('account.png')";
			this.node.style.backgroundColor = this.backColor;
			this.node.style.color = this.txtColor;
			this.node.appendChild(this.image);
			this.node.innerHTML += this.text;
			$("#actdownc").style.display = "block";
			$("#actdownc").style.backgroundColor = this.controlColor;
		}
		constructor(txt,color,txtcolor,icon,controlcolor){
			this.text = txt;
			this.backColor = color;
			this.txtColor = txtcolor;
			this.controlColor = controlcolor;
			this.icon = icon;
			this.node = document.createElement("div");
			this.image = document.createElement("button");
			this.image.setAttribute("class","acticon");
			this.node.id = "e" + nodes;
			nodes++;
			this.node.setAttribute("class","bottom_action_bar");
			this.update();
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		value(data){
				this.node.value = data;
		}
		css(css){
				this.node.style = this.node.getAttribute("style") + css;
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
				this.node.innerHTML = value;
		}
		del(){
			this.node.remove();
		}
	}
	class Progress{
		update(){
			this.node.style.borderTopColor = this.color;
			this.node.style.borderBottomColor = this.color;
		}
		constructor(color){
			this.color = color;
			this.node = document.createElement("div");
			this.node.setAttribute("class","progress");
			this.update();
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		value(data){
				this.node.value = data;
		}
		css(css){
				this.node.style = this.node.getAttribute("style") + css;
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			this.node.innerHTML = value;
		}
		del(){
			this.node.remove();
		}
	}
	class MDSwitch{
		update(){
			this.node.style.backgroundColor = this.backColor;
			this.control.style.backgroundColor = this.color;
		}
		constructor(backcolor,color){
			this.active = false;
			this.backColor = backcolor;
			this.color = color;
			this.node = document.createElement("div");
			this.node.setAttribute("class","switch_container");
			this.node.addEventListener("click",() => {
				this.control.style.animation = "none";
				this.control.offsetHeight;
				this.control.style.animation = null;
				if(!this.active){
					this.control.style.animation = "switch_mode 0.5s ease-in-out";
					this.control.style.marginLeft = "10vw";
					setTimeout(() => {
						this.active = true;
					},500);
				}
				else{
					this.control.style.animation = "switch_mode 0.5s ease-in-out reverse";
					this.control.style.marginLeft = "2vw";
					setTimeout(() => {
						this.active = false;
					},500);
				}
			});
			this.control = document.createElement("button");
			this.control.setAttribute("class","switch_button");
			this.node.appendChild(this.control);
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		value(data){
				this.node.value = data;
		}
		css(css){
				this.node.style = this.node.getAttribute("style") + css;
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
				this.node.innerHTML = value;
		}
		del(){
			this.node.remove();
		}
	}
	class MDFab{
		update(){
			this.node.innerHTML = this.text;
			this.node.style.backgroundColor = this.backColor;
			this.node.style.color = this.textColor;
		}
		constructor(txt,backcolor,txtcolor){
			this.text = txt;
			this.backColor = backcolor;
			this.textColor = txtcolor;
			this.node = document.createElement("button");
			this.node.setAttribute("class","fab");
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		value(data){
				this.node.value = data;
		}
		css(css){
				this.node.style = this.node.getAttribute("style") + css;
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			this.node.innerHTML = value;
		}
		del(){
			this.node.remove();
		}
	}
	class MDFabRaised{
		update(){
			this.node.innerHTML = this.text;
			this.node.style.border = "1vw solid " + this.backColor;
			this.node.style.backgroundColor = "white";
			this.node.style.color = this.backColor;
		}
		constructor(txt,backcolor){
			this.text = txt;
			this.backColor = backcolor;
			this.node = document.createElement("button");
			this.node.setAttribute("class","fab");
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
	}
	class MDText{
		update(){
			this.node.innerHTML = this.text;
			this.node.style.backgroundColor = this.backColor;
			this.node.style.color = this.textColor;
			this.node.style.fontSize = this.size + "vw";
			this.node.style.fontWeight = this.weight;
		}
		constructor(txt,backcolor,txtcolor,size,weight){
			this.text = txt;
			this.backColor = backcolor;
			this.textColor = txtcolor;
			this.size = size;
			this.weight = weight;
			this.node = document.createElement("p");
			this.node.setAttribute("class","text");
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		value(data){
				this.node.value = data;
		}
		css(css){
				this.node.style = this.node.getAttribute("style") + css;
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
				this.node.innerHTML = value;
		}
		del(){
			this.node.remove();
		}
	}
	class MDTextArea{
		update(){
			this.node.style.width = this.width;
			this.node.style.height = this.height;
			this.node.innerHTML = this.text;
			this.node.style.backgroundColor = this.backColor;
			this.node.style.color = this.textColor;
			this.node.style.fontSize = this.size + "vw";
			this.node.style.fontWeight = this.weight;
			this.node.addEventListener("focus",() => {
				if(this.anim){
					this.node.animate([
							{ backgroundColor:this.backColor,color:this.textColor },
							{ backgroundColor:this.textColor,color:this.backColor }
						],500);
					setTimeout(() => {
						
							this.node.style.backgroundColor = this.textColor;
							this.node.style.color = this.backColor;
					},480);
				}
			});
			this.node.addEventListener("blur",() => {
				if(this.anim){
					this.node.animate([
							{ backgroundColor:this.textColor,color:this.backColor },
							{ backgroundColor:this.backColor,color:this.textColor }
						],500);
					setTimeout(() => {
						if(this.node){
							this.node.style.backgroundColor = this.backColor;
							this.node.style.color = this.textColor;
						}
					},480);
				}
			});

		}
		constructor(width,height,txt,backcolor,txtcolor,txtsize,anim){
			this.width = pw(width);
			this.height = ph(height);
			this.text = txt;
			this.backColor = backcolor;
			this.textColor = txtcolor;
			this.txtsize = txtsize;
			this.anim = anim;
			this.node = document.createElement("textarea");
			this.node.setAttribute("class","textarea");
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		act(mode,action){
			
				this.node.addEventListener(mode,action);

		}
		value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
	}
	class MDTextAreaRaised{
		update(){
			this.node.style.width = this.width;
			this.node.style.height = this.height;
			this.node.innerHTML = this.text;
			this.node.style.borderColor = this.backColor;
			this.node.style.border = "0.5vw solid";
			this.node.style.color = this.backColor;
			this.node.style.fontSize = this.size + "vw";
			this.node.style.fontWeight = this.weight;
		}
		constructor(width,height,txt,backcolor,txtsize){
			this.width = pw(width);
			this.height = ph(height);
			this.text = txt;
			this.backColor = backcolor;
			this.txtsize = txtsize;
			this.node = document.createElement("textarea");
			this.node.setAttribute("class","textarea");
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		act(mode,action){
			
				this.node.addEventListener(mode,action);
			
		}
		value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
	}
	class MDImageView{
		update(){
			this.node.style.width = this.width;
			this.node.style.height = this.height;
			this.node.src = this.src;
		}
		constructor(width,height,src){
			this.width = pw(width);
			this.height = ph(height);
			this.src = src;
			this.node = document.createElement("img");
			this.node.setAttribute("class","image");
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		act(mode,action){
			
				this.node.addEventListener(mode,action);
			
		}
		value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
	}
	class MDVideoView{
		update(){
			this.node.width = this.width;
			this.node.height = this.height;
			this.node.style.objectFit = "cover";
			this.node.setAttribute("controls","true");
		}
		constructor(width,height,src){
			this.width = pw(width);
			this.height = ph(height);
			this.source = document.createElement("source");
			this.source.src = src;
			this.node = document.createElement("video");
			this.node.setAttribute("class","video");
			this.node.appendChild(this.source);
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		act(mode,action){
			
				this.node.addEventListener(mode,action);
			
		}
		value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
	}
	class MDLayout{
		update(){
			this.node.style.width = this.width;
			this.node.style.height = this.height;
			this.node.style.display = "flex";
			this.node.style.flexWrap = "nowrap";
			if(this.orientation == "vertical"){
				if(this.reverse == true){
					this.node.style.flexDirection = "column-reverse";
				}
				else{
					this.node.style.flexDirection = "column";
				}
				switch(this.position.toLowerCase()){
					case "center":
						this.node.style.alignItems = "center";
						break;
					case "left":
						this.node.style.alignItems = "flex-start";
						break;
					case "right":
						this.node.style.alignItems = "flex-end";
						break;
				}
			}
			if(this.orientation == "horizontal"){
				if(this.reverse == true){
					this.node.style.flexDirection = "row-reverse";
				}
				else{
					this.node.style.flexDirection = "row";
				}
				switch(this.position.toLowerCase()){
					case "center":
						this.node.style.justifyContent = "center";
						break;
					case "left":
						this.node.style.justifyContent = "flex-start";
						break;
					case "right":
						this.node.style.justifyContent = "flex-end";
						break;
				}
			}
		}
		constructor(width,height,orientation,position,reverse){
			this.width = pw(width);
			this.height = ph(height);
			this.position = position;
			this.orientation = orientation;
			this.reverse = reverse;
			this.node = document.createElement("div");
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		act(mode,action){
			
				this.node.addEventListener(mode,action);
			
		}
		custom(element){
			this.node.appendChild(element);
		}
		value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		add(element){
			if(element.container){
				this.node.appendChild(element.container);
			}
			else{
				this.node.appendChild(element.node);
			}
		}
		del(){
			this.node.remove();
		}
	}
	class MDGridView{
		update(){
			this.node.style.width = pw(this.width);
			this.node.style.display = "flex";
			this.node.style.flexDirection = "column";
			for(let i = 0;i < this.rows;i++){
				let nde = document.createElement("div");
				for(let k = 0;k < this.cols;k++){
					let sd = document.createElement("button");
					sd.style.width = pw(this.width/this.cols);
					sd.style.background = "none";
					sd.style.margin = "0";
					sd.style.border = "0";
					nde.appendChild(sd);
				}
				this.node.appendChild(nde);
			}
		}
		constructor(width,cols,rows){
			this.width = width;
			this.cols = cols;
			this.rows = rows;
			this.node = document.createElement("div");
			this.node.setAttribute("class","grid");
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		value(data){
				this.node.value = data;
		}
		css(css){
				this.node.style = this.node.getAttribute("style") + css;
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
				this.node.innerHTML = value;
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		custom(element){
			this.node.appendChild(element);
		}
		add(row,column,element){
			
				this.node.childNodes[row - 1].childNodes[column - 1].appendChild(element.node);
			
		}
		del(){
			this.node.remove();
		}
	}
	class MDProgress{
		update(){
			this.node.style.width = pw(this.width);
			this.node.style.backgroundColor = this.backColor;
			this.bar.style.backgroundColor = this.barColor;
			this.bar.style.width = (this.percent/100) * pw(this.width);
		}
		constructor(width,backcolor,barcolor,percent){
			this.width = width;
			this.backColor = backcolor;
			this.barColor = barcolor;
			this.percent = percent;
			this.node = document.createElement("div");
			this.node.setAttribute("class","progressbar");
			this.bar = document.createElement("div");
			this.bar.setAttribute("class","bar");
			this.node.appendChild(this.bar);
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		act(mode,action){
			
				this.node.addEventListener(mode,action);
			
		}
		value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
	}
	class MDListView{
		update(){
			this.node.style.width = pw(this.width);
			for(let i = 0;i < this.items.length;i++){
				if(this.items[i] != ""){
					let div = document.createElement("div");
					div.addEventListener("click",() => {
						this.touch = this.items[i];
					});
					div.innerHTML = this.items[i];
					div.style.backgroundColor = this.backColor;
					div.style.color = this.txtColor;
					this.node.appendChild(div);
				}
			}
		}
		constructor(list,width,backcolor,txtcolor){
			this.items = list.split(",");
			this.width = width;
			this.backColor = backcolor;
			this.txtColor = txtcolor;
			this.node = document.createElement("div");
			this.node.setAttribute("class","list");
			this.node.id = "e" + nodes;
			this.touch = null;
			nodes++;
			this.update();
		}
		act(mode,action){
			
				this.node.addEventListener(mode,action);
			
		}
		add(item){
			this.items.push(item);
			let div = document.createElement("div");
			div.innerHTML = item;
			div.style.backgroundColor = this.backColor;
			div.style.color = this.txtColor;
			
				this.node.appendChild(div);
			
		}
		remove(item){
			for(let i = 0;i < this.items.length;i++){
				if(this.items[i] == item){
					this.items[i] = "";
					break;
				}
			}
			this.node.innerHTML = "";
			this.node.innerHTML = "";
			for(let i = 0;i < this.items.length;i++){
				if(this.items[i] != ""){
					let div = document.createElement("div");
					div.innerHTML = this.items[i];
					div.style.backgroundColor = this.backColor;
					div.style.color = this.txtColor;
					
						this.node.appendChild(div);
				}
			}
		}
		css(css){
			
				for(let i = 0;i < this.node.childElementCount;i++){
					this.node.childNodes[i].style = this.node.getAttribute("style") + css;
				}	
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		maincss(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		del(){
			this.node.remove();
		}
	}
	class MDIconListView{
              update(){
                  this.node.style.height = this.height * this.list.length + "vh";
                  for(let i = 0;i < this.list.length; i++){
                      this.child = document.createElement("div");
                      this.child.addEventListener("click",() => {
                      	this.touch = this.list[i];
                      });
                      this.child.setAttribute("class","mdlisticon");
                      this.child.style.width = this.width + "vw";
                      this.child.style.height = this.height + "vh";
                      this.child.style.backgroundColor = this.backColor;
                      this.child.style.color = this.txtColor;
                      this.img = document.createElement("img");
                      this.img.src = this.icon;
                      this.img.setAttribute("class","listicon");
                      this.img.style.height = this.height - this.height/4 + "vh";
                      this.img.style.width = this.height - this.height/4 + "vh";
                      this.child.appendChild(this.img);
                      this.child.innerHTML += this.list[i];
                      this.node.appendChild(this.child);
                  }
              }
              constructor(list,width,height,icon,backcolor,txtcolor){
                  this.list = list.split(",");
                  this.width = width;
                  this.height = height;
                  this.icon = icon;
                  this.touch = "";
                  this.backColor = backcolor;
                  this.txtColor = txtcolor;
                  this.node = document.createElement("div");
                  this.update();
              }
        add(item){
			this.list.push(item);
			let div = document.createElement("div");
			div.innerHTML = item;
			div.style.backgroundColor = this.backColor;
			div.style.color = this.txtColor;
			
				this.node.appendChild(div);
			
		}
		remove(item){
			for(let i = 0;i < this.list.length;i++){
				if(this.list[i] == item){
					this.list[i] = "";
					break;
				}
			}
			this.node.innerHTML = "";
			this.node.innerHTML = "";
			for(let i = 0;i < this.list.length;i++){
				if(this.list[i] != ""){
					let div = document.createElement("div");
					div.innerHTML = this.list[i];
					div.style.backgroundColor = this.backColor;
					div.style.color = this.txtColor;
					if(this.node){
						this.node.appendChild(div);
					}
					else{
						this.node.appendChild(div);
					}
				}
			}
		}
		value(data){
			
				this.node.value = data;
			
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
        }
	class MDChips{
        update(){
          this.node.style.width = this.width + "vw";
          this.node.style.boxShadow = "0 0 1vw grey";
          this.node.style.backgroundColor = this.backColor;
          for(let i = 0;i < this.chips.length;i++){
            let chip = document.createElement("button");
            chip.addEventListener("click",() => {
            	this.touch = this.chips[i];
            });
            chip.style.backgroundColor = this.chipColor;
            chip.style.color = this.color;
            chip.innerHTML = this.chips[i];
            this.node.appendChild(chip);
          }
        }
        constructor(chips,width,backcolor,chipcolor,color){
          this.chips = chips.trim().split(",");
          this.width = width;
          this.backColor = backcolor;
          this.chipColor = chipcolor;
          this.color = color;
          this.touch = "";
          this.node = document.createElement("div");
          this.node.setAttribute("class","mchip");
          this.node.id = "e" + nodes;
		  nodes++;
          this.update();
        }
        value(data){
			
				this.node.value = data;
			
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
       }
	 class MDTextField{
           update(){
              this.container.style.width = this.width + "vw";
              this.node.style.width = this.width + "vw";
              this.helper.style.width = this.width + "vw";
              this.helper.style.color = this.color;
              this.node.style.color = this.color;
              this.node.style.borderBottomColor = this.color;
              this.helper.addEventListener("click",() => {
                if(!this.active && !this.error){
                  this.helper.style.transform = "translateY(2vh)";
                  this.helper.style.opacity = "1";
                  this.active = true;
                }
              });
              this.node.addEventListener("input",() => {
                if(this.node.value == "" && !this.error){
                  this.helper.style.opacity = "1";
                }
              });
              this.node.addEventListener("keydown",(event) => {
                if(event.keyCode == 13 && this.type != undefined){
                  switch(this.type){
                    case "number":
                      if(isNaN(this.node.value)){
                        this.helper.style.color = "red";
                        this.helper.innerHTML = "Only numbers required";
                        this.node.style.borderBottomColor = "red";
                        this.node.style.color = "red";
                        this.error = true;
                      }
                      else{
                        this.helper.style.color = this.color;
                        this.helper.innerHTML = this.tmp;
                        this.node.style.borderBottomColor = this.color;
                        this.node.style.color = this.color;
                        this.error = false;
                      }
                      break;
                    default:
                      if(!isNaN(this.node.value)){
                        this.helper.style.color = "red";
                        this.helper.innerHTML = "Only String required";
                        this.node.style.borderBottomColor = "red";
                        this.node.style.color = "red";
                        this.error = true;
                      }
                      else{
                        this.helper.style.color = this.color;
                        this.helper.innerHTML = this.tmp;
                        this.node.style.borderBottomColor = this.color;
                        this.node.style.color = this.color;
                        this.error = false;
                      }
                      break;
                  }
                }
              });
              this.node.addEventListener("blur",() => {
                if(this.active && !this.error){
                  if(this.node.value != ""){
                    this.helper.style.opacity = "0";
                  }
                  else{
                    this.helper.style.opacity = "1";
                  }
                  this.helper.style.transform = "translateY(8vh)";
                  this.active = false;
                }
              });
           }
           constructor(width,helper,color,type,rect){
               this.width = width;
               this.color = color;
               this.active = false;
               this.type = type;
               this.tmp = helper;
               this.error = false;
               this.container = document.createElement("div");
               this.container.setAttribute("class","mdinputtext");
               this.helper = document.createElement("p");
               this.helper.innerHTML = helper;
               this.node = document.createElement("input");
               this.container.appendChild(this.helper);
               this.container.appendChild(this.node);
               this.node.id = "e" + nodes;
			   nodes++;
               this.update();
           }
           value(data){
			
				this.node.value = data;
			
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
       }
       class MDTextFieldWithIcon{
           update(){
              this.container.style.width = this.width + "vw";
              this.container.style.borderRadius = "2vw";
              this.node.style.width = this.width + "vw";
              this.helper.style.width = this.width + "vw";
              this.helper.style.color = this.color;
              this.node.style.color = this.color;
              this.node.style.paddingRight = "5.5vh";
              this.image.style.transform = "translate(calc(" + this.width + "vw - 6vh),-7vh)";
              if(this.rect){
                this.node.style.borderColor = this.color;
              }
              else{
                this.node.style.borderBottomColor = this.color;
              } 
              this.helper.addEventListener("click",() => {
                if(!this.active && !this.error){
                  if(this.rect){
                    this.helper.style.transform = "translateY(1vh)";
                  }
                  else{
                    this.helper.style.transform = "translateY(2vh)";
                  }
                  this.helper.style.opacity = "1";
                  this.active = true;
                }
              });
              this.node.addEventListener("input",() => {
                if(this.node.value == "" && !this.error){
                  this.helper.style.opacity = "1";
                }
              });
              this.node.addEventListener("keydown",(event) => {
                if(event.keyCode == 13 && this.type != undefined){
                  switch(this.type){
                    case "number":
                      if(isNaN(this.node.value)){
                        this.helper.style.color = "red";
                        this.helper.innerHTML = "Only numbers required";
                        if(this.rect){
                          this.node.style.borderColor = "red";
                        }
                        else{
                          this.node.style.borderBottomColor = "red";
                        }
                        this.node.style.color = "red";
                        this.error = true;
                      }
                      else{
                        this.helper.style.color = this.color;
                        this.helper.innerHTML = this.tmp;
                        if(this.rect){
                          this.node.style.borderColor = this.color;
                        }
                        else{
                          this.node.style.borderBottomColor = this.color;
                        }
                        this.node.style.color = this.color;
                        this.error = false;
                      }
                      break;
                    default:
                      if(!isNaN(this.node.value)){
                        this.helper.style.color = "red";
                        this.helper.innerHTML = "Only String required";
                        if(this.rect){
                          this.node.style.borderColor = "red";
                        }
                        else{
                          this.node.style.borderBottomColor = "red";
                        }
                        this.node.style.color = "red";
                        this.error = true;
                      }
                      else{
                        this.helper.style.color = this.color;
                        this.helper.innerHTML = this.tmp;
                        if(this.rect){
                          this.node.style.borderColor = this.color;
                        }
                        else{
                          this.node.style.borderBottomColor = this.color;
                        }
                        this.node.style.color = this.color;
                        this.error = false;
                      }
                      break;
                  }
                }
              });
              this.node.addEventListener("blur",() => {
                if(this.active && !this.error){
                  if(this.node.value != ""){
                    this.helper.style.opacity = "0";
                  }
                  else{
                    this.helper.style.opacity = "1";
                  }
                  this.helper.style.transform = "translateY(6.5vh)";
                  this.active = false;
                }
              });
           }
           constructor(width,helper,color,type,icon,rect){
               this.width = width;
               this.color = color;
               this.active = false;
               this.type = type;
               this.tmp = helper;
               this.rect = rect;
               this.error = false;
               this.container = document.createElement("div");
               this.container.setAttribute("class","mdinputtext");
               this.helper = document.createElement("p");
               this.helper.innerHTML = helper;
               this.node = document.createElement("input");
               this.image = document.createElement("img");
               this.image.src = icon;
               this.coll = document.createElement("div");
               this.coll.appendChild(this.node);
               this.coll.appendChild(this.image);
               this.container.appendChild(this.helper);
               this.container.appendChild(this.coll);
               this.node.id = "e" + nodes;
			   nodes++;
               this.update();
           }
           value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
       }
	class MDSwiper{
		update(){
			this.node.style.width = this.width + "vw";
			this.node.style.height = this.height + "vh";
			this.node.src = this.images[this.index];
			this.node.addEventListener("click",(event) => {
			    if((this.node.offsetTop + pw(this.width)) /2 > event.clientX && this.index >= 1){
			    	this.node.animate([{
			    		opacity:1,
			    		transform:"translateX(0vw)",
			    		easing:'ease-in-out'
			    	},{
			    		opacity:0,
			    		transform:"translateX(" + this.width + "vw)",
			    		easing:'ease-in-out'
			    	}
			    	],600);
			    	setTimeout(() => {
			    		this.index--;
				    	$("img").src = this.images[this.index];
				    	this.node.animate([{
				    		opacity:0,
				    		transform:"translateX(-" + this.width + "vw)",
				    		easing:'ease-in-out'
				    	},{
				    		opacity:1,
				    		transform:"translateX(0vw)",
				    		easing:'ease-in-out'
				    	}
				    	],600);
			    	},590);
			    }
			    if((this.node.offsetTop + pw(this.width)) /2 < event.clientX && this.index < this.images.length - 1){
			    	this.node.animate([{
			    		opacity:1,
			    		transform:"translateX(0vw)",
			    		easing:'ease-in-out'
			    	},{
			    		opacity:0,
			    		transform:"translateX(-" + this.width + "vw)",
			    		easing:'ease-in-out'
			    	}
			    	],600);
			    	setTimeout(() => {
				    	this.index++;
				    	$("img").src = this.images[this.index];
				    	this.node.animate([{
				    		opacity:0,
				    		transform:"translateX(" + this.width + "vw)",
				    		easing:'ease-in-out'
				    	},{
				    		opacity:1,
				    		transform:"translateX(0vw)",
				    		easing:'ease-in-out'
				    	}
				    	],600);
			    	},595);
			    }
			});
		}
		constructor(width,height,images){
			this.width = width;
			this.height = height;
			this.images = images.trim().split(",");
			this.index = 0;
			this.node = document.createElement("img");
			this.node.style.margin = "2vh";
			this.update();
		}
		value(data){
			
				this.node.value = data;
			
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
	} 
	class MDRange{
		update(){
			this.node.style.width = this.width + "vw";
			this.node.style.height = this.height + "vh";
			this.wheel.style.height = this.height + "vh";
			this.node.style.backgroundColor = this.barColor;
			this.wheel.style.backgroundColor = this.wheelColor;
			this.node.addEventListener("mousemove",(event) => {
				let margin = event.clientX - this.node.offsetLeft;
				this.wheel.style.width = margin;
				this.percent = (this.wheel.offsetWidth/this.node.offsetWidth) * 100;
			});
		}
		constructor(width,height,barcolor,wheelcolor){
			this.width = width;
			this.height = height;
			this.barColor = barcolor;
			this.wheelColor = wheelcolor;
			this.node = document.createElement("div");
			this.node.setAttribute("class","range");
			this.node.style.margin = "5vh";
			this.percent = 0;
			this.wheel = document.createElement("button");
			this.node.appendChild(this.wheel);
			this.node.id = "e" + nodes;
			nodes++;
			this.update();
		}
		value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
	}
class MDRangeNormal{
    update(){
      this.node.style.width = this.width + "vw";
      this.node.style.backgroundColor = this.barColor;
      this.node.style.height = "1vw";
      this.wheel.style.width = "5vw";
      this.wheel.style.height = "5vw";
      this.wheel.style.borderRadius = "100%";
      this.wheel.style.marginTop = "-2vw";
      this.wheel.style.backgroundColor = this.wheelColor;
      this.node.addEventListener("mousemove",(event) => {
        let margin = event.clientX - this.node.offsetLeft;
        this.wheel.style.marginLeft = margin - pw(5);
        this.percent = (this.wheel.offsetWidth/this.node.offsetWidth) * 100;
      });
    }
    constructor(width,barcolor,wheelcolor){
      this.width = width;
      this.barColor = barcolor;
      this.wheelColor = wheelcolor;
      this.node = document.createElement("div");
      this.node.setAttribute("class","range");
      this.node.style.margin = "5vh";
      this.percent = 0;
      this.wheel = document.createElement("button");
      this.node.appendChild(this.wheel);
      this.update();
    }
    value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		del(){
			this.node.remove();
		}
  }
	class MDSwitchNormal{
           update(){
                this.node.style.backgroundColor = this.backColor;
                this.btn.style.backgroundColor = this.buttonColor;
                this.btn.addEventListener("click",() => {
                  if(!this.active){
                    this.node.animate([{
                        paddingLeft:"0vw",
                        easing:"ease-in-out"
                    },
                    {
                        paddingLeft:"calc(" + (pw(12) - ph(4)) + "px)",
                        easing:"ease-in-out"
                    }
                    ],500);
                    setTimeout(() => {
                      this.active = true;
                      this.node.style.paddingLeft = (pw(12) - ph(4)) + "px";
                    },495);
                  }
                  else{
                    this.node.animate([{
                        paddingLeft:"calc(" + (pw(12) - ph(4)) + "px)",
                        easing:"ease-in-out"
                    },
                    {
                        paddingLeft:"0",
                        easing:"ease-in-out"
                    }
                    ],500);
                    setTimeout(() => {
                      this.active = false;
                      this.node.style.paddingLeft = "0";
                    },495);
                  }
                });
           }
           constructor(backcolor,buttoncolor){
                this.backColor = backcolor;
                this.buttonColor = buttoncolor;
                this.node = document.createElement("div");
                this.node.setAttribute("class","switchn");
                this.btn = document.createElement("button");
                this.node.appendChild(this.btn);
                this.active = false;
                this.update();
           }
           value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		inner(value){
			
				this.node.innerHTML = value;
		}
		del(){
			this.node.remove();
		}
       }
       class MDTab{
		   update(){
			  this.node.style.backgroundColor = this.backColor;
			  for(let i = 0;i < this.fs.length; i++){
			     let btn = document.createElement("button");
				 btn.style.color = this.txtColor;
				 btn.setAttribute("class","tabbtn");
				 btn.style.width = "calc(50vw/" + this.fs.length + ")";
				 btn.innerHTML = this.fs[i];
				 btn.addEventListener("click",() => {
				 	this.touch = this.fs[i];
				 	btn.animate([{
				 		backgroundColor:"rgba(255,255,255,0.5)"
				 	},{
				 		backgroundColor:this.backColor
				 	}],500);
				 });
				 this.node.appendChild(btn);
			  }
		   }
		   constructor(backcolor,txtcolor,list){
		      this.backColor = backcolor;
			  this.txtColor = txtcolor;
			  this.fs = list.trim().split(",");
			  this.touch = "";
			  this.node = document.createElement("div");
			  this.node.setAttribute("class","tab");
			  this.update();
		   }
		   value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;
			
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		del(){
			this.node.remove();
		}
		}
	class MDCard{
		    update(){
				this.node.style.width = this.width + "vw";
				this.node.style.height = this.height + "vh";
				this.node.style.backgroundColor = this.backColor;
				this.node.style.boxShadow = "0 0 " + this.elevation + "px lightgrey";
				this.node.style.borderRadius = this.radius + "px";
				console.log(this.elevation);
			}
			constructor(width,height,backcolor,elevation,radius){
				this.width = width;
				this.height = height;
				this.backColor = backcolor;
				this.elevation = elevation;
				this.radius = radius;
				this.node = document.createElement("div");
				this.update();
			}
			value(data){
			
				this.node.value = data;
			
		}
		css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		act(mode,action){
				this.node.addEventListener(mode,action);
		}
		inner(value){
			
				this.node.innerHTML = value;

		}
		del(){
			this.node.remove();
		}
		}
		class MDMenu{
            update(){
                for(let i = 0;i < this.n;i++){
                    this.child = document.createElement("div");
                    this.child.setAttribute("class","menu");
                    this.child.style.width = this.width + "vw";
                    this.child.style.height = this.height + "vh";
                    this.child.style.backgroundColor = this.backColor;
                    this.node.appendChild(this.child.cloneNode(true));
                }
            }
            constructor(width,height,backcolor,n){
                this.backColor = backcolor;
                this.width = width;
                this.height = height;
                this.n = n;
                this.node = document.createElement("div");
                this.node.setAttribute("class","mmenu");
                this.open = false;
                this.update();
            }
            append(no,elem){
                this.node.childNodes[no - 1].appendChild(elem.cloneNode(true));
            }
            index(no,txt){
                this.node.childNodes[no - 1].innerHTML = txt;
                this.node.childNodes[no - 1].addEventListener("click",() => {
                	this.touch = txt;
                });
            }
            act(mode,action){
				this.node.addEventListener(mode,action);
		    }
            action(){
                 if(!this.open){
                     this.node.style.display = "block";
                     document.querySelector(".mmenu").style.display = "block";  
                     this.open = true;
                 }
                 else{
                     this.node.style.display = "none";
                      document.querySelector(".mmenu").style.display = "none";
                     this.open = false;
                 }
            }
            css(css){
			
				this.node.style = this.node.getAttribute("style") + css;
			
		}
		attr(attribute,value){
				this.node.setAttribute(attribute,value);
		}
		inner(value){
			
				this.node.innerHTML = value;

		}
		del(){
			this.node.remove();
		}
        }