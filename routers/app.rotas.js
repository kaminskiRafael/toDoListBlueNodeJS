const express = require('express');
const TodolistController = require('../controllers/todolist-controller');
const router = express.Router();
const todolistController = new TodolistController();

router.get('/', todolistController.getTarefa);

router.get('/:id', todolistController.getTarefaById);

router.post('/add', todolistController.createTarefa);

router.put('/:id', todolistController.putTarefa);

router.delete('/:id', todolistController.delTarefa);

module.exports = router;