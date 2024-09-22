import { useEffect } from "react";
import { useCheckUserQuery } from "./redux/api/authApi";
import RouteController from "./routes";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const { data, isSuccess } = useCheckUserQuery();

  useEffect(() => {
    if (!isSuccess) {
      navigate("/auth/sign-in");
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <RouteController />
    </>
  );
};

export default App;
