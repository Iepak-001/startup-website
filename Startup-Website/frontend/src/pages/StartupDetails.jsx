import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CustomQuery } from '../utils/db';
import BannerImage from "../assets/about-banner.jpeg"
const BASE_URL = "http://localhost:3001";
const StartupDetails = () => {

  const { id } = useParams();
  const [startup, setStartup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/startups/${id}`);
        if (!response) {
          throw new Error('Failed to fetch startup details');
        }
        const data = await response.json();
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
  
  return (
    <>
        <div>
            {/* container */}
             <div>
                <img src={BannerImage} alt="bannerImage" className='w-full h-80 object-cover' style={{
                    
                }}/>
             </div>

             <div className='flex flex-row m-9 items-center'>
                <img src={BannerImage} alt="bannerImage" className='w-70 h-60 object-cover rounded-2xl'  style={{
                    
                }}/>

                <div className='ml-7 '>
                    <h1 className='text-2xl'>{startup.name}</h1>
                    <p>{startup.description}</p>
                </div>

             </div>

             <div className='ml-7 border-2 rounded-2xl p-2 m-2'>
                    Vison : {startup.vision}
            </div>

            <div className='ml-7  flex flex-row m-9'>
                {/* Founders and Investors */}
                <div className='flex-1'>
                    <h1 className='text-2xl'>Founders</h1>
                    <p>{startup.founders.map((val,i)=>(
                      <li key={i}>{val}</li>
                    ))}</p>
                </div>

                <div className='flex-1'>
                    <h1 className='text-2xl'>Investors</h1>
                    <p>{startup.investors.map((val,i)=>(
                      <li key={i}>{val}</li>
                    ))}</p>
                </div>
            </div>

            <div className='ml-7 flex items-center mb-4 gap-5'>
                <h1 className='top-2 text-3xl'>Story</h1>
                <hr class="border-gray-500 border-3 shadow-2xs w-full pr-2 pl-2"></hr>
            </div>

            <div className='ml-7'>
                    {startup.story}
            </div>

            <div className='ml-7 mt-4 flex flex-row items-center mb-4 gap-5'>
                <h1 className='top-2 text-3xl'>Business Model</h1>
                <hr class="border-gray-500 border-3 shadow-2xs w-[70%] pr-2 pl-2"></hr>
            </div>

            <div className='ml-7'>
            {startup.business_model}
               </div>

        </div>
    </>
  );
};

export default StartupDetails;
