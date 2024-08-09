import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs";

export const SignUpUsers = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // // Check if password is provided
    // if (!password) {
    //   return res.status(400).json({ message: "password is required" });
    // }

    // if (!fullname) {
    //   return res.status(400).json({ message: "Fullname is required" });
    // }

    // if (!email) {
    //   return res.status(400).json({ message: "email is required" });
    // }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createUser.save();

    // console.log(req.body);

    res.status(201).json({ message: "User Created Successfully", createUser });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log("error: ", error);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginUser = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, loginUser.password);
    if (!isMatch || !loginUser) {
      res.status(400).json({ message: "Invalid Email or password" });
    } else {
      res.status(200).json({
        message: "Login Successfully!",
        user: {
          _id: loginUser.id,
          email: loginUser.email,
          password: loginUser.password,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log("error: ", error);
  }
};
