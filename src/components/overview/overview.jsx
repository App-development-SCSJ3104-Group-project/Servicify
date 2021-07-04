import React from "react";
import "./overview.scss";
import EmailIcon from "../../icons/email.svg";
import PlusIcon from "../../icons/add.svg";
import PencilIcon from "../../icons/writing.svg";
import SendIcon from "../../icons/send.svg";
import OverviewCard from "./inner_components/overview/OverviewCard"
const Overview = () => {


  let overViewCards = [
    {
      card_Description:
        "write a post for the service to enable freelance to see your requested services, write a post for the service to enable freelance to see your requested services",
      logo: <PencilIcon></PencilIcon>
    },
    {
      card_Description:
        "write a post for the service to enable freelance to see your requested services, write a post for the service to enable freelance to see your requested services",
      logo: <EmailIcon></EmailIcon>

    },
    {
      card_Description:
        "write a post for the service to enable freelance to see your requested services, write a post for the service to enable freelance to see your requested services",
      logo: <PlusIcon></PlusIcon>

    },
    {
      card_Description:
        "write a post for the service to enable freelance to see your requested services, write a post for the service to enable freelance to see your requested services",
      logo: <SendIcon></SendIcon>

    },

  ]

  return (
    <div className="overview-card">
      <div className="overview-card__header">
        <p className="overview-card__header__title">
          Get Started on our website with these tips
        </p>
      </div>
      <div className="overview-card__info">

        {
          overViewCards.map((card, index) => <OverviewCard desc={card.card_Description} logo={card.logo} index={index} />)
        }

      </div>
    </div>
  );
};



export default Overview;
