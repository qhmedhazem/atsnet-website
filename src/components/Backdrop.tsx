import React from "react";

const Backdrop = () => {
  return (
    <div
      className="absolute -z-10"
      style={{
        backgroundColor: "var(--brand)",
        // filter: "blur(250px)",
        filter: "blur(150px)",
        width: "32rem",
        height: "32rem",
        maxWidth: "100%",
      }}
    />
  );
};

export default Backdrop;
