import { request,response } from "express"; 
import Mission from "../models/missionModel.js";




async function createMission(req=request,res=response){
    try{
        const {name, crew, spacecraft, destination, status, duration} = req.body;
        const newMission = await Mission.create({
            name,
            crew,
            spacecraft,
            destination,
            status,
            duration
        });
        res.status(201).json(newMission);
    }catch(error){
        
    }
        res.status(500).json({message:"Erro ao criar missão", error:error.message});
}
export default {
    createMission
};