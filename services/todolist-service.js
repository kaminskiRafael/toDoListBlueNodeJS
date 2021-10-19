const Todolist = require('../models/todolist-models');

class TodolistService{
    findAll = async () => await Todolist.find();

    findById = async (id) => await Todolist.findById(id);

    createTarefa = async (tarefa) => {
        return await Todolist.create(tarefa);
    }

    putTarefa = async(id, tarefa) => {
        return await Todolist.updateOne({_id: id}, tarefa);
    }

    delTarefa = async (id) =>{
        return await Todolist.deleteOne({_id: id});
    }
}

module.exports = TodolistService;