//author：Ercyao
(function(){
	MoreDropDown = function(id,list){
		var mUL, mLi;            //父级菜单的ul、li
		var zUL, zP;	         //子级菜单的ul、p
		var oDiv, oP, oUL, oLis, oA, oLi;
		oDiv = document.getElementById(id);         //获取id
		if(oDiv){
			mUL = document.createElement("ul");
			list.map(function(list,i){
				mLi = document.createElement("li");	
				mUL.style.cssText = "display: flex; flex-flow: row wrap; width: 100%; padding:0; margin:0;";
				mLi.style.cssText = "list-style-type: none; width: 33%;";
				mUL.appendChild(mLi);
				oP = document.createElement("p");
				oUL = document.createElement("ul");
				// p和ul的样式设置			
				oP.style.cssText = "color:white; background-color:cadetblue; box-shadow: 3px 3px 10px rgba(0,0,0,0.3); width:90%; line-height:30px; padding:0 5%; margin:0;";
				oUL.style.cssText =  "padding:5px 0 0; margin:0; width:100%; visibility: hidden;";	
				mLi.appendChild(oP);
				mLi.appendChild(oUL);
				oDiv.appendChild(mUL);
				oP.innerHTML = list.title;
				var items = list.items;
				if(items){
					items.map(function(item,index){
						oLi =document.createElement("li")
						oA =document.createElement("a")
						oA.href = item.url;
						oA.innerHTML = item.name;
		                //	li和a的样式设置
						oLi.style.cssText = 'list-style-type: none; color:cadetblue; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; background-color:#fff; margin-bottom: 5px; padding:0 5%; box-shadow: 3px 3px 10px rgba(0,0,0,0.3);';
						oA.style.cssText = 'color:cadetblue; text-decoration: none; width:100%; line-height:30px;';
						oLi.appendChild(oA);
						oUL.appendChild(oLi);
					})
				}	
			})
			mLis = mUL.children;
			for(var i=0; i< mLis.length; i++){
			  	(function(x){
				  	var zUL = mLis[x].lastChild;
				  	var zP = mLis[x].firstChild;
				    zP.onmouseover=function(){
				    	zUL.style.visibility= "visible";
				    	zP.style.backgroundColor = "darksalmon";
				    	oLis = zUL.children;
				    	//动画效果
				    	var j = 0;
				        setInterval(()=>{
				        	if(j < 360){
				        		j += 5;
				        		zUL.style.transform = 'rotateY(' + j + 'deg)';
				        	}
				        },10)
				    	oLisChange();
				    }
				    zUL.onmouseover=function(){
				    	zP.style.backgroundColor = "darksalmon";
				     	zUL.style.visibility= "visible";
				    }
				    mLis[x].onmouseout=function(){
				    	zP.style.backgroundColor = "cadetblue";
				    	zUL.style.visibility= "hidden";
				    }
			  	})(i);
			}
			//子菜单经过和移出事件
			function oLisChange(){
			 	for(var i=0; i< oLis.length; i++){
				  (function(x){
				    oLis[x].onmouseover=function(){
				    	oLis[x].style.backgroundColor = "antiquewhite";
				    	oLis[x].style.transform = 'scale(' + 1.1 + ') rotate(' + 5 + 'deg)';
				    	oLis[x].style.boxShadow = "0 5px 8px rgba(0,0,0,0.3);";
						}
				    oLis[x].onmouseout=function(){
				    	oLis[x].style.backgroundColor = "#fff";
				    	oLis[x].style.transform = 'scale(' + 1.0 + ') rotateY(' + 0 + 'deg)';
				    	oLis[x].style.boxShadow = "3px 3px 10px rgba(0,0,0,0.3);";
				    }
			  	  })(i);
				}
			}
		}
	}
}());