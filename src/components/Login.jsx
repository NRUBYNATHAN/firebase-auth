import { useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="main_login">
      <div className="login">
        <h1 className="text">Login Form</h1>
        <div className="input">
          {error && <h4 className="error">{error}</h4>}
        </div>
        <div>
          <form className="loginform" onSubmit={handleSubmit}>
            <TextField
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              label="email"
              variant="outlined"
            />
            <TextField
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="password"
              variant="outlined"
            />
            <Button
              className="input"
              variant="contained"
              type="submit"
              color="secondary"
            >
              login
            </Button>
          </form>
          <br />
          <hr />
        </div>

        <div>
          <GoogleButton type="dark" onClick={handleGoogleSignIn} />
        </div>
        <div className="redirect">
          Dont have an account ?
          <Link to="/signup">
            <span className="re">SignUp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
