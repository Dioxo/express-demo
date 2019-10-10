const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

// Obtenir info
router.get('/', async (req, res) => {
  try {
    const result = await controller.getMessages();
    response.success(req, res, result, 200);
  } catch (e) {
    response.error(req, res, e, 500);
  }

});

// Ajouter dans une BDD
router.post('/', async (req, res) => {
  try {
    const result = await controller.addMessage(req.body.user, req.body.message);
    response.success(req, res, result, 201);
  } catch (e) {
    response.error(req, res, e, 404);
  }

});

module.exports = router;
