const express= require('express')

const bcrypt=require('bcrypt')

const path =require('path')

require('dotenv').config();

const User=require('./models/signup')

const sequelize=require('./util/db')

const route=require('./routes/signup')

const cors=require('cors')





const app=express();

app.use(express.static(path.join(__dirname,'public')))

app.use(express.json())

app.use(cors())

app.use('/',route)

sequelize
.sync()
//.sync({force : true})
.then((result) => {
    app.listen(process.env.PORT)
}).catch(e => console.log(e))
