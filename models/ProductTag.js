const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    // define columns /// each unique pair of product_id and tag_id get assigned a new id (primary key)
    id: { // 1
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: { // 1
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
        unique: false
      }
    },
    tag_id: {// 1
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id',
        unique: false
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
