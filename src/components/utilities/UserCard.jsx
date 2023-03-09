import axios from "axios";
import React, { useEffect, useState } from "react";
const apiurl = process.env.REACT_APP_BASE_URL;

const UserCard = (props) => {
  const [endDate, setEndDate] = useState("");
  const [dealerEndDate, setDealerEndDate] = useState("");

  const handleDetail = async (id) => {
    await axios
      .post(`${apiurl}/view/customer/detail/device/list`, {
        customerId: id,
      })
      .then((response) => {
        if (response.data.subscriptionEnd !== null) {
          // setEndDate(response.data.subscriptionEnd);
          setEndDate(
            new Date(response.data.subscriptionEnd).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            )
          );
        }
      })
      .catch((error) => console.log(error));
  };

  const handleDealerDetail = async (dealerId) => {
    await axios
      .post(`${apiurl}/view/dealer/detail/device/list`, {
        dealerId: dealerId,
      })
      .then((response) => {
        if (response.data.subscriptionEnd !== null) {
          setDealerEndDate(response.data.subscriptionEnd);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handleDetail(props.id);
    handleDealerDetail(props.dealerId);
  }, []);

  return (
    <div className="detail-listing-wrap">
      <div className="listing-detail-wrap">
        <div className="about-info-wrap">
          <h4 className="user-name">{props.name}</h4>
          <p className="user-company">{props.company}</p>
        </div>
        <div className="device-info">
          <h5 className="assigned-num">{props.assignee}</h5>
          <p className="assigned-text">Assigned Device</p>
        </div>
        <div className="user-dates">
          <p className="user-data-text">
            Date Added: <span> {props.date} </span>
          </p>
          {endDate !== "" ? (
            <p className="user-data-text">
              Subscription End:{" "}
              <span>
                {new Date(endDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </p>
          ) : (
            <p className="user-data-text">
              Subscription End: <span>---</span>
            </p>
          )}

          {dealerEndDate !== "" ? (
            <p className="user-data-text">
              Subscription End:{" "}
              <span>
                {new Date(dealerEndDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </p>
          ) : (
            <p className="user-data-text">
              Subscription End: <span>---</span>
            </p>
          )}
        </div>

        <div className="user-contact">
          <p className="user-data-text">
            Phone: <span> {props.phone} </span>
          </p>
          <p className="user-data-text">
            Email: <span> {props.email} </span>
          </p>
        </div>
      </div>

      <div className="card-actions">
        <button onClick={props.onUpdate} className="btn-action">
          <svg
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2998 51.2254C11.4998 51.2254 10.7998 50.9254 10.1998 50.3254C9.5998 49.7254 9.2998 49.0254 9.2998 48.2254V18.2254C9.2998 17.4254 9.5998 16.7254 10.1998 16.1254C10.7998 15.5254 11.4998 15.2254 12.2998 15.2254H32.5498L29.5498 18.2254H12.2998V48.2254H42.2998V30.8254L45.2998 27.8254V48.2254C45.2998 49.0254 44.9998 49.7254 44.3998 50.3254C43.7998 50.9254 43.0998 51.2254 42.2998 51.2254H12.2998ZM36.3998 15.6254L38.5498 17.7254L24.2998 31.9254V36.2254H28.5498L42.8498 21.9254L44.9498 24.0254L29.7998 39.2254H21.2998V30.7254L36.3998 15.6254ZM44.9498 24.0254L36.3998 15.6254L41.3998 10.6254C41.9665 10.0587 42.6717 9.77539 43.5154 9.77539C44.3591 9.77539 45.0705 10.0754 45.6498 10.6754L49.8498 14.9254C50.4165 15.5254 50.6998 16.2333 50.6998 17.049C50.6998 17.8647 50.3998 18.5569 49.7998 19.1254L44.9498 24.0254Z"
              fill="#09C4FF"
            />
          </svg>
        </button>

        <button onClick={props.onClick} className="btn-action">
          <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.268 22.9132L40.6379 41.9844C40.5843 43.6177 39.8962 45.1658 38.7198 46.3002C37.5434 47.4345 35.9713 48.0658 34.3371 48.06H22.3654C20.7323 48.0658 19.1611 47.4354 17.9848 46.3024C16.8086 45.1694 16.1198 43.6229 16.0646 41.9907L15.4345 22.9132C15.4207 22.4954 15.5734 22.0893 15.8591 21.7841C16.1448 21.479 16.5399 21.2998 16.9577 21.286C17.3755 21.2722 17.7816 21.425 18.0868 21.7106C18.392 21.9963 18.5711 22.3915 18.5849 22.8093L19.215 41.8851C19.2464 42.6995 19.5921 43.47 20.1796 44.0348C20.767 44.5997 21.5505 44.9149 22.3654 44.9143H34.3371C35.1531 44.9148 35.9375 44.5987 36.5251 44.0325C37.1127 43.4664 37.4577 42.6943 37.4875 41.8788L38.1176 22.8093C38.1314 22.3915 38.3106 21.9963 38.6157 21.7106C38.9209 21.425 39.327 21.2722 39.7448 21.286C40.1626 21.2998 40.5578 21.479 40.8434 21.7841C41.1291 22.0893 41.2818 22.4954 41.268 22.9132ZM43.352 16.5667C43.352 16.9844 43.1861 17.3851 42.8907 17.6805C42.5953 17.9759 42.1946 18.1419 41.7768 18.1419H14.9273C14.5095 18.1419 14.1088 17.9759 13.8134 17.6805C13.518 17.3851 13.3521 16.9844 13.3521 16.5667C13.3521 16.1489 13.518 15.7482 13.8134 15.4528C14.1088 15.1574 14.5095 14.9915 14.9273 14.9915H19.8104C20.3095 14.9928 20.7913 14.8084 21.1619 14.4741C21.5326 14.1399 21.7656 13.6797 21.8157 13.1831C21.9319 12.0182 22.4777 10.9383 23.3466 10.1538C24.2156 9.36932 25.3455 8.93642 26.5161 8.93947H30.1864C31.3571 8.93642 32.4869 9.36932 33.3559 10.1538C34.2248 10.9383 34.7706 12.0182 34.8868 13.1831C34.9369 13.6797 35.1699 14.1399 35.5406 14.4741C35.9112 14.8084 36.393 14.9928 36.8921 14.9915H41.7753C42.193 14.9915 42.5937 15.1574 42.8891 15.4528C43.1845 15.7482 43.3505 16.1489 43.3505 16.5667H43.352ZM24.5503 14.9915H32.1554C31.9484 14.5185 31.813 14.0173 31.7537 13.5044C31.7147 13.1162 31.5329 12.7562 31.2437 12.4943C30.9544 12.2324 30.5782 12.0871 30.188 12.0868H26.5177C26.1275 12.0871 25.7513 12.2324 25.462 12.4943C25.1727 12.7562 24.991 13.1162 24.9519 13.5044C24.8921 14.0174 24.7578 14.5186 24.5503 14.9915ZM26.1365 38.8576V25.4446C26.1365 25.0268 25.9705 24.6262 25.6751 24.3307C25.3797 24.0353 24.9791 23.8694 24.5613 23.8694C24.1435 23.8694 23.7429 24.0353 23.4474 24.3307C23.152 24.6262 22.9861 25.0268 22.9861 25.4446V38.8639C22.9861 39.2816 23.152 39.6823 23.4474 39.9777C23.7429 40.2731 24.1435 40.4391 24.5613 40.4391C24.9791 40.4391 25.3797 40.2731 25.6751 39.9777C25.9705 39.6823 26.1365 39.2816 26.1365 38.8639V38.8576ZM33.7196 38.8576V25.4446C33.7196 25.0268 33.5536 24.6262 33.2582 24.3307C32.9628 24.0353 32.5622 23.8694 32.1444 23.8694C31.7266 23.8694 31.3259 24.0353 31.0305 24.3307C30.7351 24.6262 30.5692 25.0268 30.5692 25.4446V38.8639C30.5692 39.2816 30.7351 39.6823 31.0305 39.9777C31.3259 40.2731 31.7266 40.4391 32.1444 40.4391C32.5622 40.4391 32.9628 40.2731 33.2582 39.9777C33.5536 39.6823 33.7196 39.2816 33.7196 38.8639V38.8576Z"
              fill="#09C4FF"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
