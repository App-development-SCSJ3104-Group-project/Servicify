import React from "react";
import Tag from "../search_result/inner_components/tag";
import Avatar from "../search_result/inner_components/avatar";
import { Link } from "react-router-dom";

const PostFooter = ({ tags, proposal, _id, customerId }) => {
  // getting userDate whether it is service provider or customer
  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="post_footer__style">
      {tags?.map((name) => (
        <Tag key={name} tag={name} color="#57C4E5" />
      ))}

      <div className="service_provider__proposall_length">
        {currentUser.isServiceProvider ? (
          <div className="stack__avatars">
            {proposal?.map((proposal, index) => (
              <Avatar
                key={index}
                source={proposal}
                width="30px"
                height="30px"
              />
            ))}
            <p
              style={{
                fontSize: "14px",
                margin: "4px 0px 0px 8px",
                color: "black",
              }}
            ></p>
          </div>
        ) : currentUser._id === customerId ? (
          <Link
            style={{ textDecoration: "none" }}
            to={"/customer_view_post_screen/" + _id}
          >
            <div className="stack__avatars">
              {proposal?.map((proposal, index) => (
                <Avatar
                  key={index}
                  source={proposal}
                  width="30px"
                  height="30px"
                />
              ))}
              <p
                style={{
                  fontSize: "14px",
                  margin: "4px 0px 0px 8px",
                  color: "black",
                }}
              >
                Check Now
              </p>
            </div>
          </Link>
        ) : (
          <div className="stack__avatars">
            {proposal.length === 0 ? (
              <div>"No proposals yet"</div>
            ) : (
              proposal?.map((proposal, index) => (
                <Avatar
                  key={index}
                  source={proposal}
                  width="30px"
                  height="30px"
                />
              ))
            )}
            <p
              style={{
                fontSize: "14px",
                margin: "4px 0px 0px 8px",
                color: "black",
              }}
            ></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostFooter;
