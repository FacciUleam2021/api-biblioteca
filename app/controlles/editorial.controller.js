import pool from "../../config/database";

//-----------------------------LIST AUTORES---------------
export const getEditorials = async (req, res) => {
  //enviar en formato bson la matriz
  await pool.query("SELECT * FROM editorial", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

//-----------------------------CREATE AUTORES---------------
export const createEditorial = async (req, res) => {
  const { id, name, pais } = req.body;
  try {
    const newLink = {
        id, name, pais
    };
    await pool.query(
      "INSERT INTO editorial set ?",
      [newLink],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Editorial Saved" });
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

export const getEditorialById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  pool.query("SELECT * FROM editorial WHERE id = ?", [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
};

//-----------------------------EDITAMOS---------------
export const updateEditorialById = async (req,res)=>{
      const { id } = req.params;
      const { name, pais} = req.body; 
      const newLink = {
         name, pais
     };
     await pool.query('UPDATE editorial set ? WHERE id = ?', [newLink, id],(err, rows, fields) => {
        if(!err) {
          res.json({status: 'Editorial Update'});
        } else {
          console.log(err);
        }
      });
}

//-----------------------------Eliminamos---------------
export const deleteEditorialById = async (req,res)=>{

    const { id } = req.params;
    await pool.query('DELETE FROM editorial WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Editorial Deleted'});
    } else {
      console.log(err);
    }
  });
}