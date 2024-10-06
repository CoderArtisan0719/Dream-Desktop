"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import SwapWidgets from "@/components/widgets/swap-widget";

export default function DesktopWidget(props: any) {
  return (
    <div className="float-start">
      <SwapWidgets />
    </div>
  );
}
