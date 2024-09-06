import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const services = useLoaderData();
  const { title, price, _id, img } = services;
  const { user } = useContext(AuthContext);
  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const price = form.price.value;

    const bookingOrder = {
      customerName: name,
      email: email,
      purchaseDate: date,
      price: price,
      id: _id,
      service: title,
      image: img,
    };
    console.log(bookingOrder);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulation",
            text: "Your Booking is being Confirmed",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-orange-500 text-3xl">
        Services Name:{title}
      </h2>
      <p>price:</p>

      <form onSubmit={handleBookService} className="card-body ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Customer Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Order Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              name="price"
              className="input input-bordered"
              required
              defaultValue={price}
            />
          </div>
          <div className="col-span-2 lg:h-32 border-2 rounded-xl p-3">
            <textarea name="message" id="" placeholder="message"></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-error btn-block font-bold text-xl"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
