const { Class } = require('../../db')
function deleteClassesController(req, res) {
    const { id } = req.params

  Class.destroy({
    where: {
      id
    }
  }).then(() => {
    res.send({
      message: "Class has been deleted!"
    })
  })
}

module.exports = {
    deleteClassesController
}