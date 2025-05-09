"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { PageContainer } from "@/components/page-container";
import { Hero } from "@/components/hero";
import { LocationAndSchedule } from "@/components/location-and-schedule";
import { TravelAccommodations } from "@/components/travel-and-accommodations";
import { Registry } from "@/components/registry";
import { FAQ } from "@/components/faq";
import { End } from "@/components/end";

export default function Home() {
  const params = useSearchParams();
  const language = params.get("language");
  return (
    <PageContainer>
      <Hero language={language} />
      <LocationAndSchedule language={language} />
      <TravelAccommodations />
      <Registry />
      <FAQ />
      <End />
    </PageContainer>
  );
}
