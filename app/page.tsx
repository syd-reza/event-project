import Welcome from "@/conponents/Welcome/Welcome";
import NoInternet from "@/conponents/NoInternet/NoInternet";
import OfflineGuard from "@/conponents/OfflineGuard/OfflineGuard";
import Homepage from "./homepage/homepage";
import Navbar from "@/conponents/Navbar/Navbar";
export default function Home() {
  return (
    <div>
      {/* <OfflineGuard offlineComponent={<NoInternet />}>
        <Welcome />
      </OfflineGuard> */}
        <Homepage />
        <Navbar />
        
    </div>
  );
}
