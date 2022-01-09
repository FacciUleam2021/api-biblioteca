import { Schema, model } from "mongoose";

const categoriaSchema = new Schema(
    {
     name: String,
     anio: String,
     link: String,

      fkrelacionados: [
        {
          type: Schema.Types.ObjectId,
        ref: "Libro",
        }
      ],
     fkautor: 
     {
       type: Schema.Types.ObjectId,
       ref: "Autor",
     },
     fkcategoria: 
     {
       type: Schema.Types.ObjectId,
       ref: "Categoria",
     },
     fkeditorial: 
     {
       type: Schema.Types.ObjectId,
       ref: "Editorial",
     },
     comentarios: [
        {
          usuario:{
            type: Schema.Types.ObjectId,
            ref: "users",
          },
          name: String,
          email: String,
          comentario: String,
        }
      ],
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Libro", categoriaSchema);