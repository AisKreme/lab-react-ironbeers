import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Beers() {
  const [allBeers, setBeers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeers(data);
    })();
  }, []);

  if (!allBeers.length) {
    return <p>Loading . . . </p>;
  }
  return (
    <div>
      {allBeers.map((elem) => {
        return (
          <div
            key={elem._id}
            className="m-10 border-4 border-black w-60 p-6 flex-col justify-center self-center items-center text-center"
          >
            <Link to={`/beers/${elem._id}`}>
              <img src={elem.image_url} className="w-12 m-auto" />
              <h1 className="font-bold m-4">{elem.name}</h1>
              <label>@ {elem.contributed_by}</label>
              <p>{elem.tagline}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
