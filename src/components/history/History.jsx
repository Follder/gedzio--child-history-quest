import "./History.scss";
import background from "../../assets/img/paper.png";
import close from "../../assets/img/close.png";
import { useEffect, useState } from "react";

export const History = ({ text, setShowModal }) => {
  const [visibleItem, setVisibleItem] = useState([]);

  useEffect(() => {
    let timeId;

    text.forEach((item, i) => {
      timeId = setTimeout(() => {
        setVisibleItem((prevVisibleItem) => [...prevVisibleItem, item]);
      }, i * 2000);
    });

    return clearInterval(timeId);
  }, [text]);

  console.log(visibleItem);

  return (
    <div className="paper" style={{ backgroundImage: `url(${background})` }}>
      <div className="paper__close" onClick={() => setShowModal(false)}>
        <img src={close} alt="close-btn" />
      </div>
      <div className="paper__content">
        {visibleItem.map((item, i) => {
          return <p className="paper__paragraph" key={i}>{item}</p>;
        })}
      </div>
    </div>
  );
};
