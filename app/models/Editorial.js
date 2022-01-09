import { Schema, model } from "mongoose";

const editorialSchema = new Schema(
    {
     name: String,
     pais: String,
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Editorial", editorialSchema);