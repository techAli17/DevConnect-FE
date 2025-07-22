import React from "react";

const UserCard = ({ data }) => {
  return (
    <div>
      <div className="card card-side bg-base-300 shadow-sm">
        <figure>
          <img
            src={"https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
            alt="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data?.firstName.charAt(0).toUpperCase() +
              data?.firstName.slice(1) +
              " " +
              data?.lastName}
          </h2>
          <p>{data?.about}</p>
          <p>{data?.skills}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Ignore</button>
            <button className="btn btn-primary">Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
