import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function BeerDetail() {
  const { id } = useParams();
  const [beerDetail, setDetail] = useState(null);

  useEffect(() => {
    (async () => {
      let {
        data: {
          name,
          image_url,
          tagline,
          first_brewed,
          attenuation_level,
          description,
          contributed_by,
        },
      } = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);

      let beer = {
        id: id,
        name,
        image_url,
        tagline,
        first_brewed,
        attenuation_level,
        description,
        contributed_by,
      };
      setDetail(beer);
    })();
  }, [id]);

  if (!beerDetail) {
    return <p>Loading . . . </p>;
  }

  return (
    <div>
      <img src={beerDetail.image_url} alt="" />
      <h1 className="font-bold">{beerDetail.name}</h1>
      <label>{beerDetail.attenuation_level}</label>
      <h2>{beerDetail.tagline}</h2>
      <label>{beerDetail.first_brewed}</label>
      <p>{beerDetail.description}</p>
      <label>{beerDetail.contributed_by}</label>
    </div>
  );
}
