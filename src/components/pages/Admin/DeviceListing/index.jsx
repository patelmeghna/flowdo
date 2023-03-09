import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Modal } from "react-bootstrap";
import DeviceCard from "../../../utilities/DeviceCard";
import FilterDropdown from "../../../utilities/FilterDropdown";
import AddDevice from "../AddNewModal/AddDevice";
const apiurl = process.env.REACT_APP_BASE_URL;

const DeviceListing = () => {
  const [activeTab, setActiveTab] = useState("");
  const [deviceList, setDeviceList] = useState([]);
  const [addNew, setAddNew] = useState(false);

  const [deviceDetail, setDeviceDetail] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const [customerList, setCustomerList] = useState([]);
  const [dealerList, setDealerList] = useState([]);

  const getList = async () => {
    fetch(`${apiurl}/view/device/list`, {
      method: "post",
    }).then((res) =>
      res.json().then((data) => {
        if (data.length > 0) {
          setDeviceList(data);
        }
      })
    );

    fetch(`${apiurl}/view/customers/list`, {
      method: "post",
    }).then((res) =>
      res.json().then((data) => {
        if (data.length > 0) {
          setCustomerList(data);
        }
      })
    );
  };

  useEffect(() => {
    getList();
  }, []);

  const handleTabCliCk = (tabName) => {
    setActiveTab(tabName);
  };

  const handleClose = () => {
    getList();
    setAddNew(false);
  };

  const handleDelete = async (id) => {
    await axios
      .post(`${apiurl}/delete/device`, {
        id,
      })
      .then((response) => response)
      .catch((error) => console.log(error));

    getList();
  };

  const handleUpdate = async (id) => {
    await axios
      .post(`${apiurl}/view/device/details`, {
        deviceId: id,
      })
      .then((response) => {
        setDeviceDetail(response.data[0]);
      })
      .catch((error) => console.log(error));

    setShow(true);
  };

  useEffect(() => {
    console.log(deviceDetail);
    setName(deviceDetail.alias_name);
    setId(deviceDetail.deviceId);
  }, [deviceDetail]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${apiurl}/change/device/details`, {
        id: deviceDetail.id,
        alias_name: name,
      });

      await axios.post(`${apiurl}/change/deviceId`, {
        deviceId: id,
        id: deviceDetail.id,
      });

      setShow(false);
      getList();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="listing-page">
        {/* tab header */}
        <div className="tab-header">
          <button
            className={`btn btn-tab ${activeTab === "" ? "active" : ""}`}
            onClick={() => handleTabCliCk("")}
          >
            All
          </button>

          <div className="seperator"></div>

          <button
            className={`btn btn-tab ${activeTab === "active" ? "active" : ""}`}
            onClick={() => handleTabCliCk("active")}
          >
            Active
          </button>
          <button
            className={`btn btn-tab ${
              activeTab === "inactive" ? "active" : ""
            }`}
            onClick={() => handleTabCliCk("inactive")}
          >
            Inactive
          </button>

          <div className="seperator"></div>

          <button
            className={`btn btn-tab ${activeTab === "assign" ? "active" : ""}`}
            onClick={() => handleTabCliCk("assign")}
          >
            Assign
          </button>
          <button
            className={`btn btn-tab ${
              activeTab === "unassign" ? "active" : ""
            }`}
            onClick={() => handleTabCliCk("unassign")}
          >
            Unassign
          </button>

          <div className="seperator"></div>

          <button
            className={`btn btn-tab ${activeTab === "flow" ? "active" : ""}`}
            onClick={() => handleTabCliCk("flow")}
          >
            Flow
          </button>
          <button
            className={`btn btn-tab ${activeTab === "tank" ? "active" : ""}`}
            onClick={() => handleTabCliCk("tank")}
          >
            Tank
          </button>
        </div>
        {/* tab header */}

        {/* page sorting and info */}
        <div className="device-head d-flex align-items-center justify-content-between">
          <h3 className="title">device list</h3>

          <div className="right-btn-wrap d-flex align-items-center justify-content-end">
            <button className="add-new" onClick={() => setAddNew(true)}>
              Add <span>+</span>
            </button>
            <FilterDropdown
              placeholder="Sort By"
              options={["Name A-Z", "Name Z-A"]}
            />
          </div>
        </div>
        {/* page sorting and info */}

        {/* tab body */}
        <div className="tab-body">
          {deviceList.map((item) => (
            <DeviceCard
              name={item.alias_name}
              company={item.company_name}
              flow="100.98"
              totalFlow="2100.98"
              endDate={new Date(item.subscription_end).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }
              )}
              date="26 Feb 2023"
              active={item.customer_name}
              onDelete={() => {
                handleDelete(item.id);
              }}
              onUpdate={() => handleUpdate(item.id)}
            />
          ))}
        </div>
        {/* tab body */}
      </div>

      <AddDevice show={addNew} onHide={handleClose} />

      <Modal
        show={show}
        dialogClassName="modal-75w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <button className="close-icon" onClick={() => setShow(false)}>
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4039 15.7032L30.3126 3.81334C30.6685 3.4574 30.8685 2.97463 30.8685 2.47125C30.8685 1.96787 30.6685 1.4851 30.3126 1.12916C29.9567 0.77321 29.4739 0.573242 28.9705 0.573242C28.4671 0.573242 27.9844 0.77321 27.6284 1.12916L15.7386 13.0379L3.84879 1.12916C3.49285 0.77321 3.01008 0.573243 2.5067 0.573243C2.00332 0.573243 1.52055 0.77321 1.16461 1.12916C0.808663 1.4851 0.608695 1.96787 0.608695 2.47125C0.608695 2.97463 0.808663 3.4574 1.16461 3.81334L13.0733 15.7032L1.16461 27.593C0.987436 27.7687 0.846811 27.9778 0.750844 28.2081C0.654878 28.4385 0.605469 28.6855 0.605469 28.9351C0.605469 29.1846 0.654878 29.4317 0.750844 29.662C0.846811 29.8924 0.987436 30.1014 1.16461 30.2772C1.34033 30.4543 1.5494 30.595 1.77975 30.6909C2.01009 30.7869 2.25716 30.8363 2.5067 30.8363C2.75624 30.8363 3.00331 30.7869 3.23366 30.6909C3.464 30.595 3.67307 30.4543 3.84879 30.2772L15.7386 18.3684L27.6284 30.2772C27.8041 30.4543 28.0132 30.595 28.2435 30.6909C28.4739 30.7869 28.721 30.8363 28.9705 30.8363C29.22 30.8363 29.4671 30.7869 29.6975 30.6909C29.9278 30.595 30.1369 30.4543 30.3126 30.2772C30.4898 30.1014 30.6304 29.8924 30.7264 29.662C30.8223 29.4317 30.8717 29.1846 30.8717 28.9351C30.8717 28.6855 30.8223 28.4385 30.7264 28.2081C30.6304 27.9778 30.4898 27.7687 30.3126 27.593L18.4039 15.7032Z"
              fill="black"
            />
          </svg>
        </button>
        <Modal.Body>
          <h4 className="modal-title">Add Device</h4>
          <form action="" onSubmit={handleSubmit} className="modal-form">
            <div className="form-fields">
              <div>
                <FormLabel>Device Id</FormLabel>
                <FormControl
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Enter Device Id....."
                />
              </div>

              <div>
                <FormLabel>Device Name</FormLabel>
                <FormControl
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Device Name....."
                />
              </div>
            </div>

            <div className="form-btn d-flex align-items-center mt-5">
              <button type="submit" className="white-btn">
                Save
              </button>
              <button className="white-btn ms-4">Reset</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeviceListing;
