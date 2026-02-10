"use client";

import { useEffect, useState } from "react";

export default function OfflineGuard({
  children,
  offlineComponent,
}: {
  children: React.ReactNode;
  offlineComponent: React.ReactNode;
}) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // وضعیت اولیه
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) return <>{offlineComponent}</>;

  return <>{children}</>;
}
