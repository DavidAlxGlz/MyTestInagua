import { Request,Response } from "express";
import { connect } from '../database';

export async function getTest(req:Request, res:Response):Promise<Response> {
    const conn = await connect();
    const test = await conn.query('select * from testi');
    return res.json(test[0])
}

