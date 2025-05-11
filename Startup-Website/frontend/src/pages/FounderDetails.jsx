import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { CustomQuery } from '../utils/db';
import BannerImage from "../assets/about-banner.jpeg";
import { BASE_URL } from "../../constants";
import axios from "axios";

const FounderDetails = () => {
  const { id } = useParams();
  const [founder, setFounder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFounder = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/founders/fetchOne`, {
          _id: id,
        });

        if (!response) {
          throw new Error("Failed to fetch founder details");
        }
        const data = await response.data;
        setFounder(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFounder();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!founder) return <p>No startup found.</p>;

  console.log(founder);

  return (
    <>
      <div>
        {/* container */}
        <div>
          <img
            src={BannerImage}
            alt="bannerImage"
            className="w-full h-80 object-cover"
            style={{}}
          />
        </div>

        <div className="flex flex-row m-9 items-center">
          <img
            src={BannerImage}
            alt="bannerImage"
            className="w-70 h-60 object-cover rounded-2xl"
            style={{}}
          />

          <div className="ml-7 ">
            <h1 className="text-2xl">{founder.name}</h1>
            <h2 className="text-md mb-4 -mt-1 font-mono">{founder.title} </h2>
            <p >{founder.description}</p>
          </div>
        </div>

        <div className="ml-7 border-2 rounded-2xl p-2 m-2">
          Vison : {founder.vision}{" "}
        </div>

        <div className="ml-7 mt-4 flex flex-row items-center mb-4 gap-5">
          <h1 className="top-2 text-3xl">Education</h1>
          <hr class="border-gray-500 border-3 shadow-2xs w-[70%] pr-2 pl-2"></hr>
        </div>

        <div className="ml-7  p-2 m-2">
          {founder.education.map((val,i)=>(
            <li className="p-1">{val}</li>
          ))}
        </div>

        <div className="ml-7 flex items-center mb-4 gap-5">
          <h1 className="top-2 text-3xl">Story</h1>
          <hr class="border-gray-500 border-3 shadow-2xs w-full pr-2 pl-2"></hr>
        </div>

        <div className="ml-7">{founder.story}</div>

        <div className="ml-7 mt-4 flex flex-row items-center mb-4 gap-5">
          <h1 className="top-2 text-3xl">Business Model</h1>
          <hr class="border-gray-500 border-3 shadow-2xs w-[70%] pr-2 pl-2"></hr>
        </div>

        <div className="ml-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          repudiandae ullam labore hic, adipisci accusantium quaerat sit optio
          omnis porro quisquam veniam at voluptas laborum, autem aperiam non et
          earum vitae nemo! Error unde asperiores eligendi laborum? Doloremque
          et at, cum illum odit nam, velit nihil numquam, nobis vitae itaque?
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          debitis officiis veniam unde maxime natus animi officia explicabo
          cumque, nisi qui adipisci et. Sit vero accusantium porro magnam
          mollitia unde?
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          odio incidunt qui. Dicta, enim fugit.
        </div>
      </div>
    </>
  );
};

export default FounderDetails;
