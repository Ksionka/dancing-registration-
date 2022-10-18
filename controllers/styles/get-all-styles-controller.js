const { Style } = require('../../db')
const Styles = []
function getStyleById(id) {
  return Styles.find((item) => item.id === Number(id))
}

function getAllStylesController(req, res) {
    Style.findAll().then((data) => res.send(data))
  }
  
  module.exports = {
    getAllStylesController
  }
  