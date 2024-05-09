import React, { useEffect } from "react";
import { PiHandHeartLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, logout } from "../redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(login());
    }
  }, []);
  function logoutuser() {
    localStorage.clear();
    navigate("/");
    dispatch(logout());
    toast.success("logged out successfully!");
  }
  const auth = useSelector((state) => state.authSlice.loggedIn);
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <Link to="/">
        <div className="font-medium">SHIELD</div>
      </Link>
      <div className="flex items-center text-xs gap-8">
        <Link to="/volunteer">
          <div className="font-medium cursor-pointer">Volunteer</div>
        </Link>
        {auth ? (
          <>
            <div className="font-medium cursor-pointer" onClick={logoutuser}>
              Logout
            </div>
            <Link to="/profile">
              <div className="font-medium cursor-pointer">My profile</div>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <div className="font-medium cursor-pointer">Login</div>
          </Link>
        )}

        <Link to="/ngo">
          <div className="font-medium cursor-pointer">Support an NGO</div>
        </Link>
        <Link to="/donate">
          <div className="flex gap-2 cursor-pointer bg-teal-100 items-center p-2  text-xs rounded-full border">
            Donate an item <PiHandHeartLight size={22} />{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
