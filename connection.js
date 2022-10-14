const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5433/styles' )

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error))

const Style = sequelize.define('Style', {
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
    sequelize,
    Style
}




const sequel = new Sequelize('postgres://postgres:postgres@localhost:5433/classes')

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error))

const Class = sequelize.define('Class', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teacher: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start: {
        type: DataTypes.DATE,
        timestamps: true,
        allowNull: false
    },
    end: {
        type: DataTypes.DATE,
        timestamps: true,
        allowNull: false
    },
    timetable: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    level: {
        type: DataTypes.ENUM,
        values: ['beginner', 'advanced', 'professional']
    },
    style: {                                            
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    schema: 'app'
}); 

Class.hasOne(Style, {                                 
    foreignKey: 'StyleId'
  });
Style.hasOne(Class);

{
    schema: 'app'
}

module.exports = {
    sequel,
    Class
}
