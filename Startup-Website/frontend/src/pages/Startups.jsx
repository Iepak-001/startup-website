import InfiniteScroll from "react-infinite-scroll-component";
import { CustomQuery } from "../utils/db";
import { Card } from "../components/cards";
import { useState, useEffect } from "react";
import { LongCards } from "../components/LongCards";
import axios from 'axios'; // Add this import

const Startup = () => {
  const [startups, setStartups] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 2;

  // Filter state
  const [city, setCity] = useState("");
  const [startupYear, setStartupYear] = useState("");
  const [stage, setStage] = useState("Public");

  // Fetch initial data
  const fetchData = async () => {
    try {
        const query = `
        SELECT * FROM startups
        WHERE 
          ($1::text IS NULL OR city ILIKE $1)
          AND ($2::int IS NULL OR founding_year = $2)
          AND ($3::text IS NULL OR funding_stage ILIKE $3)
        ORDER BY id
        LIMIT $4 OFFSET $5
      `;
      
      const values = [
        city ? `%${city}%` : null,
        startupYear ? parseInt(startupYear) : null,
        stage ? `%${stage}%` : null,
        ITEMS_PER_PAGE,
        0
      ];

      const result = await CustomQuery(query, values); // gets filtered results
      const data = result.rows;
      setStartups(data);
      setOffset(ITEMS_PER_PAGE); // ✅ Set offset correctly after initial load
      setHasMore(data.length === ITEMS_PER_PAGE); // If the result is less than ITEMS_PER_PAGE, no more data
    } catch (err) {
      console.error("Error fetching startups:", err);
    }
  };

  useEffect(() => {
    fetchData(); // fetch on initial load or filter change
  }, [city, startupYear, stage]); // Re-fetch when filters change

  const fetchMoreData = async () => {
    try {

        const query = `
        SELECT * FROM startups
        WHERE 
          ($1::text IS NULL OR city ILIKE $1)
          AND ($2::int IS NULL OR founding_year = $2)
          AND ($3::text IS NULL OR funding_stage ILIKE $3)
        ORDER BY id
        LIMIT $4 OFFSET $5
      `;
      
      const values = [
        city ? `%${city}%` : null,
        startupYear ? parseInt(startupYear) : null,
        stage ? `%${stage}%` : null,
        ITEMS_PER_PAGE,
        offset
      ];

      const result = await CustomQuery(query, values); // gets filtered data
      const data = result.rows;
      if (data.length === 0) {
        setHasMore(false); // no more data
        return;
      }

      setStartups((prev) => prev.concat(data));
      setOffset((prev) => prev + ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Error fetching more startups:", error);
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="flex-1 h-50 flex-col m-2 border-red-500 border-2 rounded-2xl">
          {/* Filters */}
          <div className="text-xl pt-4 ml-2">Apply Filters</div>

          <div className="flex flex-row justify-between pb-2 pt-2 border-b-2 shadow-xs ml-2 mr-2 mb-2">
            <label htmlFor="city">City:</label>
            <input
              id="city"
              type="text"
              placeholder="City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border-2"
            />
          </div>

          <div className="flex flex-row justify-between pb-2 border-b-2 shadow-xs ml-2 mr-2 mb-2">
            <label htmlFor="year">Year:</label>
            <input
              id="year"
              type="text"
              placeholder="Startup Year"
              value={startupYear}
              onChange={(e) => setStartupYear(e.target.value)}
              className="border-2"
            />
          </div>

          <div className="flex flex-row justify-between pb-2 ml-2 mr-2 mb-2">
            <label htmlFor="stage">Stage:</label>
            <input
              id="stage"
              type="text"
              placeholder="Stage"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="border-2"
            />
          </div>

          <div>
            <button
              onClick={fetchData} // directly call fetchData when applying filters
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex-4 flex-col bg-amber-300">
          <InfiniteScroll
            dataLength={startups.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<p>Loading more...</p>}
            endMessage={<p>No more startups</p>}
          >
            <LongCards />
            <LongCards />
            <LongCards />
            {startups.map((s, i) => (
              <Card key={i} heading={s.name} subheading={s.city} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default Startup;
