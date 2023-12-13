const User=require('../models/signup')
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
exports.signUp=(req,res,next)=>{
    // console.log(req.body);
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const password=req.body.password;

    User.findOne({where:{email:email}})
        .then(result=>{
            if(result!=null){
                res.status(200).json({msg:'already exists'})
            }else{

                bcrypt.hash(password,10,(err,hash)=>{
                    User.create({name,email,phone,password:hash})
                        .then(result=>{
                            res.status(200).json({msg:'ok',message:'user created successfully'})
                        }).catch(err=>{
                            throw new Error(err)
                        })
                })

            }
        }).catch(err=>{
            console.log(err);
            res.status(500).json({message:'something went wrong'})
        })


}
exports.login=(req,res,next)=>{
    // console.log(req)
    const email=req.body.email;
    const password=req.body.password;

    User.findOne({where:{email:email}})
        .then(resu=>{
            if(resu!=null){

                bcrypt.compare(password,resu.password,(err,result)=>{
                    if(result==true){
                        const token=jwt.sign(resu.id,process.env.JWT_KEY)
                        res.json({token:token,message:'User login successful',success:true})
                    }else{
                        res.status(401).json({ success: false, message: 'User not authorized' })
                    }
                })
            }else{
                res.status(404).json({ success: false, message: 'User not found' })
            }
        }).catch(err=>console.log(err))
}