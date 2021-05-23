import React, { useState } from "react";
import OptionIcon from "./option_icon";

const OptionButton = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="post__header__left__button">
      <a onClick={() => setOpen(!open)}>
        <OptionIcon />
      </a>
      {open && props.children}
    </div>
  );
};

export default OptionButton;
