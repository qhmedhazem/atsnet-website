import type { Metadata } from "next";
import { FC } from "react";
import { PageLayout } from "@/components/PageLayout";
import AcademicsInfoSection from "@/features/website/components/Academics/AcademicsInfoSection";
import AcademicsCurriculumSection from "@/features/website/components/Academics/AcademicsCurriculumSection";
import AcademicsDepartementsSection from "@/features/website/components/Academics/AcademicsDepartementsSection";

export const metadata: Metadata = {
  title: "Academics",
  description: `The school provides a well-rounded curriculum aimed at preparing students for careers in nuclear engineering and related fields. Through a mix of theory and practical training, students gain essential skills in nuclear energy, safety protocols, and engineering systems, laying the groundwork for future roles in Egypt’s nuclear power industry and beyond.`,
};

const AcademicsPage: FC = () => {
  return (
    <>
      <PageLayout
        imageSrc="/landing2.jpg"
        imageAlt="Advanced Technology School For Nuclear Energy Campus"
        title="Academics"
        className="container w-full min-h-fit py-24"
      >
        <AcademicsInfoSection />
      </PageLayout>
      <AcademicsCurriculumSection />
      <div className="container w-full py-24 space-y-24">
        <AcademicsDepartementsSection />
      </div>
    </>
  );
};

export default AcademicsPage;
