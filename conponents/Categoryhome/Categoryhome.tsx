import React from "react";

export default function Categoryhome() {
  const categorys = [
      { icon: "/Ambulance.svg", titel: " اورژانس" },
      { icon: "/Hospital.svg", titel: "بیمارستان" },
      { icon: "/Pharmacy.svg", titel: "دارو" },
      { icon: "/Doctor.svg", titel: "معاینه" },
  ];

  return (
    <div className="flex justify-between items-center my-8">
      {categorys.map((category, index) => (
        <div key={index} className="flex flex-col items-center gap-2.5">
          <div className="py-3 px-4 shadow-[0_17px_70px_-11px_#0000004d] rounded-2xl">
            <img src={category.icon} alt="icon" />
          </div>
          <p>{category.titel}</p>
        </div>
      ))}
    </div>
  );
}
