import React from "react";
import "./PopUp.scss";
import SearchCard from "../innerPopUp/components/searchCard/SearchCard"

const SearchPopUp = (props) => {


    const { response } = props;
    console.log(response)
    return (

        <div className="SearchPopUp">

            <div className="SearchPopUp__header">Search results</div>


            <div className="SearchPopUp__results">

                {
                    response.data.length != 0 ? response.data.map((item) => {


                        return <SearchCard data={item}></SearchCard>


                    }) : <div className="SearchPopUp__search-failure"> No Results Found</div>
                }



            </div>

        </div>
    )
}

export default SearchPopUp;