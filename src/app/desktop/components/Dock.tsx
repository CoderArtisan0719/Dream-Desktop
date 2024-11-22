import Image from "next/image";

export function Dock() {
  return (
    <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center">
      <Image src="/images/dock.png" alt="Dock" width={484} height={72} />
    </div>
  );
}
