
import express from 'express';
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors())

// import UserModel from './src/models/userModel.js';
// const userModel = new UserModel();

// const result = await userModel.createUser("sample2", "0189322", "samplePassword", "staff");
// console.log(result)

import userController from './src/controllers/userController.js'
app.use('/user', userController)

app.listen(5000, () => {
    console.log("port in 5000");
})