const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users');
import Role from "../models/Role";
import jwt from "jsonwebtoken";
//TODO: Login!
const loginCtrl = async(req, res) => {
    try {
        
        const mockUser = {
            name: 'Leifer',
            email: 'test@test.com',
            password: '12345678',
            avatar: 'https://i.imgur.com/0mZ4PUR.png'
        }

        const { email, password } = req.body


        if (mockUser.email !== 'test@test.com') {
            res.status(404)
            res.send({ error: 'User not found' })
        }

        const checkPassword = (mockUser.password === password)

        //TODO JWT 👉
        const tokenSession = await tokenSign(mockUser) //TODO: 2d2d2d2d2d2d2
        console.log('hola')
        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({
                data: mockUser,
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }

    } catch (e) {
        httpError(res, e)
    }
}

const signin = async (req, res) => {
    try {
        // EL CUERPO DE CORREO O EL CUERPO DE USERNAME
        const userFound = await userModel.findOne({
            email: req.body.email
        }).populate(
            "roles"
        );
        //VERIFICAR sI EL USUARIO EXISTE EN BASE DE DATOS
        if (!userFound) return res.status(404).json({
            message: "User Not Found"
        });
        //SI EXISTE PASA A VERIFICAR Y DESENCRIPTAR LA CONTRASEÑA
        const matchPassword = await userModel.comparePassword(
            req.body.password,
            userFound.password
        );
        //RETORNA EL RESULATDO
        if (!matchPassword)
            return res.status(409).json({
                token: null,
                message: "Invalid Password",
            });
        //OPTENERMOS EL ROL
        var toles = null
        const roles = await Role.find({
            _id: {
                $in: userFound.roles
            }
        });
        for (let i = 0; i < roles.length; i++) {
            toles = roles[0].name
        }

        const tokenSession = await tokenSign(userFound, toles) //TODO: 2d2d2d2d2d2d2

        //REGISTRO INICIO DE SECCION
        const info ={
            id: userFound._id,
            nombre: userFound.name,
            img: userFound.img,
            role :toles
        }
        const isaccesos = {
            
            data: info,
            tokenSession,
        }
        res.status(200).json({
            isaccesos
        });


    } catch (error) {
        console.log(error);
    }
};


//TODO: Registramos usuario!
const registerCtrl = async(req, res) => {
    try {
        //TODO: Datos que envias desde el front (postman)
        const { email, password, name, age, img , status, username} = req.body
 
        const passwordHash = await encrypt(password) //TODO: (123456)<--- Encriptando!!
         // Creating a new User Object
         const newUser = new userModel({
            email,
            name,
            password: passwordHash,
            age,
            img,
            status,
            username
        });

         // checking for roles
         if (req.body.role) {
            newUser.roles = req.body.role;
        } else {
            const role = await Role.findOne({
                name: "user"
            });
            newUser.roles = [role._id];
        }
        const savedUser = await newUser.save();

        res.send({ savedUser })

    } catch (e) {
        httpError(res, e)
        
    }
}
 const getUseres = async (req,res)=>{
    const useres = await userModel.find();
    return res.json(useres);
}

const getUsuariosById = async (req,res)=>{
    const { userId } = req.params;

  const aut = await userModel.findById(userId)
  res.status(200).json(aut); 
}


module.exports = { loginCtrl, registerCtrl, signin, getUseres, getUsuariosById }