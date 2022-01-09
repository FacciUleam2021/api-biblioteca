import Libro from "../models/Libro";

export const createLibro = async (req,res)=>{
    const { name , anio, link, fkrelacionados, fkautor, fkcategoria, fkeditorial, comentarios} = req.body;
    try {
        const newEditorial = new Libro({
          name , anio, link, fkrelacionados, fkautor, fkcategoria, fkeditorial, comentarios
        });
    
        const editorialSaved = await newEditorial.save();
    
        res.status(201).json(editorialSaved);
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
}
export const getLibros = async (req,res)=>{
    const editorial = await Libro.find();
    return res.json(editorial);
}
export const getLibrosHome = async (req,res)=>{
  const editorial = await Libro.find();
  return res.json({ data: editorial });
}

export const getLibrosSeach = async (req,res)=>{
  const version = req.query.src;
  const editorial = await Libro.find({
    name: {
      $in:[version]
    },
  });

  return res.json({ data: editorial });
}

export const getAllSeach = async (req,res)=>{
  const version = req.query.src;
  const arrays = await Libro.find()
  .populate('fkautor', 'lastname')
  .populate('fkcategoria', 'name');

  return res.json(arrays);
}

export const getLibroById = async (req,res)=>{
    const { editorialId } = req.params;

  const aut = await Libro.findById(editorialId)
  res.status(200).json(aut); 
}

export const getLibroByIdDetalle = async (req,res)=>{
  const { editorialId } = req.params;

const aut = await Libro.findById(editorialId)
.populate('fkautor', 'lastname firstname')
.populate('fkcategoria', 'name')
.populate('fkeditorial', 'name pais')
.populate('fkrelacionados');
res.status(200).json(aut); 
}

export const updateLibroById = async (req,res)=>{
    const updatedEditorial = await Libro.findByIdAndUpdate(
        req.params.editorialId,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedEditorial);
}
export const deleteLibroById = async (req,res)=>{
    const { editorialId } = req.params;

    await Libro.findByIdAndDelete(editorialId);
  
    // code 200 is ok too
    res.status(200).json();
}