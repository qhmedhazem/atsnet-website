import { PageLayout } from "@/components/PageLayout";
import AdmissionInfo from "@/features/website/components/Admission/AdmissionInfo";
import AdmissionStagesContainer from "@/features/website/components/Admission/AdmissionStagesContainer";

export default function About() {
  return (
    <PageLayout imageSrc="/landing2.jpg" imageAlt="test" title="Admission">
      <AdmissionInfo />
      <AdmissionStagesContainer />
    </PageLayout>
  );
}
