//author：Ercyao
(function(){
	dropDown = function(id,items,title){
		var oDiv, oP, oUL, oLis, oA, oLi;
		oDiv = document.getElementById(id);
		if(oDiv){
			oP = document.createElement("p");
			oUL = document.createElement("ul");
			oDiv.appendChild(oP);
			oDiv.appendChild(oUL);
			oP.innerHTML = title;
			if(items){
				items.map(function(item,index){
				oLi =document.createElement("li")
				oA =document.createElement("a")
				oA.href = item.url;
				oA.innerHTML = item.name;
//			    li和a的样式设置
				oLi.style.cssText = "list-style-type: none;" + "color:cadetblue;" + "overflow: hidden;" + "white-space: nowrap;" + "text-overflow: ellipsis;" + "background-color:#fff;" + "margin-bottom: 5px;" + "padding:0 5%;" + "box-shadow: 3px 3px 10px rgba(0,0,0,0.3);";
				oA.style.cssText = "color:cadetblue;"+"text-decoration: none;"+"width:100%;" + "line-height:30px;";
				oLi.appendChild(oA);
				oUL.appendChild(oLi);
				})
			}	
			oLis = oUL.children;
//			p和ul的样式设置			
			oP.style.cssText = "color:white;" + "background-color:cadetblue;" + "box-shadow: 3px 3px 10px rgba(0,0,0,0.3);" + "width:90%;" + "line-height:30px;" + "padding:0 5%;" + "margin:0;";
			oUL.style.cssText =  "padding:5px 0 0;" + "margin:0;" + "width:100%;" + "visibility: hidden;";	
			//绑定事件
		    function bindEvent(){
			   	oP.addEventListener('mouseover', onMouseover, false);
			   	oUL.addEventListener('mouseover', ULonMouseover, false);
			    oDiv.addEventListener('mouseout', onMouseout, false);
		    }
		    //P鼠标经过
			function onMouseover(){
				oUL.style.visibility= "visible";
				doAnimate();
			}
			//UL鼠标经过
			function ULonMouseover(){
				oUL.style.visibility= "visible";
			}
			//li标签经过和移出事件
			for(var i=0; i< oLis.length; i++){
			  (function(x){
				var aaa = oLis[x].getElementsByTagName("a")[0];
			    oLis[x].onmouseover=function(){
			    	oLis[x].style.backgroundColor = "antiquewhite";
			    	oLis[x].style.webkitTransform = 'scale(' + 1.2 + ') rotate(' + 5 + 'deg)';
			    	oLis[x].style.MozTransform = 'scale(' + 1.2 + ') rotate(' + 5 + 'deg)';
			    	oLis[x].style.transform = 'scale(' + 1.2 + ') rotate(' + 5 + 'deg)';
			    	oLis[x].style.boxShadow = "0 5px 8px rgba(0,0,0,0.3);";
					}
			    oLis[x].onmouseout=function(){
			    	oLis[x].style.backgroundColor = "#fff";
			    	oLis[x].style.transform = 'scale(' + 1.0 + ') rotateY(' + 0 + 'deg)';
			    	oLis[x].style.boxShadow = "3px 3px 10px rgba(0,0,0,0.3);";
			    }
			  })(i);
			}
			//div鼠标移出
			function onMouseout(){
				oUL.style.visibility= "hidden";
			}
			//动画效果
		    function doAnimate(){
		    	var i = 0;
		        setInterval(function(){
		        	if(i < 360){
		        		i += 5;
		        		oUL.style.transform = 'rotateY(' + i + 'deg)';
		        	}
		        },10)
		    }
			if (oDiv.addEventListener) {  bindEvent();}
		}
	}
}());