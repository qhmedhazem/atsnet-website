import { FC, ReactNode, useRef } from "react";
import { PageLayout } from "@/components/PageLayout";
import AcademicsInfoSection from "@/features/website/components/Academics/AcademicsInfoSection";
import AcademicsCurriculumSection from "@/features/website/components/Academics/AcademicsCurriculumSection";
import AcademicsDepartementsSection from "@/features/website/components/Academics/AcademicsDepartementsSection";

const AcademicsPage: FC = () => {
  return (
    <PageLayout
      imageSrc="/landing2.jpg"
      imageAlt="Advanced Technology School For Nuclear Energy Campus"
      title="Academics"
      description=""
      className="max-w-full w-full space-y-12 py-12"
    >
      <AcademicsInfoSection />
      <AcademicsCurriculumSection />
      <AcademicsDepartementsSection />
    </PageLayout>
  );
};

export default AcademicsPage;
