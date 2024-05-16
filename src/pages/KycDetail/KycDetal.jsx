import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { personsImgs } from "../../utils/images";
import "./KycDetail.css";

function KycDetal() {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const copyToClipboard = () => {
    inputRef.current.select();
    navigator.clipboard.writeText(inputRef.current.value).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="details-container kyc-detail">
      <div className="header-container">
        <h3>User Information</h3>
      </div>
      <div className="main-container">
        <div className="left">
          <div className="info-card">
            <div className="img-container">
              <img src={personsImgs.personImage} alt="" />
            </div>
            <div className="buttons">
              <button>
                <FontAwesomeIcon icon={faCircleXmark} />
                <span>Disapprove</span>
              </button>
              <button>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span> Approve</span>
              </button>
            </div>
          </div>

          <div className="info-card flex-colum">
            <div className="kyc-info-content">
              <p className="title">Full name</p>
              <h3 className="value">Elijah Ekong</h3>
            </div>
            <div className="kyc-info-content">
              <p className="title">Email</p>
              <h3 className="value">elijah123@gmail.com</h3>
            </div>
            <div className="kyc-info-content">
              <p className="title">NIN</p>
              <h3 className="copy" onClick={copyToClipboard}>
                <input
                  type="text"
                  value="12345679012"
                  readOnly
                  ref={inputRef}
                />
                <span>
                  <FontAwesomeIcon icon={faCopy} />
                </span>
                {copied && <span style={{ marginLeft: "5px" }}>Copied!</span>}
              </h3>
            </div>
            <div className="kyc-info-content">
              <p className="title">Gender</p>
              <h3 className="value">Male</h3>
            </div>
            <div className="kyc-info-content">
              <p className="title">Country</p>
              <h3 className="value">Nigeria</h3>
            </div>
            <div className="kyc-info-content">
              <p className="title">Mobile Number</p>
              <h3 className="value">8141174145</h3>
            </div>
            <div className="kyc-info-content">
              <p className="title">DOB</p>
              <h3 className="value">12TH April 1995</h3>
            </div>
            <div className="kyc-info-content">
              <p className="title">Address</p>
              <h3 className="value">21 laidi street lagos</h3>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="id-card-container">
            <h3>ID CARD (Front)</h3>
            <div className="image-container">
              <img src={personsImgs.idFront} alt="id-front" />
            </div>
          </div>

          <div className="id-card-container">
            <h3>ID CARD (Back)</h3>
            <div className="image-container">
              <img src={personsImgs.IdBack} alt="id-back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KycDetal;
