const { Class } = require('../../db')

function createClassController(req, res) {
  Class.create({
        title: req.body.title,
        teacher: req.body.teacher,
        start: new Date(req.body.start),
        end: new Date(req.body.end),
        timetable: req.body.timetable,
        level: req.body.level,
        styleId: req.body.styleId,             
    
      }).then((Class) => {
        res.send({
          message: 'Class has been created!',
          Class,
        })
      }).catch((error) => {
        res.send({
          message: 'Class has not been created!',
        })
      })
}

module.exports = {
    createClassController,
}
