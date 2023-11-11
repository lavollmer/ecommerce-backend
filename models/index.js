// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "cascade"
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "",
  onDelete: ""
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: "product_id",
  onDelete: "cascade"
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: "product_tag",
  onDelte: "cascade"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
