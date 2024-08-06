import React from "react";
import background from "../../assets/img/bg_404.jpg";
import "./Page404.scss";

export const Page404 = () => {
  return (
    <div className="nopage" style={{ backgroundImage: `url(${background})` }}>
      <div className="nopage__header">
        <div className="nopage__number">404</div>
        <h1 className="nopage__title">
          Лихо... такої <br /> iсторії немає
        </h1>
      </div>
    </div>
  );
};
