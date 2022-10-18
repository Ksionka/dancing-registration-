const { 
    createClassesController,
    updateStylesController,
    getAllStylesController,
    getOneStylesController,
    deleteStylesController
  } = require('./controllers/classes')

  function initClassesRoutes(app) {
    app.post('/Classes', updateClassesController),
    app.get('/Classes', getAllClassesController),
    app.get('/Classes/:id', getOneClassesController),
    app.put('/Classes/:id', updateClassesController),
    app.delete('/Classes/:id', deleteClassesController)
  }

  module.exports = {
    initClassesRoutes
  }