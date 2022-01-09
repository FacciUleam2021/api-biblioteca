import Autor from "../models/Autor";

export const createAutor = async (req,res)=>{
    const { firstname, lastname } = req.body;
    try {
        const newAutor = new Autor({
            firstname, lastname
        });
    
        const autorSaved = await newAutor.save();
    
        res.status(201).json(autorSaved);
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
}
export const getAutors = async (req,res)=>{
    const autors = await Autor.find();
    return res.json(autors);
}
export const getAutorById = async (req,res)=>{
    const { autorId } = req.params;

  const aut = await Autor.findById(autorId);
  res.status(200).json(aut);
    
}
export const updateAutorById = async (req,res)=>{
    const updatedAutor = await Autor.findByIdAndUpdate(
        req.params.autorId,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedAutor);
}
export const deleteAutorById = async (req,res)=>{
    const { autorId } = req.params;

    await Autor.findByIdAndDelete(autorId);
  
    // code 200 is ok too
    res.status(200).json();
}