import Role from "../models/Role";
import User from "../models/users";

import bcrypt from "bcryptjs";

//const faker = require('faker');

export const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "Admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  // verifica usuario
  const user = await User.findOne({ email: "admin.biblioteca@gmail.com" });
  // optener roles
  const roles = await Role.find({ name: { $in: ["Admin"] } });

  if (!user) {
    // create a new admin user
    await User.create({
      username: "admin",
      email: "admin.biblioteca@gmail.com",
      password: await bcrypt.hash("Imperio 789.", 10),
      roles: roles.map((role) => role._id),//****APARTIR DE A1QUI LOS NUEVOS DATOS
      name: "Susana Pacheco",
      img: "https://res.cloudinary.com/stebann/image/upload/v1631310792/profile_b9t64l.png",
      status: "1",
      age: "24",
    });
    console.log('Admin User Created!')
  }
};
