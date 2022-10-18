const {
    createStylesController,
    updateStylesController,
    getAllStylesController,
    getOneStylesController,
    deleteStylesController
  } = require('./controllers/styles') 

  function initStylesRoutes(app) {
    app.post('/Styles', updateStylesController),
    app.get('/Styles', getAllStylesController),
    app.get('/Styles/:id', getOneStylesController),
    app.put('/styles/:id', updateStylesController),
    app.delete('/Styles/:id', deleteStylesController)
  }

  module.exports = {
    initStylesRoutes
  }
