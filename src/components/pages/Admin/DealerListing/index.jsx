import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Modal } from "react-bootstrap";
import FilterDropdown from "../../../utilities/FilterDropdown";
import UserCard from "../../../utilities/UserCard";
import AddDealer from "../AddNewModal/AddDealer";
const apiurl = process.env.REACT_APP_BASE_URL;

const DealerListing = () => {
  const [dealerList, setDealerList] = useState([]);
  const [addNew, setAddNew] = useState(false);

  const [show, setShow] = useState(false);
  const [dealerDetail, setDealerDetail] = useState([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleClosePopup = () => {
    setShow(false);
  };

  const getList = async () => {
    fetch(`${apiurl}/view/dealers/list`, {
      method: "post",
    }).then((res) =>
      res.json().then((data) => {
        if (data.length > 0) {
          setDealerList(data);
        }
      })
    );
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setName(dealerDetail.name);
    setCompany(dealerDetail.company_name);
    setPhone(dealerDetail.mobile_no);
    setEmail(dealerDetail.email_id);
  }, [dealerDetail]);

  const handleClose = () => {
    setAddNew(false);
    getList();
  };

  const handleDelete = async (id) => {
    await axios
      .post(`${apiurl}/delete/dealer`, {
        id,
      })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    fetch(`${apiurl}/view/dealers/list`, {
      method: "post",
    }).then((res) =>
      res.json().then((data) => {
        if (data.length > 0) {
          setDealerList(data);
        }
      })
    );
  };

  const handleUpdate = async (id) => {
    await axios
      .post(`${apiurl}/view/dealer/details`, {
        dealerId: id,
      })
      .then((response) => {
        setDealerDetail(response.data[0]);
      })
      .catch((error) => console.log(error));

    setShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass === "" && confirmPass === "") {
      try {
        const response = await axios.post(`${apiurl}/change/dealer/details`, {
          id: dealerDetail.dealerId,
          name,
          company_name: company,
          mobile_no: phone,
          email_id: email,
        });

        setShow(false);
        getList();
      } catch (error) {
        console.log(error);
      }
    } else if (confirmPass === pass) {
      try {
        const response = await axios.post(`${apiurl}/change/dealer/details`, {
          id: dealerDetail.id,
          name,
          company_name: company,
          mobile_no: phone,
          email_id: email,
          password: pass,
        });

        setShow(false);
        getList();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Password and confirm password must be the same");
    }
  };

  return (
    <>
      <div className="listing-page">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="title">dealer list</h3>

          <div className="right-btn-wrap d-flex align-items-center justify-content-end">
            <button
              className="add-new"
              onClick={() => {
                setAddNew(true);
              }}
            >
              Add <span>+</span>
            </button>
            <FilterDropdown
              placeholder="Sort By"
              options={["Name A-Z", "Name Z-A"]}
            />
          </div>
        </div>

        <div className="customer-listing">
          {dealerList.map((item) => (
            <UserCard
              name={item.name}
              company={item.company_name}
              assignee={item.deviceCount}
              date={new Date(item.join_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              endDate="15 Aug 2023"
              phone={item.mobile_no}
              email={item.email_id}
              onClick={() => handleDelete(item.dealerId)}
              onUpdate={() => handleUpdate(item.dealerId)}
              dealerId={item.dealerId}
            />
          ))}
        </div>
      </div>

      <AddDealer show={addNew} onHide={handleClose} />

      <Modal
        show={show}
        onHide={handleClosePopup}
        dialogClassName="modal-75w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <button className="close-icon" onClick={handleClosePopup}>
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
          <h4 className="modal-title">Edit Customer</h4>
          <form action="" onSubmit={handleSubmit} className="modal-form">
            <div className="form-fields">
              <div>
                <FormLabel>Customer Name</FormLabel>
                <FormControl
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Customer Name....."
                />
              </div>

              <div>
                <FormLabel>Company Name</FormLabel>
                <FormControl
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Enter Company Name....."
                />
              </div>

              <div>
                <FormLabel>Phone</FormLabel>
                <FormControl
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  placeholder="Enter Phone Number....."
                />
              </div>

              <div>
                <FormLabel>Email</FormLabel>
                <FormControl
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Your Email....."
                />
              </div>

              <div>
                <FormLabel>New Password</FormLabel>
                <FormControl
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="Enter Your Password....."
                />
              </div>

              <div>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  type="password"
                  placeholder="Enter Confirm Password....."
                />
              </div>
            </div>

            <div className="form-btn d-flex align-items-center mt-5">
              <button type="submit" className="white-btn">
                Save
              </button>
              <button className="white-btn mx-4">Reset</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DealerListing;
