const Cat = require('../../models/Cat')

function addCat(req, res) {
  const { name } = req.body
  const kitty = new Cat({ name });
  kitty.save()
    .then( response =>
        res.status(200).json({ msg: `cat w/ name ${name} added properly` })
    )
    .catch( error =>
        res.status(500).json({ msg: error })
    )
}

module.exports = addCat