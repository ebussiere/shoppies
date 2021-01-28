import User from '../models/userModel.js';
import asyncHAndler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';


//@desc     Authenticate User
//@route    post api/users/login
//@access   Public
const authUser = asyncHAndler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && await user.matchPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user.id)
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password.');
  }
});

//@desc     Register User
//@route    post api/users
//@access   Public
const registerUser = asyncHAndler(async (req, res) => {
  const { name, email, password } = req.body;
  const userUserExists = await User.findOne({ email: email });

  if (userUserExists) {
    res.status(401);
    throw new Error('User already exists');
  }
  const user = await User.create({
    name,
    email,
    password
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user.id)
    });
  } else {
    res.status(400);
    throw new Error('User not found');
  }
});

//@desc     Get User Profile
//@route    get api/users/profile/
//@access   Private
const getUserProfile = asyncHAndler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});


export { authUser, getUserProfile, registerUser };