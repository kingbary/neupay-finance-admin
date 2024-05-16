import React, { useState } from "react";
import "./InviteAdmin.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTimes } from "@fortawesome/free-solid-svg-icons";
import { iconsImgs } from "../../utils/images";

function InviteAdmin() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const handleTooltipClick = (action) => {
    if (action === "resend") {
      setSuccessModal(true);
    } else if (action === "cancel") {
      alert("Cancel Invite clicked");
    }
  };

  //Send Invite Button Clicked
  const handleSendInvite = () => {
    setSuccessModal(true);
  };

  const SuccessModal = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="close-btn" onClick={() => setSuccessModal(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="invite-modal-content">
            <div className="success-icon">
              <img src={iconsImgs.successIcon} alt="success" srcset="" />
            </div>
            <h3>Sucessful</h3>
            <p>
              You have successfully sent an invite to <br />
              <span className="email">odiraike8@gmail.com</span>
            </p>
            <button onClick={() => setSuccessModal(false)}>Done</button>
          </div>
        </div>
      </div>
    );
  };

  const TableData = [
    {
      email: "example1@example.com",
      role: "Admin",
      dateInvited: "2024-04-23",
    },
    {
      email: "example2@example.com",
      role: "Moderator",
      dateInvited: "2024-04-22",
    },
    {
      email: "example3@example.com",
      role: "User",
      dateInvited: "2024-04-21",
    },
    {
      email: "example1@example.com",
      role: "Admin",
      dateInvited: "2024-04-23",
    },
    {
      email: "example2@example.com",
      role: "Moderator",
      dateInvited: "2024-04-22",
    },
    {
      email: "example3@example.com",
      role: "User",
      dateInvited: "2024-04-21",
    },
    {
      email: "example3@example.com",
      role: "User",
      dateInvited: "2024-04-21",
    },
    {
      email: "example1@example.com",
      role: "Admin",
      dateInvited: "2024-04-23",
    },
    {
      email: "example2@example.com",
      role: "Moderator",
      dateInvited: "2024-04-22",
    },
    {
      email: "example3@example.com",
      role: "User",
      dateInvited: "2024-04-21",
    },
  ];

  return (
    <div className="details-container">
      <div className="header-container">
        <h3>
          Invite Admin <span>Unaccepted Invitations</span>
        </h3>
      </div>
      <div className="invite-main-content">
        <div className="invite-left">
          <div className="input-item">
            <p>Enter e-mail</p>
            <input type="text" placeholder="Invite admin" />
          </div>
          <div className="input-item">
            <p>Role</p>
            <input type="text" placeholder="Enter the role" />
          </div>
          <button onClick={handleSendInvite}>Send Invite</button>
        </div>
        <div className="invite-right">
          <div className="invite-table">
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Date Invited</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {TableData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                    <td>{data.dateInvited}</td>

                    <td className="tooltip-container">
                      <div
                        className="tooltip"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                      >
                        <FontAwesomeIcon icon={faEllipsisH} />
                        {showTooltip && (
                          <div className="">
                            <span
                              className="tooltiptext"
                              onClick={() => handleTooltipClick("resend")}
                            >
                              Resend Invite{" "}
                              <span
                                className="tooltiptext"
                                onClick={() => handleTooltipClick("cancel")}
                              >
                                Cancel Invite
                              </span>
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {successModal && <SuccessModal />}
    </div>
  );
}

export default InviteAdmin;
