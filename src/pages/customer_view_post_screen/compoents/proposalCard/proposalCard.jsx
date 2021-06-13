import React from "react"
import Avatar from "../../../../components/search_result/inner_components/avatar";
import ProposalCardButton from "../button";
import ProposalSteps from "../proposalSteps/proposalStep"
import Zoom from 'react-reveal/Zoom'

const ProposalCard = ({
  sericeProviderUsername,
  proposalDay,
  proposalDate,
  propsalTime,
  proposalFess,
  proposalDescription,useState,proposalsInfo
}) => {
  const [open, setOpen] = useState(false);

  return (
      <Zoom>
          <div className="proposal__card__information_1">
      <div className="proposal__header_background_box"></div>
      <div className="proposal__header_area">
        <div className="proposal__avatar_profileinfo">
          <Avatar
            source="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
            width={"100px"}
            height={"100px"}
          />
          <div className="proposal__profile_info">
            <p>{sericeProviderUsername}</p>
            <p>
              {proposalDay}, {proposalDate}, {propsalTime}
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
          <b>Fees: {proposalFess}</b>
        </p>
        <p>
          <b>Description: </b>
        </p>
        <p>{proposalDescription}</p>
        {open ? <ProposalSteps {...proposalsInfo} /> : ""}
      </div>
    </div>
    </Zoom>
  );
};

export default ProposalCard;