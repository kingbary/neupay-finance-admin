import React from "react";
import { useNavigate } from "react-router-dom";

import "./ContentTop.css";
import { personsImgs } from "../../utils/images";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

function ContentTop() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoForward = () => {
    navigate(1);
  };

  return (
    <div className="content-top-container">
      <div className="content-left">
        <div className="pagination-buttons">
          <div className="leftbutton" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "grey" }} />
          </div>

          <div className="rightbutton" onClick={handleGoForward}>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "grey" }} />
          </div>
        </div>
        <div className="relative w-[500px] h-[50px] border-[2px] border-[#dbd6d6] rounded-full overflow-hidden">
          <input
            className="w-full h-full pl-4 pr-8 outline-none"
            type="text"
            placeholder="Search by email or role"
          />
          <div className="absolute top-3 right-4 cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "grey" }} />
          </div>
        </div>
      </div>
      <div className="content-right">
        <div className="notificaiton-icon">
          <FontAwesomeIcon icon={faBell} color="grey" />
        </div>
        <div className="admin-image">
          <img src={personsImgs.personImage} alt="admin-image" />
        </div>
        <div className="more">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
    </div>
  );
}

export default ContentTop;
