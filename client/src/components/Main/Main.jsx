import React from "react";
import background from "../../../public/images/background.mp4";

const Main = () => {
  return (
    <div className="main">
      <video src={background} />
    </div>
  );
};

export default Main;
