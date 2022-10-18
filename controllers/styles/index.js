const { createStylesController } = require('./create-styles-controller')
const { updateStylesController } = require('./update-styles-controller')
const { getAllStylesController } = require('./get-all-styles-controller')
const { getOneStylesController } = require('./get-one-styles-controller')
const { deleteStylesController } = require('./delete-styles-controller')

module.export = {
    createStylesController,
    updateStylesController,
    getAllStylesController,
    getOneStylesController,
    deleteStylesController
}