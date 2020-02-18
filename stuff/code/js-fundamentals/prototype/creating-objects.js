var book = {
  name: 'Catch-22',
  published: 1961,
  author: {
    firstname: 'Joseph',
    lastname: 'Heller'
  }
};

// ----------------------

var book = {};
book.name = 'Catch-22'
book.published =  1961

// ----------------------

function createBook() {
	return {
 		name: 'Catch-22',
  		published: 1961,
	  	author: {
    		firstname: 'Joseph',
    		lastname: 'Heller'
	  	}
	}
}

var book = createBook();
book.name // Catch-22

// ----------------------


function createBook(name, published) {
	return { name, published }
}

var book1 = createBook('Catch-22', 1987);
var book2 = createBook('Catch-34', 1934);

// ----------------------

function Book(name, published) {
	this.name = name
	this.published = published
}

var book1 = new Book('Catch-22', 1987)
var book2 = new Book('Catch-34', 1934)

Book.prototype.titleInUpperCase = function() {
	return this.name.toUpperCase()
}

book1.titleInUpperCase()
book2.titleInUpperCase()

// ----------------------





