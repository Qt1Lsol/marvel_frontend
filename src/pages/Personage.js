import React, { useState, useEffect } from "react";
import "../css/Personage.css";
import axios from "axios";

const Personage = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://marvelbackendqt1.herokuapp.com/");
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? <span>En cours de chargement... </span> : <h2>{data}</h2>;
};

export default Personage;
