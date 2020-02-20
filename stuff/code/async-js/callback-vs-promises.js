 Parse.User.logIn('user', 'pass', {
      success: function (user) {
        query.find({
          success: function (results) {
            results[0].save({ key: value }, {
              success: function (result) {
                // the object was saved
              }
            });
          }
        });
      }
    });

 Parse.User.logIn('user', 'pass')
  .then(user => query.find())
  .then(results => results[0].save({ key: value }))
  .then(function (result) {
    // the object was saved
  })
  .catch(function (err) {
    // an error happened somewhere in the process
  });
