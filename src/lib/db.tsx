const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const query = (text:string, params?:object) => pool.query(text, params);
