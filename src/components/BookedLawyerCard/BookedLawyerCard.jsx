import React from "react";

const BookedLawyerCard = ({ lawyer, handleRemove }) => {
  const { id, name, speciality, fee } = lawyer;

  return (
    <div className="border border-slate-200 rounded-2xl rounded p-8 my-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-col">
          <h6 className="font-bold">{name}</h6>
          <p>{speciality}</p>
        </div>
        <p>Appointment Fee : {fee} Taka</p>
      </div>
      <div className="border-t border-dashed border-base-300 my-4"></div>

      <button
        onClick={() => handleRemove(id)}
        className="btn btn-error btn-outline rounded rounded-full w-full  mt-4 text-lg"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default BookedLawyerCard;
