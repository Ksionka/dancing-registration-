const { sequelize } = require ('./db/connection')
sequelize.sync({ force: true })
