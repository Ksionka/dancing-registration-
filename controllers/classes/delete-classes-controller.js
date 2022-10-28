const { Class } = require('../../db')

function deleteClassController(req, res) {
  const { id } = req.params

  Class.destroy({
    where: {
      id,
    }
  }).then(() => {
    res.send({
      message: 'Class has been deleted!'
    })
  })
}

module.exports = {
  deleteClassController,
}
