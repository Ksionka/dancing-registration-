const { sequelize } = require('../connection')

const Style = sequelize.define('style', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    schema: 'app'
})

module.exports = {
    Style
}