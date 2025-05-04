import express from "express";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({
  path:".env"
})
import pg from "pg"
import { Pool, Client } from "pg";

const app = express();
app.use(cors({origin:"*"}));
app.use(express.json());

if (!process.env.POSTGRESQL_CONNECTION_STRING) {
  throw new Error("POSTGRESQL_CONNECTION_STRING is required in .env");
}

// PostgreSQL connection
const pool = new Pool({
  connectionString:process.env.POSTGRESQL_CONNECTION_STRING,
  ssl:{
    rejectUnauthorized:false
}
});

// API endpoint
app.get('/api/startups', async (req, res) => {
  
  try {
    
    const { rows } = await pool.query('SELECT * from startups');
    
    res.json(rows); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/customQuery', async (req, res) => {
  
  try {
    
    console.log(req.body);
    const { text, values } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Missing "text" field in the request body for the query.' });
    }
    
    
    const result=await pool.query(text,values);
    return res.status(200).json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/startups/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM startups WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Startup not found' });
    }
    console.log(result.rows[0]);
    
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching startup:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});