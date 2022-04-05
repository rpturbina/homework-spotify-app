const LogIn = (props) => {
  const { accessToken, userProfile, handleLogIn } = props;

  return (
    <button className="btn btn--access-token" onClick={handleLogIn} disabled={accessToken}>
      {!accessToken
        ? "Login with Spotify"
        : !userProfile
        ? ""
        : `Logged In as ${userProfile.display_name}`}
    </button>
  );
};

export default LogIn;
