const { Style } = require('../../db')

function createStyleController(req, res){
  Style.create({
      title: req.body.title
    }).then((Style) => {
      res.send({
        message: 'Style has been created!',
        Style,
      })
    }).catch((error) => {
        res.send({
          message: 'Style has not been created!',
        })
      })
}

module.exports = {
  createStyleController,
}
