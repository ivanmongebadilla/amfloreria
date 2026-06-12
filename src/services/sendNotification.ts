export async function sendNotification(title: string, message: string) {
  const response = await fetch(
    "https://api.onesignal.com/notifications",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${process.env.ONESIGNAL_API_KEY}`,
      },
      body: JSON.stringify({
        app_id: "c3256b91-2302-4af4-8436-2a390f415b5c",

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