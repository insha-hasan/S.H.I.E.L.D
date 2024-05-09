import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  BsArrowRight,
  BsBook,
  BsCoin,
  BsHandIndex,
  BsPerson,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { TailSpin } from "react-loader-spinner";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function userLogin(data) {
    setLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        toast.success("Signed in");
        navigate("/");
        localStorage.setItem("user", data.email);
        setLoading(false);
        dispatch(login());
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode == "auth/invalid-credential") {
          toast.error("Invalid email or password");
        }
        setLoading(false);
      });
  }
  const inputs = [
    {
      label: "Email Address",
      name: "email",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ];
  return (
    <div className="grid grid-cols-2">
      <div className="h-[100dvh] overflow-scroll p-24 bg-teal-700 text-white border-r">
        <div className="">
          <div className="text-4xl">
            It all starts{" "}
            <span className="font-medium text-yellow-400">here!</span>
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
            Login to your account
          </div>
          <div className="text-sm text-center w-[76%] mt-4 mx-auto">
            Through our platform itself, donors can arrange for the collection
            of surplus food directly from their location. The collected
            donations are then efficiently distributed to roadside beggars, the
            needy, and others
          </div>
          <div className="w-[min(74%,96%)] mx-auto mt-9">
            <form action="" onSubmit={handleSubmit(userLogin)}>
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

              {loading ? (
                <button
                  disabled
                  className="w-full flex items-center gap-2 justify-center text-sm bg-teal-600 text-white p-2.5 disabled:opacity-40"
                >
                  <TailSpin height={22} color="white" />{" "}
                </button>
              ) : (
                <button className="w-full flex items-center gap-2 justify-center text-sm bg-teal-600 text-white p-2.5">
                  Login <BsArrowRight />
                </button>
              )}
            </form>{" "}
            <Link to="/signup">
              <div className="text-center mt-5 underline">
                I don't have an account
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
