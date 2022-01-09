const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

exports.upload = upload.single('myFile')

export const resizeImages = async (req, res) => {
    let name= req.file.originalname
    let pathss = name;
     res.json(pathss)
  };

exports.uploadFile = (req, res) => {
    let name= req.file.originalname
     let pathss = name;
    res.json(pathss)
}