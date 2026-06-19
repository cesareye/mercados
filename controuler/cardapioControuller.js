// src/controllers/CardapioController.js
const { cardapioOficial } = require('../models/cardapioModel');

const listarCardapio = (req, res) => {
    console.log("[LOG] Alguém solicitou o cardápio oficial no servidor.");

    // Devolvemos o Status 200 (OK) e o pacote JSON com os dados
    return res.status(200).json({
        sucesso: true,
        quantidade_itens: cardapioOficial.length,
        dados: cardapioOficial
    });
};

module.exports = { listarCardapio };
