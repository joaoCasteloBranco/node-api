const mongose = require('mongoose')
const Product = mongose.model('Product')

exports.get = async () => {
  return await Product.find({})
}

exports.getBySlug = async (slug) => {
  return await Product.findOne({
    slug: slug
  })
}

exports.getById = async (id) => {
  return await Product.findById({
    id
  })
}

exports.getByTag = async (tag) => {
  return await Product.findOne({
    tags: tag
  })
}

exports.create = async (data) => {
  const product = new Product(data)
  return await product
    .save()
}

exports.update = async (id, data) => {
  return await Product
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

exports.delete = async (id) => {
  return await Product
    .findByIdAndDelete(id)
}