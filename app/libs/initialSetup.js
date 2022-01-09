import Role from "../models/Role";
import User from "../models/users";

import bcrypt from "bcryptjs";

import pool from "../../config/database";

//const faker = require('faker');



export const createAdministrador = async () => {
  try {
    const newLink = {
      id: 1,
      username: 'Susan',
      name: 'Susana Pacheco',
      age: '24',
      email: 'admin.biblioteca@gmail.com',
      img: 'https://res.cloudinary.com/stebann/image/upload/v1631310792/profile_b9t64l.png',
      status: '1',
      password: await bcrypt.hash("12345678", 10),
      rol: 1,
    };
    await pool.query(
      "INSERT INTO users set ?",
      [newLink]);
    console.log('ok admin')
  } catch (error) {
    console.log(error);
  }
  // verifica usuario
 
};
