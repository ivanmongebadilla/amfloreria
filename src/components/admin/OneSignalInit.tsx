"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalInit() {
  useEffect(() => {
    async function init() {
      await OneSignal.init({
        appId: "c3256b91-2302-4af4-8436-2a390f415b5c",
        // allowLocalhostAsSecureOrigin: true,
      });

      console.log("OneSignal initialized");
    }

    init();
  }, []);

  return null;
}