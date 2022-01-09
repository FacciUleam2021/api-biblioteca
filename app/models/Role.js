import { Schema, model } from "mongoose";

export const ROLES = ["Admin", "user"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);