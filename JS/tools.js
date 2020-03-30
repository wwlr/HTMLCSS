//选择当前样式的兼容函数
			function $(vArg){
				switch(vArg[0]){
					case "#":
						return document.getElementById(vArg.substring(1));
						break;
					case ".":
						return elementsByClassName(document, vArg.substring(1));
						break;
					default:
						var str = vArg.substring(0,5);
						if(str == "name="){
							return document.getElementsByName(vArg.substring(5));
						}else{
							return document.getElementsByTagName(vArg);
						}
						break;
				}
			}
			
			//兼容ie函数
			function elementsByClassName(parent, classStr){
				var nodes = parent.getElementsByTagName('*');
				var result = [];
				for(var i=1; i<nodes.length; i++){
					if(nodes[i].className == classStr){
						result.push(nodes[i]);
					}
				}
				return result;
			}