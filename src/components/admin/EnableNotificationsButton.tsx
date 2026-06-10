"use client";

import { useEffect, useState } from "react";
import OneSignal from "react-onesignal";

export default function EnableNotificationsButton() {
  const [loading, setLoading] = useState(true);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const handleReady = () => {
      const optedIn =
        OneSignal.User.PushSubscription.optedIn;

      setShouldShow(!optedIn);
      setLoading(false);

      console.log("OneSignal optedIn:", optedIn);
    };

    window.addEventListener(
      "onesignal-ready",
      handleReady
    );

    return () => {
      window.removeEventListener(
        "onesignal-ready",
        handleReady
      );
    };
  }, []);

  async function enableNotifications() {
    try {
      if (Notification.permission === "default") {
        await OneSignal.Notifications.requestPermission();
      } else if (
        Notification.permission === "granted" &&
        !OneSignal.User.PushSubscription.optedIn
      ) {
        await OneSignal.User.PushSubscription.optIn();
      }

      const optedIn =
        OneSignal.User.PushSubscription.optedIn;

      setShouldShow(!optedIn);
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) return null;

  if (!shouldShow) return null;

  return (
    <button
      onClick={enableNotifications}
      className="rounded-md bg-black px-4 py-3 text-white transition hover:opacity-90"
    >
      🔔 Activar Notificaciones
    </button>
  );
}