import Welcome from "@/conponents/Welcome/Welcome";
import NoInternet from "@/conponents/NoInternet/NoInternet";
import OfflineGuard from "@/conponents/OfflineGuard/OfflineGuard";
export default function Home() {
  return (
    <div>
      <OfflineGuard offlineComponent={<NoInternet />}>
        <Welcome />
      </OfflineGuard>
    </div>
  );
}
