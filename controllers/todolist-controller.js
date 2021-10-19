const mongoose = require('mongoose');
const TodolistService = require('../services/todolist-service');

const todolistService = new TodolistService();

class TodolistController{
    getTarefa = async (req, res) => {
        const tarefas = await todolistService.findAll();
        res.send(tarefas);
    }

    getTarefaById = async (req, res) => {
        const id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(403).send({message: 'ID inválido!!'});
            return;
        }

        const tarefa = await todolistService.findById(id);

        if(!tarefa) {
            res.status(404).send({message:'Tarefa não encontrado!!'});
            return;
        }

        res.status(200).send(tarefa);
    }

    createTarefa = async (req, res) => {
        const tarefa = req.body;
        const tarefaSave = await todolistService.createTarefa(tarefa);
        res.send({message: `Tarefa ${tarefaSave.titulo} salvo com sucesso!!`});
    }
    
    putTarefa = async (req, res) => {
        const id = req.params.id;
        const tarefa = req.body;
        await todolistService.putTarefa(id, tarefa)
        .then(() => {
      res.status(200).send({message: 'Tarefa atualizada com sucesso!!'});
    })
        .catch((err) => res.status(500).send({error: `erro no servdor: ${err}`}));
  }

    delTarefa = async (req, res) => {
        const id = req.params.id;
        await todolistService.delTarefa(id)
        .then(() => res.status(200).send({message: 'Excluido com sucesso'}));
    }
}
module.exports = TodolistController;