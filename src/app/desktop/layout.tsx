import { ReactNode } from "react";
import { Dock } from "./components/Dock";
import { StatusBar } from "./components/StatusBar";

export default async function DesktopLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/clouds-wallpaper.jpg')" }}
    >
      <StatusBar />
      <Dock />
      <div className="absolute inset-0 z-10 bg-black bg-opacity-20" />
      <div className="relative z-10 flex h-full min-h-screen items-center p-12">
        {children}
      </div>
    </div>
  );
}
