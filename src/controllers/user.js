const userModel = require('../models/user');


//MÉTODO PARA OBTENER TODOS LOS REGISTROS DE USUARIOS.
exports.getAll = async (req, res) => {

    try {
        const data = await userModel.find();
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.status(422).json({message: error.message});
    }
}

//MÉTODO PARA OBTENER UN REGISTRO DE USUARIO.
exports.get = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await userModel.findById(id);

        if (!data) {
            res.status(400).json({message: `The ID ${id} does not exist.`});
        }
        else {
            res.json(data);
        }
    }
    catch (error) {
        console.log(error);
        res.status(422).json({message: error.message});
    }
}

//MÉTODO PARA INSERTAR UN REGISTRO DE USUARIO.
exports.insert = async (req, res) => {
    const { body } = req;

    try {
        const data = await userModel.create(body);
        res.json({message: `The record with ID ${data._id} was created.`});
    }
    catch (error) {
        console.log(error);
        res.status(422).json({message: error.message});
    }
}

//MÉTODO PARA ACTUALIZAR UN REGISTRO DE USUARIO.
exports.update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const data = await userModel.findByIdAndUpdate(id, body);

        if (!data) {
            res.status(400).json({message: `The ID ${id} does not exist.`});
        }
        else {
            res.json({message: `The record with ID ${id} was updated.`});
        }
    }
    catch (error) {
        console.log(error);
        res.status(422).json({message: error.message});
    }
}

//MÉTODO PARA ELIMINAR UN REGISTRO DE USUARIO.
exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await userModel.findByIdAndDelete(id);

        if (!data) {
            res.status(400).json({message: `The ID ${id} does not exist.`});
        }
        else {
            res.json({message: `Registration with ID ${id} was deleted.`});
        }
    }
    catch (error) {
        console.log(error);
        res.status(422).json({message: error.message});
    }
}
