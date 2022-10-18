const { sequelize } = require('../connection')

const Class = sequelize.define('class', {
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
    styleId: {                                            
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    schema: 'app'
}); 

Style.hasMany(Class,{
    foreignKey: "styleId"
});
Class.belongsTo(Style);


module.exports = {
    Class
}