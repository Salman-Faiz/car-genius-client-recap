import person from "../../../../public/assets/images/about_us/person.jpg";
import parts from "../../../../public/assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src={person}
            className="w-3/4 rounded-lg shadow-2xl h-[475px] "
          />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 h-[330px] border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 space-y-4 p-4">
          <p className="text-orange-500 text-4xl font-bold">About Us</p>
          <h1 className="text-5xl font-bold pb-10">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-orange-500">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
