import { Stack, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

import { authToken } from "../../redux/actions";

const LandingPage = () => {
  const isLoggedIn = useSelector((state) => state.accessToken);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (!isLoggedIn && window.location.hash) {
      const hash = window.location.hash.split("#")[1];
      const params = new URLSearchParams(hash);

      const state = params.get("state");
      const storedState = localStorage.getItem("spotify_auth_state");

      const accessToken = params.get("access_token");
      dispatch(authToken(accessToken));

      const expiresInMilisecond = params.get("expires_in") * 1000;
      setTimeout(() => {
        dispatch(authToken(""));
        return toast({
          title: "Woopsy!",
          description: "Your access token is expired. Please log in again.",
          status: "error",
        });
      }, expiresInMilisecond);

      if (accessToken && (state === null || state !== storedState)) {
        return toast({
          title: "Woopsy!",
          description: "There was an error during the authentication.",
          status: "error",
        });
      } else {
        localStorage.removeItem("spotify_auth_state");
      }
    }
  }, [toast, dispatch, isLoggedIn]);

  return (
    <Stack minHeight="100vh" justifyContent="space-between" paddingInline="10vw">
      <Header />
      <Main />
      <Footer />
    </Stack>
  );
};

export default LandingPage;
