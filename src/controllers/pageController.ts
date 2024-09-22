import {Request, Response} from 'express';  
import { title } from 'process';

import { createMenuObject } from '../helpers/createMenuObject';
import { Temperos } from '../models/temperos';

export const home = (req: Request, res: Response) => {
    let list = Temperos.getAll();
    
    res.render("pages/page", {
        menu: createMenuObject("all"),
        banner: {
            title: "TEMPEROS",
            background: "banner_todos.webp"
        },
        list
    });
}

export const regionais = (req: Request, res: Response) => {
    let list = Temperos.getFromType("Temperos Regionais");
    
    res.render("pages/page", {
        menu: createMenuObject("regionais"),
        banner: {
            title: "TEMPEROS REGIONAIS",
            background: "banner_regional.webp"
        },
        list
    });
}

export const mundo = (req: Request, res: Response) => {
    let list = Temperos.getFromType("Especiarias do Mundo");
    
    res.render("pages/page", {
        menu: createMenuObject("mundo"),
        banner: {
            title: "ESPECIARIAS DO MUNDO",
            background: "banner_especiarias.jpg"
        },
        list
    });
}

export const funcionais = (req: Request, res: Response) => {
    let list = Temperos.getFromType("Ervas e Temperos Funcionais");
    
    res.render("pages/page", {
        menu: createMenuObject("funcionais"),
        banner: {
            title: "ERVAS E TEMPEROS FUNCIONAIS",
            background: "banner_ervas.jpg"
        },
        list
    });
}