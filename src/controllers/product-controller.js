const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository');


const handleError = (res, error, status = 500, message = 'Internal server error') => {
  res.status(status).send({
    message,
    error: error.message || error
  });
};

exports.get = async (req, res) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    handleError(res, e);
  }
};

exports.getBySlug = async (req, res) => {
  try {
    const data = await repository.getBySlug(req.params.slug);
    if (!data) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send(data);
  } catch (e) {
    handleError(res, e);
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await repository.getById(req.params.id);
    if (!data) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send(data);
  } catch (e) {
    handleError(res, e);
  }
};

exports.getByTag = async (req, res) => {
  try {
    if (!req.body.tag) {
      return res.status(400).send({ message: 'Tag is required' });
    }
    const data = await repository.getByTag(req.body.tag);
    res.status(200).send(data);
  } catch (e) {
    handleError(res, e);
  }
};

exports.post = async (req, res) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ message: 'Product has been registered' });
  } catch (e) {
    handleError(res, e, 400, 'Failed to register product');
  }
};

exports.put = async (req, res) => {
  try {
    const id = req.params.id;
    await repository.update(id, req.body);
    res.status(200).send({ message: 'Product updated' });
  } catch (e) {
    handleError(res, e, 400, 'Failed to update product');
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    await repository.delete(id);
    res.status(200).send({ message: 'Product removed' });
  } catch (e) {
    handleError(res, e, 400, 'Failed to remove product');
  }
};
