import Pool from 'pg-pool';
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: '1234',
    port: 5432,
});

module.exports = pool;
