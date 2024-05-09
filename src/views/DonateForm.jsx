import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { BiCloset, BiFork } from "react-icons/bi";
import { BsBox, BsCoin, BsImage } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { uploadImage } from "../saveImage";
import { toast } from "sonner";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const DonateForm = () => {
  const type = [
    {
      label: "Food",
      icon: <BiFork size={20} />,
    },
    {
      label: "Clothes",
      icon: <BiCloset size={20} />,
    },
    {
      label: "Money",
      icon: <BsCoin size={20} />,
    },
    {
      label: "Others",
      icon: <BsBox size={20} />,
    },
  ];
  const [current, setCurrent] = useState("Food");
  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  async function createDrive(data) {
    if (image == null || image == "") {
      toast.error("Please select an image!");
      return;
    }
    setLoading(true);
    data.type = current;
    data.image = await uploadImage(image);
    data.user = localStorage.getItem("user");
    try {
      const collectionRef = collection(db, "donations");
      await addDoc(collectionRef, data);
      toast.success("Campaign saved!");
      setLoading(false);
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
    }
  }
  return (
    <div>
      <Navbar />
      <div className="w-[min(560px,96%)] mx-auto">
        <div className="text-2xl font-medium mt-4">
          Let's make someone's life better!
        </div>
        <div>
          <div className="mt-3 py-2 border-b">What will you donate today?</div>
          <div className="flex  justify-evenly py-4">
            {type.map((item) => {
              return (
                <div
                  onClick={() => setCurrent(item?.label)}
                  className={`${
                    current == item.label && "bg-teal-800 text-white"
                  } hover:bg-teal-800 hover:text-white cursor-pointer border flex items-center gap-3 border-teal-800 px-3 py-2 rounded-full text-sm`}
                >
                  {item?.icon} {item?.label}
                </div>
              );
            })}
          </div>
          <div className="mt-3 py-2 border-b">Fill in your basic details</div>
          <form action="" onSubmit={handleSubmit(createDrive)}>
            <div className="grid gap-y-4 mt-3">
              <input
                type="text"
                placeholder="Full name"
                className="border w-full p-2.5 text-sm"
                {...register("name")}
                required
              />
              <div>
                <input
                  type="text"
                  placeholder="Email address"
                  className="border w-full p-2.5 text-sm"
                  required
                  {...register("email")}
                />
              </div>
              <input
                type="text"
                placeholder="Phone number"
                className="border w-full p-2.5 text-sm"
                required
                {...register("phone")}
              />
            </div>
            <div className="mt-3 py-2 border-b">
              Complete the drive formalities
            </div>
            <div className="grid gap-y-4 mt-3">
              <input
                type="text"
                placeholder="Drive title"
                className="border w-full p-2.5 text-sm"
                required
                {...register("title")}
              />
              <label htmlFor="img">
                <div className="cursor-pointer text-sm flex items-center gap-3 p-3 bg-gray-100 text-gray-600 rounded border-gray-300 border">
                  <BsImage /> Pick an image
                </div>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                  hidden
                  type="file"
                  name=""
                  id="img"
                  className="text-sm mt-3"
                />
              </label>
              {image && (
                <div className="border rounded p-2">
                  <img
                    src={URL.createObjectURL(image)}
                    className="h-[200px] object-contain w-full"
                    alt=""
                  />
                </div>
              )}
              <input
                type="number"
                placeholder="Total units to be donated"
                className="border w-full p-2.5 text-sm"
                {...register("units")}
                required
              />
            </div>
            {loading ? (
              <button
                className="bg-teal-800 mt-3 w-full text-white text-sm p-2.5 flex items-center justify-center gap-3 disabled:opacity-50 "
                disabled
              >
                <TailSpin height={20} color="white" />
              </button>
            ) : (
              <button className="w-full p-2.5 bg-teal-800 mt-4 text-white text-sm">
                Finish
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
