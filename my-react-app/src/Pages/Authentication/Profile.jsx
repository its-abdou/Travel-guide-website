import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Profile = ({ setAuth }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost/backend/profile.php",
          { withCredentials: true }
        );
        if (response.data) {
          setUserInfo(response.data);
        } else {
          setError("Failed to fetch user data.");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching user info", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost/backend/logout.php",
        {},
        { withCredentials: true }
      );
      console.log(response.data.message); // Check the response message
      setAuth(false);
    } catch (error) {
      setError(error.message);
      console.error("Error logging out", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Profile</h1>
      {userInfo && (
        <>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
        </>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

Profile.propTypes = {
  setAuth: PropTypes.func.isRequired,
};

export default Profile;
