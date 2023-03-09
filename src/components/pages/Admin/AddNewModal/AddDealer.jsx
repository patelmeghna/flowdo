import axios from "axios";
import React, { useState, useEffect } from "react";
import { FormControl, FormLabel, FormSelect, Modal } from "react-bootstrap";
const apiurl = process.env.REACT_APP_BASE_URL;

const AddDealer = (props) => {
  const [customer, setCustomer] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [device, setDevice] = useState("");
  const [deviceList, setDeviceList] = useState([]);
  const [customerId, setCustomerId] = useState("");

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
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    axios.post(`${apiurl}/assign/customer`, {
      deviceId: device,
      dealerId: customerId,
    });
  }, [customerId]);

  const filteredData = deviceList.filter((item) => item.dealer_id === null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      customer === "" ||
      company === "" ||
      phone === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("All fields are mandatory");
    }

    if (confirmPassword === password) {
      try {
        const response = await axios
          .post(`${apiurl}/add/dealer`, {
            name: customer,
            company_name: company,
            mobile_no: phone,
            email_id: email,
            password,
          })
          .then((res) => {
            // setCustomerId(res.data.customer.id);
            console.log(res.data);
          });
        props.onHide();

        if (response.message === "this email is already use") {
          alert("this email is already use");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Password and confirm password are not same");
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setCustomer("");
    setCompany("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDevice("");
  };

  return (
    <Modal
      {...props}
      dialogClassName="modal-75w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <button className="close-icon" onClick={props.onHide}>
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
        <h4 className="modal-title">Add Dealer</h4>
        <form action="" onSubmit={handleSubmit} className="modal-form">
          <div className="form-fields">
            <div>
              <FormLabel>Dealer Name</FormLabel>
              <FormControl
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
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
              <FormLabel>Password</FormLabel>
              <FormControl
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Your Password....."
              />
            </div>

            <div>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Enter Confirm Password....."
              />
            </div>

            <div>
              {filteredData?.length > 0 && (
                <>
                  <FormLabel>Add Device</FormLabel>
                  <FormSelect
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                  >
                    <option value="">Select Device</option>
                    {filteredData.map((item) => (
                      <option value={item.id}>{item.alias_name}</option>
                    ))}
                  </FormSelect>
                </>
              )}
            </div>
          </div>

          <div className="form-btn d-flex align-items-center mt-5">
            <button type="submit" className="white-btn">
              Save
            </button>
            <button onClick={handleReset} className="white-btn ms-4">
              Reset
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddDealer;
