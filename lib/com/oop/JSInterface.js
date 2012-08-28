var Interface = {};
/* @class Class
 * @desc OOP JS Framework
 */
var Class = {
	/* @method
	 * @desc validates the Interface
	 * @return Null
	 * */
	init : function(obj) {

		if(obj.INTERFACE)
			this.checkInterFace(obj);
	},
	/* @method
	 * @desc call this super class. Provide the object and the function as String.
	 * @return Null
	 * */
	_super : function(obj, name) {
		obj.baseConstructor[name].call(obj);
	},
	/* @method
	 * @desc extends a Class
	 * @return Null
	 * */
	extend : function(newObject, toClone) {
		if(!newObject) {
			newObject = {};
		}
		function inheritance() {
		}

		if( typeof toClone == "function")
			toClone = new toClone();
		inheritance.prototype = toClone.prototype;
		newObject.prototype = new inheritance();
		newObject.prototype.constructor = newObject;
		newObject.baseConstructor = toClone;
		newObject.superClass = toClone.prototype;
		if( typeof toClone == "function")
			toClone = null;
	},
	/* @method
	 * @desc Creates a new instance of a Class
	 * @return Class
	 * */
	instance : function(toClone) {
		var newObject = {};
		this.extend(newObject, toClone);
		return newObject;
	},
	/* @method
	 * @desc implements an Interface
	 * @return Null
	 * */
	implement : function(theObject, theInterface) {
		for(var member in theInterface) {
			if(!theObject[member])
				theObject[member] = theInterface[member];
		}
		theObject.INTERFACE = theInterface;
	},
	checkInterFace : function(obj) {
		for(var member in obj.INTERFACE) {

			if(( typeof obj[member] != typeof obj.INTERFACE[member])) {
				if(console && console.log) {
					console.log("WARNING: ", obj, " NOT IMPLEMENTED INTERFACE METHOD - " + member);
				} else {
					alert("WARNING: " + obj + " NOT IMPLEMENTED INTERFACE METHOD - " + member);
				}
			}
		}
		return true;
	}
}