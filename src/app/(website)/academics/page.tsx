import { FC } from "react";
import { PageLayout } from "@/components/PageLayout";
import AcademicsInfoSection from "@/features/website/components/Academics/AcademicsInfoSection";
import AcademicsCurriculumSection from "@/features/website/components/Academics/AcademicsCurriculumSection";
import AcademicsDepartementsSection from "@/features/website/components/Academics/AcademicsDepartementsSection";

const AcademicsPage: FC = () => {
  return (
    <>
      <PageLayout
        imageSrc="/landing2.jpg"
        imageAlt="Advanced Technology School For Nuclear Energy Campus"
        title="Academics"
        className="max-w-full w-full space-y-24 py-12"
      >
        <AcademicsInfoSection />
      </PageLayout>
      <AcademicsCurriculumSection />
      <div className="container max-w-full w-full space-y-24 py-12">
        <AcademicsDepartementsSection />
      </div>
    </>
  );
};

export default AcademicsPage;
