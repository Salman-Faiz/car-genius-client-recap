import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard/ServicesCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Services = () => {
  const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // fetch("http://localhost:5000/services/")
    //   .then((res) => res.json())
    //   .then((data) => setServices(data));

    axiosSecure.get("/services/").then((res) => setServices(res.data));
  }, []);

  //   jsx part..................
  return (
    <div>
      <div className="text-center space-y-5 py-6">
        <p className="text-orange-400 text-3xl">Service</p>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 py-5 gap-4">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
