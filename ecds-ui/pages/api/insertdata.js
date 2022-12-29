import mysql from "mysql2/promise";

export default async function handler(req, res) {

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "ecds",
        user: "root",
        password: "",
    });
    try {
        const reqData = req.query;
        const query = "INSERT INTO articles (url, date, description, title, author, keywords) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [reqData.url, reqData.date, reqData.description, reqData.title, reqData.author, reqData.keywords];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        res.status(200).json({ articles: data });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}