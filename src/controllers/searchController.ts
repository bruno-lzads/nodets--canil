import { Request, Response } from "express";
import { creatObjectMenu } from "../helpers/creatObjectMenu";
import { Pet } from '../models/pet'

export const search = (req: Request, res: Response)=>{
    let query: string = req.query.q as string;
    let list = Pet.getFromName(query);

    if(!query){
        res.redirect('/');
        return;
    }
    
    res.render('pages/page',{
        menu: creatObjectMenu(''),
        list,
        query
    })

}