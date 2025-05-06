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

app.post('/api/insert', async (req, res) => {
  const insertQuery = `INSERT INTO startups (
    id, name, city, founding_year, founders, industries, description,
    funding_stage, vision, business_model, trending_index, investors,
    story, earning_source, customer_reviews, ipo_status, profile_image, banner_image
) VALUES
(
    21, '1mg', 'Gurgaon', 2015,
    ARRAY['Prashant Tandon', 'Gaurav Agarwal', 'Vikas Chauhan'],
    ARRAY['HealthTech', 'E-pharmacy'],
    'Online pharmacy and diagnostics platform offering medicines, tests, and doctor consultations.',
    'Private',
    'To make healthcare accessible, understandable, and affordable.',
    'E-commerce and Service Aggregator with Commission revenue model',
    73,
    ARRAY['Tata Digital', 'Sequoia India'],
    'Started with medicine delivery; now includes lab tests and health subscriptions.',
    'Pharmacy margins, Diagnostic commissions',
    'Fast delivery. Helpful reminders.',
    FALSE,
    NULL, NULL
),
(
    22, 'ShareChat', 'Bengaluru', 2015,
    ARRAY['Ankush Sachdeva', 'Bhanu Pratap Singh', 'Farid Ahsan'],
    ARRAY['Social Media', 'Regional Content'],
    'Indian social media platform offering content in regional languages.',
    'Private',
    'To empower Indians to share and connect in their own language.',
    'Ad-Supported Platform with Creator Economy revenue model',
    72,
    ARRAY['Twitter', 'Lightspeed India', 'Snap Inc.'],
    'Focused on non-English internet users, became popular during TikTok ban.',
    'Ads, Brand collaborations',
    'Fun content. Many languages.',
    FALSE,
    NULL, NULL
),
(
    23, 'Ather Energy', 'Bengaluru', 2013,
    ARRAY['Tarun Mehta', 'Swapnil Jain'],
    ARRAY['Electric Vehicles', 'CleanTech'],
    'Manufacturer of smart electric scooters with charging infrastructure.',
    'Private',
    'To accelerate India’s shift to sustainable mobility.',
    'Hardware Sales with After-sales and Subscription revenue model',
    78,
    ARRAY['Hero MotoCorp', 'Flipkart Co-founders'],
    'Launched Ather 450, invested in charging stations and connected tech.',
    'Vehicle sales, Battery subscriptions',
    'Smooth ride. Great dashboard.',
    FALSE,
    NULL, NULL
),
(
    24, 'Dunzo', 'Bengaluru', 2015,
    ARRAY['Kabeer Biswas', 'Dalvir Suri', 'Mukul Anand', 'Ankur Aggarwal'],
    ARRAY['Hyperlocal Delivery', 'Logistics'],
    'On-demand delivery platform for groceries, medicines, and essentials.',
    'Private',
    'To make everyday tasks simple through quick delivery.',
    'Delivery Platform with Commission and Convenience Fee revenue model',
    70,
    ARRAY['Google', 'Lightbox Ventures'],
    'Started with errands and expanded to partnerships with major retailers.',
    'Delivery fees, Retail partnerships',
    'Quick delivery. Helpful during emergencies.',
    FALSE,
    NULL, NULL
),
(
    25, 'Bounce', 'Bengaluru', 2014,
    ARRAY['Vivekananda Hallekere', 'Anil G', 'Varun Agni'],
    ARRAY['Mobility', 'Bike Rentals'],
    'Dockless scooter rental service with keyless entry and electric fleet.',
    'Private',
    'To transform urban commute through smart mobility.',
    'Pay-per-use Vehicle Rentals with Subscription revenue model',
    68,
    ARRAY['Sequoia Capital', 'Accel Partners'],
    'Started with petrol scooters; pivoted to electric and battery-swapping tech.',
    'Ride charges, Battery subscription',
    'Affordable. No parking hassle.',
    FALSE,
    NULL, NULL
)

    -- You can add more rows here as needed
  `;

  try {
    const result = await pool.query(insertQuery);
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (err) {
    console.error('Error inserting startups:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/api/founders/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM founders WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Founder not found' });
    }
    console.log(result.rows[0]);
    
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching Founder:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});