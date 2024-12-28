function Hero() {
  return (
    <section className="Hero flex flex-col justify-center w-full pt-44 pb-28 md:py-0 md:min-h-screen">
      <div className="container ">
        <h1 className="tracking-widest font-medium uppercase text-5xl md:text-7xl mb-4 leading-snug text-green-800">
          earth
        </h1>
        <p className="font-light text-2xl md:text-5xl uppercase tracking-widest mb-10  text-green-950">
          multipurpose store
        </p>
        <button className=" uppercase tracking-widest font-semibold py-[0.7rem] text-white rounded-sm bg-green-600 max-w-52 w-full mx-auto">
          shop now
        </button>
      </div>
    </section>
  );
}

export default Hero;
