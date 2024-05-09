import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Ngo = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  const indianNgos = [
    {
      title: "Akshaya Patra Foundation",
      image: "https://example.com/akshayapatra.jpg",
      description:
        "Akshaya Patra Foundation is the world's largest non-profit organization providing mid-day meals to children. They operate in 12 states and 1 union territory in India, serving over 1.8 million children every day. Their mission is to address classroom hunger and encourage children to attend school regularly.",
      website: "https://www.akshayapatra.org/",
    },
    {
      title: "Pratham",
      image: "https://example.com/pratham.jpg",
      description:
        "Pratham is India's largest non-governmental education organization providing quality education to underprivileged children. Established in 1994, Pratham focuses on innovative interventions to improve learning outcomes and bridge educational gaps. They have impacted millions of children across the country through their various programs.",
      website: "https://www.pratham.org/",
    },
    {
      title: "Goonj",
      image: "https://example.com/goonj.jpg",
      description:
        "Goonj is a non-profit organization focusing on disaster relief, humanitarian aid, and community development. Founded in 1999, Goonj utilizes a holistic approach to address issues related to clothing, sanitation, education, and more in rural and urban areas. They aim to build sustainable communities and empower marginalized populations.",
      website: "https://goonj.org/",
    },
    {
      title: "CRY - Child Rights and You",
      image: "https://example.com/cry.jpg",
      description:
        "CRY - Child Rights and You is an Indian NGO working towards ensuring basic rights and education for underprivileged children. Since its inception in 1979, CRY has partnered with various grassroots organizations to advocate for child rights, provide access to education, and support communities in need. They believe in creating a lasting impact through sustainable initiatives.",
      website: "https://www.cry.org/",
    },
    {
      title: "Teach For India",
      image: "https://example.com/teachforindia.jpg",
      description:
        "Teach For India is a movement working to provide an excellent education to all children across India. Launched in 2009, Teach For India recruits and trains young professionals and college graduates to serve as full-time teachers in low-income schools. Their vision is to eliminate educational inequity and ensure that every child receives a quality education.",
      website: "https://www.teachforindia.org/",
    },
    // Add more NGOs here...
    {
      title: "SOS Children's Villages of India",
      image: "https://example.com/soschildren.jpg",
      description:
        "SOS Children's Villages of India is part of the global federation working to provide care and support to orphaned and abandoned children. With a presence in 32 locations across India, SOS Children's Villages offers long-term family-based care, education, and healthcare services to children in need. Their approach focuses on providing a loving and stable environment for every child.",
      website: "https://www.soschildrensvillages.in/",
    },
    {
      title: "Magic Bus India Foundation",
      image: "https://example.com/magicbus.jpg",
      description:
        "Magic Bus India Foundation is a non-profit organization working to empower children and youth from marginalized communities. Through their sports-based development program, Magic Bus engages children in activities that promote education, life skills, and gender equality. Since 1999, they have impacted the lives of over 4,00,000 children across India.",
      website: "https://www.magicbus.org/",
    },
    {
      title: "Make A Difference (MAD)",
      image: "https://example.com/mad.jpg",
      description:
        "Make A Difference (MAD) is a youth-driven organization aiming to provide quality education and support to children in shelter homes. Founded in 2006, MAD recruits and trains volunteers to mentor and tutor children in shelter homes, helping them build essential life skills and pursue higher education. Their efforts focus on empowering every child to realize their full potential.",
      website: "https://www.makeadiff.in/",
    },
    {
      title: "HelpAge India",
      image: "https://example.com/helpage.jpg",
      description:
        "HelpAge India is a non-profit organization dedicated to improving the quality of life for the elderly in India. Established in 1978, HelpAge India runs various programs and services to address issues related to healthcare, livelihood, and elder rights. They advocate for the needs of the elderly and work towards creating an inclusive and age-friendly society.",
      website: "https://www.helpageindia.org/",
    },
    {
      title: "Wildlife Trust of India",
      image: "https://example.com/wildlifetrust.jpg",
      description:
        "Wildlife Trust of India (WTI) is a leading conservation organization committed to protecting wildlife and habitats across India. Since 1998, WTI has implemented conservation projects focusing on endangered species, habitat restoration, and human-wildlife conflict mitigation. They collaborate with government agencies, NGOs, and local communities to promote sustainable conservation efforts.",
      website: "https://www.wti.org.in/",
    },
    {
      title: "WaterAid India",
      image: "https://example.com/wateraid.jpg",
      description:
        "WaterAid India is an international non-profit organization working to ensure access to clean water, sanitation, and hygiene for all. With a presence in India since 1986, WaterAid collaborates with local partners to implement sustainable water and sanitation projects in rural and urban areas. They advocate for policy changes and behavior change communication to improve WASH practices.",
      website: "https://www.wateraidindia.in/",
    },
    {
      title: "CARE India",
      image: "https://example.com/careindia.jpg",
      description:
        "CARE India is a humanitarian organization working to fight poverty and social injustice in India. Established in 1950, CARE India implements development programs focusing on health, education, livelihoods, and disaster response. They work with marginalized communities, particularly women and girls, to empower them and create lasting change.",
      website: "https://www.careindia.org/",
    },
    {
      title: "Prayas",
      image: "https://example.com/prayas.jpg",
      description:
        "Prayas is a non-profit organization working towards the protection and empowerment of vulnerable children and youth in India. Founded in 1988, Prayas runs various programs addressing issues such as child labor, child trafficking, juvenile justice, and education. They advocate for child rights and provide direct support to at-risk children and families.",
      website: "https://www.prayaspune.org/",
    },
    {
      title: "CRYSTAL NGO",
      image: "https://example.com/crystal.jpg",
      description:
        "CRYSTAL NGO (Creating Ripples Youth Social Trust for All Lives) is a youth-led organization committed to social change and community development. Established in 2010, CRYSTAL NGO focuses on education, health, environment, and skill development initiatives. They engage young volunteers and stakeholders to create sustainable solutions for societal challenges.",
      website: "https://crystalngo.org/",
    },
    {
      title: "Goa Outreach",
      image: "https://example.com/goaoutreach.jpg",
      description:
        "Goa Outreach is a registered non-profit organization based in Goa, India, working to support vulnerable communities through education, healthcare, and community development programs. Founded in 2014, Goa Outreach partners with local stakeholders to address issues such as poverty, access to education, and healthcare services. They aim to empower individuals and promote sustainable development in Goa and surrounding areas.",
      website: "https://goaoutreach.org/",
    },
    {
      title: "Swades Foundation",
      image: "https://example.com/swades.jpg",
      description:
        "Swades Foundation is a non-profit organization working to empower rural India through holistic community development programs. Established in 2013, Swades focuses on areas such as education, healthcare, water, sanitation, and livelihoods. They partner with local communities and government agencies to create scalable and sustainable solutions for rural development.",
      website: "https://www.swadesfoundation.org/",
    },
    {
      title: "Prayas Juvenile Aid Centre (JAC)",
      image: "https://example.com/prayasjac.jpg",
      description:
        "Prayas Juvenile Aid Centre (JAC) is a Delhi-based NGO working towards the rehabilitation and reintegration of juveniles in conflict with the law. Founded in 1988, Prayas JAC operates shelter homes, counseling centers, and vocational training programs for juvenile offenders. They advocate for juvenile justice reforms and provide support to prevent recidivism.",
      website: "https://www.prayaschildren.org/",
    },
    {
      title: "Uday Foundation",
      image: "https://example.com/udayfoundation.jpg",
      description:
        "Uday Foundation is a non-profit organization dedicated to improving the lives of underprivileged children and their families in India. Since 2007, Uday Foundation has been working on various initiatives related to healthcare, education, and emergency response. They provide medical assistance, educational support, and humanitarian aid to those in need.",
      website: "https://www.udayfoundation.org/",
    },
    {
      title: "Association for Rural and Urban Needy (ARUN)",
      image: "https://example.com/arun.jpg",
      description:
        "Association for Rural and Urban Needy (ARUN) is a non-profit organization committed to serving disadvantaged communities in India. Established in 1994, ARUN implements development projects focusing on education, healthcare, livelihoods, and environmental sustainability. They collaborate with local partners and stakeholders to address the root causes of poverty and inequality.",
      website: "https://www.arunindia.org/",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="text text-xl font-bold py-8">
          Top NGOs that help the nation
        </div>
        <div className="grid grid-cols-3 gap-4">
          {indianNgos.map((item) => {
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
                    Support now <BsArrowRight />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ngo;
