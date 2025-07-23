import React, { useState } from "react";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  console.log("user at edit profile", user);

  const [age, setAge] = useState(user?.age);
  const [about, setAbout] = useState(user?.about);
  const [skills, setSkills] = useState(user?.skills);
  const [gender, setGender] = useState(user?.gender);
  const [lastName, setLastName] = useState(user?.lastName);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfile = () => {};

  return (
    <div className="flex justify-center my-10 ">
      <div className="flex justify-center mx-10">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
              <label className="tab">
                <input type="radio" name="my_tabs_4" defaultChecked />
                Edit Profile
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Type here"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {/* {emailError && <p className="mt-1 text-sm text-error">{emailError}</p>} */}
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Last Name</legend>
                  <div className="relative">
                    <input
                      type={"text"}
                      className="input pr-10"
                      placeholder="Type here"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  {/* {passError && <p className="mt-1 text-sm text-error">{passError}</p>} */}
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Age</legend>
                  <div className="relative">
                    <input
                      type={"number"}
                      className="input pr-10"
                      placeholder="Type here"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  {/* {passError && <p className="mt-1 text-sm text-error">{passError}</p>} */}
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Gender</legend>
                  <div className="relative">
                    <input
                      type={"text"}
                      className="input pr-10"
                      placeholder="Type here"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                  {/* {passError && <p className="mt-1 text-sm text-error">{passError}</p>} */}
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">About</legend>
                  <div className="relative">
                    <input
                      type={"text"}
                      className="input pr-10"
                      placeholder="Type here"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </div>
                  {/* {passError && <p className="mt-1 text-sm text-error">{passError}</p>} */}
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Skills:</legend>
                  <div className="relative">
                    <input
                      type={"text"}
                      className="input pr-10"
                      placeholder="Type here"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                    />
                  </div>
                  {/* {passError && <p className="mt-1 text-sm text-error">{passError}</p>} */}
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Photo URL:</legend>
                  <div className="relative">
                    <input
                      type={"text"}
                      className="input pr-10"
                      placeholder="Type here"
                      value={photoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                    />
                  </div>
                  {/* {passError && <p className="mt-1 text-sm text-error">{passError}</p>} */}
                </fieldset>
              </div>
            </div>
            {/* {loginError && <p className="mt-1 text-sm text-error">{loginError}</p>} */}

            <button
              onClick={handleUpdateProfile}
              className="btn bg-primary mt-5 w-80"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner mr-2"></span>
                  Please wait...
                </>
              ) : (
                "Update Profile"
              )}
            </button>
          </div>
        </div>
      </div>
      <UserCard data={{ firstName, lastName, age, gender, photoUrl, about, skills }} />
    </div>
  );
};

export default EditProfile;
