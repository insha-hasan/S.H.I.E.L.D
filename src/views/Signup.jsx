import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BsArrowRight,
  BsBook,
  BsCoin,
  BsHandIndex,
  BsPerson,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "sonner";
import { createUser } from "../createUser";
import { TailSpin } from "react-loader-spinner";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const inputs = [
    {
      label: "Full Name",
      name: "name",
      type: "text",
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
    },
    {
      label: "Create Password",
      name: "password",
      type: "password",
    },
    {
      label: "Confirm Password",
      name: "confirm",
      type: "password",
    },
  ];

  function userSignup(data) {
    if (data.password != data.confirm) {
      toast.error("Create password and confirm password don't match!");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        toast.success("Account created, Login to continue");
        createUser(data);
        navigate("/login");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code == "auth/email-already-in-use") {
          toast.error("This email is already in use!");
        } else if (err.code == "auth/weak-password") {
          toast.error("Password length must be atleast 10 characters");
        } else {
          toast.error("Something went wrong");
        }
        setLoading(false);
      });
  }

  return (
    <div className="grid grid-cols-2">
      <div className="h-[100dvh] p-24 bg-teal-700 text-white overflow-scroll border-r">
        <div className="">
          <div className="text-4xl">
            Let there be a{" "}
            <span className="font-medium text-yellow-400">change!</span>
          </div>
          <div className="text-sm mt-3">
            S.H.I.E.L.D. extends its impact beyond organized donation drives.
            Civilian users are at the forefront of change with the platform's
            user-friendly interface. Anyone can easily contribute to the cause
            by uploading photos of items they wish to donate, such as clothing,
            toys, or other necessities. This streamlined process simplifies
            civic participation, ensuring that individuals from all walks of
            life can effortlessly support those in need within their
            communities. It's an embodiment of our commitment to inclusivity,
            making it accessible for everyone to make a difference and enhance
            the well-being of the less fortunate.
          </div>
          <div className="mt-8 text-sm">
            Engage in following and many other causes
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-lg py-6 text-black">
              <div className="flex justify-center">
                <BsCoin size={32} />
              </div>
              <div className="text-center text-sm mt-4">Support poverty</div>
            </div>
            <div className="bg-white rounded-lg py-6 text-black">
              <div className="flex justify-center">
                <BsPerson size={32} />
              </div>
              <div className="text-center text-sm  mt-4">
                Support the unprivileged
              </div>
            </div>
            <div className="bg-white rounded-lg py-6 text-black">
              <div className="flex justify-center">
                <BsBook size={32} />
              </div>
              <div className="text-center text-sm  mt-4">
                Support poor's education
              </div>
            </div>
            <div className="bg-white rounded-lg py-6 text-black">
              <div className="flex justify-center">
                <BsHandIndex size={32} />
              </div>
              <div className="text-center text-sm  mt-4">Volunteer a cause</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="p-3">
          <div className="text-center text-xl font-medium">
            Create a new account
          </div>
          <div className="text-sm text-center w-[76%] mt-4 mx-auto">
            Through our platform itself, donors can arrange for the collection
            of surplus food directly from their location. The collected
            donations are then efficiently distributed to roadside beggars, the
            needy, and others
          </div>
          <div className="w-[min(74%,96%)] mx-auto mt-9">
            <form action="" onSubmit={handleSubmit(userSignup)}>
              {inputs.map((item) => {
                return (
                  <>
                    <label htmlFor="" className="text-sm">
                      {item.label}
                    </label>
                    <input
                      type={item.type}
                      {...register(item.name)}
                      className="border w-full border-gray-300 p-2.5 mb-5 text-sm mt-1"
                      placeholder={`Your ${item.label} here`}
                      required
                    />
                  </>
                );
              })}
              <div className="text-xs text-gray-500 mb-5">
                By creating an account with us, You agree on the terms and
                condtions and the privacy policy
              </div>
              {loading ? (
                <button
                  disabled
                  className="w-full flex items-center gap-2 justify-center text-sm bg-teal-600 text-white p-2.5 disabled:opacity-40"
                >
                  <TailSpin height={22} color="white" />{" "}
                </button>
              ) : (
                <button className="w-full flex items-center gap-2 justify-center text-sm bg-teal-600 text-white p-2.5">
                  Signup <BsArrowRight />
                </button>
              )}
            </form>
            <Link to="/login">
              <div className="text-center mt-5 underline">
                I have an account already
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
