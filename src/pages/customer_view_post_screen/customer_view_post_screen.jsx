import React, { Component, useState } from "react";
import "./customer_view_post_screen.css";
import Avatar from "../../components/search_result/inner_components/avatar";
import Template from "../../components/template/template";
import PostCard from "../../components/post_card/post_card";
import ProposalCard from "./compoents/proposalCard/proposalCard"
const post = {
  id: 1,
  postTime: "30 minutes ago",
  postLocation: "Johor Bahru",
  cancelllationFee: "Free cancellation",
  postDesc:
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  tag: ["#Electrical", "#Job", "#Free", "#People"],
  proposals: 6,
};

const proposalsInfo = {
  sericeProviderUsername: "John Smith",
  proposalDay: "Friday",
  proposalDate: "12/05/2020",
  propsalTime: "9 a.m",
  proposalFess: "50.00$",
  proposalDescription:
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  proposedSteps: [
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  ],
};

class CustomerViewPost extends Component {
  state = {};
  render() {
    return (
      <Template route="posts">
        <React.Fragment>
          <div className="posts-wrappper-background">
            <PostCard post={post} />
            <div className="post-ur-1-3"></div>
            <div className="proposals__ar_annoated">
              <div className="seperate_line__post_of_proposal-section"></div>
              <h3>Proposals</h3>
            </div>
            <ProposalCard {...proposalsInfo} useState={useState} proposalsInfo={proposalsInfo}/>
            <ProposalCard {...proposalsInfo}  useState={useState} proposalsInfo={proposalsInfo}/>
          </div>
        </React.Fragment>
      </Template>
    );
  }
}





export default CustomerViewPost;

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