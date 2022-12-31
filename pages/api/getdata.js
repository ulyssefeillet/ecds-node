import mysql from "mysql2/promise";

export default async function handler(req, res) {

    const dbconnection = await mysql.createConnection({
        host     : 'ecds-1.c3opxu6xd3jh.eu-west-3.rds.amazonaws.com',
        user     : 'admin',
        password : '0HEFgic6tLrxV7SszQ18',
        port     : '3306',
        database : 'ecds'
    });

    try {
        const query = "SELECT url, date, description, title, author, keywords FROM articles"
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        res.status(200).json({ articles: data });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}