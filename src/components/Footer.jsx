import React, { useEffect, useState } from "react";
import { BsFacebook, BsGoogle, BsInstagram, BsTwitterX } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (pathname == "/login" || pathname == "/signup") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [pathname]);
  return (
    <div className={`bg-teal-800 text-white py-16 mt-12 ${!show && "hidden"}`}>
      <div className="text-center text-2xl">S.H.I.E.L.D.</div>
      <div className="text-center text-xs w-[min(680px,96%)] mt-4 mx-auto">
        Volunteering for a cause is a wonderful way to make a positive impact on
        the world around you. Whether you're passionate about environmental
        conservation, animal welfare, social justice, education, or any other
        cause, there are countless organizations and initiatives that could use
        your support.
      </div>
      <div className="flex items-center justify-center gap-12 text-2xl mt-12">
        <BsFacebook />
        <BsGoogle />
        <BsInstagram />
        <BsTwitterX />
      </div>
    </div>
  );
};

export default Footer;
