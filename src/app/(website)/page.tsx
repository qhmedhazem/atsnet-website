import AboutSection from "@/features/website/components/Landing/AboutSection";
import HeroSection from "@/features/website/components/Landing/HeroSection";
import SchoolNewsSection from "@/features/website/components/Landing/SchoolNewsSection";

import { previewAnnouncements } from "@/features/announcements/services/announcementsService";
import { previewEvents } from "@/features/events/services/eventsService";
import { Annoncement, Event } from "@prisma/client";
import AdmissionSection from "@/features/website/components/Landing/AdmissionSection";
import UpcomingEventsSection from "@/features/website/components/Landing/UpcomingEventsSection";
import NewsLetterSection from "@/features/website/components/Landing/newsletter/components/NewsLetterSection";

export default async function Home() {
  const [announcements, events]: [Annoncement[], Event[]] = await Promise.all([
    previewAnnouncements(3),
    previewEvents(),
  ]);

  return (
    <main className="justify-center flex flex-col gap-20 pb-12">
      <HeroSection />
      <div className="w-full container flex flex-col gap-20 ">
        <AboutSection />
        <SchoolNewsSection announcements={announcements} />
      </div>
      <AdmissionSection />
      <div className="container flex flex-col gap-20">
        <UpcomingEventsSection events={events} />
      </div>
      <NewsLetterSection />
    </main>
  );
}
