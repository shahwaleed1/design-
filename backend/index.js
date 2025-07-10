import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import connectionDB from './DataBase/connectionDB.js';
import Project from './model/projectModel.js';


const app = express();
const port = process.env.PORT;

app.use(cors())

connectionDB()




app.get('/api/', async(req, res)=> {
    res.send('Hello world')
})

app.get('/api/projects', async(req, res) => {
    try{
        const project = await Project.find();
        res.status(200).json(project)
    }
    catch(err){
        return res.status(500).json({ message: 'Error in projects call api ', err })
    }
})



app.listen(port, ()=> console.log(`Server run on Port : ${port}`))

