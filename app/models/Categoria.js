import { Schema, model } from "mongoose";

const categoriaSchema = new Schema(
    {
     name: String,
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Categoria", categoriaSchema);