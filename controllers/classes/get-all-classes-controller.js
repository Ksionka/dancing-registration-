const { Class } = require('../../db')

function getAllClassesController(req, res) {
  Class.findAll({ include: Style }).then(res.send)
}

module.exports = {
  getAllClassesController,
}
