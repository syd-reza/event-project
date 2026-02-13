import Homeprofilinfo from "@/conponents/Homeprofilinfo/Homeprofilinfo";
import Slider from "@/conponents/Slider/Slider";
import Userhealtinfo from "@/conponents/Userhealtinfo/Userhealtinfo";
import Dailycheckup from "@/conponents/Dailycheckup/Dailycheckup";
import Categoryhome from "@/conponents/Categoryhome/Categoryhome";

export default function Homepage() {
  return (
    <div className="container mt-5">
      <Homeprofilinfo/>
      <Slider/>
      <Userhealtinfo/>
      <Categoryhome/>
      <Dailycheckup/>
    </div>
  );
}
