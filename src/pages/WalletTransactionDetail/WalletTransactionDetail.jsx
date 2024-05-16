import React, { useState, useRef } from "react";
import "./Wallet.css";
import { personsImgs } from "../../utils/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

function WalletTransactionDetail() {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const copyToClipboard = () => {
    inputRef.current.select();
    navigator.clipboard
      .writeText(inputRef.current.value)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="transaction-details wallet-transaction">
      <div className="transaction-npid">
        <p>NPID-56768689</p>
      </div>
      <div className="details-container">
        <div className="header-container">
          <h3>
            Transactors <span>Transaction details</span>
          </h3>
        </div>
        <div className="main-container">
          <div className="left">
            <div className="transactor-details-card">
              <div className="details-content">
                <div>
                  <div className="image-container">
                    <img src={personsImgs.personImage} alt="initiator-img" />
                  </div>
                </div>
                <div className="info">
                  <p className="name"> Elijah Ulaitor</p>
                  <p className="email">elijah@gmail.com</p>
                  <p className="view-profile">View Profile</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="tr-item">
              <p className="tr-item-name">Status</p>
              <p className="tr-item-gray flex">
                {" "}
                <span>
                  {/* Use this when the api is integrated and it becomes dynamic */}
                  {/* <img src={ status === pending ? iconsImgs.pendingIcon : iconsImgs.completedIcon } alt="status" /> */}
                  <div className="success"></div>
                </span>{" "}
                Successful
              </p>
            </div>
            <div className="line"></div>
            <div className="tr-item">
              <p className="tr-item-name">Category</p>
              <p className="tr-item-gray">Credit</p>
            </div>

            <div className="line"></div>

            <div className="tr-item">
              <p className="tr-item-name">Amount</p>
              <p>NGN 34,000.00</p>
            </div>
            <div className="line"></div>

            <div className="tr-item">
              <p className="tr-item-name">Date</p>
              <p>23rd, July, 2023</p>
            </div>
            <div className="line"></div>
            <div className="tr-item">
              <p className="tr-item-name">From</p>
              <p className="tr-item-gray">
                Escrow transanction with <span>NPID-245376</span>
              </p>
            </div>

            <div className="line"></div>
            <div className="tr-item" onClick={copyToClipboard}>
              <p className="tr-item-name">Transaction No.</p>
              <p className="tr-item-id">
                <input
                  type="text"
                  value="1234-2563-29008-12233"
                  readOnly
                  ref={inputRef}
                />
                <span>
                  <FontAwesomeIcon icon={faCopy} />
                </span>
                {copied && <span style={{ marginLeft: "5px" }}>Copied!</span>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletTransactionDetail;
