import React, { useState } from "react";
import InviteAdmin from "../InviteAdmin/InviteAdmin";
import RemoveAdmin from "../RemoveAdmin/RemoveAdmin";
import { TableData } from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faUserPlus,
  faPlus,
  faTrashCan,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();

  const [showTooltip, setShowTooltip] = useState(false);
  const [buttonState, setButtonState] = useState({
    admin: true,
    inviteAdmin: false,
    removeAdmin: false,
  });

  const handleButtonClick = (buttonName) => {
    setButtonState({
      admin: buttonName === "admin" ? true : false,
      inviteAdmin: buttonName === "inviteAdmin" ? true : false,
      removeAdmin: buttonName === "removeAdmin" ? true : false,
    });
  };

  const handleTooltipClick = () => {
    navigate("/admin/1");
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div className="admin-count">
          Admins - <span>2345</span>
        </div>
        <div className="admin-button">
          <button
            onClick={() => handleButtonClick("admin")}
            className={buttonState.admin ? "active" : ""}
          >
            <span>
              <FontAwesomeIcon icon={faUserPlus} />
            </span>{" "}
            Admin
          </button>
          <button
            onClick={() => handleButtonClick("inviteAdmin")}
            className={buttonState.inviteAdmin ? "active" : ""}
          >
            {" "}
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>{" "}
            Invite Admin
          </button>

          <button
            onClick={() => handleButtonClick("removeAdmin")}
            className={buttonState.removeAdmin ? "active" : ""}
          >
            <span>
              <FontAwesomeIcon icon={faTrashCan} />
            </span>{" "}
            Remove Admin
          </button>
        </div>
      </div>

      {buttonState.admin && (
        <div className="admin-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Date Joined</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((data) => (
                <tr onClick={handleTooltipClick}>
                  <td className="img-data">
                    <span>
                      <img src={data.image} alt={data.name} />
                    </span>
                    {data.name}
                  </td>
                  <td>{data.email}</td>
                  <td>{data.role}</td>
                  <td>{data.dateJoined}</td>
                  <td className="tooltip-container">
                    <div
                      className="tooltip"
                      onClick={handleTooltipClick}
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    >
                      <FontAwesomeIcon icon={faEllipsisH} />
                      {showTooltip && (
                        <span className="tooltiptext">View Profile</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {buttonState.inviteAdmin && <InviteAdmin />}
      {buttonState.removeAdmin && <RemoveAdmin />}
    </div>
  );
}

export default Admin;
