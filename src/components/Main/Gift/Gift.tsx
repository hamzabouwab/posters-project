import React from "react";

const Gift: React.FC = () => {
  return (
    <section className="gift">
      <div className="container">
        <h1 className="tracking-widest leading-10 font-semibold text-3xl md:text-4xl uppercase mb-4 text-black">
          Give the Gift of a Postcard
        </h1>
        <p className="text-md font-medium leading-7 text-slate-600 mb-10">
          Give the gift of a lasting memory with a postcard
        </p>
        <button className="bg-green-700 uppercase tracking-widest p-2 font-semibold px-10 py-3  mx-auto text-white ">
          Purchase A Postcard
        </button>
      </div>
    </section>
  );
};

export default Gift;
