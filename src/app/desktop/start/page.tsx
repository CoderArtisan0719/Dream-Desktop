"use client";
import SwapWidgets from "@/components/widgets/swap-widget";

export default function DesktopWidget(props: any) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-4 overflow-auto scroll-auto md:mx-0 md:grid-cols-2">
      <SwapWidgets />
    </div>
  );
}
