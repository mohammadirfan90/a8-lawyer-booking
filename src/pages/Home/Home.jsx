import React from "react";
import Banner from "../../components/Banner/Banner";
import SuccessSection from "../../components/SuccessSection/SuccessSection";
import LawyersSection from "../../components/LawyersSection/LawyersSection";
import LawyerCard from "../../components/LawyerCard/LawyerCard";
import { useLoaderData } from "react-router";

const Home = () => {
  const lawyerData = useLoaderData();
  console.log(lawyerData);
  return (
    <div className="space-y-12 pb-20">
      <Banner></Banner>

      <LawyersSection lawyerData={lawyerData}></LawyersSection>
      <SuccessSection></SuccessSection>
    </div>
  );
};

export default Home;
