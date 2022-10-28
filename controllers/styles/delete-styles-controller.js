const { Style } = require('../../db')

function deleteStyleController (req, res) {
  const { id } = req.params

  Style.destroy({
    where: {
      id,
    }
  }).then(() => {
    res.send({
      message: 'Style has been deleted!',
    })
  })
}

module.export = {
  deleteStyleController,
}
