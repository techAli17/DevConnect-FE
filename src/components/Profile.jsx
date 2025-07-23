import { useSelector } from "react-redux";
import EditProfile from "../global/EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user);
  if (!user) return null;
  return (
    <div>
      <EditProfile user={user} />
    </div>
  );
};

export default Profile;
