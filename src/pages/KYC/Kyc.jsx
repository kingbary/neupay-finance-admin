import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KycTableData } from "../../data/data";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import "./kyc.css";

function Kyc() {
  const navigate = useNavigate();

  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipClick = () => {
    navigate("/kyc-detail/1");
  };

  return (
    <div className="kyc-page">
      <div className="admin-header">
        <div className="admin-count">KYC</div>
      </div>
      {/* Please ignore the class name this is for the kyc table */}
      <div className="kyc table admin-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {KycTableData.map((data) => (
              <tr onClick={handleTooltipClick}>
                <td className="img-data">
                  <span>
                    <img src={data.image} alt={data.name} />
                  </span>
                  {data.name}
                </td>
                <td>{data.email}</td>
                <td>{data.dateJoined}</td>
                <td>
                  <span>
                    <div></div>
                    {data.status}
                  </span>
                </td>
                <td className="tooltip-container">
                  <div
                    className="tooltip"
                    onClick={handleTooltipClick}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <FontAwesomeIcon icon={faEllipsisH} />
                    {showTooltip && (
                      <span className="tooltiptext">View Info</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Kyc;
