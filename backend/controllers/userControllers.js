const AsyncHandler = require("express-async-handler");

const User = require("../Models/userModel");

const generateToken = require("../config/generateToken");


const registerUser = AsyncHandler(async (req,res) =>{
    
    const {name, email,password,pic } = req.body;

    if( !name || !email || !password){
        res.status(400);
        throw new Error("Fill up all the fields");
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("Already registered");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if(user){
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email:user.email,
        pic:user.pic,
        token: generateToken(user._id)

    })
    }else{
        res.status(400);
        throw new Error("Failed to create user");
    }
})

const authUser = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

  const Allusers = AsyncHandler(async (req,res) =>{
    const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  if(users.length === 0){
    return res.status(404).send("No user found.");
  }
  res.send(users);




  })


module.exports = {registerUser,authUser,Allusers}
