import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/baseUrl";
import { emailRegex, strongPassRegex } from "../utils/constants";

const LoginPage = () => {
  const [email, setEmail] = useState("Satyam@gmail.com");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("Satyam@1234");
  const [passError, setPassError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    // Password validation
    if (!strongPassRegex.test(password)) {
      setPassError(
        "Password must be ≥8 chars, include uppercase, lowercase, number & special character"
      );
    } else {
      setPassError("");
    }

    if (!emailError && !passError) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${BASE_URL}/login`,
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        setIsLoading(false);
        console.log("response from login", response.data.user);
        dispatch(addUser(response.data.user));
        return navigate("/Feed");
      } catch (error) {
        console.log("error from login", error);

        setIsLoading(false);
      }
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-lift">
            <label className="tab">
              <input type="radio" name="my_tabs_4" />
              Login
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Enter your Email</legend>
                <input
                  type="email"
                  className="input"
                  placeholder="Type here"
                  value={email}
                  onChange={onChangeEmail}
                />
                {emailError && <p className="mt-1 text-sm text-error">{emailError}</p>}
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Enter your Password</legend>
                <div className="relative">
                  <input
                    type={isVisible ? "text" : "password"}
                    className="input pr-10"
                    placeholder="Type here"
                    value={password}
                    onChange={onChangePassword}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-5 flex items-center px-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setIsVisible(!isVisible)}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                  >
                    {isVisible ? <p>hide</p> : <p>show</p>}
                  </button>
                </div>
                {passError && <p className="mt-1 text-sm text-error">{passError}</p>}
              </fieldset>
            </div>

            <label className="tab">
              <input type="radio" name="my_tabs_4" defaultChecked />
              SignUp
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Enter your Email</legend>
                <input
                  type="email"
                  className="input"
                  placeholder="Type here"
                  value={email}
                  onChange={onChangeEmail}
                />
                {emailError && <p className="mt-1 text-sm text-error">{emailError}</p>}
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Enter your Password</legend>
                <div className="relative">
                  <input
                    type={isVisible ? "text" : "password"}
                    className="input pr-10"
                    placeholder="Type here"
                    value={password}
                    onChange={onChangePassword}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-5 flex items-center px-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setIsVisible(!isVisible)}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                  >
                    {isVisible ? <p>hide</p> : <p>show</p>}
                  </button>
                </div>
                {passError && <p className="mt-1 text-sm text-error">{passError}</p>}
              </fieldset>
            </div>
          </div>
          <button
            onClick={handleSubmit}
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
              "Sign In"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
