import pool from "../../config/database";

//-----------------------------LIST AUTORES---------------
export const getLibros = async (req, res) => {
  //enviar en formato bson la matriz
  await pool.query("SELECT * FROM libro", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

//-----------------------------getLibrosHome--------------

export const getLibrosHome = async (req, res) => {
    //enviar en formato bson la matriz
    let mot =  "SELECT `COD_DOCUMENTO`, `ID_AUTORES`, `CATEGORIAS`, `NOMBRE_EDITORIAL`,`img`, `TITULO`, `ANO` FROM `documentos_digitales`INNER JOIN `categorias` ON categorias.ID_CATEGORIAS = documentos_digitales.ID_CATEGORIAS INNER JOIN `editoriales` ON editoriales.ID_EDITORIALES = documentos_digitales.ID_EDITORIALES"
    await pool.query("SELECT * FROM libro", (err, rows, fields) => {
      if (!err) {
        res.json({data: rows});
      } else {
        console.log(err);
      }
    });
  };

//-----------------------------getLibrosHome--------------

  export const getAllSeach = async (req,res)=>{
      let a = 'select tabla1.*,tabla2.*  from tabla1,tabla2 where tabla1.id = tabla2.id;'
      let b = "SELECT `id`, FROM libro a INNER JOIN categorias b ON a.fkcategoria = b.id"
    await pool.query("select categorias.*,autor.*,libro.*  from categorias,autor,libro where libro.fkcategoria = categorias.id AND libro.fkautor= autor.id;", (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
  }

//-----------------------------CREATE AUTORES---------------
export const createLibro = async (req, res) => {
  const { id, name,anio,link, fkrelacionados, fkautor, fkcategoria, fkeditorial, documento } = req.body;
  try {
    const newLink = {
         name,anio,link, fkrelacionados, fkautor, fkcategoria, fkeditorial, documento
    };
    await pool.query(
      "INSERT INTO libro set ?",
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

//-----------------------------OPTENER LIBRO BY ID---------------

export const getLibroById = async (req, res) => {
  const { id } = req.params;
  pool.query("SELECT categorias.*,autor.*,libro.*  from categorias,autor,libro WHERE libro.id = ?", [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
};

//-----------------------------EDITAMOS---------------
export const updateLibroById = async (req,res)=>{
      const { id } = req.params;
      const { name,anio,link, fkrelacionados, fkautor, fkcategoria, fkeditorial, documento} = req.body; 
      const newLink = {
        name,anio,link, fkrelacionados, fkautor, fkcategoria, fkeditorial, documento
     };
     await pool.query('UPDATE libro set ? WHERE id = ?', [newLink, id],(err, rows, fields) => {
        if(!err) {
          res.json({status: 'libro Update'});
        } else {
          console.log(err);
        }
      });
}

//-----------------------------Eliminamos---------------
export const deleteLibroById = async (req,res)=>{

    const { id } = req.params;
    await pool.query('DELETE FROM libro WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'libro Deleted'});
    } else {
      console.log(err);
    }
  });
}