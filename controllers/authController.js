import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new userModel({
      name: req.body.name,
      surname: req.body.surname,
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("İstifadəçi hesabı uğurla yaradıldı");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });

    if (!user) {
      return res.status(400).send("İstifadəçi tapılmadı");
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) 
      return res.status(400).send("Şifrə yanlışdır");

      const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT )
    

    const { password, ...otherDetails } = user.toObject();

    res.cookie("access_token", token, {
        httpOnly: true,
    }).status(200).json({ ...otherDetails });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
