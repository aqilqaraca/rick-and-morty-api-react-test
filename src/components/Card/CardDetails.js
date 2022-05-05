import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import stars from './stars.jpg'

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <div className="w-100 h-25 d-flex justify-content-center align-items-end">
          <img src={stars} className="w-100 h-100 object-fit-cover" alt=""/>
          <img className="img-fluid position-absolute" src={image} alt="" />
        </div>
        <div className="content border border-3 p-4 d-flex flex-column gap-4">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Status: </span>
            {(() => {
              if (status === "Dead") {
                return status
              } else if (status === "Alive") {
                return status
              } else {
                return status
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
