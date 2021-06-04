import React, { useState } from "react";

const OptionButton = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="post__header__left__button">
      <a onClick={() => setOpen(!open)}>{props.icon}</a>
      {open && props.children}
    </div>
  );
};

export default OptionButton;
