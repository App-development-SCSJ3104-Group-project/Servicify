import React, { Component } from "react";
import Overview from "../../components/overview/overview";
import Categories from "../../components/categories/categories";
import SearchResult from "../../components/search_result/search_result";
import Template from "../../components/template/template"

import "./landing_page.scss";
import { connect } from "react-redux";


class CustomerMain extends Component {

  render() {

    return (
      <Template>
        <div className="landing-page">
          <Overview />
          <hr />
          <Categories />
          <hr />
          <SearchResult />
        </div>

      </Template>
    );
  }
}

export default CustomerMain
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