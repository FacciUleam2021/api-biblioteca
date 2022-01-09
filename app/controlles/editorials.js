import Editorial from "../models/Editorial";

export const createEditorial = async (req,res)=>{
    const { name , pais} = req.body;
    try {
        const newEditorial = new Editorial({
            name, pais
        });
    
        const editorialSaved = await newEditorial.save();
    
        res.status(201).json(editorialSaved);
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
}
export const getEditorials = async (req,res)=>{
    const editorial = await Editorial.find();
    return res.json(editorial);
}
export const getEditorialById = async (req,res)=>{
    const { editorialId } = req.params;

  const aut = await Editorial.findById(editorialId);
  res.status(200).json(aut);
    
}
export const updateEditorialById = async (req,res)=>{
    const updatedEditorial = await Editorial.findByIdAndUpdate(
        req.params.editorialId,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedEditorial);
}
export const deleteEditorialById = async (req,res)=>{
    const { editorialId } = req.params;

    await Editorial.findByIdAndDelete(editorialId);
  
    // code 200 is ok too
    res.status(200).json();
}