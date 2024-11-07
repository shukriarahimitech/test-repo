
import { Pool } from 'pg';



const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'universities',
    password: '1234',
    port: 5432,
});

const getUniversities = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM universities');
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Database query error', error);
        res.status(500).json({ error: "Database query failed." });
    }
};

const getUniversitiesFromDatabase = (req, res) => {
    res.status(200).json({ msg: "getUniversities" });
};

const getUniversitiesTesting = (req, res) => {
    res.status(200).json({ msg: "getUniversitiesTesting" });
};
module.exports = { getUniversities, getUniversitiesFromDatabase, getUniversitiesTesting };
