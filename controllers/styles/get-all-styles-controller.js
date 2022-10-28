const { Style } = require('../../db')

function getAllStylesController(req, res) {
  Style.findAll().then(res.send)
}
  
  module.exports = {
    getAllStylesController,
 }
  