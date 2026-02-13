import React from "react";

export default function Ckeckupresult() {
  return (
    <div className="mt-8 border border-[#B3D3CE] py-3.5 px-4 rounded-[20px]">
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 bg-[#22C4B5] rounded-[5px]"></div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#101623] font-bold text-sm">نتیجه آخرین چک آپ</h4>
          <p className="text-xs text-[#199A8E]">
            تاریخ آخرین چک آپ ثبت شده : 20 بهمن 1404
          </p>
        </div>
      </div>

      <div className="mt-7 ">
        <div>
            <div className="flex justify-between items-center">
                <span className="text-sm">فشار خون</span>
                <span className="text-sm">121/80</span>
            </div>
            <div className="border border-[#D9D9D9] rounded-full bg-[#F6F6F6] h-2">
                <div className="h-full w-[90%] bg-gradient-to-r from-[#B3D3CE] to-[#199A8E] rounded-full"></div>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-xs">هدف 120/80</span>
                <span className="text-xs">مرزی</span>
            </div>
        </div>
      </div>
    </div>
  );
}
