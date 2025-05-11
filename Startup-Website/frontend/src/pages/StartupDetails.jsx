import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { CustomQuery } from '../utils/db';
import BannerImage from "../assets/about-banner.jpeg";
import { BASE_URL } from "../../constants";
import axios from "axios";
const StartupDetails = () => {
  const { id } = useParams();
  const [startup, setStartup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/startups/fetchOne`, {
          _id: id,
        });
        if (!response) {
          throw new Error("Failed to fetch startup details");
        }
        const data = await response.data[0];

        setStartup(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStartup();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!startup) return <p>No startup found.</p>;
  console.log(startup);

  console.log(startup.founders[0]);

  return (
    <>
      <div className="m-3 mb-6">
        {/* container */}
        <div>
          <img
            src={BannerImage}
            alt="bannerImage"
            className="w-full h-80 object-cover"
            style={{}}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 m-9 items-center ">
          <img
            src={BannerImage}
            alt="bannerImage"
            className="w-70 h-60 object-cover rounded-2xl sm:-top-4 sm:-left-4"
            style={{}}
          />

          <div className="ml-7 ">
            <h1 className="text-2xl uppercase font-semibold">{startup.name}</h1>
            <p>{startup.description}</p>
          </div>
        </div>

        <div className=" ml-7 border-2 rounded-2xl p-2 m-2 font-mono ">
          <span className="font-semibold font-sans uppercase">Vison </span>:{" "}
          {startup.vision}
        </div>

        

        <div className="ml-7  flex flex-row m-9">
          {/* Founders and Investors */}
          <div className="flex-1">
            <h1 className="text-2xl">Founders</h1>

            {startup.founders &&
              startup.founders.map((founder, i) => <li key={i}>{founder}</li>)}
            {!startup.founders && <li>No founders listed.</li>}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl">Investors</h1>
            <p>
              {startup.investors.map((val, i) => (
                <li key={i}>{val} </li>
              ))}
            </p>
          </div>
        </div>

        <div className="ml-7 flex items-center mb-4 gap-5">
          <h1 className="top-2 text-3xl">Story</h1>
          <hr class="border-gray-500 border-3 shadow-2xs w-full pr-2 pl-2"></hr>
        </div>

        <div className="ml-7">
          {startup.story.map((val, i) => (
            <li
              key={i}
              className="text-xl p-1 before:content-['→'] before:absolute before:-left-4"
            >
              {val}
            </li>
          ))}
        </div>

        <div className="ml-7 mt-4 flex flex-row items-center mb-4 gap-5">
          <h1 className="top-2 text-3xl">Business Model</h1>
          <hr class="border-gray-500 border-3 shadow-2xs w-[70%] pr-2 pl-2"></hr>
        </div>

        <div className="ml-7">
          {startup.business_model.map((val, i) => (
            <li
              key={i}
              className="p-1 list-none before:content-['→'] before:absolute before:-left-4"
            >
              <span className="font-semibold text-emerald-600 text-xl underline">{val.name} </span><br />
              {val.explanation}
            </li>
          ))}
        </div>


      </div>
    </>
  );
};

export default StartupDetails;
