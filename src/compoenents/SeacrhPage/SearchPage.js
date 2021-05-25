import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "../SearchResult/SearchResult";

const SearchPage = ({ props }) => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays * 24 May to 30 May 2021 * 2 Guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds </Button>
        <Button variant="outlined">More filters </Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/ae675d9d-a658-4acc-854d-b85bca352175.jpg?im_w=960"
        location="Private room in center of Dhanbad"
        title="Stay at this spacious Singh Mention House"
        description="1 guest - 1 bedroom - 1 bad - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        start={4.73}
        price="$30 / night"
        total="$700 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/ae675d9d-a658-4acc-854d-b85bca352175.jpg?im_w=960"
        location="Private room in center of Dhanbad"
        title="Stay at this spacious Singh Mention House"
        description="1 guest - 1 bedroom - 1 bad - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        start={4.73}
        price="$30 / night"
        total="$700 total"
      />
    </div>
  );
};

export default SearchPage;
