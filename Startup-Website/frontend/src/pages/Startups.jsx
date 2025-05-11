import InfiniteScroll from "react-infinite-scroll-component";
// import { CustomQuery } from "../utils/db";
import { Card } from "../components/cards";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import VectorImage from "../assets/vectorImage.png"
import { StartupCard } from "../components/StartupsCards";
import axios from "axios";
import { BASE_URL } from "../../constants";

const ITEMS_PER_PAGE = 7;

const Startup = () => {
  const [startups, setStartups] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Filter state
  const [city, setCity] = useState("");
  const [startupYear, setStartupYear] = useState("");
  const [stage, setStage] = useState("");
  const [founder,setFounder]=useState("");
  const [industry, setIndustry]=useState("");


  const fetchData = async () => {
    try {
      const result= await axios.post(`${BASE_URL}/startups/fetch`,{
        limit:ITEMS_PER_PAGE
      });
      const data = result.data;
      console.log(data);
      
      setStartups(data);
      setOffset(ITEMS_PER_PAGE);
      setHasMore(data.length === ITEMS_PER_PAGE);
    } catch (err) {
      console.error("Error fetching startups:", err);
    }
  };

  const fetchMoreData = async () => {
    try {
      

      const result = await axios.post(`${BASE_URL}/startups/fetch`,{
        limit:offset
      });
      const data = result.data;
      if (data.length === 0) {
        setHasMore(false);
        return;
      }

      setStartups((prev) => prev.concat(data));
      setOffset((prev) => prev + ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Error fetching more startups:", error);
    }
  };

  const handleSearch = (query) => {
    console.log("Search for:", query);
    // Add search handling logic here if needed
  };

  useEffect(() => {
    fetchData();
  }, [city, startupYear, stage]);

  return (
<div className="flex gap-4 p-4 bg-fixed" style={{ backgroundImage: `url(${VectorImage})`  , backgroundSize: 'repeat'}}>      {/* Filters Sidebar */}
      <div className="w-1/4 sticky top-4 h-fit border-2 border-red-500 rounded-2xl bg-white p-4 z-10">
        <h2 className="text-xl font-semibold mb-4">Apply Filters</h2>

        <div className="mb-4">
          <label htmlFor="city" className="block mb-1 font-medium">City:</label>
          <input
            id="city"
            type="text"
            placeholder="City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border-2 px-2 py-1 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="year" className="block mb-1 font-medium">Year:</label>
          <input
            id="year"
            type="text"
            placeholder="Startup Year"
            value={startupYear}
            onChange={(e) => setStartupYear(e.target.value)}
            className="w-full border-2 px-2 py-1 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="stage" className="block mb-1 font-medium">Stage:</label>
          <input
            id="stage"
            type="text"
            placeholder="Stage"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-full border-2 px-2 py-1 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="founder" className="block mb-1 font-medium">Stage:</label>
          <input
            id="founder"
            type="text"
            placeholder="founder"
            value={founder}
            onChange={(e) => setFounder(e.target.value)}
            className="w-full border-2 px-2 py-1 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="industry" className="block mb-1 font-medium">Stage:</label>
          <input
            id="industry"
            type="text"
            placeholder="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full border-2 px-2 py-1 rounded"
          />
        </div>

        <button
          onClick={fetchData}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Startup Cards */}
      <div className="w-3/4">
        <h1 className="mt-3 mb-3 text-xl font-semibold font-mono">Search for Startups</h1>
        <SearchBar onSearch={handleSearch}/>
        <InfiniteScroll
          dataLength={startups.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p className="text-center my-4">Loading more...</p>}
          endMessage={<p className="text-center my-4">No more startups</p>}
        >
          
          {(startups).map((s,i) => (

            <StartupCard
              key={i}
              startup={s}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Startup;
