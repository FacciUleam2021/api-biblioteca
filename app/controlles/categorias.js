import Categoria from "../models/Categoria";

export const createCategoria = async (req,res)=>{
    const { name } = req.body;
    try {
        const newcategoria = new Categoria({
            name
        });
    
        const categoriaSaved = await newcategoria.save();
    
        res.status(201).json(categoriaSaved);
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
}
export const getCategorias = async (req,res)=>{
    const categoria = await Categoria.find();
    return res.json(categoria);
}
export const getCategoriaById = async (req,res)=>{
    const { categoriaId } = req.params;

  const aut = await Categoria.findById(categoriaId);
  res.status(200).json(aut);
    
}
export const updateCategoriaById = async (req,res)=>{
    const updatedCategoria = await Categoria.findByIdAndUpdate(
        req.params.categoriaId,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedCategoria);
}
export const deleteCategoriaById = async (req,res)=>{
    const { categoriaId } = req.params;

    await Categoria.findByIdAndDelete(categoriaId);
  
    // code 200 is ok too
    res.status(200).json();
}