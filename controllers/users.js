const {response } = require('express');

const usuariosGet = (req, res) => {
    const {query, name, apikey} = req.query;
    res.json({id: 1,
    mensaje: 'Get api - desde el controlador',
    query,
    name,
    apikey
    });

}
const usuariosPost = (req, res = response) => {
    const  {name} = req.body
res.json({
    msj:  "HOLA",
    name
});

}
const usuariosDelete = (req, res) => {
    
    res.json({id: 1,
    mensaje: 'DELETE api - desde el controlador'
    });

}
const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
    mensaje: 'PUT api - desde el controlador',
    id
    });

}
const usuariosPatch = (req, res) => {
    
    res.json({id: 1,
    mensaje: 'PATCH api - desde el controlador'
    });

}


module.exports ={ 

    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut,
    usuariosPatch
}