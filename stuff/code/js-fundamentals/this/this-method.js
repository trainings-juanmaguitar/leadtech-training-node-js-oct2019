var me = {
	name : "juanma",
	sayHi: function() {
		return me.name
	}
}

me.sayHi()

// ----------------------

var me = {
	name: "juanma",
	sayHi: function() {
		return this.name
	}
}