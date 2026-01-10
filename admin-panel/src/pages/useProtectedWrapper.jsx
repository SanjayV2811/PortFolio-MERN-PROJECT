import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OwnerContext from "../context/OwnerContext";

export const useProtectedWrapper = () => {

  const navigate = useNavigate();
  const { accessToken } = useContext(OwnerContext);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return accessToken;
};