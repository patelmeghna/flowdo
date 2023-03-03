import React from "react";

const ListItemWrap = (props) => {
  return (
    <div className="list-item-wrap d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between w-100">
        {/* list info */}
        <div className="list-item d-flex align-items-center w-100">
          {/*  */}
          <div className="list-info">
            {props.listType === "customer" ? (
              <p className="list-id">Name</p>
            ) : (
              <p className="list-id">{props.id}</p>
            )}
            {!props.empty && <p className="company-name">{props.name}</p>}
          </div>
          {/*  */}

          {/*  */}
          {props.empty ? (
            <div className="num-wrap">
              <p className="empty-msg">device is not assigned</p>
            </div>
          ) : (
            <>
              {/*  */}
              <div className="num-wrap">
                {props.listType === "customer" ? (
                  <>
                    <p>activated date:</p>
                    <p className="list-info-text">{props.date}</p>
                  </>
                ) : (
                  <>
                    <p>Flow:</p>
                    <p className="list-info-text">{props.flow}</p>
                  </>
                )}
              </div>
              {/*  */}

              {/*  */}
              <div className="num-wrap">
                {props.listType === "customer" ? (
                  <>
                    <p>assigned devices:</p>
                    <p className="list-info-text">{props.num}</p>
                  </>
                ) : (
                  <>
                    <p>Subscription end:</p>
                    <p className="list-info-text">{props.date}</p>
                  </>
                )}
              </div>
              {/*  */}
            </>
          )}
          {/*  */}
        </div>
        {/* list info */}

        {/* dropdown */}
        <div className="list-dropdown">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8999 13.28C14.5249 13.28 13.3999 14.405 13.3999 15.78C13.3999 17.155 14.5249 18.28 15.8999 18.28C17.2749 18.28 18.3999 17.155 18.3999 15.78C18.3999 14.405 17.2749 13.28 15.8999 13.28ZM15.8999 9.53003C17.2749 9.53003 18.3999 8.40503 18.3999 7.03003C18.3999 5.65503 17.2749 4.53003 15.8999 4.53003C14.5249 4.53003 13.3999 5.65503 13.3999 7.03003C13.3999 8.40503 14.5249 9.53003 15.8999 9.53003ZM15.8999 22.03C14.5249 22.03 13.3999 23.155 13.3999 24.53C13.3999 25.905 14.5249 27.03 15.8999 27.03C17.2749 27.03 18.3999 25.905 18.3999 24.53C18.3999 23.155 17.2749 22.03 15.8999 22.03Z"
              fill="black"
            />
          </svg>
        </div>
        {/* dropdown */}
      </div>
    </div>
  );
};

export default ListItemWrap;
