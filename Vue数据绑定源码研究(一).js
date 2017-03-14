//ES5
function Observer(obj){
    this.walk(obj);
}
var p = Observer.prototype;
p.data={};

p.walk = function(obj){
    Object.keys(obj).forEach(
        function(key){
			if(typeof obj[key] == "object"){
				return p.walk(obj[key]);
			}	
		Object.defineProperty(p.data,key,{
				get:function(){console.log("你访问了"+key);},
				set:function(newValue){
					obj[key] = newValue;
 					console.log("你设置了"+key+"新的值为"+ obj[key]);
				}
			}
		)
	}
)
}
var hello = new Observer({name:"xiaoming",age:20});
hello.data.name;
hello.data.name = "xiaohong"

