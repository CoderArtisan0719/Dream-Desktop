import Image from "next/image";

export function Dock() {
  return (
    <div className="absolute bottom-5 z-20 flex flex-row items-center justify-between shadow backdrop-blur-[48px]">
      <Image src="/images/dock.png" alt="Dock" width={484} height={72} />
    </div>
  );
}
