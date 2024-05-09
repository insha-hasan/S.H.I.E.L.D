import { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Home from "./views/Home";
import Profile from "./views/Profile";
import DonateForm from "./views/DonateForm";
import Voluteer from "./views/Voluteer";
import CampaignDetails from "./views/CampaignDetails";
import StartCampaign from "./views/StartCampaign";
import Footer from "./components/Footer";
import Ngo from "./views/Ngo";
import AllDonations from "./views/AllDonations";
import AllJoined from "./views/Profile/AllJoined";
import Requests from "./views/Profile/Requests";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donate" element={<DonateForm />} />
        <Route path="/volunteer" element={<Voluteer />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/start-volunteer" element={<StartCampaign />} />
        <Route path="/ngo" element={<Ngo />} />
        <Route path="/all-donations" element={<AllDonations />} />
        <Route path="/all-joined/:id" element={<AllJoined />} />
        <Route path="/requests/:id" element={<Requests />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
