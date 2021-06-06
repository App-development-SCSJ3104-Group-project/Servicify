import React, { Component } from "react";
import Nav from "../../components/navbar/navbar";
import SearchArea from "../../components/search_area/search_area";
import Overview from "../../components/overview/overview";
import Categories from "../../components/categories/categories";
import SearchResult from "../../components/search_result/search_result";
import Footer from "../../components/footer/footer";

import "./landing_page.scss";
class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Nav isLogged={false} />
        <SearchArea route={"overview"} />
        <Overview />
        <hr />
        <Categories />
        <hr />
        <SearchResult />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;

// const mapStateToProps = (state) => {
//   return {
//     name: state.main.posts
//   }
// }

// const mapDispatchToProps = (dispatch) => {

//   return {
//     // import action from //???? action file
//     // addPost: (id) => { dispatch(addPost(id)) }

//   }
// }
// export default connect(mapStateToProps)(CustomerMain)
