const getStoredBooking = () => {
  const storedBookingStr = localStorage.getItem("bookings");
  if (storedBookingStr) {
    const storedBookingData = JSON.parse(storedBookingStr);
    return storedBookingData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookingData = getStoredBooking();
  if (storedBookingData.includes(id.toString())) {
    return false;
  } else {
    storedBookingData.push(id.toString());
    const data = JSON.stringify(storedBookingData);
    localStorage.setItem("bookings", data);
    return true;
  }
};

const removeFromDB = (id) => {
  const storedBookingData = getStoredBooking();
  // Ensure we compare using strings to avoid number vs string issues
  const remaining = storedBookingData.filter(
    (storedId) => storedId.toString() !== id.toString(),
  );
  localStorage.setItem("bookings", JSON.stringify(remaining));
};

export { addToStoredDB, getStoredBooking, removeFromDB };
