import mysql from "mysql2/promise";

export default async function handler(req, res) {

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "ecds",
        user: "root",
        password: "",
    });

    try {
        const query = "SELECT url, type, site, date, description, title, author, keywords FROM articles"
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        res.status(200).json({ articles: data });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}