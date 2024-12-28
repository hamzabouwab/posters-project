import React from "react";
import { LucideProps } from "lucide-react";
const Card = ({
  Icon,
  titre,
  description,
}: {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  titre: string;
  description: string;
}) => {
  return (
    <div className="card-services md:flex items-center justify-center gap-5 md:text-start">
      <div className="card-header mb-5 md:mb-0">
        <span className="bg-green-700 w-10 aspect-square rounded-full flex justify-center items-center mx-auto">
          <Icon className="fill-emerald-600 " size={20} />
        </span>
      </div>
      <div className="card-body">
        <h2 className="font-semibold">{titre}</h2>
        <p className=" text-slate-500 ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
