import { FC, ReactNode, useRef } from "react";
import { PageLayout } from "@/components/PageLayout";
import PowerPlantOverview from "@/features/website/components/PowerPlant/PowerPlantOverview";

const AcademicsPage: FC = () => {
  return (
    <PageLayout
      imageSrc="/nuclearpowerplant.jpg"
      imageAlt="Advanced Technology School For Nuclear Energy Campus"
      title="Nuclear Power Plant"
      description=""
      className="max-w-full w-full space-y-12 py-12"
    >
      <PowerPlantOverview />
    </PageLayout>
  );
};

export default AcademicsPage;
