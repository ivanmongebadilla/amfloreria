export async function sendNotification(
  title: string,
  message: string
) {
  const response = await fetch(
    "https://api.onesignal.com/notifications",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${process.env.ONESIGNAL_API_KEY}`,
      },
      body: JSON.stringify({
        app_id: process.env.ONESIGNAL_APP_ID,

        included_segments: ["Total Subscriptions"],

        headings: {
          en: title,
        },

        contents: {
          en: message,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();

    throw new Error(error);
  }

  const result = await response.json()

  console.log(result)

  return result;
}