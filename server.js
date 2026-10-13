import express from "express";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.use(express.json());


app.get('/api/diakok', async (req, res)=>{
    try{
        const [rows] = await db.query("SELECT * FROM diakok");
        res.status(200).json(rows);
    }catch(error){
        res.status(500).json({hiba: "Adatbzis hiba"})
    }
});

app.listen(port, () => {
  console.log(`A szerver a ${port} porton fut.`);
});