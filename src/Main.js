(function(window) {

	function Main() {
		if(window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}
	}

	function onLoad() {
		Interface.IView=
		{
			show:function(){},
			hide:function(){},
			name:""
		}
		var View = function()
		{
			Class.implement(this,Interface.IView);
			View.prototype.className="View";
			this.name="hello";
			Class.init(this);
		}
		var CustomView = function()
		{
			Class.extend(this,View);
			this.className = "CustomView";
			Class.init(this);
		}
		console.log(new CustomView());
		console.log(new View());
		
	}

	Main();
}
)(window);
