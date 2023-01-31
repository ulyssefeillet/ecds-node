import mysql from "mysql2/promise";

export default async function handler(req, res) {

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "ecds",
        user: "root",
        password: "",
    });

    try {
        const query = "SELECT type, country, area, site, date, latitude, longitude FROM situations"
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        res.status(200).json({ situations: data });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}