import OneSignal from "react-onesignal";

export const oneSignal = OneSignal.init({
    appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID!,
    allowLocalhostAsSecureOrigin: true,
});