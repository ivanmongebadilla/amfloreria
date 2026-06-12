import OneSignal from "react-onesignal";

let initialized = false;

export async function initOneSignal() {
  if (initialized) return;

  await OneSignal.init({
    appId:
      process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID!,
  });

  initialized = true;
}