const { Style } = require('../../db')

function getOneStyleController(req, res) {
  const { id } = req.params

  Style.findByPk(id).then((item) => {
    if (item === null) {
      res.send({
        message: 'Style has not been found!',
      })

      return
    }

    res.send(Style)
  })
}

module.exports = {
    getOneStyleController,
}
