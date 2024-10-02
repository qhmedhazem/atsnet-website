import { PageLayout } from "@/components/PageLayout";
import AdmissionInfo from "@/features/website/components/Admission/AdmissionInfo";
import AdmissionStagesContainer from "@/features/website/components/Admission/AdmissionStagesContainer";

export default function About() {
  return (
    <PageLayout
      imageSrc="/landing1.jpg"
      imageAlt="test"
      title="Admission"
      description="Join the Ranks of the Best! Your journey to excellence starts here."
      className="gap-6"
    >
      <AdmissionInfo />
      <AdmissionStagesContainer />
    </PageLayout>
  );
}
