var Shape=
{
	drawRect:function(obj,x,y,w,h,c)
	{
		this.defaultStyle(obj);
		this.setXYWHC(obj,x,y,w,h,c);
	},
	drawCircle:function(obj,x,y,r,c)
	{
		this.defaultStyle(obj);
		this.setXYWHC(obj,x,y,r*2,r*2,c);
		obj.style.moxBorderRadius=r+"px";
		obj.style.webkitBorderRadius=r+"px";
		obj.style.borderRadius=r+"px";
	},
	drawTriangle:function(obj,x,y,w,h,c)
	{
		this.defaultStyle(obj);
		this.setXYWHC(obj,x,y,0,0);
		obj.style.borderLeft= (w/2)+"px solid transparent";
		obj.style.borderRight= (w/2)+"px solid transparent";
		obj.style.borderBottom= h+"px solid "+c;
	},
	setXYWHC:function(obj,x,y,w,h,c)
	{
		obj.style.top = y+"px";
		obj.style.left = x+"px";
		obj.style.width = w+"px";
		obj.style.height = h+"px";
		obj.style.backgroundColor = c;
	},
	defaultStyle:function(obj)
	{
		obj.style.position="absolute";
		obj.style.padding="0";
		obj.style.margin="0";
	}
}
