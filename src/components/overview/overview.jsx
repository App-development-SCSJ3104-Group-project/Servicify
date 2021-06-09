import React from "react";
import "./overview.css";
import EmailIcon from "./inner_components/email";
import PlusIcon from "./inner_components/plus";
import PencilIcon from "./inner_components/pencil";
import SendIcon from "./inner_components/send";

const Overview = () => {
  const card_Description =
    "write a post for the service to enable freelance to see your requested services, write a post for the service to enable freelance to see your requested services";

  return (
    <div className="Overview__section_container_card">
      <div className="Overview__section_header-section">
        <p className="Overview__section_header-title">
          Get Started on our website with these tips
        </p>
      </div>
      <div className="Overview__section_cards_information_container">
        <OverviewCard desc={card_Description} logo={<PencilIcon />} />
        <OverviewCard desc={card_Description} logo={<EmailIcon />} />
        <OverviewCard desc={card_Description} logo={<PlusIcon />} />
        <OverviewCard desc={card_Description} logo={<SendIcon />} />
      </div>
    </div>
  );
};

const OverviewCard = (props) => {
  return (
    <div className="Overview__section_card_information">
      <div className="Overview__section_card_icon-section">{props.logo}</div>
      <div className="Overview__section_card_desc-section">
        <p className="Overview__section_card_desc-section_box">{props.desc}</p>
      </div>
    </div>
  );
};

export default Overview;
