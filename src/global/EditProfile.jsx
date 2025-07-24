import axios from "axios";
import UserCard from "./UserCard";
import React, { useState } from "react";
import { BASE_URL } from "../utils/baseUrl";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [age, setAge] = useState(user?.age);
  const [about, setAbout] = useState(user?.about);
  // const [skills, setSkills] = useState(user?.skills);
  const [gender, setGender] = useState(user?.gender);
  const [lastName, setLastName] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState(
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D" ||
      user?.photoUrl
  );
  const [firstName, setFirstName] = useState(user?.firstName);

  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfile = async () => {
    try {
      setIsLoading(true);
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          gender,
          age,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setIsLoading(false);
      setShowToast(true);
      const time = setTimeout(() => {
        setShowToast(false);
      }, 2000);
      return () => clearTimeout(time);
    } catch (error) {
      console.log("error", error);

      setError(error?.message);
      setIsLoading(false);
    }
  };

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
                {/* <fieldset className="fieldset">
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
                </fieldset> */}
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
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
      <UserCard data={{ firstName, lastName, age, gender, photoUrl, about }} />
    </div>
  );
};

export default EditProfile;
