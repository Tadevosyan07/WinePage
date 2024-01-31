import { Router } from "express";
import data from "../data.js";
import Wine from "../Model/WineModel.js";
const seedRouter = Router()

seedRouter.get("/",async (req,res) => {
    await Wine.deleteMany({})
    const wineSeed = await Wine.insertMany(data)
    res.json(wineSeed)
})

export default seedRouter