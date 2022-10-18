const { Style } = require('../../db')
const Styles = []
function getStyleById(id) {
  return Styles.find((item) => item.id === Number(id))
}

function getOneStylesController(req, res) {
    const { id } = req.params

  Style.findByPk(id).then((Style) => {
    if (Style === null) {
      res.send({
        message: "Style has not been found!",
      })

      return
    }

    res.send(Style)
  })
}

module.exports = {
    getOneStylesController
}