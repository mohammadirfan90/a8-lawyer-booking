import React, { Suspense, useState } from "react";
import LawyerCard from "../LawyerCard/LawyerCard";

const LawyersSection = ({ lawyerData }) => {
  const [visible, setVisible] = useState(6);

  const handleSeeMore = () => {
    setVisible((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisible(6);
  };
  console.log(lawyerData);

  return (
    <div className="container mx-auto my-10">
      <h1 className="font-bold text-3xl md:text-4xl text-center">
        Our Best Lawyers
      </h1>
      <p className="text-sm text-center">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.{" "}
      </p>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          {lawyerData.slice(0, visible).map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer}></LawyerCard>
          ))}
        </div>
        {/* Button */}
        <div className="text-center mt-8">
          {visible < lawyerData.length ? (
            <button
              onClick={handleSeeMore}
              className="btn btn-success rounded rounded-full text-white"
            >
              See More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="btn btn-success rounded rounded-full text-white"
            >
              Show Less
            </button>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default LawyersSection;
