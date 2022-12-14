import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </>
  );
};

export default Navbar;
