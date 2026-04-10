import { HeroSection } from "../sections/home/HeroSection";
import { VideoStrip } from "../sections/home/VideoStrip";
import { WhatWeOffer } from "../sections/home/WhatWeOffer";
import { ZeroInvestment } from "../sections/home/ZeroInvestment";

import { ProcessFlow } from "../sections/home/ProcessFlow";

import { CTABlock } from "../sections/home/CTABlock";
import { FAQSection } from "../sections/home/FAQSection";
import { DemoBookingSection } from "../sections/home/DemoBookingSection";
import { GapSection } from "../sections/home/GapSection";
import { TurnkeyLabSection } from "../sections/home/TurnkeyLabSection";
import { TrainerHeartbeat } from "../sections/home/TrainerHeartbeat";

import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    document.title = "ZenworoX | Future-Ready Tech Labs for Schools";
  }, []);

  return (
    <div className="relative">
      <HeroSection />

      <GapSection />
      <WhatWeOffer />
      <TurnkeyLabSection />
      <TrainerHeartbeat />
      <ProcessFlow />
      <ZeroInvestment />
      <VideoStrip />

      <DemoBookingSection />
      <FAQSection />
      <CTABlock />
    </div>
  );
}
