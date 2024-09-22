import React, { useEffect } from "react";
import { useCheckUserQueryQuery } from "../../../redux/api/authApi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useCheckUserQueryQuery();

  useEffect(() => {
    if (error) {
      navigate("/auth/sign-in");
    }
  }, [error, navigate]);

  if (isLoading) return <div>Loading...</div>;

  if (data) {
    return <div>Your Profile</div>;
  }

  return null;
};

export default Profile;
