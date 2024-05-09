import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BsCalendar, BsEye, BsPerson, BsPinMap, BsTrash } from "react-icons/bs";
import { db } from "../../firebase";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Campaigns = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getData() {
    setLoading(true);
    const ref = query(
      collection(db, "campaigns"),
      where("user", "==", localStorage.getItem("user"))
    );
    const res = await getDocs(ref);
    setProducts(res.docs);
    setLoading(false);
  }
  async function deleteDrive(id) {
    const permission = confirm("Are you sure you want to delete this drive?");
    if (permission) {
      await deleteDoc(doc(db, "campaigns", id));
      getData();
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="h-[200px] grid place-items-center">
          <TailSpin height={42} color="teal" />
        </div>
      ) : products?.length > 0 ? (
        products.map((item) => {
          const data = item.data();
          const id = item.id;
          return (
            <div className="flex gap-4 border rounded p-2 mt-3">
              <Link to={`/campaign/${item?.id}`}>
                <img src={data?.image} className="size-32" alt="" />
              </Link>
              <div>
                <Link to={`/campaign/${item?.id}`}>
                  <div className="font-bold text-sm">
                    {data?.title?.length > 30
                      ? data?.title?.substring(0, 30) + "..."
                      : data?.title}
                  </div>
                </Link>
                <div>
                  <Link to={`/campaign/${item?.id}`}>
                    <div className="text-sm flex items-center gap-2 mt-2">
                      People required :{" "}
                      <span className="text-sm">{data?.people}</span>{" "}
                    </div>
                    <div className="text-sm flex items-center gap-2 mt-2">
                      Venue : <span className="text-sm">{data?.venue}</span>{" "}
                    </div>
                  </Link>

                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => deleteDrive(id)}
                      className="bg-red-500 flex items-center gap-2 text-xs text-white px-3 py-2 rounded-full mt-3"
                    >
                      <BsTrash /> Delete
                    </button>
                    <Link to={`/all-joined/${id}`}>
                      <button className="bg-teal-700 flex items-center gap-2 text-xs text-white px-3 py-2 rounded-full mt-3">
                        <BsPerson /> People joined
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="h-[200px] grid place-items-center font-bold text-gray-500">
          No campaigns created yet!
        </div>
      )}
    </div>
  );
};

export default Campaigns;
