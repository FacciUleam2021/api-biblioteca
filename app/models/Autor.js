import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
      firstname: String,
      lastname: String,
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Autor", productSchema);
  