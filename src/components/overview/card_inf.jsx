import React, { Component } from "react";
import PencilIcon from "./pencil";
import SendIcon from "./send";
import EmailIcon from "./email";
import PlusIcon from "./plus";

class CardInfo extends Component {
  state = {};
  render() {
    const { description, icon } = this.props;
    return (
      <div className="col-md-2">
        {this.getIconType(icon)}
        <p>{description}</p>
      </div>
    );
  }

  getIconType = (icon) => {
    if (icon === "pencil") return <PencilIcon />;
    if (icon === "email") return <EmailIcon />;
    if (icon === "plus") return <PlusIcon />;
    else return <SendIcon />;
  };
}

export default CardInfo;
