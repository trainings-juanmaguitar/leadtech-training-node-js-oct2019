function getDBconnectionQuery () { return Parse.User.logIn('user', 'pass') }
function getQueryResults (query) { return query.find(); }
function saveQueryResults (results) { return results[0].save({ key: value }); }

function logResultOperation (result) {
	console.log('operation succesful!')
	console.log(result)
}

 // Parse.User.logIn('user', 'pass', {
 //      success: function (query) {
 //        query.find({
 //          success: function (results) {
 //            results[0].save({ key: value }, {
 //              success: function (result) {
 //                // the object was saved
 //              }
 //            });
 //          }
 //        });
 //      }
 //    });
 
getDBconnectionQuery()
	.then(getQueryResults)
	.then(saveQueryResults)
	.then(logResultOperation)

// Parse.User.logIn('user', 'pass')
// 	.then(function (query) {
//       return query.find();
//     })
//     .then(function (results) {
//       return results[0].save({ key: value });
//     })
//     .then(function (result) {
//       // the object was saved
//     });