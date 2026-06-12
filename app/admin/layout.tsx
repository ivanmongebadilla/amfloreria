import OneSignalInit from "@/src/components/admin/OneSignalInit";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <OneSignalInit /> */}
      {children}
    </>
  );
}