import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams, useNavigate } from "react-router";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FiAlertCircle } from "react-icons/fi";
import { addToStoredDB, getStoredBooking } from "../../utility/addToDB";
import { toast } from "react-toastify";
const LawyerDetails = () => {
  const navigate = useNavigate();
  const [isBooked, setisBooked] = useState(false);
  const { id } = useParams();
  const lawyerId = parseInt(id);
  const data = useLoaderData(); //Load all lawyers data
  const singleLawyer = data.find((lawyer) => lawyer.id === lawyerId);

  if (!singleLawyer) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">Lawyer Not Found</h2>
        <p className="mt-4 text-gray-600">The lawyer you are looking for does not exist.</p>
        <Link to="/" className="mt-6 btn btn-success text-white rounded-full">
          Back to Home
        </Link>
      </div>
    );
  }

  const {
    image,
    name,
    experience,
    speciality,
    fee,
    availability,
    license_number,
  } = singleLawyer;
  useEffect(() => {
    const storedBookings = getStoredBooking();
    if (storedBookings.includes(id)) {
      setisBooked(true);
    }
  }, [id]);

  console.log(availability);

  const handleBookAppointment = (id) => {
    const success = addToStoredDB(id);
    if (success) {
      setisBooked(true);
      toast.success(`${name} has been booked successfully!`);
      navigate("/my-bookings");
    } else {
      toast.error("This lawyer is already booked.");
    }
  };

  return (
    <div className="px-2">
      {/* Slogan */}
      <div className="container mx-auto bg-slate-200 rounded rounded-2xl p-14  my-4">
        <h2 className="text-center font-bold text-3xl md:text-4xl ">
          Lawyer’s Profile Details
        </h2>
        <p className="mt-4 text-sm md:text-lg text-center">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      {/* LawyerDetail Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row gap-6  shadow-sm hover:shadow-md transition-all duration-300 group w-full container mx-auto items-center my-4">
        {/* Image Container */}
        <div className="w-full md:w-76 h-76 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details Container */}
        <div className="flex-grow flex flex-col">
          <div className="flex flex-col gap-2">
            {/* Status Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 px-3  rounded-full text-lg sm:text-sm font-semibold border border-blue-100/50">
                {experience}+ Years Experience
              </span>
            </div>

            {/* Lawyer Info */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors leading-tight">
              {name}
            </h3>
            <div className="flex gap-4">
              <p className="text-gray-500 text-sm sm:text-base font-medium ">
                {speciality}
              </p>

              {/* License Info */}
              <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm ">
                <HiOutlineBadgeCheck className="text-blue-400 text-sm sm:text-base" />
                <span className="font-medium">
                  License No: {license_number}
                </span>
              </div>
            </div>
            {/* Availability */}
            <div className="flex gap-4 items-center">
              <h6>Availability</h6>
              <div className="flex gap-4">
                {availability.map((day) => (
                  <div className="badge badge-soft badge-warning text-sm">
                    {day}
                  </div>
                ))}
              </div>
            </div>
            {/* Consultation Fee */}
            <div className="flex gap-4 items-center">
              <h6>Consultation Fee:</h6>
              <h6 className="text-green-500 font-bold">Taka: {fee}</h6>
            </div>
          </div>
        </div>
      </div>
      {/* Book an Appointment */}
      <div className="container mx-auto rounded rounded-2xl p-8  mb-4 border border-slate-300">
        <h2 className="font-bold text-center text-xl md:text-2xl">
          Book an Appointment
        </h2>
        <div class="border-t border-dashed border-base-300 my-4"></div>
        <div className="flex justify-between">
          <h6 className="font-bold">Availability</h6>
          <div>Lawyer available</div>
        </div>
        <div class="border-t border border-base-300 my-4"></div>
        <div className="flex gap-2 items-start bg-warning/10 text-warning border border-warning/20 md:rounded-full rounded-lg px-3 sm:px-4 text-sm leading-relaxed w-full mb-4">
          <FiAlertCircle className="mt-0.5 shrink-0" />

          <p className="break-words">
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
        </div>
        <button
          disabled={isBooked}
          onClick={() => handleBookAppointment(id)}
          className={`btn rounded rounded-full w-full text-white mt-4 text-lg ${isBooked ? "bg-gray-400" : "btn-success"
            }`}
        >
          {isBooked ? "Already Booked" : "Book Appointment Now"}
        </button>
      </div>
    </div>
  );
};

export default LawyerDetails;
