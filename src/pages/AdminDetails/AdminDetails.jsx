import React, { useState } from "react";
import "./AdminDetails.css";
import { PermissionIcons, personsImgs } from "../../utils/images";
import aboutIcon from "../../assets/Icon/user.svg";
import permisionIcon from "../../assets/Icon/ban.svg";
import trashIcon from "../../assets/Icon/trash.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import Modal from "../../components/Modal/Modal";

function AdminDetails() {
  const [isAbout, setIsAbout] = useState(true);
  const [isPermission, setIsPermission] = useState(false);
  const [isSwitchOn, setSwitchOn] = useState(false); // State for the switch

  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

  const [isSuretoDelete, setIsSuretoDelete] = useState(false); // State for the isDelete Modal

  // Function to toggle the modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to toggle the switch state
  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };

  //function to handle about section
  const handleAbout = () => {
    setIsPermission(false);
    setIsAbout(!isAbout);
  };
  //function to handle permission section
  const handlePermission = () => {
    setIsAbout(false);
    setIsPermission(!isPermission);
  };

  //function to handle delete whent it clicked
  const handleDelete = () => {
    setIsSuretoDelete(true);
  };

  const toggleSureDeleteModal = () => {
    setIsSuretoDelete(!isSuretoDelete);
  };

  //
  const deleteAdmin = () => {
    alert("Admin Deleted Successfully");
  };

  return (
    <div className="details-container">
      <div className="header-container">
        <h3>
          Admin Information <span>Details</span>
        </h3>
        {/* <h3>Details</h3> */}
      </div>
      <div className="main-container">
        <div className="left">
          <div className="info-card">
            <div className="image">
              <img src={personsImgs.personImage} alt="admin-image" />
            </div>
            <div className="info">
              <h3>Cameron Williamson</h3>
              <p>odiraike8@gmail.com</p>
              <p>Admin</p>
            </div>
          </div>

          <div className="card-two">
            <div className="card-item" onClick={handleAbout}>
              <div className="icon">
                <img src={aboutIcon} alt="about" />
              </div>
              <div className="text-content">
                <h3>About</h3>
                <p>Click to see their information</p>
              </div>

              <div className="action-button" style={{ marginLeft: "auto" }}>
                <button onClick={handleAbout}>
                  {isAbout ? (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      style={{ fontSize: "24px", color: "blue" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ fontSize: "24px", color: "blue" }}
                    />
                  )}
                </button>
              </div>
            </div>

            <div className="card-item" onClick={handlePermission}>
              <div className="icon">
                <img src={permisionIcon} alt="permision" />
              </div>
              <div className="text-content">
                <h3>Permissions</h3>
                <p>Click to permit admin</p>
              </div>

              <div className="action-button" style={{ marginLeft: "auto" }}>
                <button onClick={handlePermission}>
                  {isPermission ? (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      style={{ fontSize: "24px", color: "blue" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ fontSize: "24px", color: "blue" }}
                    />
                  )}
                </button>
              </div>
            </div>
            <div className="line"></div>

            <div className="card-item" onClick={toggleModal}>
              <div className="icon-del">
                <img src={trashIcon} alt="trash" />
              </div>
              <div className="text-content">
                <h3>Remove Admin</h3>
                <p>Click to remove admin</p>
              </div>
            </div>
          </div>
        </div>

        {isAbout && (
          <div className="right">
            <div>
              <div className="about-header">
                <h3>About Admin</h3>
              </div>
              <div className="info-header">
                <p>Personal Information</p>
              </div>
              <div className="about-info">
                <p>Full Name</p>
                <p className="value">Cameron Williamson</p>
              </div>
              <div className="about-info">
                <p>E-mail</p>
                <p className="value">olaoluwaabijo@gmail.com</p>
              </div>
              <div className="about-info">
                <p>Role</p>
                <p className="value">Admin</p>
              </div>
            </div>
            <div>
              <div className="info-header">
                <p>Account information</p>
              </div>
              <div className="about-info">
                <p>Date added</p>
                <p className="value">23rd march 2023</p>
              </div>
              <div className="about-info">
                <p>Time</p>
                <p className="value">09:12 AM</p>
              </div>
            </div>
          </div>
        )}

        {isPermission && (
          <div className="right">
            <div>
              <div className="about-header">
                <h3>Permissions</h3>
              </div>
              <div className="line"></div>
              <div className="card-item">
                <div className="icon">
                  <img src={PermissionIcons.overview} alt="permision" />
                </div>
                <div className="text-content">
                  <h3>Overview</h3>
                  <p>Give admin permission to access overview</p>
                </div>

                <div className="action-button" style={{ marginLeft: "auto" }}>
                  <button>
                    <ToggleSwitch
                      isOn={isSwitchOn}
                      handleToggle={toggleSwitch}
                    />
                  </button>
                </div>
              </div>
              <div className="line"></div>
              <div className="card-item">
                <div className="icon">
                  <img src={PermissionIcons.users} alt="permision" />
                </div>
                <div className="text-content">
                  <h3>Users</h3>
                  <p>Give admin permission to access users</p>
                </div>

                <div className="action-button" style={{ marginLeft: "auto" }}>
                  <button>
                    <ToggleSwitch />
                  </button>
                </div>
              </div>
              <div className="line"></div>
              <div className="card-item">
                <div className="icon">
                  <img src={PermissionIcons.transactions} alt="permision" />
                </div>
                <div className="text-content">
                  <h3>Transactions</h3>
                  <p>Give admin permission to access Transactions</p>
                </div>

                <div className="action-button" style={{ marginLeft: "auto" }}>
                  <button>
                    <ToggleSwitch />
                  </button>
                </div>
              </div>
              <div className="line"></div>
              <div className="card-item">
                <div className="icon">
                  <img src={PermissionIcons.withdrawals} alt="permision" />
                </div>
                <div className="text-content">
                  <h3>Withdrawals</h3>
                  <p>Give admin permission to access Withdrawals</p>
                </div>

                <div className="action-button" style={{ marginLeft: "auto" }}>
                  <button>
                    <ToggleSwitch />
                  </button>
                </div>
              </div>
              <div className="line"></div>
              <div className="card-item">
                <div className="icon">
                  <img src={PermissionIcons.withdrawals} alt="permision" />
                </div>
                <div className="text-content">
                  <h3>Dispute</h3>
                  <p>Give admin permission to access Dispute</p>
                </div>

                <div className="action-button" style={{ marginLeft: "auto" }}>
                  <button>
                    <ToggleSwitch />
                  </button>
                </div>
              </div>
              <div className="line"></div>
              <div className="card-item">
                <div className="icon">
                  <img src={PermissionIcons.messages} alt="permision" />
                </div>
                <div className="text-content">
                  <h3>Messages</h3>
                  <p>Give admin permission to access Messages</p>
                </div>

                <div className="action-button" style={{ marginLeft: "auto" }}>
                  <button>
                    <ToggleSwitch />
                  </button>
                </div>
              </div>
              <div className="line"></div>
              <div className="card-item">
                <div className="icon">
                  <img src={PermissionIcons.logs} alt="permision" />
                </div>
                <div className="text-content">
                  <h3>Logs</h3>
                  <p>Give admin permission to access Logs</p>
                </div>

                <div className="action-button" style={{ marginLeft: "auto" }}>
                  <button>
                    <ToggleSwitch />
                  </button>
                </div>
              </div>
              <div className="line"></div>
              <div className="card-item">
                <div className="icon">
                  <img src={PermissionIcons.kyc} alt="permision" />
                </div>
                <div className="text-content">
                  <h3>KYC</h3>
                  <p>Give admin permission to access KYC</p>
                </div>

                <div className="action-button" style={{ marginLeft: "auto" }}>
                  <button>
                    <ToggleSwitch />
                  </button>
                </div>
              </div>
              <div className="line"></div>
              <div className="card-item">
                <div className="icon">
                  <img src={PermissionIcons.settings} alt="permision" />
                </div>
                <div className="text-content">
                  <h3>Settings</h3>
                  <p>Give admin permission to access setting</p>
                </div>

                <div className="action-button" style={{ marginLeft: "auto" }}>
                  <button>
                    <ToggleSwitch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isModalOpen && (
          <Modal
            onClose={toggleModal}
            handleDelete={handleDelete}
            modalHeading="Remove Admin"
            modalContent="Are you sure you want to remove admin from your dashboard?"
            cancelText="Cancel"
            actionText=" Delete"
            imgSrc={personsImgs.personImage}
            icon={<FontAwesomeIcon icon={faTrashAlt} />}
          />
        )}

        {isSuretoDelete && (
          <Modal
            onClose={toggleSureDeleteModal}
            handleDelete={deleteAdmin}
            modalHeading="Admin Removed"
            modalContent="Admin has been removed. They will be unable to log into their account until they're reinvented"
            actionText="Done"
            imgSrc={personsImgs.personImage}
          />
        )}
      </div>
    </div>
  );
}

export default AdminDetails;
