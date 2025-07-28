import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/baseUrl";

const Connections = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("Data at Connections", data);

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = async () => {
    try {
      const data = await axios.get(BASE_URL + "/user/connections", { withCredentials: true });
      setData(data?.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return <div></div>;
};

export default Connections;
