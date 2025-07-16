import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }
  return pool;
}

export async function getIds() {
  const pool = getPool();
  try {
    const result = await pool.query('SELECT * FROM ids ORDER BY id');
    return result.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch IDs from database');
  }
}
