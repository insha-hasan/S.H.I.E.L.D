import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { TailSpin } from "react-loader-spinner";

const Requests = () => {
  const { id } = useParams();
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const ref = query(collection(db, "requests"), where("id", "==", id));
      const data = await getDocs(ref);
      setPeople(data.docs);
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-[min(560px,96%)] mx-auto">
        <div className="text-xl font-bold py-4">
          People who requested for this product
        </div>
        {loading ? (
          <div className="h-[200px] grid place-items-center">
            <TailSpin height={42} color="teal" />
          </div>
        ) : people.length > 0 ? (
          <div>
            {people.map((item) => {
              const person = item.data();
              return (
                <div className="border rounded p-3 mb-4">
                  <div className="font-bold">{person?.name}</div>
                  <div>Email : {person?.email}</div>
                  <div>Phone : {person?.phone}</div>
                  <div>Alternate phone : {person?.alternate}</div>
                  <div>Reason : {person?.reason}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="h-[300px] grid place-items-center font-bold text-gray-500">
            No people have joined yet
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;
