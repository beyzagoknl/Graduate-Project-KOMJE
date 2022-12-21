import React from "react";
import PropTypes from "prop-types";

const Carousel = ({ images }) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          {images &&
            images.map((image, index) => {
              const attributes = {
                type: "button",
                "data-bs-target": "#carouselExampleIndicators",
                "data-bs-slide-to": index,
                "aria-label": `Slide ${index + 1}`,
              };

              if (index === 0) {
                attributes["className"] = "active";
                attributes["aria-current"] = true;
              }
              return <button key={image.url} {...attributes}></button>;
            })}
        </div>
        <div className="carousel-inner">
          {images &&
            images.map((image) => (
              <div className="carousel-item active" key={image.url}>
                <img
                  src={image.url}
                  className="d-block w-100"
                  id="Wedding-pic"
                  alt={image.url}
                />
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;

Carousel.propTypes = {
  images: PropTypes.array,
};
