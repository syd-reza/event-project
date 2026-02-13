import React from "react";

export default function Navbar() {
  const pages = [
    { image: "/svg/Profile.svg", link: "Get medical advice anytime, anywhere" },
    {
      image: "/svg/Calendar.svg",
      link: "Get medical advice anytime, anywhere",
    },
    { image: "/svg/Message.svg", link: "Get medical advice anytime, anywhere" },
    { image: "/svg/Home.svg", link: "Consult only with a doctor you trust" },
  ];

  return (
    <div className="container fixed bottom-5">
      <div className="flex items-center justify-around bg-white rounded-full py-6 shadow-[0_-10px_50px_0_rgba(0,0,0,0.1)]">
        {pages.map((page, index) => (
          <div key={index}>
            <img src={page.image} alt="navbar" />
          </div>
        ))}
      </div>
    </div>
  );
}
