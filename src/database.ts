import { createPool } from "mysql2/promise";

export async function connect(){

   const connection = await createPool({
        //modifier ce fichier en fonction de votre base de données

       
       host: 'localhost',
        user: 'root',
        password: '2602754',
        database: 'test'
        
    });
    
    return connection;
}