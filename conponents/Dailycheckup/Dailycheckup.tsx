import React from "react";

export default function Dailycheckup() {
  return (
    <div className="bg-[rgb(238,238,238)] rounded-[20px] py-[18px] px-3.5">
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 bg-[#22C4B5] rounded-[5px]"></div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#101623] font-bold text-sm">ثبت چک آپ روزانه</h4>
          <p className="text-xs text-[#199A8E]">
            تاریخ آخرین چک آپ ثبت شده : 20 بهمن 1404
          </p>
        </div>
      </div>

      <form action="#" className="grid grid-cols-2 gap-3 mt-5">
        <label className="flex flex-col text-xs text-[#717171] gap-[3px]">
          ضربان قلب
          <input
            type="text"
            placeholder="bpm"
            className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[5px] h-8 focus:outline-none w-full text-left pl-2"
          />
        </label>
        <label className="flex flex-col text-xs text-[#717171] gap-[3px]">
          فشارخون
          <div className="flex gap-1.5">
            <input
              type="text"
              className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[5px] h-8 focus:outline-none w-full text-left pl-2"
            />
            <input
              type="text"
              className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[5px] h-8 focus:outline-none w-full text-left pl-2"
            />
          </div>
        </label>
        <label className="flex flex-col text-xs text-[#717171] gap-[3px]">
          اکسیژن خون
          <input
            type="text"
            placeholder="%"
            className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[5px] h-8 focus:outline-none w-full text-left pl-2"
          />
        </label>
        <label className="flex flex-col text-xs text-[#717171] gap-[3px]">
          قند خون
          <input
            type="text"
            placeholder="mg/dl"
            className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[5px] h-8 focus:outline-none w-full text-left pl-2"
          />
        </label>
        <label className="flex flex-col text-xs text-[#717171] gap-[3px]">
          وزن (کیلوگرم)
          <input
            type="text"
            className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[5px] h-8 focus:outline-none w-full text-left pl-2"
          />
        </label>
        <label className="flex flex-col text-xs text-[#717171] gap-[3px]">
          فعالیت بدنی (دقیقه)
          <input
            type="text"
            className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[5px] h-8 focus:outline-none w-full text-left pl-2"
          />
        </label>
      </form>

      <div className="flex gap-2 mt-3">
        <button className="bg-[#199A8E] text-white py-3 rounded-[10px] w-[65%] text-sm"> ذخیره چک آپ امروز</button>
        <button className="border border-[#B3D3CE] py-3 rounded-[10px] w-[35%] text-sm">تاریخچه</button>
      </div>
    </div>
  );
}
