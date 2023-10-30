import { useUserAuth } from "../context/UserAuthContext";
import Button from "@mui/material/Button";
import "./Home.css";
function Home() {
  let { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main_home">
      <div className="home">
        <h2>Hello🙋‍♂️🙋‍♂️</h2>
        <div className="user">{user && user.email}</div>
        <Button
          className="input"
          variant="contained"
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Home;
