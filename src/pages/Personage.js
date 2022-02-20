import React, { useState, useEffect } from "react";
import "../css/Personage.css";
import axios from "axios";

const Personage = () => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        // requête axios à mon serveur (pas à l'API Marvel)
        const response = await axios.get("https://marvelbackendqt1.herokuapp.com/personage");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();

  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      {data.results.map((personage, index) => {
        return (
          <div key={personage._id}>
            <p>{personage.name}</p>
            <img
              alt={personage.name}
              src={personage.thumbnail.path}
            />
          </div>
        );
      })}
    </div>

  );
}

export default Personage;
