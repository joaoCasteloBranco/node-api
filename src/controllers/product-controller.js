const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const repository = require('../repositories/product-repository')

exports.get = (req, res, next) => {
  repository
    .get()
    .then((data) => {
      res.status(200).send(data)
    }).catch(e => {
      res.status(500).send(e)
    })
}

exports.getBySlug = (req, res, next) => {
  repository
    .getBySlug(req.params.slug)
    .then((data) => {
      res.status(200).send(data)
    }).catch(e => {
      res.status(500).send(e)
    })
}

exports.getById = (req, res, next) => {
  repository
    .getById(req.params.id)
    .then((data) => {
      res.status(200).send(data)
    }).catch(e => {
      res.status(500).send(e)
    })
}

exports.getByTag = (req, res, next) => {
  repository
    .getByTag(req.body.tag)
    .then((data) => {
      res.status(200).send(data)
    }).catch(e => {
      res.status(500).send(e)
    })
}

exports.post = (req, res, next) => {
  repository
    .create(req.body).then(() => {
      console.log("Product Saved into DB")
      res.status(201).send({ message: "Product has been registered " })
    }).catch(e => {
      console.log(e)
      res.status(201).send({ message: "Failed to register" })
    })


}

exports.put = (req, res, next) => {
  const id = req.params.id
  repository
    .update(id, req.body)
    .then(() => {
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
  repository
    .delete(id)
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