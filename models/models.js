const sequelize=require('../util/db');

const Sequelize=require('sequelize')

const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    phone:Sequelize.STRING,
    password:Sequelize.STRING
})
const personalMsg=sequelize.define('personalmsg',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    msg:Sequelize.STRING
})

module.exports={User,personalMsg}