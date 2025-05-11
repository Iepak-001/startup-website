import { useState,useEffect } from "react";
import HeroImage from "../assets/hero-startup.png"; // Replace with your own image path
import StartupMap from "../assets/startup-map.png"


import axios from "axios"
import { Card } from "../components/cards";
import CardImage from "../assets/zomato.png"
import { Link } from 'react-router-dom';
import { BASE_URL } from "../../constants";

const Home = () => {

    const [startups, setStartups] = useState([]); // State to store the fetched startups

    useEffect(() => {
      const fetchData = async () => { // Wrap the fetch in an async function
        try {
          const data = await axios.post(`${BASE_URL}/startups/fetch`,{
            limit:6
          }); // Await the result
          setStartups(data); // Store the data in state
          console.log(data);
        } catch (error) {
          console.error("Error fetching startups in Home:", error);
          //  setFetchError(error);  // Consider setting an error state
        }
      };
      fetchData();
    }, []);


    return (
        <>
        

    <Link to={`/startup/4`}>
      View Details
    </Link>

        <section className="flex flex-row justify-center  mt-7">
            <div className=" pl-20 ">
                <img src={StartupMap} alt="Fading Image" className="w-150 min-w-min shrink-0"/>
                
            </div>


            <div className=" ">
                <h1 className="text-3xl font-extrabold items-center justify-center h-screen pt-70">Discover India’s  <br/> Most  <span className="text-[#f6b679]"> Innovative </span> Startups</h1>

            </div>
        </section>

        <section className="ml-5">
                <div>
                    <h1 className="text-4xl font-bold text-center pb-4">Featured Startups</h1>
                </div>

                <div className="flex whitespace-nowrap flex-row gap-9 pt-4 overflow-x-auto ">
                  <Card heading="Zomato" subheading="Food delivery app" imageurl={CardImage}/>
                  <Card heading="Zomato" subheading="Food delivery app" imageurl={CardImage}/>
                  <Card heading="Zomato" subheading="Food delivery app" imageurl={CardImage}/>
                  <Card heading="Zomato" subheading="Food delivery app" imageurl={CardImage}/>
                  <Card heading="Zomato" subheading="Food delivery app" imageurl={CardImage}/>
                  <Card heading="Zomato" subheading="Food delivery app" imageurl={CardImage}/>
                  <Card heading="Zomato" subheading="Food delivery app" imageurl={CardImage}/>
                  <Card heading="Zomato" subheading="Food delivery app" imageurl={CardImage}/>
                  
                    <Card heading="Zomato" subheading="Food delivery app" imageurl={CardImage}/>
                </div>
        </section>

        </>
    );
  };

  
  export default Home;
  