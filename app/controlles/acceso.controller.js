import pool from "../../config/database";
const { httpError } = require("../helpers/handleError");
const userModel = require("../models/users");
const { tokenSign } = require("../helpers/generateToken");
const { encrypt, compare } = require('../helpers/handleBcrypt')

export const login = async (req, res) => {
  //enviar en formato bson la matriz
  try {
    console.log(req.body.email);
    await pool.query(
      "SELECT * FROM `users` WHERE `email`=?",
      [req.body.email],
      async (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
          console.log("--------> User does not exist");
          res.status(409).json({
            token: null,
            message: "Invalid Password",
          });
        } else {
          const hashedPassword = result[0].password;

          if (
            await userModel.comparePassword(req.body.password, hashedPassword)
          ) {
            var role = "";
            if (result[0].rol == 1) {
              role = "Admin";
            } else {
              role = "user";
            }
            const tokenSession = await tokenSign(result[0], role);
            console.log("---------> Login Successful");
            const info = {
              id: result[0].id,
              nombre: result[0].name,
              img: result[0].img,
              role: role,
            };
            const isaccesos = {
              data: info,
              tokenSession,
            };
            res.status(200).json({ isaccesos });
          } else {
            console.log("---------> Password Incorrect");
            res.status(409).json({
              token: null,
              message: "Invalid Password",
            });
          }
        }
      }
    );

    //res.status(200).json("isaccesos");
  } catch (e) {
    httpError(res, e);
  }
};

export const registerCtrl = async (req, res) => {
  try {
    //TODO: Datos que envias desde el front (postman)
    const {id, username,
        name,
        age,
        email,
        img,
        status,
        password,
        rol} = req.body;

    const passwordHash = await encrypt(password); //TODO: (123456)<--- Encriptando!!
    // Creating a new User Object

    const newLink = {
      username,
      name,
      age,
      email,
      img,
      status,
      password: passwordHash,
      rol: 2,
    };
    await pool.query(
      "INSERT INTO users set ?",
      [newLink],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "useres Saved" });
        } else {
          console.log(err);
        }
      }
    );
  } catch (e) {
    httpError(res, e);
  }
};

export const getUsuarioById = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    pool.query("SELECT * FROM users WHERE id = ?", [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  };


  
