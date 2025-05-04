import axios from "axios";

//  Consider creating a base URL, especially if you have multiple API endpoints
const BASE_URL = "http://localhost:3001";

export const FetchStartups = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/startups`);
    return response.data; // Return only the data
  } catch (error) {
    //  Important:  Re-throw the error to be handled by the caller.
    //  This is crucial for proper error handling in the component.
    console.error("Error in FetchStartups:", error);
    throw error;
  }
};

export const CustomQuery = async (text,values) => {
  try {

    const response = await axios.post(`${BASE_URL}/api/customQuery`,{
      text,
      values
    });

    return response.data; // Return only the data
  } catch (error) {
    //  Important:  Re-throw the error to be handled by the caller.
    //  This is crucial for proper error handling in the component.
    console.error("Error in FetchStartups:", error);
    throw error;
  }
};



