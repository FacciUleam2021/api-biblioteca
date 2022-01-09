import pool from "../../config/database";

//-----------------------------LIST AUTORES---------------
export const getCategorias = async (req, res) => {
  //enviar en formato bson la matriz
  await pool.query("SELECT * FROM categorias", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

//-----------------------------CREATE AUTORES---------------
export const createCategoria = async (req, res) => {
  const { id, names } = req.body;
  try {
    const newLink = {
      id,
      names,
    };
    await pool.query(
      "INSERT INTO categorias set ?",
      [newLink],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "categorias Saved" });
        } else {
          console.log(err);
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

//-----------------------------OPTENER AUTOR BY ID---------------

export const getCategoriaById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  pool.query("SELECT * FROM categorias WHERE id = ?", [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
};

//-----------------------------EDITAMOS---------------
export const updateCategoriaById = async (req,res)=>{
      const { id } = req.params;
      const { names,} = req.body; 
      const newLink = {
        names,
     };
     await pool.query('UPDATE categorias set ? WHERE id = ?', [newLink, id],(err, rows, fields) => {
        if(!err) {
          res.json({status: 'categorias Update'});
        } else {
          console.log(err);
        }
      });
}

//-----------------------------Eliminamos---------------
export const deleteCategoriaById = async (req,res)=>{

    const { id } = req.params;
    await pool.query('DELETE FROM categorias WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'categorias Deleted'});
    } else {
      console.log(err);
    }
  });
}