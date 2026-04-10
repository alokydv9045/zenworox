import { HeroSection } from "../sections/home/HeroSection";
import { VideoStrip } from "../sections/home/VideoStrip";
import { WhatWeOffer } from "../sections/home/WhatWeOffer";
import { ZeroInvestment } from "../sections/home/ZeroInvestment";
import { StatsSection } from "../sections/home/StatsSection";
import { ProcessFlow } from "../sections/home/ProcessFlow";
import { Testimonials } from "../sections/home/Testimonials";
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
      <StatsSection />
      <GapSection />
      <WhatWeOffer />
      <TurnkeyLabSection />
      <TrainerHeartbeat />
      <ProcessFlow />
      <ZeroInvestment />
      <VideoStrip />
      <Testimonials />
      <DemoBookingSection />
      <FAQSection />
      <CTABlock />
    </div>
  );
}
