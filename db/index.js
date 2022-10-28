const { Styles } = require('./models/styles')
const { Classes } = require('./models/classes')

Style.hasMany(Class, {
  foreignKey: 'styleId'
  });

Class.belongsTo(Style);

module.exports = {
  Styles,
  Classes,
}
