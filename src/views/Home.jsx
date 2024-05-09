import React, { useEffect, useState } from "react";
import {
  BsArrowRight,
  BsBox,
  BsHeart,
  BsPerson,
  BsPhone,
  BsX,
} from "react-icons/bs";
import { BiDonateHeart } from "react-icons/bi";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../firebase";
import ProductCard from "../components/ProductCard";
import { TailSpin } from "react-loader-spinner";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getData() {
      setLoading(true);
      const q = query(collection(db, "donations"), limit(6));
      const data = await getDocs(q);
      setProducts(data.docs);
      setLoading(false);
    }
    getData();
  }, []);
  const topIndianNGOs = [
    {
      image: "https://via.placeholder.com/150", // Replace with NGO logo URL
      name: "CRY (Child Rights and You)",
      description:
        "CRY (Child Rights and You) is a non-profit organization working to ensure every child in India has a happy and healthy childhood. They work on various issues faced by children, including child labor, trafficking, malnutrition, and lack of education. Through their programs, they advocate for children's rights, provide education and healthcare services, and support underprivileged families.",
      title: "Championing Children's Rights",
      website: "https://www.cry.org/",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with NGO logo URL
      name: "Smile Foundation",
      description:
        "Smile Foundation empowers underprivileged children and women in India through education and healthcare. They focus on education for children from disadvantaged backgrounds, providing scholarships, running mobile schools, and vocational training programs. Smile Foundation also works on women empowerment initiatives, providing microfinance and livelihood training.",
      title: "Empowering Smiles",
      website: "https://www.smilefoundationindia.org/",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with NGO logo URL
      name: "GiveIndia Foundation",
      description:
        "GiveIndia Foundation is India's largest platform for connecting donors with credible NGOs. They provide a transparent platform for individuals and organizations to donate to various causes across India. GiveIndia also works on capacity building of NGOs and promotes effective philanthropy.",
      title: "Connecting Donors & Changemakers",
      website: "https://www.giveindia.org/",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with NGO logo URL
      name: "HelpAge India",
      description:
        "HelpAge India advocates for and empowers elderly citizens in India. They work on issues faced by senior citizens, such as lack of social security, healthcare access, and elder abuse. HelpAge India runs programs providing medical care, financial assistance, and social support for the elderly. They also work to raise awareness about elder rights and promote a more inclusive society for senior citizens.",
      title: "Supporting Our Elders",
      website: "https://www.helpageindia.org/",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with NGO logo URL
      name: "Akshaya Patra Foundation",
      description:
        "The Akshaya Patra Foundation provides nutritious mid-day meals to millions of underprivileged schoolchildren across India. Their mission is to fight hunger and promote education by providing children with a hot, nutritious meal every school day. Akshaya Patra operates large-scale kitchens and has a robust logistics network to deliver meals to schools across the country.",
      title: "Nourishing Young Minds",
      website: "https://www.akshayapatra.org/",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with NGO logo URL
      name: "Goonj",
      description:
        "Goonj is a unique NGO working in waste management, disaster relief, and uplifting underprivileged communities. They collect unused clothing and household items, upcycle them, and distribute them to those in need. Goonj also works on raising awareness about waste reduction and promoting sustainable living practices. Additionally, they provide disaster relief assistance and support community development initiatives.",
      title: "Reusing, Relieving, Rebuilding",
      website: "https://goonj.org/",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-[url('https://www.savethechildren.org/content/dam/usa/images/global-programs/protection/uganda-refugee-ch192751-rec.jpg/_jcr_content/renditions/original.img.jpg')]">
        <div className="backdrop-brightness-[0.25] py6">
          <div className="grid grid-cols-2">
            <div className="p-32">
              <div className="border text-white border-teal-600 w-max px-3 py-2 text-xs mb-8">
                We are here to support the needy in every step
              </div>
              <div className="text-5xl text-white font-bold w-[88%] leading-tight">
                Giving help to those who need it
              </div>
              <Link to="/donate">
                <button className="bg-teal-600 flex items-center gap-3 mt-12 text-sm text-white px-4 py-3 rounded-full">
                  Donate a product you don't use <BsArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-teal-100">
        <div className="grid grid-cols-2 container mx-auto py-6">
          <div className="border-r border-teal-600">
            <div className="text-center text-2xl font-medium w-[66%] mx-auto">
              Help somene get their meal for the day
            </div>
            <div className="w-[66%] mx-auto text-center text-sm mt-4">
              The core objective of the S.H.I.E.L.D. project is to create a
              comprehensive platform that efficiently connects surplus
              resources, including food, clothing, and other necessities, with
              individuals in need
            </div>
            <div className="text-center">
              <Link to="/donate">
                <button className="bg-teal-800 text-sm text-white px-4 py-2 rounded-full mt-6">
                  Donate now
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="text-center text-2xl font-medium w-[66%] mx-auto">
              Put a blanket on someone shivering from cold
            </div>
            <div className="w-[66%] mx-auto text-center text-sm mt-4">
              Through our platform itself, donors can arrange for the collection
              of surplus food directly from their location. The collected
              donations are then efficiently distributed to roadside beggars,
              the needy, and other deserving individuals.
            </div>
            <div className="text-center">
              <Link to="/donate">
                <button className="bg-teal-800 text-sm text-white px-4 py-2 rounded-full mt-6">
                  Donate now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="text-xl py-6 text-teal-900 font-medium flex items-center gap-3">
          <BiDonateHeart size={28} /> Donate to NGOs Feeding the hunger
        </div>
        <div className="grid grid-cols-3 gap-4">
          {topIndianNGOs.map((item) => {
            return (
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-3 ">
                  <img
                    src={item?.image}
                    className="size-10 rounded-full"
                    alt=""
                  />
                  <div className="font-medium">{item?.title}</div>
                </div>
                <div className="text-sm mt-3">{item?.description}</div>
                <Link to={item?.website}>
                  <button className="bg-teal-700 text-white px-3 py-2 text-xs flex items-center gap-2 rounded-full mt-5">
                    Donate now <BsArrowRight />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center w-full mt-5">
          <Link to="/ngo">
            <button className="flex bg-teal-800 items-center text-white text-sm px-3 py-2 rounded-full">
              See all <BsArrowRight />
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-teal-100 mt-4 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-[0.6fr,1.4fr]">
            <div className="flex items-center text-4xl leading-normal text-teal-900 font-medium">
              How we are <br /> making <br /> difference?
            </div>
            <div className="text-[16px]">
              The development of S.H.I.E.L.D. - A Food Waste Reduction and
              Donation Web Application - arises from a pressing need within our
              society that requires immediate and effective attention. Several
              compelling reasons underscore the necessity of this innovative
              project. Across the globe, the staggering volume of food wastage
              is a critical issue. Restaurants, events, and parties contribute
              significantly to this problem by discarding substantial quantities
              of perfectly edible food While many individuals and businesses are
              eager to contribute to charitable causes and reduce food waste,
              there is a distinct lack of efficient and technology-driven
              platforms that facilitate seamless donations and surplus food
              distribution.
            </div>
          </div>
        </div>
      </section>
      <div className="">
        <section className="container mx-auto">
          <div className="text-xl py-6 text-teal-900 font-medium flex items-center gap-3">
            <BsBox size={28} /> Goods available for free
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
          <div className="flex justify-center w-full mt-5">
            <Link to="/all-donations">
              <button className="flex bg-teal-800 items-center text-white text-sm px-3 py-2 rounded-full">
                See all <BsArrowRight />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
