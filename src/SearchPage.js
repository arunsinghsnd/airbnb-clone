import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";

const SearchPage = () => {
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
    </div>
  );
};

export default SearchPage;
