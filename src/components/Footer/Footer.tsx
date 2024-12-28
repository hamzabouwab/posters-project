const Footer = () => {
  return (
    <section className="footer py-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between py-12 md:py-0">
          <ul className="menu md:flex gap-4 ">
            <li>
              <a href="" className="leading-8">Home</a>
            </li>
            <li>
              <a href="" className="leading-8">About</a>
            </li>
            <li>
              <a href="" className="leading-8">Shop</a>
            </li>
            <li>
              <a href="" className="leading-8">Contact</a>
            </li>
          </ul>
          <img
            src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/EARTH-STORE.png"
            className="h-8 "
            alt=""
          />
          <p className="text-sm">Copyright © 2024 Planet Earth Store</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
