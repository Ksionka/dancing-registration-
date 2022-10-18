const { Style } = require('../../db')
function createStylesController(req, res){
    Style.create({
        title: req.body.title
      }).then((Style) => {
        res.send({
          message: "Style has been created!",
          Style
        })
      }).catch((error) => {
        console.log(error)
        res.send({
          message: "Style has not been created!",
        })
      })
}

module.exports = {
    createStylesController
}