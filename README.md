This is a JavaScript Framework to create Interfaces and Extensions for objects. Also it checks if an object complies with the interface. 

#Creating an Interface
To create an Interface you can either create an object within the Interface object or as a standalone object. Set the functions/variable as shown below.

    Interface.IView=
    {
     show:function(){},
     hide:function(){},
     name:""
    }

#Creating A Class which Implements an Interface
Now lets create a Class. You can create a Class in two ways; as a literal Object or a function Object. Below is an example of a function Object. 

First we call the Class.implement function and pass in 'this' referring to the current object (View) and then the Interface IView.

I've create a prototype method called 'className' and provided a String. I then set the name variable which is inherited from the Interface.

Finally I call the Class.init and pass in the current object (View). This will do an inheritance check.

    var View = function()
    {
     Class.implement(this,Interface.IView);
     View.prototype.className="View";
     this.name="hello";
     Class.init(this);
    }

Great this will work fine. But lets check to see if the inheritance check works.

Set the 'name' variable to null and log a new View Class as the output.

         ...
        this.name=null;
        Class.init(this);
        }
        console.log(new View());

Output 

    WARNING: View NOT IMPLEMENTED INTERFACE METHOD - name 


Cool, so as you can see the framework detected that we did not implement the Class properly.

#Extending a Class
Create an object, call the 'Class.extend' function, pass in  the current Class/or the class you want to extend to and then provide the Class you wish to extend. 

In this Example I have extended the View Class and I have change the 'className' variable which was created in the View Class class as a prototype object. 

    var CustomView = function()
    {
     Class.extend(this,View);
      this.className = "CustomView";
     Class.init(this);
     }

Now log the two Classes as below:

    console.log(new CustomView());
    console.log(new View());


Output
If you use chrome and check the console you can inspect the objects and see the 'className'.

    CustomView
    INTERFACE: Object
    baseConstructor: View
    className: "CustomView"
    hide: function (){}
    name: "hello"
    prototype: inheritance
    show: function (){}
    superClass: undefined
    __proto__: Object


    View
    INTERFACE: Object
    hide: function (){}
    name: "hello"
    show: function (){}
    __proto__: Object
     className: "View"
     constructor: function ()
     __proto__: Object

Both className's are different but if we don't change the 'className' in the CustomView Class then they would appear as 'View'.

#Calling Super
If you override a Class and you want to call the super Class you can use the super_ method. Provide the Object and the method name.

    var CustomView = function()
    Class.extend(this, DisplayObect);
    this.build = function() {
		Class._super(this, "build");
	}
	Class.init(this);
    }

