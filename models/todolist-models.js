const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const tdListModelo = new mongoose.Schema({
    nomeTarefa: {type: 'String', required: true},
    descricaoTarefa: {type: 'String', required: true},
    prioridadeTarefa: {type: 'String', required: true},
    dataCriacaoTarefa: {type: 'Date', default: Date.now},
    dataAlteracaoTarefa: {type: 'Date', default: null},
    situacaoTarefa: {type: 'Number', default: 1}
})

const TdList = mongoose.model('tdList', tdListModelo);

module.exports = TdList;