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
        const insert = "INSERT INTO queryagents (query, fromDate, toDate, periodicity) VALUES (?, ?, ?, ?)";
        const values = [reqData.query, reqData.fromDate, reqData.toDate, reqData.periodicity];
        const [data] = await dbconnection.execute(insert, values);
        dbconnection.end();
        res.status(200).json({ query: reqData });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}