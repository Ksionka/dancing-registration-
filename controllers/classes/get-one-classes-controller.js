const { Class } = require('../../db')

function getOneClassController(req, res) {
  const { id } = req.params

  Class.findByPk(id, { include: Style }).then((item) => {
    if (item === null) {
      res.send({
        message: 'Style has not been found!',
      })

      return
    }

    res.send(Class)
  })
}

module.exports = {
  getOneClassController,
}
