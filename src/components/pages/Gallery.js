import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers.js';
import photo from "../../assets/weather-dash.jpg";

function Gallery(props) {
  const currentImage = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentImage.name)}</h1>
      <p>{currentImage.name}</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Gallery;