const { Class } = require('../../db')
function updateClassesController(req, res) {
  const { id } = req.params
  const { title } = req.body
  const { teacher } = req.body
  const { start } = req.body
  const { end } = req.body
  const { timetable } = req.body
  const { level } = req.body

    Class.update({
    title,
    teacher,
    start,
    end,
    timetable,
    level
  }, {
    where: {
      id
    }
  }).then((result) => {
    if (result[0]) {
      res.send({
        message: "Class has been changed!",
        Class: result[1]
      })

      return
    }
    
    res.send({
      message: "Class has been not changed!",
    })
  })
}

module.exports = {
    updateClassesController
}
