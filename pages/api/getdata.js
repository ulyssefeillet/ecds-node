import mysql from "mysql2/promise";

export default async function handler(req, res) {
/*

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "ecds",
        user: "root",
        password: "",
    });

    try {
        const query = "SELECT url, date, description, title, author, keywords FROM articles"
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        res.status(200).json({ articles: data });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }*/
    const connection = await mysql.createConnection({
        host     : 'ecds-1.c3opxu6xd3jh.eu-west-3.rds.amazonaws.com',
        user     : 'admin',
        password : 'toto',
        port     : '3306'
      });
      
      try {
        connection.end();
        res.status(200).json({ res: "database connected" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}