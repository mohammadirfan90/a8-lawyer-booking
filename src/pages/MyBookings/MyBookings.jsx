import React, { useEffect, useState } from "react";
import { getStoredBooking, removeFromDB } from "../../utility/addToDB";
import { useLoaderData, Link } from "react-router";
import BookedLawyerCard from "../../components/BookedLawyerCard/BookedLawyerCard";
import CustomBarChart from "../../components/CustomBarChart/CustomBarChart";

const MyBookings = () => {
  const [bookedList, setBookedList] = useState([]);
  const lawyerData = useLoaderData();
  useEffect(() => {
    const storedBookings = getStoredBooking();
    const convertedStoredBookings = storedBookings.map((id) => parseInt(id));
    const tempBookedList = lawyerData.filter((lawyer) =>
      convertedStoredBookings.includes(lawyer.id),
    );
    setBookedList(tempBookedList);
    console.log(convertedStoredBookings, tempBookedList);
  }, []);
  const handleRemove = (id) => {
    removeFromDB(id);
    const remaining = bookedList.filter((lawyer) => lawyer.id !== id);
    setBookedList(remaining);
  };
  // Transform into chart format
  const chartData = bookedList.map((item) => ({
    name: item.name,
    value: item.fee,
  }));
  return (
    <div>
      <div className="container mx-auto p-14  my-4">
        {bookedList.length > 0 && (
          <>
            <h2 className="text-center font-bold text-3xl md:text-4xl ">
              Appointments Chart
            </h2>
            <CustomBarChart data={chartData} />
          </>
        )}
        <h2 className="text-center font-bold text-3xl md:text-4xl ">
          My Bookings
        </h2>
        <p className="mt-4 text-sm md:text-lg text-center">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
        {/* Booked Section */}
        {bookedList.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-16 space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-600">
              No Appointments Booked Yet
            </h3>
            <Link
              to="/"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Return to Homepage
            </Link>
          </div>
        ) : (
          bookedList.map((lawyer) => (
            <BookedLawyerCard
              key={lawyer.id}
              handleRemove={handleRemove}
              lawyer={lawyer}
            ></BookedLawyerCard>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookings;
