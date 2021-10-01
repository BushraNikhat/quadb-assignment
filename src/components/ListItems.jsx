import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchDetail } from "../Redux/action/Action";


const ListItems = ({ movie }) => {
  const dispatch = useDispatch();
  const {name,runtime,premiered,image}=movie.show


  // on click event of button
const dispatchDetail=()=>{
  dispatch(fetchDetail(movie)); // sending movieDetail of the clicked button to redux
}

  return (
    <>
      <div className="movieContainer mb-5 mx-auto">
        <div className="movieImageContainer w-100 bg-secondary border">
          <img
            src={image && image.original}
            alt={name}
            className="movieImage shadow w-100 h-100 "
          />
        </div>
        <div className="infoContainer w-100 mb-3">
          <p className="text-center mb-1 w-100 mt-2">{name}</p>
          <div className="d-flex">
            <span>{runtime} mins</span>
            <span className=" flex-grow-1 text-end">
              {premiered}
            </span>
          </div>
       
        </div>
        <div className="w-100  text-center">
        <NavLink to={`/details/${movie.show.name}`} className="btn  button" onClick={dispatchDetail}>
        view details
        
        </NavLink>
        </div>
        
      </div>
    </>
  );
};

export default ListItems;
