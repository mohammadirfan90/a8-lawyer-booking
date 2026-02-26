import React from "react";
import CountUp from "react-countup";
const SuccessSection = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="font-bold text-3xl md:text-4xl text-center">
        We Provide Best Law Services
      </h1>
      <p className="text-sm text-center">
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.{" "}
      </p>
      {/* Card Container */}
      <div className="p-8 flex justify-between flex-col md:flex-row gap-4">
        {/* Card 1*/}
        <div className="card bg-base-100 min-w-72 shadow-sm p-4">
          <div className="card-body">
            <img src="..\assets\success-doctor.png" className="w-16 h-16" alt="" />
            <h2 className="card-title font-bold text-3xl md:text-5xl">
              <CountUp delay={1} end={199} duration={3} suffix="+" />
            </h2>
            <p>Total Lawyer</p>
          </div>
        </div>
        {/* Card 2*/}
        <div className="card bg-base-100 min-w-72 shadow-sm p-4">
          <div className="card-body">
            <img src="..\assets\success-review.png" className="w-16 h-16" alt="" />
            <h2 className="card-title font-bold text-3xl md:text-5xl">
              <CountUp delay={1} end={850} duration={3} suffix="+" />
            </h2>
            <p>Cases Resolved</p>
          </div>
        </div>
        {/* Card 3*/}
        <div className="card bg-base-100 min-w-72 shadow-sm p-4">
          <div className="card-body">
            <img src="..\assets\success-patients.png" className="w-16 h-16" alt="" />
            <h2 className="card-title font-bold text-3xl md:text-5xl">
              <CountUp delay={1} end={12} duration={3} suffix="+" />
            </h2>
            <p>Years Experience</p>
          </div>
        </div>
        {/* Card 4*/}
        <div className="card bg-base-100 min-w-72 shadow-sm p-4">
          <div className="card-body">
            <img src="..\assets\success-staffs.png" className="w-16 h-16" alt="" />
            <h2 className="card-title font-bold text-3xl md:text-5xl">
              <CountUp delay={1} end={1500} duration={3} separator="," suffix="+" />
            </h2>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
