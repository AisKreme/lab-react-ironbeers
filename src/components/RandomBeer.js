import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function BeerDetail() {
  const { id } = useParams();
  const [beerDetail, setDetail] = useState(null);

  useEffect(() => {
    (async () => {
      let { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );

      let beer = {
        id: id,
        name: data.name,
        image: data.image_url,
        tagline: data.tagline,
        firstBrew: data.first_brewed,
        attLvl: data.attenuation_level,
        desc: data.description,
        contributed: data.contributed_by,
      };
      setDetail(beer);
    })();
  }, []);

  if (!beerDetail) {
    return <p>Loading . . . </p>;
  }

  return (
    <div>
      <img src={beerDetail.image} />
      <h1 className="font-bold">{beerDetail.name}</h1>
      <label>{beerDetail.attLvl}</label>
      <h2>{beerDetail.tagline}</h2>
      <label>{beerDetail.firstBrew}</label>
      <p>{beerDetail.desc}</p>
      <label>{beerDetail.contributed}</label>
    </div>
  );
}
