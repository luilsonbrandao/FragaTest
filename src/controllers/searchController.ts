import {Request, Response} from 'express';  

import { Temperos } from '../models/temperos';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if (!query) {
        res.redirect("/");
        return;
    }

    let list = Temperos.getFromName(query);

    res.render("pages/page", {
        menu: createMenuObject(""),
        list,
        query
    });
}