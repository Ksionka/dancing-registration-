const { createClassesController } = require('./create-classes-controller')
const { updateClassesController } = require('./update-classes-controller')
const { getAllClassesController } = require('./get-all-classes-controller')
const { getOneClassesController } = require('./get-one-classes-controller')
const { deleteClassesController } = require('./delete-classes-controller')

module.export = {
    createClassesController,
    updateClassesController,
    getAllClassesController,
    getOneClassesController,
    deleteStylesController
}