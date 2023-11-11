// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "cascade",
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "product_id",
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unqiue: false
  },
  as: "my_products"
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unqiue: false
  },
  as: "my_tags"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
