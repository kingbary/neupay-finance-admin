import React, { useState } from "react";
import {
  TransactionEscrowData,
  escrowTypeItems,
  escrowWalletItems,
} from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faFilter, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { iconsImgs } from "../../utils/images";
import "./Transaction.css";
import Wallet from "./Wallet";

function Transaction() {
  const navigate = useNavigate();

  const [showTooltip, setShowTooltip] = useState({});
  const [showCard, setShowCard] = useState({ escrow: false, wallet: false });
  const [buttonState, setButtonState] = useState({
    escrow: true,
    wallet: false,
  });

  const handleButtonClick = (buttonName) => {
    setButtonState({
      escrow: buttonName === "escrow",
      wallet: buttonName === "wallet",
    });
    setShowCard({ ...showCard, [buttonName]: true });
  };

  const handleTooltipClick = (id) => {
    navigate(`/transaction-details/${id}`);
  };

  const handleMouseEnter = (id) => {
    setShowTooltip((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setShowTooltip((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div className="admin-count">Transactions</div>
        <div className="admin-button">
          <button
            onClick={() => handleButtonClick("escrow")}
            className={buttonState.escrow ? "active" : ""}
            onMouseEnter={() => setShowCard({ ...showCard, escrow: true })}
            onMouseLeave={() => setShowCard({ ...showCard, escrow: false })}
          >
            Escrow
          </button>
          <button
            onClick={() => handleButtonClick("wallet")}
            className={buttonState.wallet ? "active" : ""}
            onMouseEnter={() => setShowCard({ ...showCard, wallet: true })}
            onMouseLeave={() => setShowCard({ ...showCard, wallet: false })}
          >
            Wallet
          </button>

          <button className={buttonState.removeAdmin ? "active" : ""}>
            <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
      </div>

      {/* This is the hover card that appears  on the escrow button */}
      {showCard.escrow && (
        <div className="tooltip-card" style={{ top: "200px" }}>
          <ul>
            {escrowTypeItems.map((escrowtypeItem, index) => (
              <li key={index}>
                <div
                  className="transanction-color"
                  style={{ backgroundColor: `${escrowtypeItem.color}` }}
                ></div>{" "}
                <p className="text">{escrowtypeItem.transactionType}</p>{" "}
                <div className="transaction-icon">
                  <img src={iconsImgs.arrowUp} alt="transaction-icon" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* This is the Escrow table and it shows when you click the escrow button */}
      {buttonState.escrow && (
        <div className="admin-table transaction-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {TransactionEscrowData.map((data) => (
                <tr
                  key={data.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTooltipClick(data.id);
                  }}
                >
                  <td>
                    <div className="first-transaction-item">
                      <div className="">
                        <img
                          src={
                            data.status.toLowerCase() === "pending"
                              ? iconsImgs.pendingIcon
                              : iconsImgs.completedIcon
                          }
                          alt={data.status}
                        />
                      </div>
                      <div className="info">
                        <h3>{data.npid}</h3>
                        <p>{data.email}</p>
                      </div>
                    </div>
                  </td>

                  <td>{data.transactionId}</td>
                  <td>{data.date}</td>
                  <td>{data.status}</td>
                  <td>₦ {data.amount}</td>
                  <td className="tooltip-container">
                    <div
                      className="tooltip"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTooltipClick(data.id);
                      }}
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
      )}

      {/* This is the wallet table */}
      {buttonState.wallet && <Wallet />}

      {/* This is the hover card that appears  on the wallet button */}
      {showCard.wallet && (
        <div className="tooltip-card" style={{ top: "200px" }}>
          <ul>
            {escrowWalletItems.map((escrowtypeItem, index) => (
              <li key={index}>
                <div
                  className="transanction-color"
                  style={{ backgroundColor: `${escrowtypeItem.color}` }}
                ></div>{" "}
                <p className="text">{escrowtypeItem.transactionType}</p>{" "}
                <div className="transaction-icon">
                  <img src={iconsImgs.arrowUp} alt="transaction-icon" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Transaction;
