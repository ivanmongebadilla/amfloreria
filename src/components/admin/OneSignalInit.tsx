"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalInit() {
  useEffect(() => {
    async function init() {
      await OneSignal.init({
        appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID!,
        allowLocalhostAsSecureOrigin: true,
      });

      window.dispatchEvent(
        new CustomEvent("onesignal-ready")
      );

      console.log("OneSignal initialized");
    }

    init();
  }, []);

  return null;
}