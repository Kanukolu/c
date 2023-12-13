const express=require('express');

const router=express.Router();

const controllers=require('../controllers/signup')

router.post('/user/signup',controllers.signUp);



module.exports=router