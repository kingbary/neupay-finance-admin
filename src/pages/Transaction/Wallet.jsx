import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WalletData } from "../../data/data";
import {
  faEllipsisH,
  faCircleArrowDown,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Wallet() {
  const navigate = useNavigate();

  const [showTooltip, setShowTooltip] = useState({});

  const handleWalletTransactionDetails = (id) => {
    navigate(`/wallet-transaction-detail/${id}`);
  };

  const handleMouseEnter = (id) => {
    setShowTooltip((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setShowTooltip((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="admin-table transaction-table wallet-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {WalletData.map((data) => (
            <tr
              key={data.id}
              onClick={() => handleWalletTransactionDetails(data.id)}
            >
              <td>
                <div className="first-wallet-item">
                  <div
                    className="icon"
                    style={{
                      backgroundColor: `${
                        data.category.toLowerCase() === "credit"
                          ? "var(--clr-primary)"
                          : "rgb(228, 79, 79)"
                      }`,
                    }}
                  >
                    {data.category.toLowerCase() === "credit" ? (
                      <FontAwesomeIcon icon={faPaperPlane} />
                    ) : (
                      <FontAwesomeIcon icon={faCircleArrowDown} />
                    )}
                  </div>
                  <div className="info">
                    <h3>{data.npid}</h3>
                    <p>{data.email}</p>
                  </div>
                </div>
              </td>
              <td>{data.category}</td>
              <td>{data.date}</td>
              <td className="status">
                <div></div> {data.status}
              </td>
              <td>₦ {data.amount}</td>
              <td className="tooltip-container">
                <div
                  className="tooltip"
                  onClick={() => handleWalletTransactionDetails(data.id)}
                  onMouseEnter={() => handleMouseEnter(data.id)}
                  onMouseLeave={() => handleMouseLeave(data.id)}
                >
                  <FontAwesomeIcon icon={faEllipsisH} />
                  {showTooltip[data.id] && (
                    <p className="tooltiptext">View Transaction</p>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Wallet;
