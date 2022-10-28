const { 
  createClassController,
  updateClassController,
  getAllClassesController,
  getOneClassController,
  deleteClassController,
} = require('./controllers/classes')

function initClassesRoutes(app) {
  app.post('/Classes', createClassController)
  app.get('/Classes', getAllClassesController)
  app.get('/Classes/:id', getOneClassController)
  app.put('/Classes/:id', updateClassController)
  app.delete('/Classes/:id', deleteClassController)
  }

module.exports = {
  initClassesRoutes,
}
