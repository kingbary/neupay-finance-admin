import React, { useState, useRef } from "react";
import "./TransanctionDetails.css";
import { personsImgs } from "../../utils/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { iconsImgs } from "../../utils/images";

function TransactionDetails() {
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
    <div className="transaction-details">
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
                  <div className="label">Initiator</div>
                </div>
                <div className="info">
                  <p className="name"> Elijah Ulaitor</p>
                  <p className="email">elijah@gmail.com</p>
                  <p className="view-profile">View Profile</p>
                </div>
              </div>

              <div className="line"></div>

              {/* This is for the reciever dummy data and make dynamic */}
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
            <div className="attached-doc">
              <h3>Attached Doc</h3>
              <div className="doc-container">
                <div>
                  <p className="filename">File of agreement</p>
                  <p className="file-type">file type:PDF</p>
                  <p className="file-size">3MB</p>
                </div>

                <p className="action">Open Doc</p>
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
                  <img src={iconsImgs.pendingIcon} alt="status" />
                </span>{" "}
                Pending
              </p>
            </div>
            <div className="line"></div>
            <div className="tr-item">
              <p className="tr-item-name">NPIDs</p>
              <p className="tr-item-gray">
                NPID <span>123456</span> & NPID <span>232516 </span>
              </p>
            </div>
            <div className="line"></div>
            <div className="tr-item">
              <p className="tr-item-name">Product/Service name</p>
              <p className="tr-item-value">
                Mac book pro, charger, IPad, Oraima Charger and Pencil
              </p>
            </div>
            <div className="line"></div>

            <div className="tr-item">
              <p className="tr-item-name">Amount</p>
              <p>NGN 34,000.00</p>
            </div>
            <div className="line"></div>

            <div className="tr-item">
              <p className="tr-item-name">Delivery Date</p>
              <p>23rd, July, 2023</p>
            </div>
            <div className="line"></div>

            <div className="tr-item">
              <p className="tr-item-name">Transaction accepted</p>
              <p>12th, July, 2023</p>
            </div>
            <div className="line"></div>

            <div className="tr-item" onClick={copyToClipboard}>
              <p className="tr-item-name">Transaction ID</p>
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

export default TransactionDetails;
