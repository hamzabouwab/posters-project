import React from "react";
import Card from "./Card";
import { services } from "./utilities";
const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => {
            return (
              <div className="md:flex gap-10" key={index}>
                <Card 
                  Icon={item.icon}
                  titre={item.titre}
                  description={item.description}
                  
                />
                {index < services.length - 1 && (
                  <hr className="lg:border-none md:h-full md:bg-slate-400  md:border-slate-500 lg:w-[1px] mt-12 md:mt-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
