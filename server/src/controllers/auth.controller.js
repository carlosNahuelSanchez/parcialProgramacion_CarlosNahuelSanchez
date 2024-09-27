import { cookie } from "express-validator";
import { createJwt } from "../helpers/createJwt.js";
import { createUser, getUserByCredentials } from "../models/user.model.js";

export const signInCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByCredentials(email, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await createJwt(user.id);

    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ token, user });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signUpCtrl = async (req, res) => {

  try {
    const {email, password, username} = req.body
    
    const user = {
      "username":username,
      "email":email,
      "password":password
    }

    if (user) {
      createUser(user)
    }

    res.status(200).json({message: "Usuario creado"})

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signOutCtrl = (req, res) => {
  try {
    res.json("Sesion Cerrada")
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMeCtrl = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
