import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="main_login">
      <div className="login">
        <h1 className="text">SignUp Form</h1>
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
              color="success"
            />
            <TextField
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="password"
              variant="outlined"
              color="success"
            />
            <Button
              className="input"
              variant="contained"
              type="submit"
              color="success"
            >
              Signup
            </Button>
          </form>
          <br />
          <hr />
        </div>

        <div className="redirect">
          Already have an account ?
          <Link to="/">
            <span className="re">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
