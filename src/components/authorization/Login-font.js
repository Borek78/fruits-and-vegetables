const Login = () => {
  return (
    <form className="form">
      <input
        className="input-name-login"
        type="text"
        name="id"
        id="id"
        placeholder="Name"
        onChange={(e) => {
          e.preventDefault();
        }}
      />

      <input
        className="input-password-login"
        name="password"
        type="password"
        id="password"
        placeholder="password"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      />
    </form>
  );
};
export default Login;
