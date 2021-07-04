import React, { useState } from "react";

const OptionButton = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="post__option__button">
      <a
        style={{ color: "white", fontSize: "22px", fontWeight: "600" }}
        onClick={() => setOpen(!open)}
      >
        ≡
      </a>
      {open && props.children}
    </div>
  );
};

export default OptionButton;
