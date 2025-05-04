import InfiniteScroll from "react-infinite-scroll-component";
import { FetchStartups }      from "../utils/db";
import { Card }               from "../components/cards";
import { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 3;

const Startup = () => {
  const [startups,  setStartups]           = useState([]);
  const [displayedStartups, setDisplayedStartups]  = useState([]);
  const [startIndex, setStartIndex]         = useState(0);
  const [loading, setLoading]            = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchStartups();
        setStartups(data);
        setDisplayedStartups(data.slice(0, ITEMS_PER_PAGE));
        setStartIndex(ITEMS_PER_PAGE);
      } catch (err) {
        console.error("Error fetching startups:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const fetchMoreData = () => {
    console.log('➤ fetchMoreData called');
    console.log('  startIndex:', startIndex, 'startups.length:', startups.length);

    const nextStart = startIndex;
    const nextEnd   = startIndex + ITEMS_PER_PAGE;
    const nextItems = startups.slice(nextStart, nextEnd);

    console.log('  nextItems:', nextItems);

    setDisplayedStartups(prev => prev.concat(nextItems));

    setStartIndex(nextEnd);
  };

  return (
      <InfiniteScroll
        dataLength={displayedStartups.length}
        next={fetchMoreData}
        hasMore={!loading && startIndex < startups.length}
        loader={<p>Loading...</p>}
        endMessage={<p>No more startups to show.</p>}
        scrollableTarget="scrollableDiv"   // important for custom container
      >
        {displayedStartups.map(item => (
          <Card key={item.id} heading={item.name} subheading={item.city} />
        ))}
      </InfiniteScroll>
  );
};

export default Startup;
