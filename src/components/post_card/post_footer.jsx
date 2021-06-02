import React from "react";
import Tag from "./../search_result/tag";
import Avatar from "./../search_result/avatar";

const PostFooter = ({ tag, proposals }) => {
  return (
    <div className="post_footer__style">
      {tag.map((name) => (
        <Tag key={name} tag={name} color="#57C4E5" />
      ))}

      <div className="service_provider__proposall_length">
        <div className="stack__avatars">
          <Avatar
            source="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
            width="30px"
            height="30px"
          />
          <Avatar
            source="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width="30px"
            height="30px"
          />
          <Avatar
            source="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/04/a0004213/img/basic/a0004213_main.jpg?20200710184501&q=80&rw=750&rh=536"
            width="30px"
            height="30px"
          />
          <Avatar
            source="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/768/2018/08/glasses-american-man-20s-hipster.jpg"
            width="30px"
            height="30px"
          />
          <p style={{ fontSize: "14px", margin: "4px 0px 0px 8px" }}>
            {proposals} proposals
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
