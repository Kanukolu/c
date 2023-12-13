const express= require('express')

const bcrypt=require('bcrypt')

const path =require('path')

require('dotenv').config();

const {User,personalMsg}=require('./models/models')

const sequelize=require('./util/db')

const route=require('./routes/signup')

const cors=require('cors')
User.hasMany(personalMsg)

personalMsg.belongsTo(User)

const jwt=require('jsonwebtoken')



const app=express();

app.use(express.static(path.join(__dirname,'public')))

app.use(express.json())

app.use(cors({
    origin:'http://127.0.0.1:5500',
    methods:['put','get','delete','post']
}))

app.use('/',route)

sequelize
.sync()
//sync({force : true})
.then((result) => {
    app.listen(process.env.PORT)
}).catch(e => console.log(e))
