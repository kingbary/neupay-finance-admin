import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Dispute.css";
import { TableData } from "../../data/data";
import { personsImgs, iconsImgs } from "../../utils/images";

function Dispute() {
  const [showModal, setShowModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
  });

  const handleOnClick = () => {
    // setShowModal(true);
    setShowModal(!showModal);
  };

  const handleShowSuccessModal = () => {
    setSuccessModal(!successModal);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  const SuccessModal = () => {
    setShowModal(false);
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="close-btn" onClick={() => setSuccessModal(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="success-modal-content">
            <div className="success-icon">
              <img src={iconsImgs.successIcon} alt="success" srcset="" />
            </div>
            <h3>Sucessful</h3>
            <p>
              You have successfully released{" "}
              <span className="amount">#200,000</span> to{" "}
              <span className="npid">NPID-564537</span>
            </p>
            <button onClick={() => setSuccessModal(false)}>Done</button>
          </div>
        </div>
      </div>
    );
  };

  const Modal = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <h3>Release funds</h3>
          <p className="heading-2">
            Kindly choose the transactor you want to release funds to
          </p>
          <div className="transaction">
            <div className="details">
              <div className="image">
                <img src={personsImgs.personImage} alt="initiator-img" />
                <div className="tag">Initiator</div>
              </div>
              <div className="name">
                <p>Elijah Ulaitor</p>
                <p>elijah@gmail.com</p>
              </div>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="checkbox1"
                onChange={handleCheckboxChange}
                checked={checkboxes.checkbox1}
              />
            </div>
          </div>
          <div className="line"></div>
          <div className="transaction">
            <div className="details">
              <div className="image">
                <img src={personsImgs.personImage} alt="initiator-img" />
              </div>
              <div className="name">
                <p>Ike Odira</p>
                <p>odiraike8@gmail.com</p>
              </div>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="checkbox2"
                onChange={handleCheckboxChange}
                checked={checkboxes.checkbox2}
              />
            </div>
          </div>

          <div className="release-funds-btn-container">
            <button
              className="release-funds-btn btn-cancel"
              onClick={handleOnClick}
            >
              Cancel
            </button>

            <button
              onClick={handleShowSuccessModal}
              disabled={!checkboxes.checkbox1 && !checkboxes.checkbox2}
              className={`release-funds-btn ${
                checkboxes.checkbox1 || checkboxes.checkbox2
                  ? `active`
                  : `disable`
              }`}
            >
              Release Funds
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dispute-page">
      <div className="dispute-header">Dipute Resolution</div>
      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>User NPID</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((data) => (
              <tr>
                <td>
                  <div>
                    <h3>NPID-56768689</h3>
                    <p>Initiator</p>
                  </div>
                  <div>
                    <h3>NPID-56768689</h3>
                    <p>Other Party</p>
                  </div>
                </td>
                <td>2389-3HY6-TY57</td>
                <td>₦40,000</td>
                <td>{data.dateJoined}</td>
                <td>
                  <button
                    className="release-btn"
                    disabled={false}
                    onClick={handleOnClick}
                  >
                    Release
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && <Modal />}
      {successModal && <SuccessModal />}
    </div>
  );
}

export default Dispute;
