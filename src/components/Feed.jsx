import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/baseUrl";
import { addFeed } from "../redux/feedSlice";
import UserCard from "../global/UserCard";
const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  useEffect(() => {
    getUserFeed();
  }, []);

  const getUserFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", { withCredentials: true });
      console.log("res at feed", res);

      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      console.log("Error at user Feed", error);
    }
  };
  if (!feed) return null;
  return (
    <div className="flex justify-center mt-10">
      {/* {feed?.map((item, index) => {
        return <UserCard key={index} data={item} />;
      })} */}
      <UserCard data={feed[0]} />
    </div>
  );
};

export default Feed;
