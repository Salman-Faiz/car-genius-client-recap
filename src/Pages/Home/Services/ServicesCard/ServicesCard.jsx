import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl ">
      <figure className="px-6 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>
        <p>price: {price}</p>
        <Link to={`/bookservice/${_id}`}>
          <button className="btn btn-primary text-xl font-semibold">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
