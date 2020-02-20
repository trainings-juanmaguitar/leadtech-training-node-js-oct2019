const mathy = x => y => z => (x / y) - z

function mathy(x) {
	return function(y) {
		return function(z) {
			return (x / y) - z
		}
	}
}

mathy(2) → function() →  (3) → function() → (4) → (x / y) - z
							   	   ↓
							   function(z) { return (x / y) - z }

mathy(2)(34)(3)