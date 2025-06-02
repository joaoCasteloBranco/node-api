const mongose = require('mongoose')
const Product = mongose.model('Product')

exports.get = () => {
  return Product.find({})
}

exports.getBySlug = (slug) => {
  return Product.findOne({
    slug: slug
  })
}

exports.getById = (id) => {
  return Product.findById({
    id
  })
}

exports.getByTag = (tag) => {
  return Product.findOne({
    tags: tag
  })
}

exports.create = (data) => {
  const product = new Product(data)
  return product
    .save()
}

exports.update = (id, data) => {
  return Product
    .findByIdAndUpdate(
      id, {
      $set: {
        title: data.title,
        description: data.description,
        price: data.price,
        slug: data.slug
      }
    }
    )
}

exports.delete = (id) => {
  return Product
    .findByIdAndDelete(id)
}