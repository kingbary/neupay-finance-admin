import React, { useState } from "react";
import { TableData } from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./RemoveAdmin.css";

function RemoveAdmin() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="admin-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Date Removed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((data) => (
            <tr>
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
                  //   onClick={handleTooltipClick}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <FontAwesomeIcon icon={faEllipsisH} />
                  {showTooltip && <span className="tooltiptext">Reinvite</span>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RemoveAdmin;
