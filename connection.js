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


//const { Sequelize, DataTypes } = require('sequelize')  // перейменування назв(Identifier 'Sequelize'/'DataTypes ' has already been declared) рядки 31, 33, 35, 82

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
    style: {                                            //вказувати style в цій таблиці, коли є в іншій
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    schema: 'app'
}); 

Class.hasOne(Style, {                                 // хто від кого ?  записувати всередині чи окремо
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
