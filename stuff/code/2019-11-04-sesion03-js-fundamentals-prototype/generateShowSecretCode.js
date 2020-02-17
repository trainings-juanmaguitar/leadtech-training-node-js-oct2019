function generateShowSecretCode(password) {
	return function() {
        console.log(this)
		return this.isAdmin ? password : 'NO ACCESS!'
	}
}