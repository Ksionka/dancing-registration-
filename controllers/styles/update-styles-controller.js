const { Style } = require('../../db')
function updateStyleController (req, res) {
  const { id } = req.params
  const { title } = req.body

  Style.update({
    title,
  }, {
    where: {
      id,
    }
  }).then((result) => {
    if (result[0]) {
      res.send({
        message: 'Style has been changed!',
        Style: result[1]
      })

      return
    }
    
    res.send({
      message: 'Style has been not changed!',
    })
  })
}

module.export = {
  updateStyleController,
}
