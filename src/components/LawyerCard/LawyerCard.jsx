import React from "react";
import { Link } from "react-router";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FiAlertCircle } from "react-icons/fi";

const LawyerCard = ({ lawyer }) => {
  const { id, name, image, speciality, experience, license_number } = lawyer;
  console.log(lawyer);

  return (
    <Link to={`/lawyer-details/${id}`}>
      <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-all duration-300 group w-full ">
        {/* Image Container */}
        <div className="w-full md:w-40 h-40 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details Container */}
        <div className="flex-grow flex flex-col justify-between ">
          <div>
            {/* Status Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-50 text-green-600 px-3  rounded-full text-[10px] sm:text-xs font-semibold border border-green-100/50">
                Available
              </span>
              <span className="bg-blue-50 text-blue-600 px-3  rounded-full text-[10px] sm:text-xs font-semibold border border-blue-100/50">
                {experience}+ Years Experience
              </span>
            </div>

            {/* Lawyer Info */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors leading-tight">
              {name}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base font-medium ">
              {speciality}
            </p>

            {/* License Info */}
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm ">
              <HiOutlineBadgeCheck className="text-blue-400 text-sm sm:text-base" />
              <span className="font-medium">License No: {license_number}</span>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full   rounded-xl border border-blue-200 text-blue-600 font-bold text-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base shadow-sm">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default LawyerCard;
