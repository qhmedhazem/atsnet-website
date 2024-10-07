import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import Overview from "@/features/website/components/About/Overview";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <PageLayout
      imageSrc="/landing2.jpg"
      imageAlt="Advanced Technology School For Nuclear Energy Campus"
      title="About"
      description="Preparing Students for Real-World Energy Challenges."
    >
      <Overview />
    </PageLayout>
  );
}
