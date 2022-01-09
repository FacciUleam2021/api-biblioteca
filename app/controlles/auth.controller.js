import pool from "../../config/database";

//-----------------------------LIST AUTORES---------------
export const getAutors = async (req, res) => {
  //enviar en formato bson la matriz
  await pool.query("SELECT * FROM autor", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

//-----------------------------CREATE AUTORES---------------
export const createAutor = async (req, res) => {
  const { id, firstname, lastname } = req.body;
  try {
    const newLink = {
      id,
      firstname,
      lastname,
    };
    await pool.query(
      "INSERT INTO autor set ?",
      [newLink],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Autor Saved" });
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

export const getAutorById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  pool.query("SELECT * FROM autor WHERE id = ?", [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
};

//-----------------------------EDITAMOS---------------
export const updateAutorById = async (req,res)=>{
      const { id } = req.params;
      const { firstname, lastname} = req.body; 
      const newLink = {
        firstname, lastname
     };
     await pool.query('UPDATE autor set ? WHERE id = ?', [newLink, id],(err, rows, fields) => {
        if(!err) {
          res.json({status: 'Autor Update'});
        } else {
          console.log(err);
        }
      });
}

//-----------------------------Eliminamos---------------
export const deleteAutorById = async (req,res)=>{

    const { id } = req.params;
    await pool.query('DELETE FROM autor WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Autor Deleted'});
    } else {
      console.log(err);
    }
  });
}