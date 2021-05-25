import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./SearchResult.css";

const SearchResult = ({
  img,
  location,
  title,
  description,
  start,
  price,
  total,
}) => {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="sesearchResult__heart" />
      <div className="sesearchResult__info">
        <div className="sesearchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </div>
        <div className="sesearchResult__infoBottom">
          <div className="sesearchResult__star">
            <p>
              <strong>{start}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
