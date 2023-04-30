import React from "react";

export const DisplaySection = ({ triggerPreview }) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brillant</p>
      <span className="description">
        A display that's up to 2x brighter in the sun.
      </span>
      <button className="button" onClick={triggerPreview}>
        Try me!
      </button>
      <button className="back-button" onClick={handleScrollTop}>
        Top
      </button>
    </div>
  );
};
