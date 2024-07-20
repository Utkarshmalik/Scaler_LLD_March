const UserModel = require("../Models/user.model");
const bcrypt = require('bcrypt');
const { userTypes, userStatus } = require("../utils/constants");
var jwt = require('jsonwebtoken');

const signUp = async (req,res)=>{

    const {name, email, password, userType,userId} = req.body;

    if(!name){
        return res.status(400).send({message:"Failed! UserName doesnot exists"});
    }

    if(!userId){
        return res.status(400).send({message:"Failed! UserId doesn't exists"});
    }

      if(!email){
        return res.status(400).send({message:"Failed! Email doesn't exists"});
    }

    if(!password){
        return res.status(400).send({message:"Failed! Password doesn't exists"});
    }

    if(userType!==userTypes.seller && userType!==userTypes.customer && userType!==userTypes.admin){
        return res.status(400).send({message:`Invalid user type passed , it should be within ${Object.values(userTypes)}`})
    }

    //validate if the email already exists 

    try{

        const userFromDB = await UserModel.findOne(
            {
                $or:[{email:req.body.email},{userId:req.body.userId}]
            }
        );

        if(userFromDB!=null){
            return res.status(400).send({message:"This email id or userId is already in use, please try other combinations"})
        }


        //create hash from the password 
        
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);

        const status = (userType===userTypes.customer)? userStatus.approved : userStatus.pending;



        const userDBobj={
            name:name, 
            email:email,
            password:hashedPassword,
            userId:userId,
            userType:userType, 
            userStatus:status
        };


        const user = new UserModel(userDBobj);
        const reponseFromDB = await user.save();

        return res.status(201).send(reponseFromDB);


    }catch(err){
        return res.status(500).send({message:"Internal Server Error ", err});
    }




}

const signIn = async (req,res)=>{


    const {userId, password} = req.body;

    if(!userId || !password){
        return res.status(400).send({message:"UserId or Password cannot be NULL"});
    }

    try{
          //check if this userId is in out systems or not 

        const user = await UserModel.findOne({userId:userId});

        console.log(user.createdAt);

        if(!user){
                return res.status(400).send({message:"Invalid UserId! Please try again"});
        }

        //password check 
        const isPasswordValid = bcrypt.compareSync(password, user.password);


        if(!isPasswordValid){
            return res.status(400).send({message:"Invalid Password! Please try again"});
        }

        const token = jwt.sign({id:user.userId},"myrandmomsecret",{ expiresIn: '1h' });


        return res.status(200).send({
            name:user.name,
            userId:user.userId,
            email:user.email,
            userType:user.userType,
            userStatus:user.userStatus,
            accessToken:token
        });

    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error ", err});
    }




}



module.exports = {
    signUp, signIn
}




















// The or operator is used to specify that at least one of the conditions in an array of conditions must be met for a document to be included in the results. This is akin to the logical OR operation.


// Model.find({
//   $or: [
//     { condition1 },
//     { condition2 },
//     // ... more conditions
//   ]
// })

// User.find({
//     $or:[
//         {name:"John"},
//         {age:"30"}
//     ]
// })



// The and operator is used to specify that all the conditions in an array of conditions must be met for a document to be included in the results. This is akin to the logical AND operation.

// Model.find({
//   $and: [
//     { condition1 },
//     { condition2 },
//     // ... more conditions
//   ]
// })


// User.find({
//     $and:[
//         {name:"John"},
//         {age:"30"}
//     ]
// })






//combination of or , and , and gt

// User.find({
//   $or: [
//     { $and: [
//       { name: 'John' },
//       { age: { $gt: 30 } }
//     ]},
//     { role: 'admin' }
//   ]
// })



// give me all the users who are either admin or (name is john and age > 30)