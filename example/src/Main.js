(function(window)
{
	function Main() {
		if(window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}
	}

	function onLoad() {
		Interface.IShape=
		{
			element:Object,
			draw:function(){}
		}
		var NewShape=function()
		{
			Class.implement(this,Interface.IShape);
			this.element = document.createElement("div");
		}
		var Rectangle=function()
		{
			Class.extend(this,NewShape);
			this.draw = function(x,y,w,h,c)
			{
				Shape.drawRect(this.element,x,y,w,h,c);
			}
		}
		var Circle=function()
		{
			Class.extend(this,NewShape);
			this.draw = function(x,y,r,c)
			{
				Shape.drawCircle(this.element,x,y,r,c);
			}
		}
		var obj = new Rectangle();
		obj.draw(0,0,100,100,"#f00");
		document.body.appendChild(obj.element);
		
		var obj2 = new Circle();
		obj2.draw(0,110,25,"#0f0");
		document.body.appendChild(obj2.element);
		
		console.log(obj,obj2)
	}

	Main();
})(window);
