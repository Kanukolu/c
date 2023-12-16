const express=require('express');

const router=express.Router();
const authorization=require('../util/auth')
const controllers=require('../controllers/controllers')

router.post('/user/signup',controllers.signUp);
router.post('/user/login',controllers.login)

router.post('/user/personalmessage',authorization,controllers.personalMsg)
//router.get('/user/allchat',controllers.allChat)

router.get('/user/allchat/:lid',controllers.allChat)
module.exports=router