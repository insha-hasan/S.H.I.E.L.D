import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BsHeart, BsPerson, BsPhone } from "react-icons/bs";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../firebase";
import ProductCard from "../components/ProductCard";
import { TailSpin } from "react-loader-spinner";

const AllDonations = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function getData() {
      setLoading(true);
      const q = query(collection(db, "donations"));
      const data = await getDocs(q);
      setProducts(data.docs);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="text-xl font-bold mb-4">
          All goods available for free
        </div>
        {loading ? (
          <div className="h-[240px] grid place-items-center">
            <TailSpin height={52} color="teal" />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {products.map((item, index) => {
              return <ProductCard product={item.data()} id={item.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDonations;
