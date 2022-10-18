const { Class } = require('../../db')
const Classes = []
function getClassById(id) {
  return Classes.find((item) => item.id === Number(id))
}

function getOneClassesController(req, res) {
    const { id } = req.params

  Class.findByPk(id,{ include: Style}).then((Class) => {
    if (Class === null) {
      res.send({
        message: "Style has not been found!",
      })

      return
    }

    res.send(Class)
  })
}

module.exports = {
    getOneClassesController
}