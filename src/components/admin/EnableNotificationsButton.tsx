"use client";

import { useEffect, useState } from "react";
import OneSignal from "react-onesignal";
import { initOneSignal } from "@/src/lib/onesignal";

export default function EnableNotificationsButton() {
  const [loading, setLoading] = useState(true);
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [optedIn, setOptedIn] = useState<boolean | undefined>(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  function showError(message: string) {
    setErrorMessage(message);
    setErrorModalOpen(true);
  }

  async function enableNotifications() {
    try {
      if (Notification.permission === "default") {
        await OneSignal.Notifications.requestPermission();
      } else if (
        Notification.permission === "granted" &&
        !OneSignal.User.PushSubscription.optedIn
      ) {
        await OneSignal.User.PushSubscription.optIn();

        const subscriptionId =
          OneSignal.User.PushSubscription.id;

        console.log("Subscription ID:", subscriptionId);

        if (!subscriptionId) {
          showError(
            "No se pudo registrar el dispositivo para recibir notificaciones."
          );
          return;
        }
      }

      const optedIn =
        OneSignal.User.PushSubscription.optedIn;

      setShouldShow(!optedIn);
      setOptedIn(optedIn);
    } catch (error) {
      console.error(error);

      showError(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al activar las notificaciones."
      );
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

      {errorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h2 className="mb-3 text-lg font-semibold">
              Error al activar notificaciones
            </h2>

            <p className="mb-4 text-sm text-gray-600">
              {errorMessage}
            </p>

            <button
              onClick={() => setErrorModalOpen(false)}
              className="rounded-md bg-black px-4 py-2 text-white"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </> 
  );
}