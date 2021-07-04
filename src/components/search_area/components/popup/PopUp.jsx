import React from "react";
import "./PopUp.scss";
import SearchCard from "../innerPopUp/components/searchCard/SearchCard"

const SearchPopUp = () => {


    return (

        <div className="SearchPopUp">

            <div className="SearchPopUp__header">Search results</div>


            <div className="SearchPopUp__results">

                <SearchCard></SearchCard>
                <SearchCard></SearchCard>
                <SearchCard></SearchCard>
                <SearchCard></SearchCard>
                <SearchCard></SearchCard>
                <SearchCard></SearchCard>


            </div>

        </div>
    )
}

export default SearchPopUp;