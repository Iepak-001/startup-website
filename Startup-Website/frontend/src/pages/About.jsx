import React from "react";
import AboutBanner from "./../assets/about-banner.jpeg"
import ImageCard from "../components/ImageCards";
import IntegrateImage from "../assets/integrate.png"
import ConnectImage from "../assets/connect.png"
import EducateImage from "../assets/educate.png"
import AboutMeImage from "../assets/aboutme.png"
const AboutPage=()=>{

    return (
            <div>
                {/* container */}
                <div className="h-120  w-full bg-cover bg-center" style={{backgroundImage:`url(${AboutBanner})` } }>
                    {/* Banner Section */}
                    <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold text-center">
                    <span className="text-cyan-600">HELLO</span><br/> I Am Developer
                    </div>
                </div>


                <div>
                    {/* AboutMe*/}

                </div>

                <div>
                    {/* Vision*/}
                    <div className="bg-[#e1ccb4] pt-3 pb-2 text-center font-semi-bold text-xl mt-3 mb-6"> Our Mission</div>

                    <div className="text-3xl text-cyan-700 text-center pb-3"> Quality, Awareness and Integrity</div>

                    <div className="text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptate ex enim harum distinctio! Tempora <br />sed dicta voluptas quo deleniti dolor nostrum voluptatibus <br />voluptatem possimus? Quae necessitatibus totam <br />similique perspiciatis corporis impedit enim ea quaerat libero dolorum numquam quibusdam voluptas qui eos, rem laudantium non harum, quasi laborum sapiente fuga! Alias?</p>
                    </div>

                    <div className="flex flex-row text-center justify-evenly mt-6 ">
                        <ImageCard heading="Connect" description="hello laksdlkl asdlka;slkd asdlklka sd" imageurl={ConnectImage}/>
                        <ImageCard heading="Connect" description="hello laksdlkl asdlka;slkd asdlklka sd" imageurl={ConnectImage}/>
                        <ImageCard heading="Connect" description="hello laksdlkl asdlka;slkd asdlklka sd" imageurl={ConnectImage}/>
                    </div>
                </div>

                <div className="flex items-center my-6">
                    <div className="flex-grow border-t-8 border-[#c4a27c]"></div>
                    <span className="mx-4 text-gray-500 text-2xl">About Me</span>
                    <div className="flex-grow border-t-8 border-[#c4a27c]"></div>
                </div>

                <div className="flex flex-row gap-8 items-center">
                    {/* About me section */}
                    <div className="bg-amber-400 rounded-2xl"></div>
                        <img src={AboutMeImage} className="h-100 w-90 object-cover object-left rounded-xl"  />
                    <div className=" flex flex-col">
                        <div className="text-2xl"> Hi,</div>

                        <div className="text-xl text-justify pr-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus perferendis delectus quia aliquam est exercitationem eius. Possimus modi ducimus repellendus quam, officia id aut maiores vitae sapiente itaque asperiores ipsum aliquam repellat? Maiores quaerat facilis doloribus non animi ea libero enim recusandae, nostrum corporis quos rerum, hic numquam incidunt, sit eos tenetur ipsam voluptatum unde dolores doloremque voluptatibus modi alias exercitationem! Perspiciatis aspernatur vitae hic culpa, velit accusamus, quo eius assumenda modi quibusdam quas enim itaque. Perspiciatis quam voluptate vel inventore molestiae itaque sit deleniti aut recusandae numquam doloremque ad culpa sequi consectetur quibusdam nobis, voluptates earum omnis odio.</div>
                    </div>
                </div>


                <div className="flex items-center my-6">
                    <div className="flex-grow border-t-8 border-[#c4a27c]"></div>
                    <span className="mx-4 text-gray-500 text-2xl">My Skills</span>
                    <div className="flex-grow border-t-8 border-[#c4a27c]"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
                {/* Skillset cards */}
                <ImageCard heading="Connect" description="..." imageurl={ConnectImage} />
                <ImageCard heading="Connect" description="..." imageurl={ConnectImage} />
                <ImageCard heading="Connect" description="..." imageurl={ConnectImage} />
                <ImageCard heading="Connect" description="..." imageurl={ConnectImage} />
                <ImageCard heading="Connect" description="..." imageurl={ConnectImage} />
                <ImageCard heading="Connect" description="..." imageurl={ConnectImage} />
                <ImageCard heading="Connect" description="..." imageurl={ConnectImage} />
                <ImageCard heading="Connect" description="..." imageurl={ConnectImage} />
                <ImageCard heading="Connect" description="..." imageurl={ConnectImage} />
                </div>
            </div>
        
    )
}

export default AboutPage