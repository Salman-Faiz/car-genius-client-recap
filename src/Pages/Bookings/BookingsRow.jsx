import React from "react";

const BookingsRow = ({
  booking,
  handleDeleteBooking,
  handleBookingConfirm,
}) => {
  const { _id, email, service, image, price, purchaseDate, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteBooking(_id)}
          className=" btn btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded-lg h-40 w-40">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{purchaseDate}</td>
      <th>
        {status === "confirm" ? (
          <span className="text-blue-600 text-xl">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs text-red-500 text-xl"
          >
            please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsRow;
