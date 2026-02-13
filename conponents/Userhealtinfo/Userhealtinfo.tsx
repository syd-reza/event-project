import { title } from "process";


export default function Userhealtinfo() {

    const healtInfo = [
        { icon: "/Ellipse 27.png", healtTitel:"سن/وزن/قد" ,title:"30 سال " ,text: "75 کیلوگرم / 177 سانتی متر" },
        { icon: "/Ellipse 27.png", healtTitel:"سن/وزن/قد" ,title:"30 سال " ,text: "75 کیلوگرم / 177 سانتی متر" },
        { icon: "/Ellipse 27.png", healtTitel:"سن/وزن/قد" ,title:"30 سال " ,text: "75 کیلوگرم / 177 سانتی متر" },
        { icon: "/Ellipse 27.png", healtTitel:"سن/وزن/قد" ,title:"30 سال " ,text: "75 کیلوگرم / 177 سانتی متر" },
      ];

  return (
    <div className='grid grid-cols-2 gap-x-3 gap-y-2 mt-[35px] border py-[15px] px-2.5 rounded-[20px] border-[#0000001F]'>
        {healtInfo.map((info, index) => (
          <div key={index} className="bg-[#F6F6F6] p-3 rounded-[10px]">
            <div className="flex justify-between items-center">
                <span className="text-[#ABABAB] text-xs font-vazirbold">{info.healtTitel}</span>
                <img src={info.icon} alt="icon" className="w-[25px] h-[25px]"/>
            </div>
            <h3 className="font-bold mb-2 mt-1">{info.title}</h3>
            <p className="text-[10px] text-[#ABABAB] font-vazirbold">{info.text}</p>
          </div>
        ))}
    </div>
  )
}
