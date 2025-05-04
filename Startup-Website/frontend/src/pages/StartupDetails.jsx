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
                    <h1 className='text-2xl'>Zomato</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti consequuntur cum eum dolores, minima asperiores vitae quidem reiciendis voluptatibus voluptatem pariatur maiores placeat, sed quasi vero. Assumenda tempore ad, explicabo quo libero vitae esse odio rerum ipsam maxime dignissimos eligendi enim eos iusto natus voluptas quaerat non aliquam ratione officiis repellat. Dolores nobis natus molestiae ipsam nemo harum minus doloribus tempora dolor nihil? Inventore consequatur exercitationem nam assumenda numquam, velit molestiae doloremque soluta asperiores tempore dolorum saepe obcaecati tempora officia quo aliquam eveniet pariatur dolor quasi corrupti magnam facere quae. Facilis, molestias ducimus in asperiores quibusdam ut mollitia assumenda?</p>
                </div>

             </div>

             <div className='ml-7 border-2 rounded-2xl p-2 m-2'>
                    Vison : Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis suscipit aliquam, perspiciatis, ei
            </div>

            <div className='ml-7  flex flex-row m-9'>
                {/* Founders and Investors */}
                <div className='flex-1'>
                    <h1 className='text-2xl'>Founders</h1>
                    <p>Founder1 founder2 Founder 3S</p>
                </div>

                <div className='flex-1'>
                    <h1 className='text-2xl'>Investors</h1>
                    <p> founder2 Founder 3S</p>
                </div>
            </div>

            <div className='ml-7 flex items-center mb-4 gap-5'>
                <h1 className='top-2 text-3xl'>Story</h1>
                <hr class="border-gray-500 border-3 shadow-2xs w-full pr-2 pl-2"></hr>
            </div>

            <div className='ml-7'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt repudiandae ullam labore hic, adipisci accusantium quaerat sit optio omnis porro quisquam veniam at voluptas laborum, autem aperiam non et earum vitae nemo! Error unde asperiores eligendi laborum? Doloremque et at, cum illum odit nam, velit nihil numquam, nobis vitae itaque?<br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis officiis veniam unde maxime natus animi officia explicabo cumque, nisi qui adipisci et. Sit vero accusantium porro magnam mollitia unde?
                <br /> <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis odio incidunt qui. Dicta, enim fugit.
            </div>

            <div className='ml-7 mt-4 flex flex-row items-center mb-4 gap-5'>
                <h1 className='top-2 text-3xl'>Business Model</h1>
                <hr class="border-gray-500 border-3 shadow-2xs w-[70%] pr-2 pl-2"></hr>
            </div>

            <div className='ml-7'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt repudiandae ullam labore hic, adipisci accusantium quaerat sit optio omnis porro quisquam veniam at voluptas laborum, autem aperiam non et earum vitae nemo! Error unde asperiores eligendi laborum? Doloremque et at, cum illum odit nam, velit nihil numquam, nobis vitae itaque?<br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis officiis veniam unde maxime natus animi officia explicabo cumque, nisi qui adipisci et. Sit vero accusantium porro magnam mollitia unde?
                <br /> <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis odio incidunt qui. Dicta, enim fugit.
            </div>

        </div>
    </>
  );
};

export default StartupDetails;
