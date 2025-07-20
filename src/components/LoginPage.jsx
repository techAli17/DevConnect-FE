import React from "react";

const LoginPage = () => {
  return (
    <div className="card bg-primary text-primary-content w-96 flex justify-center">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>
          A card component has a figure, a body part, and inside body there are title and actions
          parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
