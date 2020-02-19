var cache = {}

function getUserDetailsFromApi(id) {
	if (cache[id]) {
		return Promise.resolve(cache[id])
	}
	else {
		return new Promise(function(resolve) {
			const url = 'http://mydomain.com/user/' + id
			request.get(url, function(result) {
				cache[id] = result
				resolve(result)
			})
		})		
	}

}

getUserDetailsFromApi(id)
	.then(console.log)