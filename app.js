require('dotenv').config()
const epxress = require('express')
const cors = require('cors')
const app = epxress()
const { dbConnect } = require('./config/mongo')
import './config/mongo';
import { createRoles, createAdmin} from "./app/libs/initialSetup";
import morgan from "morgan";



const PORT = process.env.PORT || 3000
app.use(cors())
app.use(epxress.json())
app.use(morgan("dev"));
app.use(epxress.static('public'));
app.use('/api/1.0', require('./app/routes'))//empty-d.png
app.use(epxress.static('uploads'));



app.listen(PORT, () => {
    console.log(`escucha en ${PORT}`)
})