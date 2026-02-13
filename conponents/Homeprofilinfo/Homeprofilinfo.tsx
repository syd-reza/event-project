import React from "react";

export default function Homeprofilinfo() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <img src="/Ellipse 27.png" alt="profil" className="w-8 h-8" />
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold">فاطمه کریمی</h3>
          <p className="text-xs">
            <span className="font-bold text-black">کد سلامت :</span>{" "}
            P-13749239000
          </p>
        </div>
      </div>

      <div className="flex">
        <img src="/svg/Notification.svg" alt="Notification" />
      </div>
    </div>
  );
}
