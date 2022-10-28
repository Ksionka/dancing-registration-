const { createStyleController } = require('./create-styles-controller')
const { updateStyleController } = require('./update-styles-controller')
const { getAllStylesController } = require('./get-all-styles-controller')
const { getOneStyleController } = require('./get-one-styles-controller')
const { deleteStyleController } = require('./delete-styles-controller')

module.export = {
  createStyleController,
  updateStyleController,
  getAllStylesController,
  getOneStyleController,
  deleteStyleController,
}
