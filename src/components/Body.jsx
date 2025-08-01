import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "../redux/userSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils/baseUrl";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    async function init() {
      if (!user) {
        try {
          const res = await axios.get(`${BASE_URL}/profile/view`, { withCredentials: true });
          dispatch(addUser(res.data));
        } catch (err) {
          navigate("/login");
        }
      }
    }
    init();
  }, [user, dispatch, navigate]);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
