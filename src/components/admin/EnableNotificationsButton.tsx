"use client";

import { useEffect, useState } from "react";
import OneSignal from "react-onesignal";
import { initOneSignal } from "@/src/lib/onesignal";

export default function EnableNotificationsButton() {
  const [loading, setLoading] = useState(true);
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [optedIn, setOptedIn] = useState<boolean | undefined>(false);

  useEffect(() => {

    async function checkSubscription(){
      await initOneSignal();
      const optedIn = OneSignal.User.PushSubscription.optedIn;
      console.log(optedIn)

      setShouldShow(!optedIn);
      setOptedIn(optedIn);
    }
    checkSubscription();
  }, [])


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
      setOptedIn(optedIn);
    } catch (error) {
      console.error(error);
    }
  }

  async function disableNotifications() {
    try {
      await OneSignal.User.PushSubscription.optOut();
      const optedIn =
        OneSignal.User.PushSubscription.optedIn;

      setOptedIn(optedIn);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      {!optedIn ? (
        <button
          onClick={enableNotifications}
          className="rounded-md bg-black px-4 py-3 text-white transition hover:opacity-90"
        >
          🔔 Activar Notificaciones
        </button>
      ) : (
        <button
          onClick={disableNotifications}
          className="rounded-md bg-red-600 px-4 py-3 text-white transition hover:opacity-90"
        >
          🔕 Desactivar Notificaciones
        </button>
      )}
      {/* {shouldShow && <button
        onClick={enableNotifications}
        className="rounded-md bg-black px-4 py-3 text-white transition hover:opacity-90"
      >
        🔔 Activar Notificaciones
      </button>} */}
    </> 
  );
}