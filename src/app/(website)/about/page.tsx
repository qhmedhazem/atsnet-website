import { PageLayout } from "@/components/PageLayout";
import Overview from "@/features/website/components/Overview";

export default function About() {
  return (
    <PageLayout
      imageSrc="/landing2.jpg"
      imageAlt="Advanced Technology School For Nuclear Energy Campus"
      title="About"
      description="About ATSNET"
    >
      <Overview />
    </PageLayout>
  );
}
