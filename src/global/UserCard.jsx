import React from "react";

const UserCard = ({ data }) => {
  const { firstName, lastName, age, gender, photoUrl, about, skills } = data;

  console.log("data at userCard", data);

  return (
    <div>
      <div className="card card-side bg-base-300 shadow-sm">
        <figure>
          <img
            src={photoUrl}
            className="w-60"
            alt="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {firstName?.charAt(0).toUpperCase() + firstName?.slice(1) + " " + lastName}
          </h2>
          <p>{about}</p>
          <p>{skills}</p>
          <p>
            {age}
            {"   "}
            {gender}
          </p>
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
