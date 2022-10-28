const {
  createStyleController,
  updateStyleController,
  getAllStylesController,
  getOneStyleController,
  deleteStyleController,
} = require('./controllers/styles') 

function initStylesRoutes(app) {
  app.post('/Styles', createStyleController)
  app.get('/Styles', getAllStylesController)
  app.get('/Styles/:id', getOneStyleController)
  app.put('/styles/:id', updateStyleController)
  app.delete('/Styles/:id', deleteStyleController)
}

module.exports = {
  initStylesRoutes,
}
