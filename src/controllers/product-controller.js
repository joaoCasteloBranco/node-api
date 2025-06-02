const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = (req, res, next) => {
  Product
    .find({}).then((data) => {
      res.status(200).send(data)
    }).catch(e => {
      res.status(500).send(e)
    })
}

exports.getBySlug = (req, res, next) => {
  Product
    .findOne({
      slug: req.params.slug
    }).then((data) => {
      res.status(200).send(data)
    }).catch(e => {
      res.status(500).send(e)
    })
}

exports.getById = (req, res, next) => {
  Product
    .findById({}).then((data) => {
      res.status(200).send(data)
    }).catch(e => {
      res.status(500).send(e)
    })
}

exports.getByTags = (req, res, next) => {
  Product
    .findOne({
      tags: req.params.tag
    }).then((data) => {
      res.status(200).send(data)
    }).catch(e => {
      res.status(500).send(e)
    })
}

exports.post = (req, res, next) => {
  const product = new Product(req.body)
  product
    .save()
    .then(() => {
      console.log("Product Saved into DB")
      res.status(201).send({ message: "Product has been registered " })
    }).catch(e => {
      console.log(e)
      res.status(201).send({ message: "Failed to register" })
    })


}

exports.put = (req, res, next) => {
  const id = req.params.id
  Product
    .findByIdAndUpdate(
      id, {
      $set: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        slug: req.body.slug
      }
    }
    ).then(() => {
      res.status(200).send({
        message: "Product updated"
      })
    }).catch(e => {
      res.status(400).send({
        message: "Failed to update product"
      })
    })

}

exports.delete = (req, res, next) => {
  const id = req.params.id
  Product
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({
        message: "Product removed"
      })
    }).catch(e => {
      res.status(400).send({
        message: "Failed to remove",
        data: e
      })
    })
}