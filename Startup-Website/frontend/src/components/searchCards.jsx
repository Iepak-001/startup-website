import DemoImage from "../assets/integrate.png";
import { Link } from "react-router-dom";
export const SearchCard = ({startup}) => {
  return (
    <>
     <Link to={`/startup/${startup.id}`}>
      <div className="flex flex-row h-50 shadow-2xl border-1 border-yellow-500 bg-white m-4 rounded-2xl hover:bg-gray-200 hover: cursor-alias ">
        {/* container    */}

        <div className="overflow-hidden object-cover">
          <img
            src={DemoImage}
            className="w-40 h-40 object-cover rounded-2xl"
            alt="Demo"
          />
        </div>

        <div className="flex-2/3 p-2 flex flex-col pl-9">
            <p className="text-2xl font-semibold font-mono">{startup.name}</p>
            <p className="text-xl"> Founders: {startup.founders[0]}, ..</p>
            <p className="text-xl">Location: {startup.city}</p>
            <p className="text-xl">Industries: {startup.industries[0]}</p>
            <p className="text-xm pt-4 pr-5 flex flex-row justify-between">
                <p>{startup.founding_year}</p>
                <p>{startup.funding_stage}</p>
                <p>Food Delivery</p>
            </p>
        </div>
      </div>
      </Link>
    </>
  );
};
