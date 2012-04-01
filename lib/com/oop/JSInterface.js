var Interface = {};
var Class = {
	init : function(obj) {
		if(obj.INTERFACE)this.checkInterFace(obj);
	},
	extend: function(newObject, toClone) {
		if(!newObject)
		{
			newObject = {};			
		}
		function inheritance() {
		}
		toClone =new toClone();
		inheritance.prototype = toClone.prototype;
		newObject.prototype = new inheritance();
		newObject.prototype.constructor = newObject;
		newObject.baseConstructor = toClone;
		newObject.superClass = toClone.prototype;
		for(var key in toClone) {
			var obj = toClone[key];
			if(!newObject[key])
				newObject[key] = obj;
		}
		toClone=null;
	},

	implement: function(theObject, theInterface) {
		for(var member in theInterface) {
			if(!theObject[member])theObject[member] = theInterface[member];
		}
		theObject.INTERFACE = theInterface;
	},
	checkInterFace: function(obj) {
		for(var member in obj.INTERFACE) {
			
			if(( typeof obj[member] != typeof obj.INTERFACE[member])) {
				if(console && console.log)
				{
					console.log("WARNING: ",obj," NOT IMPLEMENTED INTERFACE METHOD - " + member);
				}else{
				alert("WARNING: "+obj+" NOT IMPLEMENTED INTERFACE METHOD - " + member);					
				}
			}
		}
		return true;
	}
}