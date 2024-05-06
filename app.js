const express = require('express')
const Sequelize = require('sequelize')
const { Json } = require('sequelize/lib/utils')
const app=express()

//parametros de conexion
const sequelize= new Sequelize('data', 'root','',{
    host:'localhost',
    dialect:'mysql'
})

//definimos modelo
const clientesModel=sequelize.define('clientes',{
"id":{type:Sequelize.INTEGER, primaryKey:true},
"nomcli":Sequelize.STRING,
"apecli":Sequelize.STRING,
"nrodnicli":Sequelize.STRING,
"telcli":Sequelize.STRING
})

//autentificacion y mostrar registros
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
    return clientesModel.findAll({attributes:['id','nomcli','apecli','nrodnicli','telcli']});
  })
  .then(clientes => {
    const resultados = JSON.stringify(clientes);
    console.log(resultados);
  })
  .catch(error => {
    console.error('Error:', error);
  });

app.listen(3000, ()=>{
    console.log("conectado")
})