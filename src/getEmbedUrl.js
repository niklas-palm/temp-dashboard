import axios from "axios";

const API_URL = "https://0xz8bvrpr7.execute-api.eu-west-1.amazonaws.com/prod/";

export const getUrl = async () => {
  try {
    const { data, status } = await axios.get(API_URL);
    console.log("statusCode: ", status);
    console.log("Response body: ", data);

    return data.message;
  } catch (err) {
    console.log("ERROR:");
    console.log(err);
    return "error";
  }
};
