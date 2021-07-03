import React from "react";
import Avatar from "../../../../components/search_result/inner_components/avatar";
import ProposalCardButton from "../button";
import ProposalSteps from "../proposalSteps/proposalStep";
import Zoom from "react-reveal/Zoom";
import moment from "moment";

const ProposalCard = ({
  serviceProvider,
  steps,
  description,
  diagnosisFee,
  provisionDate,
  timepStamp,
  useState,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Zoom>
      <div className="proposal__card__information_1">
        <div className="proposal__header_background_box"></div>
        <div className="proposal__header_area">
          <div className="proposal__avatar_profileinfo">
            <Avatar
              source={serviceProvider.imgSrc}
              width={"100px"}
              height={"100px"}
            />
            <div className="proposal__profile_info">
              <p>
                {serviceProvider.firstName + " " + serviceProvider.lastName}
              </p>
              <p>
                {provisionDate} / {moment(timepStamp).fromNow()}
              </p>
            </div>
          </div>
          <div className="proposal__controlled_buttons">
            <ProposalCardButton
              isOpened={false}
              buttonName={"Accept"}
              onClick={() => setOpen(false)}
            />
            <ProposalCardButton
              isOpened={false}
              buttonName={"Reject"}
              onClick={() => setOpen(false)}
            />
            <ProposalCardButton
              buttonName={"Show steps"}
              onClick={() => setOpen(!open)}
              isOpened={open}
            />
          </div>
        </div>
        <div className="proposal__body_content">
          <p>
            <b>Fees: {diagnosisFee + " " + "RM"}</b>
          </p>
          <p>
            <b>Description: {description} </b>
          </p>
          <p>{}</p>
          {open ? <ProposalSteps steps={steps} /> : ""}
        </div>
      </div>
    </Zoom>
  );
};

export default ProposalCard;
