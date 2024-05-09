import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BsBox, BsPencil, BsPerson, BsPersonCircle, BsX } from "react-icons/bs";
import Donations from "./Profile/Donations";
import Campaigns from "./Profile/Campaigns";
import Volunteering from "./Profile/Volunteering";
import { useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { TailSpin } from "react-loader-spinner";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({});
  const [uid, setUid] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function getUserData() {
    const ref = query(
      collection(db, "users"),
      where("email", "==", localStorage.getItem("user"))
    );
    const res = await getDocs(ref);
    setUser(res?.docs[0]?.data());
    setUid(res?.docs[0]?.id);
  }

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
    getUserData();
  }, []);
  const menu = {
    "My Donations": <Donations />,
    "My Campaigns": <Campaigns />,
  };
  const { register, handleSubmit } = useForm();
  const [current, setCurrent] = useState("My Donations");
  async function updateUser(data) {
    setLoading(true);
    const ref = doc(db, "users", uid);
    try {
      await updateDoc(ref, {
        name: data.name,
        state: data.state,
        city: data.city,
        country: data.country,
      });
      toast.success("Details updated");
      getUserData();
      setLoading(false);
    } catch (e) {
      toast.error("Something went wrong");
      console.log(e);
      setLoading(false);
    }

    setEdit(false);
  }
  return (
    <>
      {edit && (
        <div className="fixed inset-0 glass z-50 grid place-items-center">
          <div className="w-[min(440px,96%)] bg-white rounded">
            <div className="p-3 text-center border-b relative">
              <BsX
                onClick={() => setEdit(false)}
                className="absolute text-xl cursor-pointer"
              />{" "}
              Edit profile details
            </div>
            <form action="" onSubmit={handleSubmit(updateUser)}>
              <div className="p-3 grid gap-y-4">
                <input
                  type="text"
                  className="w-full border p-2 text-sm"
                  placeholder="Full name"
                  {...register("name")}
                />
                <input
                  type="text"
                  className="w-full border p-2 text-sm"
                  placeholder="City"
                  {...register("city")}
                />
                <input
                  type="text"
                  className="w-full border p-2 text-sm"
                  placeholder="State"
                  {...register("state")}
                />

                <input
                  type="text"
                  className="w-full border p-2 text-sm"
                  placeholder="Country"
                  {...register("country")}
                />
                {loading ? (
                  <button
                    disabled
                    className="opacity-50 flex justify-center bg-teal-800 text-white text-sm w-full p-2"
                  >
                    <TailSpin height={22} color="white" />
                  </button>
                ) : (
                  <button className="bg-teal-800 text-white text-sm w-full p-2">
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      <Navbar />
      <div className="p-12">
        <div className="flex flex-col items-center pb-12">
          <BsPersonCircle className="mb-3" size={40} />
          <div className="mt-3">
            <div className="text-2xl text-teal-800 text-center">
              {user?.name}
            </div>
            <div className="text-sm mt-3">{user?.email}</div>
            <div className="flex justify-center mt-5">
              <button
                onClick={() => setEdit(true)}
                className="text-sm text-white bg-teal-700 flex gap-3 items-center px-3 py-2 rounded-full"
              >
                <BsPencil /> Edit details
              </button>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="w-[min(560px,96%)] flex justify-between mx-auto">
            {Object.keys(menu).map((item) => {
              return (
                <div
                  onClick={() => setCurrent(item)}
                  className={`${
                    current == item && "border-b-4 font-bold"
                  } p-4 text-sm border-teal-800 cursor-pointer`}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="w-[min(560px,96%)] mx-auto">{menu[current]}</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
