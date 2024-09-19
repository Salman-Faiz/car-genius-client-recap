import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setBookings(res.data));
    // fetch(url, { credentials: "include" })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url]);

  // STATE AND EVENT HANDLER SHOULD BE IN SAME COMPONENT
  const handleDeleteBooking = (id) => {
    const proceed = confirm("Are You Sure You Want to Delete this Booking?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingBookings = bookings.filter(
              (booking) => booking._id !== id
            );
            setBookings(remainingBookings);
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  };
  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update status
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-center text-3xl text-orange-500">
        Your Bookings:{bookings.length}
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Delete Bookings</th>
            <th>Service Name</th>
            <th>User Email</th>
            <th>Price</th>
            <th>Booking Date</th>
            <th>Booking Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings.map((booking) => (
            <BookingsRow
              key={booking._id}
              booking={booking}
              handleDeleteBooking={handleDeleteBooking}
              handleBookingConfirm={handleBookingConfirm}
            ></BookingsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
