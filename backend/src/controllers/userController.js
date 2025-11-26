import UserModel from '../models/userModel.js';
import express from 'express';

const router = express.Router();
const userModel = new UserModel();

router.post('/login', async (req, res) => {
    try {

        const {userId, password} = req.body;
        const result = await userModel.userAuthenticate(userId, password);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({response: error.message});  
    }
});

router.post('/register', async (req, res) => {
    try {

        const {name, userId, password, role} = req.body;
        const result = await userModel.createUser(name, userId, password, role);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({response: error.message});  
    }
});

export default router;