const mongoose = require('mongoose')
import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const UserScheme = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true,
    },
    img: {
        type: String
    },
    status: {
        type: String
    },
    password: {
        type: String,
        required: true,
      },

    roles: [
        {
          type: Schema.Types.ObjectId,
          ref: "Role",
        },
    ],
},
    {
        timestamps: true,
        versionKey: false
    })

    UserScheme.statics.encryptPassword = async (password) => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
      };
      
      UserScheme.statics.comparePassword = async (password, receivedPassword) => {
        return await bcrypt.compare(password, receivedPassword)
      }

module.exports = mongoose.model('users', UserScheme)