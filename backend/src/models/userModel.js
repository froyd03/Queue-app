import dotenv from 'dotenv';
dotenv.config();
import database from "../config/database.js";
import jwt from "jsonwebtoken";
import {compare, hash} from "bcrypt";

export default class UserModel {
    constructor(){}

    async createUser(name, userId, password, role) { //create
        try{
            const hashedPassword = await hash(password, 10);

            await database.query(
                "INSERT INTO users(name, userId, password, role) VALUES (?, ?, ?, ?)",
                [name, userId, hashedPassword, role]
            );

            const result = await this.userAuthenticate(userId, password);
            return result;
        }
        catch(error){
            return {"response": error.message , "status": false}; 
        }
    }

    async userAuthenticate(userId, password) { //read
        try{

            const [user] = await database.query("SELECT * FROM users WHERE userId = ?", [userId]);

            if (!user || user.length === 0) {
                throw new Error("User does not exist.");
            }

            const isPasswordMatch = await compare(password, user[0].password);

            if(userId === user[0].userId && isPasswordMatch){
                const payload = {
                    userId: user[0].userId, 
                    role: user[0].role,
                    name: user[0].name
                };
                const token = jwt.sign(payload, process.env.JWTSECRET, {expiresIn: "1h"});

                if(token) return {"response": token, "status": true, role: user[0].role};  
                else throw new Error("Error login! no token");

            }else{
                return {"response": "username or password is incorrect!", "status": false}; 
            }
        }
        catch(error){
            return {"response": error.message , "status": false}; 
        }
    }
}


// async function changePassword(email, password) { //update

//     try{
//         //update logic here
//     }
//     catch(error){
//         return {"response": error.message}; 
//     }
// }