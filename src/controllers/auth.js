const mongoose = require('mongoose');
//const authModel = require('../models/auth');


//MÉTODO PARA VALIDAR EL TOKEN DE AUTENTICACIÓN DEL USUARIO QUE CONSUME LA API.
exports.validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    const apiKey = 'DSM1LYKDxeDi9aIOoDvRiCNeQ9w7duUbdMwwhgJP6aD8RYAmdx';

    if (!token){ 
        return res.status(403).send({message: 'The request does not have the authentication header.'});
    }
    else {
        if (token != apiKey) {
            return res.status(401).send({message: 'Invalid token.'});
        }
        else {
            next();
        }
    }
}