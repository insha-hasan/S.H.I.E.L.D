import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsHeart, BsPerson, BsPhone, BsX } from "react-icons/bs";
import { db } from "../firebase";
import {
  addDoc,
  getDocs,
  where,
  limit,
  collection,
  query,
} from "firebase/firestore";
import { toast } from "sonner";
import { TailSpin } from "react-loader-spinner";

const ProductCard = ({ product, id }) => {
  const [loading, setLoading] = useState(false);
  const [acquire, setAcquire] = useState(false);
  const { register, handleSubmit } = useForm();
  async function createRequest(data) {
    setLoading(true);
    data.id = id;
    try {
      // Create a query to check for documents with the email
      const q = query(
        collection(db, "requests"),
        where("email", "==", data.email),
        where("id", "==", id),
        limit(1)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(collection(db, "requests"), data);
        toast.success("Request submitted successfully!");
        setAcquire(false);
        setLoading(false);
      } else {
        toast.error(
          "You have already submitted your request for this product!"
        );
        setLoading(false);
      }
    } catch (error) {
      console.error("Error getting or adding documents:", error);
    }
  }

  return (
    <>
      {acquire && (
        <div className="fixed inset-0 glass z-50 grid place-items-center">
          <div className="w-[min(440px,96%)] bg-white rounded">
            <div className="p-3 text-center border-b relative">
              <BsX
                onClick={() => setAcquire(false)}
                className="absolute text-xl cursor-pointer"
              />{" "}
              Request acquisition
            </div>
            <form action="" onSubmit={handleSubmit(createRequest)}>
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
                  placeholder="Email address"
                  {...register("email")}
                />
                <input
                  type="text"
                  className="w-full border p-2 text-sm"
                  placeholder="Phone number"
                  {...register("phone")}
                />
                <textarea
                  className="w-full border p-2 text-sm"
                  placeholder="Why do you need this item?"
                  id=""
                  cols="30"
                  rows="5"
                  {...register("reason")}
                ></textarea>
                <input
                  type="text"
                  className="w-full border p-2 text-sm"
                  placeholder="Alternate number"
                  {...register("alternate")}
                />
                {loading ? (
                  <button
                    disabled
                    className="disabled:opacity-50 bg-teal-800 text-white text-sm w-full p-2 flex justify-center"
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

      <div className="rounded-md border overflow-hidden bg-white">
        <div className="h-[200px]">
          <img
            src={product?.image}
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
        <div className="px-3.5 py-6">
          <div className="font-medium">{product?.title}</div>
          <div className="flex items-center mt-3 bg-teal-100 px-4 text-xs gap-3 w-max border rounded-full p-1.5">
            <BsPerson size={16} />
            {product?.name} is donating this product
          </div>
        </div>
        <div className="border-t px-3 py-4 flex gap-3">
          <div
            onClick={() => setAcquire(true)}
            className="cursor-pointer flex items-center gap-2 text-xs bg-teal-800 w-max text-white px-3 py-2 rounded-full"
          >
            <BsHeart /> Request to acquire
          </div>
          <div className="flex items-center gap-2 text-xs bg-teal-800 w-max text-white px-3 py-2 rounded-full">
            <BsPhone /> Call the donor
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
