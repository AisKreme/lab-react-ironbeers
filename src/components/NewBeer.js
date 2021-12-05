import React from 'react';
import axios from 'axios';

export default function NewBeer() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value,
    };
    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
  };
  return (
    <div>
      <h1>Add new Beer</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Enter name" />
        <input name="tagline" type="text" placeholder="Enter tagline" />
        <input name="description" type="text" placeholder="Enter description" />
        <input
          name="first_brewed"
          type="text"
          placeholder="Enter first brewed"
        />
        <input
          name="brewers_tips"
          type="text"
          placeholder="Enter brewers tips"
        />
        <input
          name="attenuation_level"
          type="number"
          placeholder="Enter attenuation level"
        />
        <input
          name="contributed_by"
          type="text"
          placeholder="Enter contributer"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
