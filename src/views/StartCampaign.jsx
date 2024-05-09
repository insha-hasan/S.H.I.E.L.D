import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { BsArrowRight, BsImage } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { uploadImage } from "../saveImage";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "sonner";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const StartCampaign = () => {
  const [image, setImage] = useState(null);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function createCampaign(data) {
    if (image == null || image == "") {
      toast.error("Please select an image!");
      return;
    }
    setLoading(true);
    data.image = await uploadImage(image);
    data.user = localStorage.getItem("user");
    try {
      const collectionRef = collection(db, "campaigns"); // Replace with your collection name
      const newDocRef = await addDoc(collectionRef, data);
      toast.success("Campaign created!");
      setLoading(false);
      navigate("/volunteer");
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
    }
  }
  return (
    <>
      <Navbar />
      <div className="w-[min(560px,96%)] mx-auto">
        <div className="text-xl font-medium py-4">
          Start a new volunteering session
        </div>
        <div>
          <div className="border-b pb-3 text-sm">
            Pick an image for this campaign
          </div>
          <label htmlFor="img">
            <div className="cursor-pointer text-sm mt-4 flex items-center gap-3 p-3 bg-gray-100 text-gray-600 rounded border-gray-300 border">
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
            <div className="p-2 border  mt-4 rounded">
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="object-contain w-full h-[200px]"
              />
            </div>
          )}
          <div className="border-b pb-3 text-sm mt-6">
            Fill in the campaign specific details
          </div>
          <form action="" onSubmit={handleSubmit(createCampaign)}>
            <div className="mt-4 grid gap-y-4">
              <input
                type="text"
                className="p-2 border w-full text-sm"
                placeholder="Your full name"
                {...register("name")}
                required
              />
              <input
                type="text"
                className="p-2 border w-full text-sm"
                placeholder="Campaign title"
                {...register("title")}
              />
              <input
                type="text"
                className="p-2 border w-full text-sm"
                placeholder="Campaign category"
                {...register("category")}
                required
              />
              <div>
                <label htmlFor="" className="text-xs">
                  Campaign date
                </label>
                <input
                  type="date"
                  className="p-2 border w-full text-sm"
                  placeholder="Campaign category"
                  {...register("date")}
                  required
                />
              </div>
              <input
                type="text"
                className="p-2 border w-full text-sm"
                placeholder="Campaign venue"
                {...register("venue")}
                required
              />
              <input
                type="number"
                className="p-2 border w-full text-sm"
                placeholder="People required"
                {...register("people")}
                required
              />
              <textarea
                className="p-2 border w-full text-sm"
                cols="30"
                rows="10"
                placeholder="Campaign story"
                {...register("story")}
                required
              ></textarea>
              {loading ? (
                <button
                  className="bg-teal-800 text-white text-sm p-2.5 flex items-center justify-center gap-3 disabled:opacity-50 "
                  disabled
                >
                  <TailSpin height={20} color="white" />
                </button>
              ) : (
                <button className="bg-teal-800 text-white text-sm p-2.5 flex items-center justify-center gap-3">
                  Create campaign <BsArrowRight />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default StartCampaign;
