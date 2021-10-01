import React from 'react'
import { MdPlayCircleFilled} from "react-icons/md";
import { useSelector } from "react-redux";

const MovieDetail = () => {
    const state = useSelector((state) => state.detailReducer);
    const {name,rating,summary,image}=state.show


    // replacing  the tags from  summary with empty string.
    const regex = /(<([^>]+)>)/ig;
    const result = summary.replace(regex, '');

    return (
        <>
      <div className="movieDetail" style={image && {
        backgroundImage: `linear-gradient( rgba(0,0,0,.8), rgba(0, 0, 0, 0.8)),url(${image.original})`,
      }}>
        <div className="row ">
          <div className="col-11 mx-auto detailColumn">

            <div className="row">
              <div className="col-lg-6 col-md-7 col-sm-10 col-12  detailContainer d-flex flex-column justify-content-center">
              
                <div className="detailTop">
                  <h4 className="mb-2">
                    NETFLIX <span>ORIGINAL</span>
                  </h4>
                  <h1 className="mb-2">{name}</h1>
                  <span className="text-success me-2 fw-bold">{(rating.average ) ? `Rating` : null}</span>
                  <span>{rating.average && rating.average}</span>
                </div>

                <div className="detailCenter mt-3">
                  <span> {result}</span>
                </div>

                <div className="detailBottom mt-3">
                  <button className="btn button">
                    <MdPlayCircleFilled className="me-1" />
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default MovieDetail
