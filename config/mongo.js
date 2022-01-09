import mongoose from "mongoose";

const DB_URI = process.env.DB_URI || "mongodb://localhost/apibiblioteca";
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log(`DB esta conectado`))
  .catch((err) => console.log(err));
