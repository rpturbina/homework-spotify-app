const LoginPage = (props) => {
  const { currentAccessToken, userProfile, handleLogIn } = props;
  return (
    <LogIn accessToken={currentAccessToken} userProfile={userProfile} handleLogIn={handleLogIn} />
  );
};

export default LoginPage;
