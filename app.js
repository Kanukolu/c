const express= require('express')

const bcrypt=require('bcrypt')

const jwt=require('jsonwebtoken')
const path =require('path')

require('dotenv').config();

const {User,personalMsg,Group,Admin}=require('./models/models')

const sequelize=require('./util/db')

const route=require('./routes/routes')

const cors=require('cors')

User.hasMany(personalMsg)

personalMsg.belongsTo(User)

// User.hasMany(Group,{foreignKey:'creator'});
// Group.belongsTo(User,{foreignKey:'creator'});

User.belongsToMany(Group,{through:'usergroup'})
Group.belongsToMany(User,{through:'usergroup'}) 

Group.hasMany(personalMsg);
personalMsg.belongsTo(Group)

User.hasMany(Admin)
Admin.belongsTo(User)
Group.hasMany(Admin);
Admin.belongsTo(Group)
sequelize.sync({alter:true})
//sequelize.drop({force:true})

const app=express();

app.use(express.static(path.join(__dirname,'public')))

app.use(express.json())

// app.use(cors({
//     origin:'http://127.0.0.1:5500',
//     methods:['put','get','delete','post']
// }))
app.use(cors())

app.use('/',route)

app.listen(3000)