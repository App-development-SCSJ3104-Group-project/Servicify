import React from "react";
import "./overview.css";
import EmailIcon from "../../icons/email.svg";
import PlusIcon from "../../icons/add.svg";
import PencilIcon from "../../icons/writing.svg";
import SendIcon from "../../icons/send.svg";

const Overview = () => {
  const card_Description =
    "write a post for the service to enable freelance to see your requested services, write a post for the service to enable freelance to see your requested services";
  
  let overViewCards = [
    {card_Description :
      "write a post for the service to enable freelance to see your requested services, write a post for the service to enable freelance to see your requested services",
      logo:<PencilIcon></PencilIcon>
    },
     {card_Description :
       "write a post for the service to enable freelance to see your requested services, write a post for the service to enable freelance to see your requested services",
      logo:<EmailIcon></EmailIcon>
       
    },
      {card_Description :
        "write a post for the service to enable freelance to see your requested services, write a post for the service to enable freelance to see your requested services",
      logo:<PlusIcon></PlusIcon>
        
    },
       {card_Description :
         "write a post for the service to enable freelance to see your requested services, write a post for the service to enable freelance to see your requested services",
      logo:<SendIcon></SendIcon>
         
    },
       
  ]

  return (
    <div className="Overview__section_container_card">
      <div className="Overview__section_header-section">
        <p className="Overview__section_header-title">
          Get Started on our website with these tips
        </p>
      </div>
      <div className="Overview__section_cards_information_container">

        {
          overViewCards.map((card,index)=><OverviewCard desc={card.card_Description} logo={card.logo} index={index} />)
        }
      
      </div>
    </div>
  );
};

const OverviewCard = (props) => {

  console.log(props)
  return (
    <div className=" Overview__section_card_information" >
      <div className="Overview__section_card_icon-section" style={{animationDelay:`${props.index*.35}s`}}> <img src={props.logo.type}></img> </div>
      <div className="Overview__section_card_desc-section"style={{animationDelay:`${props.index*.5}s`}} >
        <p className=" Overview__section_card_desc-section_box" >{props.desc}</p>
      </div>
    </div>
  );
};

export default Overview;
