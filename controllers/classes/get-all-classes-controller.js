const { Class } = require('../../db')
const Classes = []
function getClassById(id) {
  return Classes.find((item) => item.id === Number(id))
}

function getAllClassesController(req, res) {
    Class.findAll({ include: Style}).then((data) => res.send(data))
}

module.exports = {
    getAllClassesController
}