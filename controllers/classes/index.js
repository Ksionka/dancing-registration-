const { createClassController } = require('./create-classes-controller')
const { updateClassController } = require('./update-classes-controller')
const { getAllClassesController } = require('./get-all-classes-controller')
const { getOneClassController } = require('./get-one-classes-controller')
const { deleteClassController } = require('./delete-classes-controller')

module.export = {
  createClassController,
  updateClassController,
  getAllClassesController,
  getOneClassController,
  deleteClassController,
}
